<template>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block sm:p-0
      "
    >
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="
          inline-block
          align-bottom
          bg-white
          rounded-lg
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
        "
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div
              class="
                mx-auto
                flex-shrink-0 flex
                items-center
                justify-center
                h-12
                w-12
                rounded-full
                bg-red-100
                sm:mx-0 sm:h-10 sm:w-10
              "
            >
              <i class="bx bx-plus text-3xl"></i>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <input
                v-model="newObject.name"
                class="
                  text-lg
                  leading-6
                  font-medium
                  text-gray-900
                  focus:outline-none
                "
                placeholder="Title"
              />

              <div class="mt-2">
                <textarea
                  v-model="newObject.description"
                  class="
                    text-sm
                    bg-gray-200
                    rounded
                    p-1
                    text-gray-600
                    m-h-32
                    w-64
                    h-32
                    focus:outline-none
                  "
                  placeholder="description"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <input
                v-model="newObject.lost_city"
                class="
                  text-sm
                  bg-gray-200
                  rounded
                  px-1
                  block
                  leading-6
                  font-medium
                  text-gray-900
                  focus:outline-none
                "
                placeholder="Lost city"
              />

              <input
                v-model="newObject.lost_dpt"
                class="
                  text-sm
                  bg-gray-200
                  rounded
                  px-1
                  block
                  mt-1
                  leading-6
                  font-medium
                  text-gray-900
                  focus:outline-none
                "
                placeholder="lost_dpt"
              />
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="
              w-full
              inline-flex
              justify-center
              rounded-md
              border border-transparent
              shadow-sm
              px-4
              py-2
              bg-green-600
              text-base
              font-medium
              text-white
              hover:bg-green-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-red-500
              sm:ml-3 sm:w-auto sm:text-sm
            "
            @click="addObject()"
          >
            Ajouter
          </button>
          <button
            type="button"
            class="
              mt-3
              w-full
              inline-flex
              justify-center
              rounded-md
              border border-gray-300
              shadow-sm
              px-4
              py-2
              bg-white
              text-base
              font-medium
              text-gray-700
              hover:bg-gray-50
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
              sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
            "
            @click="$emit('close')"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddObject",
  props: {
    showAddModal: {
      type: Boolean,
    },
  },
  data() {
    return {
      newObject: {
        name: "",
        description: "",
        lost_city: "",
        lost_dpt: "",
        _id: "",
      },
    };
  },

  methods: {
    addObject() {
      const token = this.$auth.getToken("local").split(" ")[1];
      this.$axios
        .post("/objects/user/object", this.newObject, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
          this.$emit("close");
        })
        .then(() => {
          this.$nuxt.refresh();
        });
    },
  },
};
</script>

<style scoped></style>
