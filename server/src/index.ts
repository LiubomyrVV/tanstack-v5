import cors from 'cors'
import dotenv from 'dotenv'
import { parsedData } from './db'

import express, { Request, Response } from 'express'
dotenv.config()

const app = express()
app.use(
  express.json(),
  cors({
    origin: ['http://localhost:5173'],
    credentials: true, // Enable set cookie for the request
    optionsSuccessStatus: 204,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/products', (req: Request, res: Response) => {})

app.get('/todos', (req: Request, res: Response) => {
  res.json(parsedData.todos)
})

app.get('/', (req: Request, res: Response) => {
  res.send(parsedData)
})

app.get('/projects', (req: Request, res: Response) => {})
const PORT: number = parseInt((process.env.PORT || '4000') as string, 10)

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
