const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/.cache/dev-404-page.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/pages/contact.js"))),
  "component---src-pages-homepage-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/pages/homepage.js"))),
  "component---src-pages-how-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/pages/how.js"))),
  "component---src-pages-join-us-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/pages/joinUs.js"))),
  "component---src-pages-what-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/pages/what.js"))),
  "component---src-pages-who-js": hot(preferDefault(require("/Users/afonseca/Documents/coding/mosano-eu/src/pages/who.js")))
}

