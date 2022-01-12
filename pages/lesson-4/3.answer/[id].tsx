import type {Album} from '../1.answer'

function App({album}: {
  album: Album
}) {
  return <div>
    <p>{album.title}</p>
  </div>
}

export async function getServerSideProps({params}: {
  params: {id: string}
}) {
  const respone = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.id}`)
  const album = await respone.json()

  return {
    props: {
      album
    }
  }

}
export default App
