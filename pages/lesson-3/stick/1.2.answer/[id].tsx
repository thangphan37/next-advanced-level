import type {Post} from '../1.1.answer'

function App({post} : {
  post: Post
}) {
  return <div>
    <p>{post.title}</p>
  </div>
}

export async function getStaticPaths() {
  const paths = [1,2,3].map((p: number) => ({
    params: {
      id: String(p)
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}: {params: {id: string}}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await response.json()

  return {
    props: {
      post
    }
  }
}
export default App
