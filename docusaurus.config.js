// @ts-check

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cendekia Platform',
  tagline: 'Documentation Portal - PT Cendekia Digital Solusi',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.cendekiadigitalsolusi.co.id',
  // Set the /<baseUrl>/ pathname under which your Docusaurus site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CendekiaDigitalSolusi', // Usually your GitHub org/username.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is in Simplified Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'gradynex',
          routeBasePath: 'gradynex',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/CendekiaDigitalSolusi/docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Cendekia',
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
          },
          {
            label: 'Gradynex',
            position: 'left',
            to: '/gradynex',
            items: [
              {
                label: 'Overview',
                to: '/gradynex',
              },
              {
                label: 'Central App',
                to: '/gradynex/central-app/intro',
              },
              {
                label: 'Tenant App',
                to: '/gradynex/tenant-app/intro',
              },
              {
                label: 'Help Center',
                to: '/gradynex/help-center/faq',
              },
            ],
          },
          {
            href: 'https://cendekiadigitalsolusi.co.id/',
            label: 'Website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dokumentasi',
            items: [
              {
                label: 'Aplikasi Central',
                to: '/gradynex/central-app/intro',
              },
              {
                label: 'Aplikasi Tenant',
                to: '/gradynex/tenant-app/intro',
              },
            ],
          },
          {
            title: 'Lainnya',
            items: [
              {
                label: 'Website',
                href: 'https://cendekiadigitalsolusi.co.id/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PT Cendekia Digital Solusi.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
