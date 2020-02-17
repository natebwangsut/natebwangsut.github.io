module.exports = {
  title: '@natebwangsut',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
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
        // Disable DOCS
        // {to: 'docs/doc1', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
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
        // Something to replace docs
        // {
        //   title: 'Something Here',
        //   items: [
        //     {
        //       //
        //       label: 'Style Guide',
        //       to: 'blog/',
        //     },
        //     {
        //       //
        //       label: 'Second Doc',
        //       to: 'docs/doc2',
        //     },
        //   ],
        // },
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
              label: 'Blog',
              to: 'blog',
            },
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
