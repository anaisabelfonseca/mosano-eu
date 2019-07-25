import { graphql } from 'gatsby'
import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'

// const container = css``
export default props => {
  const { data } = props
  const content = data.prismicJoinus.data
  const pageName = content.title.text

  const sections = content.body.map(section => {
    if (section.slice_type === 'employee_benefits') {
      const benefitsTitle = section.primary.employee_benefits_title.text
      const items = section.items.map(item => {
        const benefitTitle = item.benefit_title.text
        // LATER ADD IMAGE!!!
        // const techImage = item.tech_image.url
        const benefitDescription = item.benefits_description.text

        return (
          <div key={item.benefit_title.text}>
            <h3>{benefitTitle}</h3>
            <p>{benefitDescription}</p>
          </div>
        )
      })

      return (
        <div key={benefitsTitle} className="employeee-benefits">
          <h2>{benefitsTitle}</h2>
          <div>
            <div>{items}</div>
          </div>
        </div>
      )
    }
    if (section.slice_type === 'list_offers') {
      const listTitle = section.primary.job_offers_title.text
      const items = section.items.map(item => {
        const offerTitle = item.offer_title.text
        const offerLink = item.offer_link.url

        return (
          <div key={offerTitle}>
            <ul>
              <a href={'/en' + offerLink}>{offerTitle}</a>
            </ul>
          </div>
        )
      })

      return (
        <div key={listTitle} className="list-offers">
          <h2>{listTitle}</h2>
          <div>
            <div>{items}</div>
          </div>
        </div>
      )
    }

    return null
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
  query($lang: String!) {
    prismicJoinus(lang: { eq: $lang }) {
      data {
        title {
          text
        }
        body {
          ... on PrismicJoinusBodyEmployeeBenefits {
            slice_type
            primary {
              employee_benefits_title {
                text
              }
            }
            items {
              benefit_title {
                text
              }
              benefits_description {
                text
              }
            }
          }
          ... on PrismicJoinusBodyListOffers {
            slice_type
            primary {
              job_offers_title {
                text
              }
            }
            items {
              offer_title {
                text
              }
              offer_link {
                url
              }
            }
          }
        }
      }
    }
  }
`
