module.exports = {
  // Options

  siteMetadata: {
    title: 'syncore-starter-gatsby',
  },
  flags: { PRESERVE_WEBPACK_CACHE: true, FAST_DEV: true },

  // Plugins

  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/img/glyph.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/img',
      },
      __key: 'images',
    },
    `gatsby-plugin-postcss`,

    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@utils': 'src/components/utils',
          '@component': 'src/components',
          '@global': 'src/components/globals',
          '@img': 'src/assets/img',
          '@svg': 'src/assets/svg',
          '@helper': 'src/utils',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        titleTemplate: `%s | Syncore Gatsby Starter`,

        openGraph: {
          type: 'website',
          locale: 'en_IE',
          site_name: 'Syncore Starter Next',
        },
        twitter: {
          cardType: 'summary_large_image',
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/globals/Layout.tsx`),
      },
    },
  ],
};
