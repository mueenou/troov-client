<template>
  <div>
    <div
      class="
        object-container
        bg-white
        relative
        min-h-full
        rounded
        shadow-lg
        mb-5
        flex flex-col
        justify-between
        py-2
      "
    >
      <div class="px-6 py-1 flex justify-between">
        <div class="h-8">
          <div class="font-bold text-lg mb-2">
            {{ object.name.charAt(0).toUpperCase() + object.name.slice(1) }}
          </div>
          <div class="image-container">
            <carousel v-bind="options">
              <slide
                v-for="img in object.images"
                :key="img.fileName"
                class="img-wrapper"
              >
                <img
                  :src="`http://localhost:5000/${img.filePath}`"
                  :alt="img.fileName"
                />
              </slide>
            </carousel>
          </div>
          <p class="text-gray-700 text-base mt-5">
            {{ object.description }}
          </p>
        </div>
        <div
          v-if="
            $auth.user == !null ||
            ($auth.user && object.author === $auth.user._id)
          "
          class="action-buttons justify-between flex"
        >
          <button
            class="
              hover:bg-red-300
              rounded-full
              p-1
              font-medium
              bg-red-200
              focus:outline-none
            "
            @click="showDeleteModal = true"
          >
            <i class="bx bx-trash"></i>
          </button>
          <button
            class="
              hover:bg-green-300
              rounded-full
              p-1
              font-medium
              bg-green-200
              focus:outline-none
            "
            @click="showModal = true"
          >
            <i class="bx bx-edit"></i>
          </button>
        </div>
      </div>
      <div class="px-6">
        <span
          class="
            inline-block
            bg-gray-200
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold
            text-gray-700
            mr-2
            mb-2
          "
          >#{{ object.lost_city }}</span
        >
        <span
          class="
            inline-block
            bg-gray-200
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold
            text-gray-700
            mr-2
            mb-2
          "
          >#{{ object.lost_dpt }}</span
        >
      </div>
    </div>
    <ModifyModal
      v-if="showModal"
      :object="object"
      @close="showModal = false"
      @refresh="$emit('refresh')"
    />
    <DeleteObjectModal
      v-if="showDeleteModal"
      :object-id="object._id"
      @close="showDeleteModal = false"
    />
  </div>
</template>

<script>
import DeleteObjectModal from "./DeleteObjectModal.vue";
import ModifyModal from "./ModifyModal.vue";
export default {
  name: "ObjectItem",
  components: { ModifyModal, DeleteObjectModal },
  props: ["object"],
  data() {
    return {
      showModal: false,
      showDeleteModal: false,
      options: {
        paginationColor: "#afeeee",
        paginationActiveColor: "#38a169",
        loop: true,
        perPage: 1,
        paginationEnabled: true,
      },
    };
  },
  methods: {},
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

.object-container {
  min-height: 20rem;
}

.image-container {
  width: 220px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 150px;
}

.image-container img {
  height: 150px;
  width: 220px;
  object-fit: contain;
}

.action-buttons {
  position: absolute;
  right: 10px;
  width: 55px;
}

.VueCarousel-slide {
  text-align: center;
}
.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 150px;
}
</style>

<style>
.VueCarousel-dot-container {
  margin-top: -20px !important;
}
button:focus {
  outline: none !important;
}
</style>
