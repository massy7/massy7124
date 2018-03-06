import { Router } from 'express'

const router = Router()

router.get('/works', function (req, res, next) {
    res.json('works')
})

export default router
