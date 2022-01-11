import type {Post} from './1.1.answer'
import * as React from 'react'

function App({firstPost, preview, previewData}: {
  firstPost: Post
} & PreviewProps) {
  const [posts, setPosts] = React.useState<Array<Post>>([])
   React.useEffect(() => {
    async function fetchRemainingPosts() {
     const responses = await Promise.all([1, 2].map(postId => fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`))) 
     const posts = await Promise.all(responses.map(response => response.json())) 
     setPosts(posts)
    } 

    fetchRemainingPosts()
   }, [])
  return <div>
    {preview ? <p>Preview mode enabled.</p> : null}
    {previewData ? previewData.map((p: Post, _idx) => <p key={p.id}>{p.title} (preview)</p>): null }
    <p>{firstPost.title}</p>
    {posts.map((p: Post, _idx) => <p key={p.id}>{p.title}</p>)}
  </div>
}

type PreviewProps = {
  preview: boolean
  previewData: Array<Post>
}

export async function getStaticProps({preview, previewData}: PreviewProps) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
  const firstPost = await response.json()

  return {
    props: {
      firstPost,
      preview: preview ?? null,
      previewData: previewData ?? null,
    }
  }
}
export default App
