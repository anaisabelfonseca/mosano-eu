import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'

export default props => {
  const { data } = props
  const content = data.prismicWho.data
  const pageName = content.title.text

  console.log(content)

  const sections = content.body.map(section => {
    if (section.slice_type === 'values') {
      const valuesTitle = section.primary.values_title.text
      const items = section.items.map(item => {
        const valuetitle = item.value_title.text
        // LATER ADD IMAGE!!!
        // const techImage = item.tech_image.url
        const valueDescription = item.description.text

        return (
          <div>
            <h3>{valuetitle}</h3>
            <p>{valueDescription}</p>
          </div>
        )
      })

      return (
        <div className="values">
          <h2>{valuesTitle}</h2>
          <div>
            <p>{items}</p>
          </div>
        </div>
      )
    }

    if (section.slice_type === 'team') {
      const teamsTitle = section.primary.team_title.text
      const items = section.items.map(item => {
        const personName = item.person_name.text
        // LATER ADD IMAGE!!!
        // const servImage = item.service_image.url

        return (
          <div>
            <h3>{teamsTitle}</h3>
            <p>{personName}</p>
          </div>
        )
      })

      return (
        <div className="team">
          <h2>{teamsTitle}</h2>
          <div>{items}</div>
        </div>
      )
    }

    return null
  })

  return (
    <div>
      <Layout {...props}>
        <div>
          <h1>{pageName}</h1>
          {sections}
        </div>
      </Layout>
      <Footer />
    </div>
  )

  return null
}

export const pageQuery = graphql`
  query($lang: String!) {
    prismicWho(lang: { eq: $lang }) {
      data {
        title {
          text
        }
        body {
          ... on PrismicWhoBodyTeam {
            slice_type
            primary {
              team_title {
                text
              }
            }
            items {
              person_name {
                text
              }
            }
          }
          ... on PrismicWhoBodyValues {
            slice_type
            primary {
              values_title {
                text
              }
            }
            items {
              description {
                text
              }

              value_title {
                text
              }
            }
          }
        }
      }
    }
  }
`
