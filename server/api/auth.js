import { Router } from 'express'
import mongodb from 'mongodb'
import collection from './mongo'
import passport from './passport'
import assert from 'assert'

const router = Router()

const ObjectID = mongodb.ObjectID
const collectionName = 'users'

// router.post('/auth/login', passport.authenticate('local', {session: false}), (req, res, next) => {
//     return res.json({ username: req.body.username })
// })

router.post('/auth/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return res.status(401).send(err)
        }
        if (!user) {
            return res.status(401).send()
        }
        req.logIn(user, function (err) {
            if (err) {
                return res.json(err)
            }
            return res.json({
                username: user.username,
                role    : user.role
            })
        })
    })(req, res, next)
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
