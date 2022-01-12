import {NextApiRequest} from 'next'

type User = {
  name: string
  age: number
}

function MyPage({user}: {user: User}) {
  return (
    <section>
      <h2>Mypage</h2>
      <p>{user.name}</p>
      <small>{user.age}</small>
    </section>
  )
}

export default MyPage

export async function getServerSideProps({req}: {req: NextApiRequest}) {
  if (req.cookies !== undefined) {
    if (req.cookies?.token === 'MY_ACCESS_TOKEN') {
      return {
        props: {
          user: {
            name: 'Mr.Henry',
            age: 25,
          },
        },
      }
    }
  }

  return {
    redirect: {
      destination: '/lesson-4/login',
      permanent: false,
    },
  }
}