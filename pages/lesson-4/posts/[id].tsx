type Post = {
  userId: number
  id: number
  title: string
  body: string
}

function Post({post}: {post: Post}) {
  return <pre>{JSON.stringify(post)}</pre>
}

export async function getServerSideProps({
  params,
}: {
  params: {
    id: string
  }
}) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  )
  const post = await res.json()

  return {
    props: {
      post,
    },
  }
}

export default Post