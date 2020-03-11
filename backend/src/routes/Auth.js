import express from 'express'
import auth from '../controllers/auth.controller'
const router = express.Router()

router.post('/login', async ({ body }, res) => {
    let result = await auth.login(body)
    res.status(result.status).json(result)
})
router.post('/register', async ({ body }, res) => {
    console.log('/register | body=', body)
    let result = await auth.register(body)
    res.status(result.status).json(result)
})

export default router