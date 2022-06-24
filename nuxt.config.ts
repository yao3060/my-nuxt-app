import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: [
    // https://tailwindcsss.nuxtjs.org
    "@nuxtjs/tailwindcss",
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    preference: 'light', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
  },
})
