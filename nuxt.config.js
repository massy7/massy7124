const webpack = require('webpack')
let config = require('./config/production.json')

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'Massy7124\'s Web Site',
        meta : [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Massy7124のポートフォリオサイトです。ブログも書いていますのでご覧ください！' },

            { name: 'twitter:site', content: 'summary' },
            { name: 'twitter:card', content: '@massy7124' },
            { name: 'twitter:description', content: 'Massy7124のポートフォリオサイトです。' },
            { name: 'twitter:image:src', content: '' },
            { property: 'og:url', content: config.server.baseUrl },
            { property: 'og:title', content: 'massy7124\'s site' },
            { property: 'og:type', content: 'website' },
            { property: 'og:description', content: 'massy7124\'s portfolio site' },
            { property: 'og:image', content: 'http://massy7124.me/img/massy7124.jpg' },
            { property: 'fb:admins', content: '100010745989607' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    modules: [
        // '@nuxtjs/vuetify'
        '@nuxtjs/pwa',
        '@nuxtjs/font-awesome',
        '@nuxtjs/google-analytics'
    ],
    'google-analytics': {
        id: config.google.analytics.trackingId
    },
    manifest: {
        name            : 'Massy7124\'s site',
        short_name      : 'Massy7124',
        title           : 'Massy7124\'s site',
        'og:title'      : 'Massy7124\'s site',
        description     : 'Massy7124\'s site',
        'og:description': 'Massy7124\'s site',
        lang            : 'ja',
        theme_color     : 'deepskyblue',
        background_color: 'deepskyblue'
    },
    workbox: {
        dev: true
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
        baseUrl: config.server.baseUrl
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
        uglify: {
            uglifyOptions: {
                compress: false
            },
            cache: '/path/to/cache/dir'
        },
        /*
        ** Run ESLINT on save
        */
        extend (conf, ctx) {
            if (ctx.isClient) {
                conf.module.rules.push({
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
