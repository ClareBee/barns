
const config = {
  siteMetadata: {
    title: `Disappearing Barns`,
    titleAlt: `Dales Barns`, // title for JSONLD
    description: `Paintings of Disappearing Barns in the Yorkshire Dales by Margaret Blackburne`,
    headline: `Disappearing barns in the Yorkshire Dales`, // Headline for schema.org JSONLD
    author: `@clarie_bee`,
    url: `https://www.disappearingbarns.co.uk`, // site domain, no trailing slash
    image: `https://res.cloudinary.com/dbhyay1ue/image/upload/c_scale,h_150,w_150/v1573313683/square_barn_krfcjq.jpg`,
    banner: ``, // used for SEO
    ogLanguage: `en_GB`,
    siteLanguage: `en`,
    contentLocation: 'Yorkshire Dales National Park',
    copyrightHolder: 'Margaret Blackburne',
    copyrightYear: '2019',
    isFamilyFriendly: true,
    keywords: ['Yorkshire', 'barns', 'National Park', 'watercolour', 'artist', 'Margaret Blackburne', 'Dales'],
    thumbnailUrl: `https://res.cloudinary.com/dbhyay1ue/image/upload/c_scale,h_150,w_150/v1573313683/square_barn_krfcjq.jpg`,
    instagram: ``,
    googleAnalyticsID: `UA-151661826-1`,
    twitterUsername: `@clarie_bee`,
    siteUrl: `https://www.disappearingbarns.co.uk`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-151661826-1`,
        head: true,
        anonymize: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/contact/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 250
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
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
        icon: `src/static/logo2.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`
  ],
}



module.exports = config
