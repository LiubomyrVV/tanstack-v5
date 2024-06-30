import { Project } from './Project'
import { Product } from './Product'
import { Todo } from './ToDo'

export interface Database {
  todos: Todo[]
  projects: Project[]
  products: Product[]
}
