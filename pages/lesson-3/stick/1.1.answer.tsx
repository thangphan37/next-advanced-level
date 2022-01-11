/**
 * This is a free public API: https://jsonplaceholder.typicode.com/posts
 * Requirement:
 * 	- Pre-render posts data of this page.
 * Hint:
 * 	- Using `getStaticProps`
 */

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

 function App({posts}: {
   posts: Array<Post>
 }) {
  return <div>
    <ul>
      {posts.map((p, _) => <li key={p.id}>{p.title}</li>)}
    </ul>
  </div>
}

export async function getStaticProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}
export default App
