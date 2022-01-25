import * as React from 'react'
import {useRouter} from 'next/router'
import type {Post} from '../posts.answer'

export default function Post() {
  const [post, setPost] = React.useState<Post | null>(null)
  const router = useRouter()

  React.useEffect(() => {
    // in case we reload page
    if (!router.query.postId) return

    async function fetchPost() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${router.query.postId}`,
      )
      const responseJson = await response.json()
      setPost(responseJson)
    }

    fetchPost()
  }, [router.query.postId])

  if (!post) return <p>Post is loading...</p>

  return (
    <div>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </div>
  )
}
