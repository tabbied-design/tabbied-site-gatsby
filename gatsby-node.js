const path = require("path")
const data = require("./src/artworks/mixtape.json")

exports.createPages = async function({ actions, graphql }) {
  const artworks = await graphql(`
    query {
      allArtworksJson {
        edges {
          node {
            id
            name
            description
            grid {
              default
              options
            }
            palette
            slug
            frequency {
              default
              values
              step
              replace
            }
            shadow {
              default
              code
              replace
            }
            code {
              style
              doodle
            }
          }
        }
      }
    }
  `)

  const editPageTemplate = path.resolve("./src/templates/edit-artwork.js")

  // Create a page for each artwork
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
