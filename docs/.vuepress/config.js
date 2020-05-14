module.exports = {
  title: 'openFOLF | Docs',
  description: 'Final Project BSc Computer Science @ Reykjavik University',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#005737' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: '#005737' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#005737' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  evergreen: true,
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        updatePopup: {
          message: 'opeFOLF Docs has been updated!',
          buttonText: 'Refresh',
        },
      },
    ],
    '@vuepress/back-to-top',
    '@vuepress/plugin-nprogress',
    '@vuepress/active-header-links',
    '@vuepress/medium-zoom',
  ],
  themeConfig: {
    displayAllHeaders: true,
    smoothScroll: true,
    logo: '/images/openfolfgreen.svg',
    nav: [
      { text: 'The Landing Page', link: 'https://www.openfolf.net/' },
      { text: 'The Application', link: 'https://app.openfolf.net/' },
      { text: 'The Source Code', link: 'https://github.com/OpenFolf/' },
      { text: 'Reykjavik University', link: 'https://www.ru.is/' },
    ],
    searchPlaceholder: 'Search the report...',
    sidebar: [
      {
        collapsable: false,
        children: ['/introduction/'],
      },
      {
        collapsable: false,
        children: ['/work-arrangement/'],
      },
      {
        collapsable: false,
        children: ['/risk-analysis/'],
      },
      {
        collapsable: false,
        children: ['/project-description/'],
      },
      {
        collapsable: false,
        children: ['/technical-overview/'],
      },
      {
        collapsable: false,
        children: ['/design-overview/'],
      },
      {
        collapsable: false,
        children: ['/progress-overview/'],
      },
      {
        collapsable: false,
        children: ['/conclusion/'],
      },
    ],
  },
};
