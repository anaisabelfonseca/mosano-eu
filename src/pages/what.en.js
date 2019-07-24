import { graphql } from 'gatsby'
import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'

// const container = css``
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

        return (
          <div>
            <ul>
              <a href={'/en' + caseLink}>{caseTitle}</a>
              <p>{caseDescription}</p>
            </ul>
          </div>
        )
      })

      return (
        <div className="case-studies">
          <h2>{casesTitle}</h2>
          <div>
            <p>{items}</p>
          </div>
        </div>
      )
    }
  })

  return (
    <div>
      <Layout {...props}>
        <h1>{pageName}</h1>
        <div>{sections}</div>
      </Layout>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query {
    prismicWhat(lang: { eq: "en-gb" }) {
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
            }
          }
        }
      }
    }
  }
`
