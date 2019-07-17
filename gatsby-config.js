/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'mosano-eu', // (REQUIRED, replace with your own)
        accessToken:
          'MC5YUzlRbkJFQUFDUUFOLWdH.Bw_vv70t77-977-977-977-9f--_ve-_vWrvv70aTiXvv70877-977-9DWsCLe-_vXnvv71Mau-_ve-_vW4', // (optional API access token)
        pages: [
          {
            // (optional, builds pages dynamically)
            type: 'Article', // TypeName from prismic
            match: '/article/:uid', // Pages will be generated under this pattern
            path: '/article', // Placeholder page for unpublished documents
          },
        ],
      },
    },
  ],
}
