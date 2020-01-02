const path = require('path')

module.exports = {
  title: 'Unrizki',
  description: 'Unrizki\'s Blog',
  dest: path.resolve(__dirname, '../../dist'),
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'Unrizki, developer' }],
    ['meta', { name: 'author', content: 'unrizki' }],
  ],
  evergreen: true
}
