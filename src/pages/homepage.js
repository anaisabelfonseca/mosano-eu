/*import { graphql } from 'gatsby'

// const htmlToReactParser = new Parser()

export default prop => {
  const { prime } = prop
  const title = prime.HomePage.howPage.howTitle

  return JSON.stringify(title)
}

export const pageQuery = graphql`
  query {
    prime {
      HomePage {
        homepageTitle
        howPage {
          howTitle
          usedTechnologies {
            ... on Prime_Technologies {
              title
              usedTechnology {
                ... on Prime_Technology {
                  technologyName
                  technologyImage
                  technologyDescription
                }
              }
            }
          }
          usedServices {
            ... on Prime_Services {
              serviceTitle
              usedServices {
                ... on Prime_Service {
                  serviceTitle
                  serviceDescription
                }
              }
            }
          }
          usedProcesses {
            ... on Prime_Processes {
              processesTitle
              usedProcess {
                ... on Prime_Process {
                  processTitle
                  processDescription
                }
              }
            }
          }
        }
      }
    }
  }
`
*/
