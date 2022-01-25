import * as React from 'react'
import {useRouter} from 'next/router'
import type {User} from './users'

export default function User() {
  const [user, setUser] = React.useState<User | null>(null)
  const router = useRouter()

  React.useEffect(() => {
    // in case we reload page
    if (!router.query.userId) return

    async function fetchUser() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${router.query.userId}`,
      )
      const responseJson = await response.json()
      setUser(responseJson)
    }

    fetchUser()
  }, [router.query.userId])

  if (!user) return <p>User is loading...</p>

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}
