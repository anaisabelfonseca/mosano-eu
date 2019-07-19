import { graphql } from 'gatsby'
import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'

// const container = css``
export default props => {
  const { data } = props
  const content = data.prismicJobOffers.data
  const offerName = content.offer_name.text
  const jobDesc = content.job_description.text
  const jobImg = content.job_image.url

  return (
    <div>
      <Layout>
        <h1>{offerName}</h1>
        <div>
          <p>{jobDesc}</p>
          <img src={jobImg}></img>
        </div>
      </Layout>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query($uid: String!) {
    prismicJobOffers(uid: { eq: $uid }) {
      data {
        job_description {
          text
        }
        job_image {
          url
        }
        offer_name {
          text
        }
      }
    }
  }
`
