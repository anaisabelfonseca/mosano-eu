import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'
import '../styles/how.css'

//This is where the page layout is
export default props => {
  const { data } = props
  const content = data.prismicHow.data
  const pageName = content.title.text

  const sections = content.body.map(section => {
    if (section.slice_type === 'technologies') {
      const techsTitle = section.primary.technologies_title.text
      const items = section.items.map(item => {
        const techtitle = item.tech_title.text
        const techImage = item.tech_image.url
        const techDescription = item.tech_description.text

        if (techImage) {
          return (
            <div className="tech">
              <h3>{techtitle}</h3>
              <p>{techDescription}</p>
              <div className="tech-img">
                <img src={techImage} alt="Tech"></img>
              </div>
            </div>
          )
        } else {
          return (
            <div className="tech">
              <h3>{techtitle}</h3>
              <p>{techDescription}</p>
            </div>
          )
        }
      })

      return (
        <div className="tech">
          <h2>{techsTitle}</h2>
          <div>{items}</div>
        </div>
      )
    }

    if (section.slice_type === 'services') {
      const servsTitle = section.primary.services_title.text
      const items = section.items.map(item => {
        const servtitle = item.service_title.text
        const servImage = item.service_image.url
        const servDescription = item.service_description.text

        if (servImage) {
          return (
            <div className="service">
              <h3>{servtitle}</h3>
              <p>{servDescription}</p>
              <img src={servImage} alt="Service"></img>
            </div>
          )
        } else {
          return (
            <div className="service">
              <h3>{servtitle}</h3>
              <p>{servDescription}</p>
            </div>
          )
        }
      })

      return (
        <div className="service">
          <h2>{servsTitle}</h2>
          <div>{items}</div>
        </div>
      )
    }

    if (section.slice_type === 'processes') {
      const procsTitle = section.primary.processes_title.text
      const items = section.items.map(item => {
        const proctitle = item.process_title.text
        const procImage = item.process_image.url
        const procDescription = item.process_description.text

        if (procImage) {
          return (
            <div className="process">
              <h3>{proctitle}</h3>
              <p>{procDescription}</p>
              <img src={procImage} alt="Process"></img>
            </div>
          )
        } else {
          return (
            <div className="process">
              <h3>{proctitle}</h3>
              <p>{procDescription}</p>
            </div>
          )
        }
      })
      return (
        <div className="process">
          <div>
            <h2>{procsTitle}</h2>
            {items}
          </div>
        </div>
      )
    }
  })

  return (
    <div>
      <Layout {...props}>
        <div className="how-page">
          <div>
            <h1>{pageName}</h1>
            <div className="block">{sections}</div>
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  )
}

//This is the query that retrieves all the how page's information
export const pageQuery = graphql`
  query($lang: String!) {
    prismicHow(lang: { eq: $lang }) {
      data {
        title {
          text
        }
        body {
          ... on PrismicHowBodyTechnologies {
            slice_type
            primary {
              technologies_title {
                text
              }
            }
            items {
              tech_title {
                text
              }
              tech_image {
                url
              }
              tech_description {
                text
              }
            }
            __typename
          }
          ... on PrismicHowBodyServices {
            slice_type
            primary {
              services_title {
                text
              }
            }
            items {
              service_title {
                text
              }

              service_image {
                url
              }
              service_description {
                text
              }
            }
          }
          ... on PrismicHowBodyProcesses {
            slice_type
            primary {
              processes_title {
                text
              }
            }
            items {
              process_title {
                text
              }
              process_image {
                url
              }
              process_description {
                text
              }
            }
          }
        }
      }
    }
  }
`
