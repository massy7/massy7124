import { Router } from 'express'

import auth from './auth'
import blog from './blog'
import tag from './tag'

const router = Router()

// For Cross Origin
router.all('/*', function (req, res, next) {
    res.contentType('json')
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    next()
})

router.use(auth)
router.use(blog)
router.use(tag)

export default router
