import { Router } from 'express'
import mongodb from 'mongodb'
import collection from './mongo'
import assert from 'assert'

const router = Router()

const ObjectID = mongodb.ObjectID
const collectionName = 'users'

router.post('/auth/login', function (req, res) {
    if (req.body.username === 'admin' && req.body.password === 'admin') {
        req.session.authUser = { username: 'admin' }
        return res.json({ username: 'admin' })
    }
    console.log(req.body.username)
    res.status(401).json({ error: 'Bad credentials' })
})

router.post('/auth/logout', function (req, res) {
    delete req.session.authUser
    res.json({ ok: true })
})

router.post('/auth/insert', function (req, res) {
    collection(collectionName).insertOne(req.body).then(function (r) {
        res.send(r)
    })
})

router.get('/auth/update/:id', function (req, res) {
    collection(collectionName).findOneAndUpdate({ _id: new ObjectID(req.params.id) }, req.body, {}, function (err, r) {
        assert.equal(null, err)
        res.send(r)
    })
})

router.get('/auth/delete/:id', function (req, res) {
    collection(collectionName).findOneAndDelete({ _id: new ObjectID(req.params.id) }, {}, function (err, r) {
        assert.equal(null, err)
        res.send(r)
    })
})

export default router
