import express from 'express'
import { Nuxt, Builder } from 'nuxt'
// postのとき値を受け取るために必要(req.body)
import bodyParser from 'body-parser'
import session from 'express-session'
// 認証
import passport from 'passport'

import api from './api'
// const history = require('connect-history-api-fallback')

// letsencrypt-express用の初期化コード開始

// 次の行の.testing()は本番環境では外して下さい
var LEX = require('letsencrypt-express')// .testing()

// 以下の2行は環境に合わせて変更して下さい！
var DOMAIN = 'massy7124.me'
var EMAIL = 'massy7124@gmail.com'

var lex = LEX.create({
    configDir          : require('os').homedir() + '/letsencrypt/etc',
    approveRegistration: function (hostname, approve) { // leave `null` to disable automatic registration
        if (hostname === DOMAIN) { // Or check a database or list of allowed domains
            approve(null, {
                domains : [DOMAIN],
                email   : EMAIL,
                agreeTos: true
            })
        }
    }
})

const app = express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

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
// app.listen(port, host)
// ここからlets用の実行部コード
lex.onRequest = app

lex.listen([80], [443, 5001], function () {
    var protocol = ('requestCert' in this) ? 'https': 'http'
    console.log('Listening at ' + protocol + '://localhost:' + this.address().port)
})

// ここまで
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
