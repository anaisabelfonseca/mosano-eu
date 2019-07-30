import { graphql } from 'gatsby'
import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'
import '../styles/joinUs.css'

//This is where the page layout is
export default props => {
  const { data } = props
  const content = data.prismicJoinus.data
  const pageName = content.title.text
  const lang = data.prismicJoinus.lang.split('-')[0]

  const sections = content.body.map(section => {
    if (section.slice_type === 'employee_benefits') {
      const benefitsTitle = section.primary.employee_benefits_title.text
      const items = section.items.map(item => {
        const benefitTitle = item.benefit_title.text
        const benefitImage = item.benefit_image.url
        const benefitDescription = item.benefits_description.text

        if (benefitImage) {
          return (
            <div className="benefit">
              <h3>{benefitTitle}</h3>
              <p>{benefitDescription}</p>
              <img src={benefitImage} alt="benefit"></img>
            </div>
          )
        } else {
          return (
            <div className="benefit">
              <h3>{benefitTitle}</h3>
              <p>{benefitDescription}</p>
            </div>
          )
        }
      })

      return (
        <div className="employee-benefits">
          <h2>{benefitsTitle}</h2>
          <div className="benf">{items}</div>
        </div>
      )
    }
    if (section.slice_type === 'list_offers') {
      const listTitle = section.primary.job_offers_title.text
      const items = section.items.map(item => {
        const offerTitle = item.offer_title.text
        const offerLink = item.offer_link.url
        const offerImg = item.offer_image.url

        if (offerImg) {
          return (
            <div>
              <ul>
                <a href={'/' + lang + offerLink}>
                  <h3>{offerTitle}</h3>
                </a>
              </ul>
              <a href={'/' + lang + offerLink}>
                <img src={offerImg} alt="offer"></img>
              </a>
            </div>
          )
        } else {
          return (
            <div>
              <ul>
                <a href={'/' + lang + offerLink}>
                  <h3>{offerTitle}</h3>
                </a>
              </ul>
            </div>
          )
        }
      })

      return (
        <div className="list-offers">
          <h2>{listTitle}</h2>
          <div>
            <div className="offers">{items}</div>
          </div>
        </div>
      )
    }

    return null
  })

  return (
    <div>
      <Layout {...props}>
        <div className="joinUs-content">
          <h1>{pageName}</h1>
          <div className="secs">{sections}</div>
        </div>
      </Layout>
      <Footer />
    </div>
  )
}

//This is the query that retrieves all the join us page's information
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
              benefit_image {
                url
              }
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
              offer_image {
                url
              }
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
      lang
    }
  }
`
