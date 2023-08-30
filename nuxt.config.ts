// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css'
  ],
  // buildModules: [
  //   '@nuxtjs/style-resources'
  // ],
  // styleResources: {
  //   scss: [
  //     '~/assets/scss/variables.scss'
  //   ]
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    // ...
    '@pinia/nuxt',
  ],

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },  
})
