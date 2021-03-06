const path = require('path')

module.exports = {
  title: 'Unrizki',
  description: 'Unrizki\'s Blog',
  dest: path.resolve(__dirname, '../../dist'),
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'unrizki, developer' }],
    ['meta', { name: 'author', content: 'unrizki' }],
    ['meta', { name: 'google-site-verification', content: 'C6PUpooLizJmY5GMc5givDPgKhx9wQo_RBfWuC0PFtc' }]
  ],
  evergreen: true
}
