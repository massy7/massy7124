module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'massy7124\'s site',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    modules: [
        '@nuxtjs/vuetify'
    ],
    /*
    ** Global CSS
    */
    css: ['~/assets/css/main.css'],
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
        vendor: ['axios'],
        /*
        ** Run ESLINT on save
        */
        extend (config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
