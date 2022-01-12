type Joke = {
  title: string
  content: string
}

function Joke({joke}: {joke: Joke}) {
  return (
    <div>
      <h1>{joke.title}</h1>
      <p>{joke.content}</p>
    </div>
  )
}

export function getStaticPaths() {
  const paths = [
    {
      params: {id: '1'},
    },
    {
      params: {id: '2'},
    },
  ]
  return {
    paths,
    fallback: false,
  }
}

export function getStaticProps({
  params,
}: {
  params: {
    id: string
  }
}) {
  const joke = {
    title: params.id,
    content: `Content of ${params.id}`,
  }

  return {
    props: {
      joke,
    },
  }
}

export default Joke