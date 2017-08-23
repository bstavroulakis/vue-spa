const base = require('./webpack.base.config')

const config = Object.assign({}, base, {
  plugins: base.plugins || []
})

module.exports = config
