const app = require('./app')
const config = require('../config/server.conf.js')

app.listen(config.APP_PORT, function() {
  console.log(`7 Wonders started on port ${config.APP_PORT}`)
})
