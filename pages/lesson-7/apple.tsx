import Layout from '../../components/layout'
import SubLayout from '../../components/sub-layout'

export default function Apple() {
  return (
    <p>
      When you hear that a new variety of apple is being launched with a
      multi-million dollar marketing campaign, you might wonder if you were
      listening properly, and whether the product is actually an Apple iPhone.
      But now starting to hit grocery shelves in the US, and then overseas early
      in 2020, is a new American-born apple that its backers are convinced will
      become the new global bestseller - the Cosmic Crisp. "The stars are
      aligning for this apple," says Kathryn Grandy, marketing director of US
      fruit firm Proprietary Variety Management (PVM), the company handling the
      $10m (£7.9m) launch of the new variety.
    </p>
  )
}

Apple.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
