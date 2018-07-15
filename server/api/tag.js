import { Router } from 'express'
import mongodb from 'mongodb'
import collection from './mongo'
import assert from 'assert'

const router = Router()

const ObjectID = mongodb.ObjectID
const collectionName = 'tags'

router.get('/tag/all', function (req, res) {
    collection(collectionName).find().toArray(function (err, docs) {
        assert.equal(null, err)
        res.json(docs)
    })
})

router.post('/tag/insert', function (req, res) {
    collection(collectionName).insertOne(req.body).then(function (r) {
        res.send(r)
    })
})

router.get('/tag/delete/:id', function (req, res) {
    collection(collectionName).findOneAndDelete({ _id: new ObjectID(req.params.id) }, {}, function (err, r) {
        assert.equal(null, err)
        res.send(r)
    })
})

export default router
