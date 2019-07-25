const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-index-jsx": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/templates/index.jsx"))),
  "component---src-templates-how-jsx": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/templates/how.jsx"))),
  "component---src-templates-what-jsx": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/templates/what.jsx"))),
  "component---src-templates-who-jsx": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/templates/who.jsx"))),
  "component---src-templates-contact-jsx": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/templates/contact.jsx"))),
  "component---src-templates-join-us-jsx": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/templates/joinUs.jsx"))),
  "component---src-templates-job-offer-jsx": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/templates/jobOffer.jsx"))),
  "component---src-templates-case-study-jsx": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/templates/caseStudy.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/.cache/dev-404-page.js")))
}

