const express = require('express')
const app = express()

app.get('/info', function(req, res) {
  res
    .status(200)
    .json({
      message: 'I am alive'
    })
})

module.exports = app
