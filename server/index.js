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
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

// letsencrypt-express用の初期化コード開始
var LEX = require('greenlock-express')

// 以下の2行は環境に合わせて変更して下さい！
var DOMAIN = 'massy7124.me'
var EMAIL = 'massy7124@gmail.com'

// history({
//     index: '/'
// })
// // vue-router history
// app.use(history())

app.set('port', port)

// postのとき値を受け取るために必要(req.body)
app.use(bodyParser.urlencoded({
    limit   : '50mb',
    extended: true
}))
app.use(bodyParser.json({limit: '50mb'}))

app.use(session({
    secret           : 'super-secret-key',
    resave           : false,
    saveUninitialized: false,
    cookie           : { maxAge: 1000 * 60 * 60 }
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
LEX.create({
    server        : 'staging',
    email         : EMAIL,
    agreeTos      : true,
    approveDomains: [DOMAIN],
    app           : app
}).listen(80, 443)

console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
