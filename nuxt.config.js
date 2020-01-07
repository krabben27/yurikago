import articleList from './assets/json/articleList.json'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    titleTemplate: '%s | Yurikago Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    '~/assets/css/default.css',
    'highlight.js/styles/zenburn.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-155216702-1'
    }],
    ['@nuxtjs/sitemap', {
      path: '/sitemap.xml',
      hostname: 'https://yurikago-blog.netlify.com',
      routes () {
        return articleList.map(v => {
          return `/articles/${v.id}/`
        })
      }
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'raw-loader',
        exclude: /(node_modules)/,
      });
    }
  },
  // generateコマンドを実行するとき動的なパラメーターを用いたルートを生成
  generate: {
    routes () {
      return articleList.map(v => {
        return `/articles/${v.id}/`
      })
    },
    // エラー発生時に 200.html ではなく 404.html を表示する
    fallback: true
  },
  router: {
    // URL末尾にスラッシュを付与する
    trailingSlash: true
  }
}
