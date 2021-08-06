<template>
  <div class="lg:p-16 p-3">
    <h1 class="text-white font-bold my-16 text-xl border-b-2">
      Mes objets perdus
    </h1>
    <button
      class="
        add-button
        h-12
        w-12
        text-blue-600
        hover:bg-gray-200
        bg-white
        rounded-full
        mx-auto
        block
        shadow-lg
        focus:outline-none
      "
      @click="showAddModal = true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
    <client-only>
      <div
        v-if="objects.length > 0"
        class="w-100 flex flex-wrap justify-evenly mx-auto mt-8"
      >
        <ObjectItem
          v-for="(object, i) in objects"
          :key="i"
          class="mt-6"
          :object="object"
        />
      </div>
      <div v-else class="w-100 mt-10">
        <h2 class="text-center text-white text-lg font-bold">
          Vous n'avez pas d'objets perdus
        </h2>
      </div>
    </client-only>
    <AddObject v-if="showAddModal" @close="showAddModal = false" />
    <!-- <add-modal v-if="showAddModal" @close="showAddModal = false"/> -->
  </div>
</template>

<script>
import AddObject from "../components/AddObject.vue";
import ObjectItem from "../components/ObjectItem.vue";
export default {
  components: { ObjectItem, AddObject },
  middleware: "authenticated",
  async asyncData({ app, store }) {
    const token = store.$auth.getToken("local").split(" ")[1];
    const objects = await app.$axios
      .get("/objects/user/object", {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        store.dispatch("handleGetUserData", response.data);
        return response.data;
      });
    return { objects };
  },
  data() {
    return {
      showAddModal: false,
    };
  },
};
</script>

<style scoped></style>
