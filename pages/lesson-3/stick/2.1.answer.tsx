import type {Post} from './1.1.answer'
import * as React from 'react'

function App({firstPost}: {firstPost: Post}) {
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
    <p>{firstPost.title}</p>
    {posts.map((p: Post, _idx) => <p key={p.id}>{p.title}</p>)}
  </div>
}


export async function getStaticProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
  const firstPost = await response.json()

  return {
    props: {
      firstPost
    }
  }
}
export default App
