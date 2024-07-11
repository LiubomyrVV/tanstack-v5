import { Project } from './Project'
import { Product } from './Product'
import { Todo } from './Todo'

export interface Database {
  todos: Todo[]
  projects: Project[]
  products: Product[]
}
