import express from '../node_modules/express'
import helmet from '../node_modules/helmet'
import cors from '../node_modules/cors/lib'
import bodyParser from '../node_modules/body-parser'
import Login from './routes/Auth'
import mongodb from './config/mongodb'

const app = express()

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})
mongodb.initialization()
app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.enable('trust proxy')

app.use(Login)
app.get('/',(req,res)=>{
    res.status(200).send({message : "hello world"})
})

const server = app.listen(process.env.PORT || 5003, () => {
  const port = server.address().port
  console.log("sever running on port => ",port);
  
})

module.exports = server

