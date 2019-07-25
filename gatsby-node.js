const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  /* These are queries which get basic information from Prismic about the page, in this case, the page ID,
   lang (in this case pt-pt and en-gb) and the UID. The UID is used in the url path */

   // This query is for the homepage
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

  // This query is for the how page
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

  // This query is for the what page
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

  // This query is for the who page  
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

  // This query is for the contact page  
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

  // This query is for the join us page  
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

/* The next two are a bit different since there can be multiple of them, but they do basically the same */

//It gets the ID, UID and lang of each job offer
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

//It gets the ID, UID and lang of each Case Studies
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

  // Redirects to the jsx template, then used in the createPage function
  const templateHomepage = path.resolve('src/templates/index.jsx')
  const templateHow = path.resolve('src/templates/how.jsx')
  const templateWhat = path.resolve('src/templates/what.jsx')
  const templateWho = path.resolve('src/templates/who.jsx')
  const templateContact = path.resolve('src/templates/contact.jsx')
  const templateJoinUs = path.resolve('src/templates/joinUs.jsx')
  const templateJobOffer = path.resolve('src/templates/jobOffer.jsx')
  const templateCaseStudy = path.resolve('src/templates/caseStudy.jsx')

  /* The following code creates pt-pt and en-gb (in this particular case) for each page
   sending (through context) the template query the language in which we want It to run*/

// INDEX
  index.data.allPrismicHomepage.edges.forEach(edge => {
    if (edge.node.lang.substring(0, 2) === 'en') { //This is where we defined the index page and default language.
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

// HOW
  how.data.allPrismicHow.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.lang.substring(0, 2)}/${edge.node.uid}`,
      component: templateHow,
      context: {
        lang: edge.node.lang,
      },
    })
  })

// WHAT
  what.data.allPrismicWhat.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.lang.substring(0, 2)}/${edge.node.uid}`,
      component: templateWhat,
      context: {
        lang: edge.node.lang,
      },
    })
  })

// WHO  
  who.data.allPrismicWho.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.lang.substring(0, 2)}/${edge.node.uid}`,
      component: templateWho,
      context: {
        lang: edge.node.lang,
      },
    })
  })

// CONTACT  
  contact.data.allPrismicContact.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.lang.substring(0, 2)}/${edge.node.uid}`,
      component: templateContact,
      context: {
        lang: edge.node.lang,
      },
    })
  })

// JOIN US  
  joinUs.data.allPrismicJoinus.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.lang.substring(0, 2)}/${edge.node.uid}`,
      component: templateJoinUs,
      context: {
        lang: edge.node.lang,
      },
    })
  })

  /* These cases are particularly different since there can be multiple pages
  For that same reason, we need to send the page UID to make sure we are getting the correct information
  The UID is the page's indentification */

// JOB OFFERS
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

// CASE STUDIES  
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
