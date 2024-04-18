const express = require('express')

const app = express()

app.get('/gadgets', (request, response) => {
  console.log(request)
  response.sendFile('./gadgets.html', {root: __dirname})
})

module.exports = app
