import * as React from 'react'
import Router from 'next/router'

function Login() {
  function loginForMe() {
    window.localStorage.setItem(
      'user',
      JSON.stringify({
        name: 'me',
        age: '18',
      }),
    )

    Router.push('/lesson-2/user')
  }

  return <button onClick={loginForMe}>Login</button>
}

export default Login