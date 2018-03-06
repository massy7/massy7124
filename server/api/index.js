import { Router } from 'express'

import blog from './blog'
import history from './history'
import contact from './contact'
import works from './works'

const router = Router()

router.use(blog)
router.use(history)
router.use(contact)
router.use(works)

export default router
