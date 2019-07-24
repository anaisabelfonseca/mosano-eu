import { graphql } from 'gatsby'
import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'

export default props => {
  const { data, lang } = props
  const pageTitle = data.prismicHomepage.data.title.text

  // let language = 'en-gb'
  // if (window.location.hash === '#pt-pt') {
  //   language = 'pt-pt'
  // }

  return (
    <div className="Homepage">
      <Layout {...props}>
        <h1>{pageTitle}</h1>
      </Layout>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query {
    prismicHomepage(lang: { eq: "pt-pt" }) {
      data {
        title {
          text
        }
      }
    }
  }
`
