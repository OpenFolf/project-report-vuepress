module.exports = {
  title: 'openFOLF',
  description: 'Final project BSc computer science @ Reykjavik University',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  evergreen: true,
  themeConfig: {
    displayAllHeaders: true,
    logo: '/images/logo.png',
    nav: [
      { text: 'openFolf', link: 'http://openfolf.is/' },
      { text: 'Github Repo', link: 'https://github.com/OpenFolf/' },
      { text: 'Reykjavik University', link: 'https://www.ru.is/' }
    ],
    searchPlaceholder: 'Search...',
    sidebar: [
      {
        collapsable: false,
        children: ['/introduction/']
      },
      {
        collapsable: false,
        children: ['/work-arrangement/']
      },
      {
        collapsable: false,
        children: ['/risk-analysis/']
      },
      {
        collapsable: false,
        children: ['/project-description/']
      },
      {
        collapsable: false,
        children: ['/design-overview/']
      },
      {
        collapsable: false,
        children: ['/progress-overview/']
      },
      {
        collapsable: false,
        children: ['/sprints/']
      }
    ]
  }
};
