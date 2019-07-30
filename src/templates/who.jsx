import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'
import '../styles/who.css'

//This is where the page layout is
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
        const valueDescription = item.description.text

        return (
          <div className="each-value">
            <h4>{valuetitle}</h4>
            <p>{valueDescription}</p>
          </div>
        )
      })

      return (
        <div className="values">
          <h2>{valuesTitle}</h2>
          <div className="each-value-items">{items}</div>
        </div>
      )
    }

    if (section.slice_type === 'team') {
      const teamsTitle = section.primary.team_title.text
      const items = section.items.map(item => {
        const personName = item.person_name.text
        const personImage = item.person_picture.url

        if (personImage) {
          return (
            <div className="person">
              <img
                src={personImage}
                alt="Team member"
                class="hover-stuff"
              ></img>
              <div className="name">
                <div class="hover-text">{personName}</div>
              </div>
            </div>
          )
        } else {
          return (
            <div className="person">
              <h3>{teamsTitle}</h3>
              <div className="name">
                <div class="hover-stuff">{personName}</div>
              </div>
            </div>
          )
        }
      })

      return (
        <div className="team">
          <h2>{teamsTitle}</h2>
          <div className="overall-team">{items}</div>
        </div>
      )
    }

    return null
  })

  return (
    <div>
      <Layout {...props}>
        <div className="who-page">
          <h1>{pageName}</h1>
          <div className="who-content">{sections}</div>
        </div>
      </Layout>
      <Footer />
    </div>
  )
}

//This is the query that retrieves all the who page's information
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
              person_picture {
                url
              }
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
