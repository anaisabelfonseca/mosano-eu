var plugins = [{
      plugin: require('/Users/afonseca/Documents/coding/mosano-eu/node_modules/gatsby-source-prismic-graphql/gatsby-ssr'),
      options: {"plugins":[],"repositoryName":"mosano-eu","accessToken":"MC5YUzlRbkJFQUFDUUFOLWdH.Bw_vv70t77-977-977-977-9f--_ve-_vWrvv70aTiXvv70877-977-9DWsCLe-_vXnvv71Mau-_ve-_vW4","pages":[{"type":"Article","match":"/article/:uid","path":"/article"}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
