<template>
  <div class="lg:p-16 p-3">
    <h1 class="w-auto text-white font-bold my-16 text-xl border-b-2">
      Tous les objets perdus
    </h1>
    <button
      class="
        add-button
        h-12
        w-12
        text-green-500
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
      <i class="bx bx-plus text-5xl"></i>
    </button>
    <client-only>
      <div class="w-100 flex flex-wrap justify-evenly mx-auto mt-8">
        <ObjectItem
          v-for="(object, i) in allObjects"
          :key="i"
          class="mt-6 h-48"
          :object="object"
          @refresh="asyncData"
        />
      </div>
    </client-only>
    <AddObject v-if="showAddModal" @close="showAddModal = false" />
  </div>
</template>

<script>
import AddObject from "../components/AddObject.vue";
import ObjectItem from "../components/ObjectItem.vue";
export default {
  components: { ObjectItem, AddObject },
  async asyncData({ app }) {
    const allObjects = await app.$axios.get("/objects").then((response) => {
      return response.data;
    });
    return { allObjects };
  },
  data() {
    return {
      showAddModal: false,
      allObjects: null,
    };
  },
  computed: {},
};
</script>

<style scoped></style>
