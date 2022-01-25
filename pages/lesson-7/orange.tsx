import Layout from '../../components/layout'
import SubLayout from '../../components/sub-layout'

export default function Orange() {
  return (
    <p>
      Americans love oranges and orange juice, but they may soon see their love
      tested by the rising cost of citrus. Growers in Florida and the U.S.
      Department of Agriculture warned of a particularly low crop yield this
      year caused by inclement weather and a disease targeting oranges. The
      situation has grown so bad, in fact, that some worry it could be one of
      the worst seasons since World War II. The situation is a tough one for
      Florida farmers. After taking a nosedive for more than a decade, demand
      for orange juice rose over the past two years. However, the estimated
      supply of oranges for processing is at or close to a record low.
    </p>
  )
}

Orange.getLayout = function getLayout(page:  React.ReactElement) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
