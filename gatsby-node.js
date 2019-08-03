/**
 * See: https://www.gatsbyjs.org/docs/node-apis/
 called whenever new node is created/updated
 */
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateWebpackConfig = ({ stage, rules, loaders, actions }) => {
  switch (stage) {
    case 'build-html':
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-leaflet/,
              use: [loaders.null()]
            }
          ]
        }
      });
    break;
  }
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  // createNodeField allows additional fields on nodes created by other apis
  const { createNodeField } = actions
  console.log(node.internal.type)
  if(node.internal.type === `ImageSharp`) {
    // getNode traverses 'node graph' to get to parent File node
    const slug = createFilePath({ node, getNode, basePath: `images` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  return graphql(`
    {
      allImageSharp {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allImageSharp.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/barn.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  })
}
