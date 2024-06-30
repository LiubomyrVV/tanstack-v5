import cors from 'cors'
import dotenv from 'dotenv'
import db from './db.json'

import express, { Request, Response } from 'express'
dotenv.config()

const app = express()
app.use(
  express.json(),
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.json(db)
})
const PORT: number = parseInt((process.env.PORT || '4000') as string, 10)

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
