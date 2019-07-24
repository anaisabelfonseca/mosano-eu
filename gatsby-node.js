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
            lang
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
            id
            uid
            lang
          }
        }
      }
    }
  `)

  const templateJobOffer = path.resolve('src/templates/jobOffer.jsx')
  const templateCaseStudy = path.resolve('src/templates/caseStudy.jsx')

  console.log(JSON.stringify(jobOffers.data.allPrismicJobOffers))
  jobOffers.data.allPrismicJobOffers.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.lang.substring(0, 2)}/${edge.node.uid}`,
      component: templateJobOffer,
      context: {
        uid: edge.node.uid,
        lang: edge.node.lang,
      },
    })
  })

  caseStudies.data.allPrismicCaseStudies.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.lang.substring(0, 2)}/${edge.node.uid}`,
      component: templateCaseStudy,
      context: {
        uid: edge.node.uid,
        lang: edge.node.lang,
      },
    })
  })
}
