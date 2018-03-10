import { Router } from 'express'
// import axios from '~/plugins/axios'

const router = Router()

// Mock Blogs
const blogs = [
    {
        filePath: 'first-commit',
        title: '初投稿',
        date: '2018-04-01',
        tag: [1, 3],
        content: '<h1>初投稿</h1><br><strong>html</strong>を<i>そのまま</i>書けます。'
    },
    {
        filePath: 'second-commit',
        title: '2投稿',
        date: '2018-04-02',
        tag: [2, 3],
        content: '<h1>初投稿</h1><br><strong>html</strong>を<i>そのまま</i>書けます。'
    },
    {
        filePath: 'third-commit',
        title: '3投稿',
        date: '2018-04-03',
        tag: [1],
        content: '<h1>初投稿</h1><br><strong>html</strong>を<i>そのまま</i>書けます。'
    }
]

/* GET blogs listing. */
router.get('/blog', function (req, res, next) {
    res.json(blogs)
})

router.get('/blog/:date/:filePath', function (req, res, next) {
    const fs = require('fs')
    try {
        const json = JSON.parse(fs.readFileSync('content/blog/' + req.params.date + '-' + req.params.filePath + '.json', 'utf8'))
        res.json(json)
    } catch (err) {
        if (err.code === 'ENOENT') res.error({ statusCode: 404, message: err.message })
    }
    // res.json(require('../../content/blog/' + req.params.date + '-' + req.params.filePath + '.json'))

    // const fs = require('fs')
    // const blog = fs.createReadStream('/api/contact.js')
    // console.log(blog)
    // const blog = fs.createReadStream('/../content/blog/' + req.params.date + '-' + req.params.filePath + '.json')
    // res.json(blog)
    // const date = parseInt(req.params.date)
    // const filePath = parseInt(req.params.filePath)
    // res.json('.json')
    // axios.get('~content/blog/' + req.params.date + '-' + req.params.filePath + '.json')
    //     .then((response) => {
    //         res.json(response)
    //     })
    //     .catch((error) => {
    //         error({ statusCode: 404, message: 'Blog not found' })
    //     })
})

export default router
