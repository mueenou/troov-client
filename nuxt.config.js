export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "troov-client",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/persistedState.client.js" },
    { src: "./plugins/vue-carousel.js", mode: "client" },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],

  axios: {
    baseURL: "http://localhost:5000/api/",
    common: {
      Accept: "application/json, text/plain, */*",
    },
  },

  auth: {
    strategies: {
      redirect: {
        login: "/",
        logout: "/login",
        register: "/",
        home: "/",
      },
      local: {
        endpoints: {
          login: { url: "/user/login", method: "post", propertyName: "token" },
          logout: { url: "/api/user/logout", method: "post" },
          user: { url: "/user", method: "get", propertyName: "user" },
        },
        // tokenRequired: true,
      },
    },
  },

  router: {},
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue|ts)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
