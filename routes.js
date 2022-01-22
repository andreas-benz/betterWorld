const express = require('express')
const response = require('./server')
const router = express.Router()

const path = require('path');
const cheerio = require('cheerio');
const { getAllTasks } = require('./functions');
const { getTitleOfAllTasks } = require('./functions');
const { getOneTask } = require('./functions');
const { addTask } = require('./functions');
const { updateTask } = require('./functions');
const { deleteTask } = require('./functions');


router.get('/', (req, res) => {
  deleteTask(8)
  // updateTask(12, "updated title", "updated description")
  // addTask("newTask", "description of new task")
  //getOneTask(1)
  // getAllTasks()
  // getTitleOfAllTasks()
  
  const data = {
    name: "Andreas",
    tel: "asdf"
  }
  // viewData = JSON.parse(data)
  res.render('home', data)
  // response.sendFile(path.join(__dirname, 'banana', 'greeting.html'))
})

module.exports = router
