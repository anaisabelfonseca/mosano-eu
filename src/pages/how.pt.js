import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'

export default props => {
  const { data } = props
  const content = data.prismicHow.data
  const pageName = content.title.text

  const sections = content.body.map(section => {
    if (section.slice_type === 'technologies') {
      const techsTitle = section.primary.technologies_title.text
      const items = section.items.map(item => {
        const techtitle = item.tech_title.text
        // LATER ADD IMAGE!!!
        // const techImage = item.tech_image.url
        const techDescription = item.tech_description.text

        return (
          <div>
            <h3>{techtitle}</h3>
            <p>{techDescription}</p>
          </div>
        )
      })

      return (
        <div className="technologies">
          <h2>{techsTitle}</h2>
          <div>
            <p>{items}</p>
          </div>
        </div>
      )
    }

    if (section.slice_type === 'services') {
      const servsTitle = section.primary.services_title.text
      const items = section.items.map(item => {
        const servtitle = item.service_title.text
        // LATER ADD IMAGE!!!
        // const servImage = item.service_image.url
        const servDescription = item.service_description.text

        return (
          <div>
            <h3>{servtitle}</h3>
            <p>{servDescription}</p>
          </div>
        )
      })

      return (
        <div className="services">
          <h2>{servsTitle}</h2>
          <div>{items}</div>
        </div>
      )
    }

    if (section.slice_type === 'processes') {
      const procsTitle = section.primary.processes_title.text
      const items = section.items.map(item => {
        const proctitle = item.process_title.text
        // LATER ADD IMAGE!!!
        // const procImage = item.process_image.url
        const procDescription = item.process_description.text

        return (
          <div>
            <h3>{proctitle}</h3>
            <p>{procDescription}</p>
          </div>
        )
      })

      return (
        <div className="processes">
          <h2>{procsTitle}</h2>
          <div>{items}</div>
        </div>
      )
    }

    return null
  })

  return (
    <div>
      <Layout>
        <div>
          <h1>{pageName}</h1>
          {sections}
        </div>
      </Layout>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query {
    prismicHow(lang: { eq: "pt-pt" }) {
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
                localFile {
                  url
                }
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
                localFile {
                  url
                }
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
