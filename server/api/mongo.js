import mongodb from 'mongodb'
import assert from 'assert'

let db
let MongoClient = mongodb.MongoClient

// Connection URL
let url = 'mongodb://127.0.0.1:27017/portfolio'

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, mongo) {
    assert.equal(null, err)
    console.log('Connected correctly to server')
    db = mongo.db('portfolio')
})

let collection = function (name) {
    return db.collection(name)
}

export default collection
