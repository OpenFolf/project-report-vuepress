module.exports = {
  title: 'openFOLF | Docs',
  description: 'Final Project BSc Computer Science @ Reykjavik University',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  evergreen: true,
  themeConfig: {
    displayAllHeaders: true,
    logo: '/images/openfolfgreen.svg',
    nav: [
      { text: 'Landing Page', link: 'https://www.openfolf.net/' },
      { text: 'Application', link: 'https://app.openfolf.net/' },
      { text: 'Source Code', link: 'https://github.com/OpenFolf/' },
      { text: 'Reykjavik University', link: 'https://www.ru.is/' },
    ],
    searchPlaceholder: 'Search...',
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
        children: ['/design-overview/'],
      },
      {
        collapsable: false,
        children: ['/progress-overview/'],
      },
      {
        collapsable: false,
        children: ['/sprints/'],
      },
    ],
  },
};
