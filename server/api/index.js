import { Router } from 'express'

import blog from './blog'
import tag from './tag'

const router = Router()

router.use(blog)
router.use(tag)

export default router
