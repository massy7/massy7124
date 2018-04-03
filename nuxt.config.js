const webpack = require('webpack')
module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'massy7124\'s site',
        meta : [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'massy7124のポートフォリオサイトです。ブログも書いていますのでご覧     ください！' },

            { name: 'twitter:site', content: 'summary' },
            { name: 'twitter:card', content: '@massy7124' },
            { property: 'og:url', content: process.env.BASE_URL || 'http://localhost:3000' },
            { property: 'og:title', content: 'massy7124\'s site' },
            { property: 'og:description', content: 'massy7124\'s portfolio site' },
            { property: 'og:image', content: 'http://localhost:3000' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    modules: [
        // '@nuxtjs/vuetify'
        '@nuxtjs/font-awesome',
        '@nuxtjs/google-analytics'
    ],
    'google-analytics': {
        id: 'UA-00000-0'
    },
    plugins: [
        '~plugins/element-ui',
        '~plugins/highlight',
        '~plugins/quill',
        { src: '~plugins/persisted-state.js', ssr: false }
    ],
    /*
    ** Global CSS
    */
    css: [
        { src: '~assets/css/main.scss', lang: 'scss' },
        'element-ui/lib/theme-chalk/index.css',
        'element-ui/lib/theme-chalk/display.css',
        'highlight.js/styles/monokai-sublime.css'
    ],
    /*
    ** env
    */
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    },
    /*
    ** Add axios globally
    */
    build: {
        vendor: [
            'axios',
            'element-ui',
            'quill',
            'vue-highlightjs'
        ],
        plugins: [
            new webpack.ProvidePlugin({
                'window.Quill': 'quill/dist/quill.js',
                'Quill'       : 'quill/dist/quill.js'
            })
        ],
        /*
        ** Run ESLINT on save
        */
        extend (config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test   : /\.(js|vue)$/,
                    loader : 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    mode: 'spa'
}
