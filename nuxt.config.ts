// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
      },
    ],
    '@kevinmarrec/nuxt-pwa',
  ],
  css: ['~/node_modules/vue-plyr/dist/vue-plyr.css'],
  app: {
    head: {
      script: [
        {
          key: 'gtm',
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PTB3BSX');`,
          type: 'text/javascript',
        },
      ],
    },
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Lenovo Edge Retail',
      short_name: 'Lenovo',
      lang: 'en',
      display: 'standalone',
      theme_color: '#e1251b',
      background_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: 'maskable-icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    // workbox: {
    //   offlineAssets: [
    //     '/video/Lenovo-ThinkSystem.mp4',
    //     '/video/Partner-with-Lenovo.mp4'
    //   ],
    // },
  },
})
