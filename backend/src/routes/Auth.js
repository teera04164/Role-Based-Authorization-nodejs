import express from '../../node_modules/express'

const router = express.Router()

router.post('/login',(req,res) => {
    res.status(200).json("login")
})
router.post('/register',(req,res) => {
    res.status(200).json("register")   
})

export default router