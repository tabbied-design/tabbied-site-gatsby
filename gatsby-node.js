const path = require("path")
const data = require("./src/artworks/mixtape.json")

exports.createPages = async function({ actions, graphql }) {
  const result = await graphql(`
    query {
      allArtworksJson {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)

  /*
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  */

  const editPageTemplate = path.resolve("./src/templates/EditArtwork.js")

  result.data.allArtworksJson.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.name,
      component: editPageTemplate,
      context: {
        id: node.id,
        name: node.name,
      },
    })
  })
}

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /css-doodle/,
            use: loaders.null(),
          },
          {
            test: /pickr/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
