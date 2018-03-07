import { Router } from 'express'

const router = Router()

// Mock Blogs
const blogs = [
    {
        name: 'Alexandre'
    },
    {
        name: 'Pooya'
    },
    {
        name: 'Sébastien'
    }
]

/* GET blogs listing. */
router.get('/blog', function (req, res, next) {
    res.json(blogs)
})

/* GET user by ID. */
router.get('/blog/:id', function (req, res, next) {
    const id = parseInt(req.params.id)
    if (id >= 0 && id < blogs.length) {
        res.json(blogs[id])
    } else {
        res.sendStatus(404)
    }
})

export default router
