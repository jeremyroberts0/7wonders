const path = require('path')
const express = require('express')
const app = express()

app.get('/info', function(req, res) {
  res
    .status(200)
    .json({
      message: 'I am alive'
    })
})

app.use(express.static(path.resolve(__dirname, '../../dist')))

module.exports = app
