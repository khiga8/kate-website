module.exports = {
  siteMetadata: {
    title: "Kate Higa Website"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/portfolio`,
        name: `images`
      }

    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "pages",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    {
   resolve: `gatsby-transformer-remark`,
   options: {
     plugins: [
       {
         resolve: `gatsby-remark-images`,
         options: {
           linkImagesToOriginal: false,
           maxWidth: 500,

         },
       },
     ],
   },
 },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`
  ]
};
