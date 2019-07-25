import { graphql } from 'gatsby'
import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'

// const container = css``

//This is where the page layout is
export default props => {
  const { data } = props
  const content = data.prismicCaseStudies.data
  const offerName = content.case_study_title.text
  const jobDesc = content.description.text

  return (
    <div>
      <Layout {...props}>
        <h1>{offerName}</h1>
        <div>
          <p>{jobDesc}</p>
        </div>
      </Layout>
      <Footer />
    </div>
  )
}

//This is the query that retrieves all the contact page's information
export const pageQuery = graphql`
  query($uid: String!, $lang: String!) {
    prismicCaseStudies(uid: { eq: $uid }, lang: { eq: $lang }) {
      data {
        case_study_title {
          text
        }
        description {
          text
        }
        case_study_image {
          url
        }
      }
    }
  }
`
