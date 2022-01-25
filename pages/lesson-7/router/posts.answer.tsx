import * as React from 'react'
import Router from 'next/router'

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export default function Posts() {
  const [posts, setPosts] = React.useState<Array<Post> | null>(null)

  React.useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      const responseJson = await response.json()
      setPosts(responseJson)
    }

    fetchPosts()
  }, [])

  function moveOnToPost(post: Post) {
    Router.push(`/lesson-7/router/posts/${post.id}`)
  }

  function prefetchPost(post: Post) {
    Router.prefetch(`/lesson-7/router/posts/${post.id}`)
  }

  return (
    <ul>
      {posts?.map(post => (
        <li
          onClick={() => moveOnToPost(post)}
          onMouseOver={() => prefetchPost(post)}
          key={`posts-${post.id}`}
          className="text-lg cursor-pointer text-cyan-700"
        >
          {post.title}
        </li>
      ))}
    </ul>
  )
}
