const webpack = require('webpack')
const chalk = require('chalk')
const nodemon = require('nodemon')
const path = require('path')

const webpackConfig = require('../src/config/webpack.conf.js')

const info = chalk.blue
const error = chalk.red
const success = chalk.green

console.log(info('Webpack build started'))
const compiler = webpack(webpackConfig)

let nodeWatcher

const webpackWatcher = compiler.watch({ }, (err, stats) => {
  if (err) {
    console.error(error('Webpack build error', err))
  } else {
    console.log(info('Webpack build complete in', stats.endTime - stats.startTime, 'ms'))
    if (!nodeWatcher) {
      serverStarted = true
      nodeWatcher = nodemon({
        script: path.resolve(__dirname, '../src/server/index')
      }).on('start', () => console.log(info('Server started')))
        .on('restart', () => console.log(info('Restarting server due to file change')))
        .on('quit', () => console.log(info('Server quit')))
    }
  }
})

process.on('SIGINT', () => {
  console.log(info('Receiged SIGINT, shutting down server'))
  webpackWatcher.close(() => {
    console.log(info('Webpack watcher closed'))
    process.exit()
  })
});
