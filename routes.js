const express = require('express')
const response = require('./server')
const router = express.Router()
const db = require('./db')

const path = require('path');
const cheerio = require('cheerio');
const { getAllTasks } = require('./functions');
const { getTitleOfAllTasks } = require('./functions');
const { getOneTask } = require('./functions');
const { addTask } = require('./functions');
const { updateTask } = require('./functions');
const { deleteTask } = require('./functions');
const { getAllTasksThatAreNotMine } = require('./functions');
const { tasksIhaveCreated } = require('./functions');

router.get('/user/:id', (req, res) => { 
  db.tasksIhaveCreated(req.params.id)
    .then((task) => {
      console.log(task)
      const viewdata = {
        tasks: task,
      }
      res.render('home', viewdata)
    })
})

router.get('/', (req, res) => {
  tasksIhaveCreated (10001)
  //getAllTasksThatAreNotMine(10001)
  // deleteTask(2)
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
