const path = require('path')

module.exports = {
  title: 'Unrizki',
  description: 'Unrizki\'s Blog',
  dest: path.resolve(__dirname, '../../dist'),
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.gstatic.com', crossorigin: true }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap' }],
    ['link', { rel: 'stylesheet', href: 'https://api.fontshare.com/css?f[]=satoshi@400,700&display=swap' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'unrizki, developer' }],
    ['meta', { name: 'author', content: 'unrizki' }],
    ['meta', { name: 'google-site-verification', content: 'C6PUpooLizJmY5GMc5givDPgKhx9wQo_RBfWuC0PFtc' }]
  ],
  evergreen: true
}
