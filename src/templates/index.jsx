import { css } from '@emotion/core'
import { graphql } from 'gatsby'
import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'

const container = css`
  margin: 0 auto;
  padding: 4rem 2rem 8rem 2rem;
  max-width: 600px;
  color: #333333;
`

//This is where the page layout is
export default props => {
  const { data } = props
  const pageTitle = data.prismicHomepage.data.title.text
  const leftImage = data.prismicHomepage.data.left_image.url
  const rightImage = data.prismicHomepage.data.right_image.url

  return (
    <div>
      <Layout {...props}>
        <div css={container} className="Homepage">
          <h1>{pageTitle}</h1>
          <div className="images">
            <img src={leftImage} alt="Left"></img>
            <img src={rightImage} alt="Right"></img>
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  )
}

//This is the query that retrieves all the homepage's information
export const pageQuery = graphql`
  query($lang: String!) {
    prismicHomepage(lang: { eq: $lang }) {
      data {
        left_image {
          url
        }
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
