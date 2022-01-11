import type {User} from '../[userId]'

function User({user}: {user: User}) {
  return <pre>{JSON.stringify(user)}</pre>
}

export default User

export function getStaticPaths() {
  const paths = Array.from({length: 3}, (_, idx) => ({
    params: {
      userId: `${idx + 1}`,
    },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({
  params,
}: {
  params: {
    userId: string
  }
}) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`,
  )
  const user = await res.json()

  return {
    props: {
      user,
    },
  }
}