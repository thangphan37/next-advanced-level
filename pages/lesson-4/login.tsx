import Router from 'next/router'

function Login() {
  async function handleFormSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      await fetch('/api/lesson-4/login')
      Router.push('/lesson-4/my-page')
    } catch (error) {
      console.log(`LoginRequest._error:`, error)
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <button type="submit">Login</button>
    </form>
  )
}

export default Login