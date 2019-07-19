const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const jobOffers = await graphql(`
    {
      allPrismicJobOffers {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)
  const caseStudies = await graphql(`
    {
      allPrismicCaseStudies {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  const templateJobOffer = path.resolve('src/templates/jobOffer.jsx')
  const templateCaseStudy = path.resolve('src/templates/caseStudy.jsx')

  jobOffers.data.allPrismicJobOffers.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: templateJobOffer,
      context: {
        uid: edge.node.uid,
      },
    })
  })

  caseStudies.data.allPrismicCaseStudies.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: templateCaseStudy,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
