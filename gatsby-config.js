
const config = {
  pathPrefix: '/', // prefix for all links
  siteMetadata: {
    title: `Disappearing Barns`,
    titleAlt: `Dales Barns`, // title for JSONLD
    description: `Barns in the Yorkshire Dales`,
    headline: `Disappearing barns in the Yorkshire Dales`, // Headline for schema.org JSONLD
    author: `@clarie_bee`,
    url: ``, // site domain, no trailing slash
    image: ``,
    banner: ``, // used for SEO
    ogLanguage: 'en_UK',
    siteLanguage: `en`,
    contentLocation: 'Yorkshire Dales National Park',
    copyrightHolder: 'Margaret Blackburne',
    copyrightYear: '2019',
    isFamilyFriendly: true,
    keywords: ['Yorkshire', 'barns', 'National Park', 'art', 'watercolour', 'artist'],
    thumbnailUrl: ``,
    instagram: ``,
    googleAnalyticsID: ``,
    twitterUsername: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
    resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.js`),
      },
    },
    {
      resolve: `gatsby-plugin-react-leaflet`,
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    `gatsby-transformer-json`,
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/src/data/`,
      }
    },
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`, //update this
      options: {
        name: `Disappearing Barns`,
        short_name: `Dales barns`,
        description: 'Disappearing Barns in the Yorkshire Dales',
        start_url: `/`,
        background_color: `#ECEBF6`,
        theme_color: `#ECEBF6`,
        display: `minimal-ui`,
        icon: `src/assets/logo2.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
  ],
}

if (process.env.CONTEXT === "production") {
  const googleAnalyticsConfig = {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: false,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ["/preview/**", "/do-not-track/me/too/"],
      // Delays sending pageview hits on route update (in milliseconds)
      pageTransitionDelay: 250,
      // Enables Google Optimize using your container Id
      optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
      // Enables Google Optimize Experiment ID
      experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
      // Set Variation ID. 0 for original 1,2,3....
      variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
      // Any additional optional fields
      sampleRate: 5,
      siteSpeedSampleRate: 10,
      cookieDomain: "example.com",
    },
  };
  config.plugins.push(googleAnalyticsConfig);
}

module.exports = config
