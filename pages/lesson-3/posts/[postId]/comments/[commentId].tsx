import {useRouter} from 'next/router'

function Comment() {
  const router = useRouter()
  console.log('router.query', router.query)

  return <div>Comment</div>
}

export default Comment