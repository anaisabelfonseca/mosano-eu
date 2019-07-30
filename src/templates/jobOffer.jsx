import { graphql } from 'gatsby'
import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'
import '../styles/caseStudy.css'

// const container = css``

//This is where the page layout is
export default props => {
  const { data } = props
  const content = data.prismicJobOffers.data
  const offerName = content.offer_name.text
  const jobDesc = content.job_description.text
  const jobImg = content.job_image.url

  if (jobImg) {
    return (
      <div>
        <div className="general">
          <Layout {...props}>
            <h1>{offerName}</h1>
            <div className="case-study">
              <p>{jobDesc}</p>
              <img src={jobImg} alt="Job Offer"></img>
            </div>
          </Layout>
        </div>
        <Footer />
      </div>
    )
  } else {
    return (
      <div>
        <div className="general">
          <Layout {...props}>
            <h1>{offerName}</h1>
            <div>
              <p>{jobDesc}</p>
            </div>
          </Layout>
        </div>
        <Footer />
      </div>
    )
  }
}

//This is the query that retrieves all the job offer page's information
export const pageQuery = graphql`
  query($uid: String!, $lang: String!) {
    prismicJobOffers(uid: { eq: $uid }, lang: { eq: $lang }) {
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
