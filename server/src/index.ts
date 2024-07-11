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

app.get('/todos', (req: Request, res: Response) => {
  res.json(parsedData.todos)
})

app.get('/todo', (req: Request, res: Response) => {
  const id = req.query.id as string

  if (!id) {
    return res.status(400).json({ error: 'ID is required' })
  }

  const todo = parsedData.todos.find((el) => el.id.toString() === id)

  if (todo) {
    res.json(todo)
  } else {
    res.status(404).json({ error: 'Todo not found' })
  }
})

app.get('/', (req: Request, res: Response) => {
  res.send(parsedData)
})

const PORT: number = parseInt((process.env.PORT || '4000') as string, 10)

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
