import { Router } from 'express'

const router = Router()

// Mock Blogs
const historys = [
    { name: 'Alexandre' },
    { name: 'Pooya' },
    { name: 'Sébastien' }
]

/* GET blogs listing. */
router.get('/history', function (req, res, next) {
    res.json(historys)
})

export default router
