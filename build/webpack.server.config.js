const path = require('path')
const webpack = require('webpack')
const base = require('./webpack.base.config')
const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = Object.assign({}, base, {
  entry: path.resolve(__dirname, '../src/server-entry.js'),
  target: 'node',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server/[name].js',
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: [
    new ExtractTextPlugin('server/styles.css')
  ]
})

module.exports = config
