import { useTodosIds } from '../services/queries'

export default function Todo() {
  // Queries
  const query = useTodosIds()

  if (query.isLoading) return <span>Loading...</span>
  if (query.isError)
    return (
      <span>
        {query.error instanceof Error ? query.error.message : 'Unknown error'}
      </span>
    )
  const todos = Array.isArray(query.data) ? query.data : []
  return (
    <ul>
      {todos.map((id) => (
        <li key={id}>{id}</li>
      ))}
    </ul>
  )
}
