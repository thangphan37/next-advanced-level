import {Header} from './header'
import {Footer} from './footer'
import * as React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    async function fetchFirstUser() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
      const responseJson = await response.json()
      setUser(responseJson)
    }
    fetchFirstUser()
  }, [])

  if (!user) return <div>The page of first user is loading...</div>

  return (
    <div className="flex flex-col max-w-xl mx-auto">
      <Header />
      <main className="my-2">
        <p>{JSON.stringify(user)}</p>
        {children}
      </main>
      <Footer />
    </div>
  )
}
