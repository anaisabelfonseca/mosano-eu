const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-job-offer-jsx": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/templates/jobOffer.jsx"))),
  "component---src-templates-case-study-jsx": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/templates/caseStudy.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/.cache/dev-404-page.js"))),
  "component---src-pages-contact-en-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/pages/contact.en.js"))),
  "component---src-pages-contact-pt-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/pages/contact.pt.js"))),
  "component---src-pages-how-en-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/pages/how.en.js"))),
  "component---src-pages-how-pt-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/pages/how.pt.js"))),
  "component---src-pages-index-en-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/pages/index.en.js"))),
  "component---src-pages-index-pt-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/pages/index.pt.js"))),
  "component---src-pages-join-us-en-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/pages/joinUs.en.js"))),
  "component---src-pages-join-us-pt-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/pages/joinUs.pt.js"))),
  "component---src-pages-what-en-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/pages/what.en.js"))),
  "component---src-pages-what-pt-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/pages/what.pt.js"))),
  "component---src-pages-who-en-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/pages/who.en.js"))),
  "component---src-pages-who-pt-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/pages/who.pt.js")))
}

