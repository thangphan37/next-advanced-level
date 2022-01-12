function Query({query}: {query: Record<string, unknown>}) {
  return (
    <section>
      <h2>Query</h2>
      <pre>{JSON.stringify(query)}</pre>
    </section>
  )
}

export default Query

export async function getServerSideProps({
  query,
}: {
  query: Record<string, unknown>
}) {
  return {
    props: {
      query,
    },
  }
}