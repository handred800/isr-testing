// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  routeRules: {
    '/**': { isr: true },
    '/static_time': { isr: 60 }
  },
  nitro: {
    vercel: {
      config: {
        bypassToken: 'b0751327d4a0d35a806326a8b80d2fba'
      }
    }
  }
})
