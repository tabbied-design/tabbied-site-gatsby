const path = require("path")
const data = require("./src/artworks/mixtape.json")

exports.createPages = async function({ actions, graphql }) {
  const artworks = await graphql(`
    query {
      allArtworksJson {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  const editPageTemplate = path.resolve("./src/templates/edit-artwork.js")

  artworks.data.allArtworksJson.edges.forEach(({ node }) => {
    actions.createPage({
      path: `/artwork/${node.slug}`,
      component: editPageTemplate,
      context: {
        id: node.id,
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
