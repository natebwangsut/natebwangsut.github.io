module.exports = {
  title: 'Personal Blog',
  tagline: 'Bhurinat Wangsutthitham (Nate) personal blog.',
  url: 'https://natebwangsut.github.io',
  baseUrl: '/',
  // headerIcon: '',
  favicon: 'img/favicon.ico',
  organizationName: 'natebwangsut', // Usually your GitHub org/user name.
  projectName: 'natebwangsut.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '@natebwangsut',
      logo: {
        alt: '@natebwangsut',
        src: 'img/logo.svg',
      },
      links: [
        {
          href: 'https://github.com/natebwangsut/natebwangsut.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/natebwangsut',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/natebwangsut',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nate Bhurinat Wangsutthihtam. Built with Docusaurus.`,
    },
    algolia: {
      apiKey: 'api-key',
      indexName: 'index-name',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // docs: {
        //   // Sidebars filepath relative to the site dir.
        //   sidebarPath: require.resolve('./sidebars.js'),
        // },
        blog: {
          path: './blog',
          routeBasePath: '/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Nate Bhurinat Wangsutthihtam.`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
