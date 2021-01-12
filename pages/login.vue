<template>
  <div>
    <h1 class="mx-auto text-white font-bold w-16 my-16 text-xl">Login</h1>
    <div
      class="w-2/3 bg-gray-800 shadow-lg rounded px-8 pt-6 pb-8 mb-4 mx-auto flex flex-col"
    >
      <div class="mb-4">
        <label class="block text-gray-500 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="bg-gray-700 text-white shadow appearance-none rounded w-full py-2 px-3 focus:outline-none"
          id="email"
          type="email"
          placeholder="Email"
          v-model="login.email"
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
          class="bg-gray-700 text-white shadow appearance-none rounded w-full py-2 px-3 focus:outline-none"
          id="password"
          type="password"
          placeholder="******************"
          v-model="login.password"
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
          class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
          type="button"
          @click="loginUser()"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "login",
  data() {
    return {
      login: {
        email: "",
        password: ""
      },
      error: ""
    };
  },
  methods: {
    loginUser() {
      this.$auth
        .loginWith("local", { data: this.login })
        .then(response => {
          console.log(response);
          this.error = "";
        })
        .catch(err => {
          this.error = err.response.data.error;
        });
    }
  }
};
</script>

<style>
/* input:focus {
    outline: none;
} */
</style>
