const express = require('express')
const response = require('./server')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello xxx World')
})

module.exports = router
