/*import { graphql } from 'gatsby'

// const htmlToReactParser = new Parser()

export default ({ data: { prime } }) => {
  const title = prime.HomePage.howPage.howTitle
  const content = prime.HomePage.howPage
  const usedTechnologies = content.usedTechnologies
  const usedServices = content.usedServices
  const usedProcesses = content.usedProcesses

  // const technologySection = usedTechnologies.map(section => {
  //   const sliceTitle = section.title
  //   const items = section.usedTechnology.map(
  //     htmlToReactParser.parse(technologyName),
  //     htmlToReactParser.parse(technologyImage),
  //     htmlToReactParser.parse(technologyDescription)
  //   )
  // })

  console.log(usedTechnologies.Prime_Technologies.title)

  // const serviceSection = usedServices.map(section => {
  //   const sliceTitle = section.serviceTitle
  //   const items = section.usedServices.map(
  //     htmlToReactParser.parse(technologyName),
  //     htmlToReactParser.parse(technologyImage),
  //     htmlToReactParser.parse(technologyDescription)
  //   )
  // })

  return null
}

export const pageQuery = graphql`
  query {
    prime {
      HomePage {
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
