import {Header} from './header'
import {Footer} from './footer'
import * as React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`/api/lesson-7/user`)
      const responseJson = await response.json()
      setUser(responseJson)
    }
    fetchUser()
  }, [])

  if (!user) return <div>The page is loading...</div>

  return (
    <div className="flex flex-col max-w-xl mx-auto">
      <Header />
      <main className="my-2">{children}</main>
      <Footer />
    </div>
  )
}
