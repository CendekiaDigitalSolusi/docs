// @ts-check

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const hasAlgoliaSearch = Boolean(
  process.env.ALGOLIA_APP_ID &&
    process.env.ALGOLIA_API_KEY &&
    process.env.ALGOLIA_INDEX_NAME,
);

const algoliaSearchConfig = hasAlgoliaSearch
  ? {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
      contextualSearch: true,
      searchPagePath: 'search',
      insights: false,
    }
  : undefined;

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

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '4C298CE250841923',
      },
    },
  ],

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is in Simplified Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    localeConfigs: {
      id: {
        label: 'Bahasa Indonesia',
        htmlLang: 'id-ID',
      },
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
    },
  },

  themes: hasAlgoliaSearch
    ? []
    : [
        [
          require.resolve('@easyops-cn/docusaurus-search-local'),
          {
            hashed: true,
            indexBlog: false,
            indexPages: true,
            docsDir: ['gradynex', 'sso-cendekia'],
            docsRouteBasePath: ['/gradynex', '/sso-cendekia'],
            searchContextByPaths: ['gradynex', 'sso-cendekia'],
            useAllContextsWithNoSearchContext: true,
            searchBarPosition: 'right',
          },
        ],
      ],

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

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ssoCds',
        path: 'sso-cendekia',
        routeBasePath: 'sso-cendekia',
        sidebarPath: require.resolve('./sidebars-sso.js'),
      },
    ],
    [
      '@docusaurus/plugin-vercel-analytics',
      {
        debug: false,
        mode: 'auto',
      },
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
            label: 'SSO Cendekia',
            position: 'left',
            to: '/sso-cendekia/',
            items: [
              {
                label: 'Panduan Pengguna',
                to: '/sso-cendekia/',
              },
              {
                label: 'Cara Masuk',
                to: '/sso-cendekia/pengguna/masuk',
              },
              {
                label: 'Lupa Kata Sandi',
                to: '/sso-cendekia/pengguna/lupa-kata-sandi',
              },
              {
                label: 'FAQ',
                to: '/sso-cendekia/pengguna/faq',
              },
            ],
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
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'localeDropdown',
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
              {
                label: 'SSO Cendekia',
                to: '/sso-cendekia/',
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
      ...(algoliaSearchConfig ? {algolia: algoliaSearchConfig} : {}),
    }),
};

module.exports = config;
