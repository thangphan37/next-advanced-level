import {useRouter} from 'next/router'

function Post() {
  const router = useRouter()
  console.log('router.query', router.query)

  return <div>Post</div>
}

export default Post