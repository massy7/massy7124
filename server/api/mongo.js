import mongodb from 'mongodb'
import assert from 'assert'

let config = require('../../config/development.json')
if (process.env.NODE_ENV === 'production') {
    config = require('../../config/production.json')
}

let db
let MongoClient = mongodb.MongoClient

// Connection URL
let url = config.mongodb.dsn + config.mongodb.database

// Use connect method to connect to the Server
MongoClient.connect(url, {useNewUrlParser: true}, function (err, mongo) {
    assert.equal(null, err)
    console.log('Connected correctly to server')
    db = mongo.db('portfolio')
})

let collection = function (name) {
    return db.collection(name)
}

export default collection
