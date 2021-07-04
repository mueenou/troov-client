<template>
  <div>
    <h1 class="mx-auto text-white font-bold w-20 my-16 text-xl">Register</h1>
    <div
      class="
        w-2/3
        bg-gray-800
        shadow-lg
        rounded
        px-8
        pt-6
        pb-8
        mb-4
        flex flex-col
        mb-4
        mx-auto
      "
    >
      <div class="mb-4">
        <label class="block text-gray-500 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          id="email"
          v-model="register.email"
          class="
            bg-gray-700
            text-white
            shadow
            appearance-none
            rounded
            w-full
            py-2
            px-3
            focus:outline-none
          "
          type="email"
          placeholder="Email"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-500 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          id="password"
          v-model="register.password"
          class="
            bg-gray-700
            text-white
            shadow
            appearance-none
            rounded
            w-full
            py-2
            px-3
            focus:outline-none
          "
          type="password"
          placeholder="******************"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-500 text-sm font-bold mb-2"
          for="password"
        >
          Confirm password
        </label>
        <input
          id="password"
          v-model="register.password_confirmation"
          class="
            bg-gray-700
            text-white
            shadow
            appearance-none
            rounded
            w-full
            py-2
            px-3
            focus:outline-none
          "
          type="password"
          placeholder="******************"
        />
      </div>
      <div
        v-if="error"
        class="alert italic text-black bg-red-400 mb-5 p-1 pl-2 rounded"
      >
        {{ error }}
      </div>
      <div class="flex items-center justify-between">
        <button
          class="
            bg-gray-700
            hover:bg-gray-600
            text-white
            font-bold
            py-2
            px-4
            rounded
          "
          type="button"
          @input="registerUser()"
        >
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      register: {
        email: "",
        password: "",
        password_confirmation: "",
      },
      error: "",
    };
  },
  methods: {
    registerUser() {
      this.$axios
        .post("/user/register", this.register)
        .then((response) => {
          console.log(response);
          this.$auth.loginWith("local", {
            data: {
              email: this.register.email,
              password: this.register.password,
            },
          });
        })
        .catch((err) => {
          this.error = err.response.data;
        });
    },
  },
};
</script>

<style scoped></style>
