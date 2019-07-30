import { graphql } from 'gatsby'
import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'
import '../styles/caseStudy.css'

//This is where the page layout is
export default props => {
  const { data } = props
  const content = data.prismicCaseStudies.data
  const offerName = content.case_study_title.text
  const jobDesc = content.description.text
  const caseImg = content.case_study_image.url

  if (caseImg) {
    return (
      <div>
        <div className="general">
          <Layout {...props}>
            <h1>{offerName}</h1>
            <div className="case-study">
              <p>{jobDesc}</p>
              <img src={caseImg} alt="Case Study"></img>
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
            <div className="case-study">
              <p>{jobDesc}</p>
            </div>
          </Layout>
          <Footer />
        </div>
        <Footer />
      </div>
    )
  }
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
