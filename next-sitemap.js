module.exports = {
    siteUrl: 'https://sth.org.com.br',
    generateRobotsTxt: true, // opcional
    priority: null,
    changefreq: null,
    exclude: ['/server-sitemap.xml', '/missao/*'],
    robotsTxtOptions: {
      additionalSitemaps: ['https://sth.org.com.br/server-sitemap.xml'],
    },
  }