const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const index = await graphql(`
    query {
      allPrismicHomepage {
        edges {
          node {
            id
            lang
          }
        }
      }
    }
  `)

  const how = await graphql(`
    query {
      allPrismicHow {
        edges {
          node {
            id
            lang
            uid
          }
        }
      }
    }
  `)

  const what = await graphql(`
    query {
      allPrismicWhat {
        edges {
          node {
            id
            lang
            uid
          }
        }
      }
    }
  `)

  const who = await graphql(`
    query {
      allPrismicWho {
        edges {
          node {
            id
            lang
            uid
          }
        }
      }
    }
  `)

  const contact = await graphql(`
    query {
      allPrismicContact {
        edges {
          node {
            id
            lang
            uid
          }
        }
      }
    }
  `)

  const joinUs = await graphql(`
    query {
      allPrismicJoinus {
        edges {
          node {
            uid
            lang
            id
          }
        }
      }
    }
  `)

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

  const templateHomepage = path.resolve('src/templates/index.jsx')
  const templateHow = path.resolve('src/templates/how.jsx')
  const templateWhat = path.resolve('src/templates/what.jsx')
  const templateWho = path.resolve('src/templates/who.jsx')
  const templateContact = path.resolve('src/templates/contact.jsx')
  const templateJoinUs = path.resolve('src/templates/joinUs.jsx')
  const templateJobOffer = path.resolve('src/templates/jobOffer.jsx')
  const templateCaseStudy = path.resolve('src/templates/caseStudy.jsx')

  index.data.allPrismicHomepage.edges.forEach(edge => {
    if (edge.node.lang.substring(0, 2) === 'en') {
      createPage({
        path: '/',
        component: templateHomepage,
        context: {
          lang: edge.node.lang,
        },
      })
    }
    createPage({
      path: `/${edge.node.lang.substring(0, 2)}`,
      component: templateHomepage,
      context: {
        lang: edge.node.lang,
      },
    })
  })

  how.data.allPrismicHow.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.lang.substring(0, 2)}/${edge.node.uid}`,
      component: templateHow,
      context: {
        lang: edge.node.lang,
      },
    })
  })

  what.data.allPrismicWhat.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.lang.substring(0, 2)}/${edge.node.uid}`,
      component: templateWhat,
      context: {
        lang: edge.node.lang,
      },
    })
  })

  who.data.allPrismicWho.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.lang.substring(0, 2)}/${edge.node.uid}`,
      component: templateWho,
      context: {
        lang: edge.node.lang,
      },
    })
  })

  contact.data.allPrismicContact.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.lang.substring(0, 2)}/${edge.node.uid}`,
      component: templateContact,
      context: {
        lang: edge.node.lang,
      },
    })
  })

  joinUs.data.allPrismicJoinus.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.lang.substring(0, 2)}/${edge.node.uid}`,
      component: templateJoinUs,
      context: {
        lang: edge.node.lang,
      },
    })
  })

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
