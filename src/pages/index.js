import { graphql } from 'gatsby'
import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'

export default props => {
  const { data } = props
  const pageTitle = data.prismicHomepage.data.title.text

  return (
    <div className="Homepage">
      <Layout>
        <h1>{pageTitle}</h1>
      </Layout>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query {
    prismicHomepage {
      data {
        title {
          text
        }
      }
    }
  }
`
