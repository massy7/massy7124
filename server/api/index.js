import { Router } from 'express'

import blog from './blog'

const router = Router()

// Add BLOGS Routes
router.use(blog)

export default router
