function Query({query}: {query: Record<string, unknown>}) {
  return <div>
    <p>This is your query: {JSON.stringify(query)}</p>
  </div>
}

export async function getServerSideProps({
  query,
}: {
  query: Record<string, unknown>
}) {
  return {
    props: {
      query
    }
  }
}

export default Query
