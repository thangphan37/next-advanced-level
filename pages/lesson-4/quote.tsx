type Quote = {
  _id: string
  tags: Array<string>
  content: string
  author: string
  authorSlug: string
  length: number
  dateAdded: string
  dateModified: string
}

function Quote({quote}: {quote: Quote}) {
  return (
    <div>
      <blockquote>{quote.content}</blockquote>
      <small style={{marginLeft: '40px'}}>{quote.dateAdded}</small>
    </div>
  )
}

export default Quote

export async function getServerSideProps() {
  const res = await fetch(`https://api.quotable.io/random`)
  const quote = await res.json()

  return {
    props: {
      quote,
    },
  }
}