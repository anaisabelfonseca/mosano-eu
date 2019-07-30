import { graphql } from 'gatsby'
import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'
import '../styles/what.css'

// const container = css``

//This is where the page layout is
export default props => {
  const { data } = props
  const content = data.prismicWhat.data
  const pageName = content.title.text
  console.log(content.body)

  const sections = content.body.map(section => {
    if (section.slice_type === 'offers_links') {
      const casesTitle = section.primary.case_studies_title.text
      const items = section.items.map(item => {
        const caseTitle = item.case_study_title.text
        const caseDescription = item.description.text
        const caseLink = item.case_link.url
        const caseImg = item.image.url

        if (caseImg) {
          return (
            <div className="block-what">
              <ul>
                <a href={'/en' + caseLink}>{caseTitle}</a>
                <p>{caseDescription}</p>
                <img src={caseImg} alt="Case Study Image"></img>
              </ul>
            </div>
          )
        } else {
          return (
            <div className="block-what">
              <ul>
                <a href={'/en' + caseLink}>{caseTitle}</a>
                <p>{caseDescription}</p>
              </ul>
            </div>
          )
        }
      })

      return (
        <div className="case-studies">
          <h2>{casesTitle}</h2>
          <div className="bigger-what-block">{items}</div>
        </div>
      )
    }

    return null
  })

  return (
    <div>
      <Layout {...props}>
        <div className="what-page">
          <h1>{pageName}</h1>
          <div>{sections}</div>
        </div>
        <Footer />
      </Layout>
    </div>
  )
}

//This is the query that retrieves all the what page's information
export const pageQuery = graphql`
  query($lang: String!) {
    prismicWhat(lang: { eq: $lang }) {
      data {
        title {
          text
        }
        body {
          ... on PrismicWhatBodyOffersLinks {
            slice_type
            primary {
              case_studies_title {
                text
              }
            }

            items {
              case_study_title {
                text
              }
              description {
                text
              }
              case_link {
                url
              }
              image {
                url
              }
            }
          }
        }
      }
    }
  }
`
