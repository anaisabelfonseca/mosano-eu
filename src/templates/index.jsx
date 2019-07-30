import { graphql } from 'gatsby'
import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'
import '../styles/index.css'

//This is where the page layout is
export default props => {
  const { data } = props
  const pageTitle = data.prismicHomepage.data.title.text
  const rightImage = data.prismicHomepage.data.right_image.url

  if (rightImage) {
    return (
      <div>
        <Layout {...props}>
          <div
            style={{
              backgroundImage: `url(${rightImage})`,
            }}
            className="container"
          >
            <h1 className="title">{pageTitle}</h1>
          </div>
        </Layout>
        <Footer />
      </div>
    )
  } else {
    return (
      <div className="viewport">
        <Layout {...props}>
          <div className="homepage">
            <h1>{pageTitle}</h1>
          </div>
        </Layout>
        <Footer />
      </div>
    )
  }
}

//This is the query that retrieves all the homepage's information
export const pageQuery = graphql`
  query($lang: String!) {
    prismicHomepage(lang: { eq: $lang }) {
      data {
        right_image {
          url
        }
        title {
          text
        }
      }
    }
  }
`
