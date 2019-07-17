/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-graphql-universal`,
      options: {
        typeName: `Prime`,
        fieldName: `prime`,
        url: `https://mosano-eu.herokuapp.com/graphql`,
      },
    },
  ],
}
