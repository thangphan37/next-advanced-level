import * as React from 'react'

function Login() {
  const [mounted, setMounted] = React.useState(false)
  const [user] = React.useState(() => {
    if (typeof window === 'undefined') {
      return null
    }

    const valueInLocalStorage = window.localStorage.getItem('user')

    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage)
    }

    return 'No user data in localStorage!'
  })

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <pre>{JSON.stringify(user)}</pre>
}

export default Login
