
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Uddùg team',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'Uddùg team - we are devoted to creating help humanity get to the future faster' },
      { property: 'og:description', content: 'We combine proven methodologies, business domain knowledge and technology expertise of skilled software professionals to deliver highly optimized solutions and services across wide range of industry domains.' },
      { property: 'og:site_name', content: 'Uddùg' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://uddug.com' },
      { property: 'og:image', itemprop: 'image', content: '/cover.jpg' },
      { name: 'twitter:title', content: 'Uddùg team - we are devoted to creating help humanity get to the future faster' },
      { name: 'twitter:description', content: 'We combine proven methodologies, business domain knowledge and technology expertise of skilled software professionals to deliver highly optimized solutions and services across wide range of industry domains.' },
      { name: 'twitter:image', content: '/cover.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@uddug' },
      { name: 'twitter:image:alt', content: 'Uddùg team - we are devoted to creating help humanity get to the future faster' },
      { hid: 'description', name: 'description', content: 'We combine proven methodologies, business domain knowledge and technology expertise of skilled software professionals to deliver highly optimized solutions and services across wide range of industry domains.' },
      { hid: 'keywords', name: 'keywords', content: 'Uddùg team, development team, blockchain development, machine learning, cloud infrastructure, devops' },
      { hid: 'image', name: 'image', content: '/cover.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/main.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '@/plugins/vue-slick-carousel.js' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'vue-scrollto/nuxt'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
