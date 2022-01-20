const express = require('express')
const response = require('./server')
const router = express.Router()
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))

  // response.sendFile(path.join(__dirname, 'banana', 'greeting.html'))

})

module.exports = router
