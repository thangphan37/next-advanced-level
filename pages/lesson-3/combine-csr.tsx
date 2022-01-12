import * as React from 'react'

type User = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const API_USER = `https://jsonplaceholder.typicode.com/todos`

function CombineCSR({user}: {user: User}) {
  const [state, setState] = React.useState(user)

  async function getNextUserInfo() {
    const res = await fetch(
      `${API_USER}/${state.id + 1}`,
    )
    const newUser = await res.json()

    setState(newUser)
  }

  return (
    <div>
      <section>
        <h2>User Information:</h2>
        <pre>{JSON.stringify(state)}</pre>
      </section>
      <section>
        <h2>Get other users info:</h2>
        <button onClick={getNextUserInfo}>Pull</button>
      </section>
    </div>
  )
}

export default CombineCSR

export async function getStaticProps() {
  const res = await fetch(`${API_USER}/1`)
  const user = await res.json()

  return {
    props: {
      user,
    },
  }
}