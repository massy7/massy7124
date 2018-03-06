import { Router } from 'express'

const router = Router()

/* GET blogs listing. */
router.get('/contact', function (req, res, next) {
    res.json('test')
})

export default router
