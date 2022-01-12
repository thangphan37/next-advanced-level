export type Album = {
  userId: number
  id: number
  title: string
}

function Albums({albums}: {
  albums: Array<Album>
}) {
  return <div>
    <ul>
      {albums.map((album, _idx) => <li key={album.id}>{album.title}</li>)}
    </ul>
  </div>
}


export async function getServerSideProps() {
  const respone = await fetch(`https://jsonplaceholder.typicode.com/albums`)
  const albums = await respone.json()

  return {
    props: {
      albums
    }
  }

}
export default Albums
