import React from 'react'

export default () => (
  <div>Hello world!</div>
) /*
import { graphql } from 'gatsby'
import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'

// const container = css``
export default ({ data }) => {
  // if (data.prime) {
  //   const content = data.prime.Contact

  // const information = content.map {

  const address = data.prime.Contact.address
  //   const email =
  // }

  console.log(address)

  return (
    <div>
      <Layout>
        <div>oi</div>
      </Layout>
      <Footer />
    </div>
  )
  // }
  return null
}

export const pageQuery = graphql`
  query {
    prime {
      Contact {
        address
        businessEmail
      }
    }
  }
`
*/
