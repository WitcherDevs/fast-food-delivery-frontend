// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-icon"],

  devtools: { enabled: true },

  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    head: {
      title: "Fast Food Delivery",
    },
  },

  /// TailwindCSS
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
