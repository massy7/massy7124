import express from 'express'
import { Nuxt, Builder } from 'nuxt'
// postのとき値を受け取るために必要(req.body)
import bodyParser from 'body-parser'
import session from 'express-session'
// 認証
import passport from 'passport'

import api from './api'
// const history = require('connect-history-api-fallback')

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// history({
//     index: '/'
// })
// // vue-router history
// app.use(history())

app.set('port', port)

// postのとき値を受け取るために必要(req.body)
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use(session({
    secret           : 'super-secret-key',
    resave           : false,
    saveUninitialized: false,
    cookie           : { maxAge: 60000 }
}))

app.use(passport.initialize())
app.use(passport.session())

// Import API Routes
app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
    const builder = new Builder(nuxt)
    builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
