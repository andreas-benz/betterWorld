const express = require('express')
const response = require('./server')
const router = express.Router()
const func = require('./functions')
const path = require('path')
const cheerio = require('cheerio')

router.get('/', (req, res) => {
  func.getAllTasks()
   .then((task) => {
      const viewdata = {
        tasks: task,
      }
      res.render('mahiList', viewdata)
   })
})

router.post('/:t_id/delete',(req, res) => {
  const t_id = Number(req.params.t_id)

  func.deleteTask(t_id)
   .then(() => 
    res.redirect('/')
   )
})

router.get('/:t_id/edit', (req, res) => {
  //grabs the Id from the URL as a string btw
  const t_id = Number(req.params.t_id)
  const viewdata = {}

  func.getOneTask(t_id)
  .then((task) => {
    viewdata.task = task
    func.getAllUsers()
      .then((users) => {
        viewdata.users = users
        res.render('mahiEdit', viewdata)
      })
   })
})

router.post('/:t_id/edit',(req, res) => {
  const t_id = Number(req.params.t_id)
  const editedTask = req.body
  const updatedTask = {
    title: editedTask.title,
    description: editedTask.description,
    created_by: editedTask.created_by
  }

  func.updateTask(t_id, updatedTask)
   .then(() => {
    res.redirect('/')
   })
})

router.post('/add',(req, res) => {
  const sampleTitle = "new Task"
  const viewdata = {}

  func.addTask(sampleTitle)
   .then((task) => {
      viewdata.task = task
      func.getAllUsers()
        .then((users) => {
          viewdata.users = users
          res.render('mahiEdit', viewdata)
      })
   })
})


//NOT IN USE RIGHT NOW
 // tasksIhaveCreated (10001)
  //getAllTasksThatAreNotMine(10001)
  // deleteTask(2)
  // updateTask(12, "updated title", "updated description")
  // addTask("newTask", "description of new task")
  //getOneTask(1)
  // getAllTasks()
  // getTitleOfAllTasks()


// router.get('/user/:id', (req, res) => { 
//   db.tasksIhaveCreated(req.params.id)
//     .then((task) => {
//       console.log(task)
//       const viewdata = {
//         tasks: task,
//       }
//       res.render('mahiList', viewdata)
//     })
// })

module.exports = router
