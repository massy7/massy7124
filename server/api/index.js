import { Router } from 'express'

import auth from './auth'
import blog from './blog'
import tag from './tag'

const router = Router()

router.use(auth)
router.use(blog)
router.use(tag)

export default router
