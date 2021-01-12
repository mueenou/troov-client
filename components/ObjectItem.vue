<template>
  <div>
    <div
      class="object-container bg-white relative min-h-full h-48 rounded shadow-lg mb-5 flex flex-col justify-between py-2"
    >
      <div class="px-6 py-1 flex justify-between">
        <div class="h-8">
          <div class="font-bold text-lg mb-2">
            {{ object.name.charAt(0).toUpperCase() + object.name.slice(1) }}
          </div>
          <p class="text-gray-700 text-base">
            {{ object.description }}
          </p>
        </div>
        <div
          v-if="$auth.user ==! null || ($auth.user && object.author === $auth.user._id)"
          class="action-buttons justify-between flex"
        >
          <button
            @click="showDeleteModal = true"
            class="hover:bg-red-300 rounded-full p-1 font-medium bg-red-200 focus:outline-none"
          >
            <svg
              class="h-4 w-4 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
          <button
            @click="showModal = true"
            class="hover:bg-green-300 rounded-full p-1 font-medium bg-green-200 focus:outline-none"
          >
            <svg
              class="h-4 w-4 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="px-6">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#{{ object.lost_city }}</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#{{ object.lost_dpt }}</span
        >
      </div>
    </div>
    <modify-modal
      :object="object"
      @close="showModal = false"
      v-if="showModal"
    />
    <delete-object-modal
      :objectId="object._id"
      @close="showDeleteModal = false"
      v-if="showDeleteModal"
    />
  </div>
</template>

<script>
import DeleteObjectModal from "./DeleteObjectModal.vue";
import ModifyModal from "./ModifyModal.vue";
export default {
  components: { ModifyModal, DeleteObjectModal },
  name: "object-item",
  props: ["object"],
  data() {
    return {
      showModal: false,
      showDeleteModal: false
    };
  },
  methods: {}
};
</script>

<style scoped>
@media (min-width: 768px) {
  .object-container {
    width: 270px;
    min-width: 220px;
  }
}

@media (min-width: 375px) and (max-width: 768px) {
  .object-container {
    width: 250px;
    min-width: 220px;
  }
}

@media (max-width: 375px) {
  .object-container {
    width: 220px;
    min-width: 220px;
  }
}

.action-buttons {
  position: absolute;
  right: 10px;
  width: 55px;
}
</style>
