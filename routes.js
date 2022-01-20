const express = require('express')
const response = require('./server')
const router = express.Router()
const path = require('path');
const cheerio = require('cheerio');


router.get('/', (req, res) => {
  
  const data = {
    name: "Andreas",
    tel: "asdf"
  }
  // viewData = JSON.parse(data)
  res.render('home', data)
  // response.sendFile(path.join(__dirname, 'banana', 'greeting.html'))
})

module.exports = router
