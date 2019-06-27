import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '开源猫',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"' },
      {name:'baidu-site-verification',content:'spKHcRMHS2'},
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'Keywords', content: '开源猫,课程引进,乐高课程,乐高机器人课程,乐高机器人编程课程,编程课程,机器人课程,机器人编程课程,儿童编程课程,少儿编程课程,steam课程,创客课程' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src:'http://api.map.baidu.com/api?v=2.0&ak=EbvEbjOO1hxkMzRUK7bV0OR3KyhDxxVK'},
      { src:'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.js'},
      { src:'https://cdn.bootcss.com/echarts/4.2.1-rc.3/echarts.min.js'},
      { src: '/js/jquery-1.11.0.min.js',type:'text/javascript' },
      { src: '/js/distpicker.data.min.js',type:'text/javascript' },
      { src: '/js/distpicker.min.js',type:'text/javascript' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/css/style.css' },
    
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-toast', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   vendor: ['vue2-toast','axios'],
   extend(config, { isClient }) {
      if (isClient) {
        config.resolve.alias['vue'] = 'vue/dist/vue.js';
      }
    },
     publicPath: 'http://120.78.82.222:4200/',
  },
  // router: {
  //     base: '/kymIndex/'
  // }
}
