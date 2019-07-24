import { graphql } from 'gatsby'
import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'

// const container = css``
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
