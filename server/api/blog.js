import { Router } from 'express'
import mongodb from 'mongodb'
import collection from './mongo'
import assert from 'assert'

const router = Router()

const ObjectID = mongodb.ObjectID
const collectionName = 'blogs'

const maxBlogCountEachPage = 10

router.get('/blog/all', function (req, res) {
    collection(collectionName).find().sort({_id: -1}).limit(maxBlogCountEachPage).toArray(function (err, docs) {
        assert.equal(null, err)
        res.json(docs)
    })
})

router.get('/blog/count-all', function (req, res) {
    collection(collectionName).count()
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get('/blog/:page', function (req, res) {
    collection(collectionName).find().sort({_id: -1}).skip(req.params.page * maxBlogCountEachPage).limit(maxBlogCountEachPage).toArray(function (err, docs) {
        assert.equal(null, err)
        if (docs.length <= 0) {
            res.status(404)
        }
        res.json(docs)
    })
})

router.post('/blog/insert', function (req, res) {
    collection(collectionName).insertOne(req.body).then(function (r) {
        res.send(r)
    })
})

router.get('/blog/update/:id', function (req, res) {
    collection(collectionName).findOneAndUpdate({ _id: new ObjectID(req.params.id) }, req.body, {}, function (err, r) {
        assert.equal(null, err)
        res.send(r)
    })
})

router.get('/blog/delete/:id', function (req, res) {
    collection(collectionName).findOneAndDelete({ _id: new ObjectID(req.params.id) }, {}, function (err, r) {
        assert.equal(null, err)
        res.send(r)
    })
})

export default router
