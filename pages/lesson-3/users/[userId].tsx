export type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

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
    fallback: false,
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