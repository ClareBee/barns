/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
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
