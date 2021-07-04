<template>
  <header
    class="bg-gray-800 shadow-md sm:flex sm:justify-between sm:px-4 sm:py-3"
  >
    <div class="flex justify-between items-center px-4 py-3 sm:p-0">
      <nuxt-link
        class="
          text-lg text-white
          tracking-widest
          font-bold
          p-3
          rounded
          shadow-medium
          bg-green-600
        "
        to="/"
        >TROOV</nuxt-link
      >
      <div v-if="$auth.loggedIn">
        <span
          class="
            text-white
            sm:ml-16
            font-semibold
            bg-gray-900
            rounded
            p-1
            pb-2
            px-2
          "
        >
          {{ $auth.user.email }}
        </span>
      </div>
      <div class="sm:hidden">
        <button
          type="button"
          class="block focus:outline-none"
          @click="isOpen = !isOpen"
        >
          <svg
            class="h-6 w-6 text-gray-500 hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      v-if="$auth.loggedIn"
      :class="isOpen ? 'block' : 'hidden'"
      class="px-2 pt-2 pb-4 sm:flex sm:p-0 sm:items-center sm:px-2"
    >
      <nuxt-link
        class="
          block
          px-4
          py-1
          mt-1
          rounded
          text-white
          font-semibold
          hover:bg-gray-700
          sm:mt-0
        "
        to="/objects"
        >Mes objets</nuxt-link
      >
      <nuxt-link
        class="
          block
          px-4
          py-1
          mt-1
          rounded
          text-white
          font-semibold
          hover:bg-gray-700
          sm:mt-0
        "
        to="/"
        >Tous les objets</nuxt-link
      >
      <nuxt-link
        class="
          block
          px-4
          py-1
          mt-1
          rounded
          text-white
          font-semibold
          hover:bg-gray-700
          sm:mt-0
        "
        to="/login"
        @click.native="$auth.logout()"
        >Déconnexion</nuxt-link
      >
    </div>
    <div
      v-else
      :class="isOpen ? 'block' : 'hidden'"
      class="px-2 pt-2 pb-4 sm:flex sm:p-0 sm:items-center sm:px-2"
    >
      <nuxt-link
        class="
          block
          px-4
          py-1
          mt-1
          rounded
          text-white
          font-semibold
          hover:bg-gray-700
          sm:mt-0
        "
        to="/"
        >Tous les objets</nuxt-link
      >
      <nuxt-link
        to="/login"
        class="
          block
          px-4
          py-1
          rounded
          text-white
          font-semibold
          hover:bg-gray-700
          sm:mt-0
        "
        >Connexion</nuxt-link
      >
      <nuxt-link
        to="/register"
        class="
          block
          px-4
          py-1
          mt-1
          rounded
          text-white
          font-semibold
          hover:bg-gray-700
          sm:mt-0
        "
        >Inscription</nuxt-link
      >
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped></style>
