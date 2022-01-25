import * as React from 'react'
import Router from 'next/router'

export type User = {
  id: number
  name: string
  username: string
  email: string
}

export default function Users() {
  const [users, setUsers] = React.useState<Array<User> | null>(null)

  React.useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
      const responseJson = await response.json()
      setUsers(
        responseJson.map((r: any) => ({
          id: r.id,
          name: r.name,
          username: r.username,
          email: r.email,
        })),
      )
    }

    fetchUsers()
  }, [])

  function moveOnToUser(user: User) {
    Router.push(`/lesson-7/router/${user.id}`)
  }

  function prefetchUser(user: User) {
    Router.prefetch(`/lesson-7/router/${user.id}`)
  }

  return (
    <ul>
      {users?.map(user => (
        <li
          onClick={() => moveOnToUser(user)}
          onMouseOver={() => prefetchUser(user)}
          key={`users-${user.id}`}
          className="text-lg cursor-pointer text-cyan-700"
        >
          {user.name}
        </li>
      ))}
    </ul>
  )
}
