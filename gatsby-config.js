module.exports = {
  pathPrefix: `/avgloss`,
  siteMetadata: {
    title: `audio/video glossary`,
    author: `Ashley Blewer`,
    description: `audio/video glossary: definitions and context for audio-video lingo.`,
    siteUrl: `https://bits.ashleyblewer.com/avgloss/`,
    language: "en",
    texts: {
      allCollectionsText: "Root",
      searchPlaceholderText: "Search definitions...",
      lastModifiedText: "Last edited",
      publishedOnText: "Published on",
      writtenByText: "Written by",
      articlesInCollectionZeroText: "definitions in this category",
      articlesInCollectionOneText: "definition in this category",
      articlesInCollectionTwoText: "definitions in this category",
      articlesInCollectionMultipleText: "definitions in this category",
    },
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsYaml`,
    "MarkdownRemark.frontmatter.collection": `CollectionsYaml`,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-simple-analytics",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
        name: `mappings`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets`,
        name: `assets`,
      },
    },
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
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `avgloss`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#1D2D49`,
        theme_color: `#1D2D49`,
        display: `minimal-ui`,
        icon: `assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
