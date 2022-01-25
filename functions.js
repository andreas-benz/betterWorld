const db = require('./db')

function getAllTasks () {
  return db.getAllTasks()
    .then((tasks) => {
      return tasks
    })
    .catch(() => {
    })
}

function getOneTask(t_id) {
  return db.getOneTask(t_id)
    .then((task) => {
      return task
    })
    .catch((err) => {
      console.log('oh no - an error:', err.message)
    })
}

function deleteTask (t_id) {
  return db.deleteTask(t_id)
    .then(() => {
      return db.getAllTasks()
    })
    .then((tasks) => {
      tasks.forEach(task => {
        
      })
    })
    .catch((err) => {
      console.log('oh no - an error:', err.message)
    })
}

function updateTask (t_id, updatedTask) {
  return db.updateTask(t_id, updatedTask)
    .then((task) => {
      console.log(task)
      return task
    })
    .catch((err) => {
      console.log('oh no - an error:', err.message)
    })
}

function addTask (sampleTitle) {
  return db.addTask(sampleTitle)
    .then((task) => {
      return db.getOneTask(task)
    })
    .catch((err) => {
      console.log('oh no - an error:', err.message)
    })
}

function getAllUsers () {
  return db.getAllUsers()
    .then((tasks) => {
      return tasks
    })
    .catch(() => {
    })
}


//NOT IN USE RIGHT NOW

// function getTitleOfAllTasks () {
//   return db.getAllTasks()
//     .then((tasks) => {
//       tasks.forEach(task => {
//         console.log(task.title)
//       })
//     })
//     .catch(() => {
//       db.destroyConnection()
//     })
//     .finally(() => {
//       db.destroyConnection()
//     })
//   }

// function getAllTasksThatAreNotMine (id) {
//   return db.getAllTasksThatAreNotMine(id)
//     .then((tasks) => {
//       console.log(tasks)
//     })
//     .catch(() => {
//       db.destroyConnection()
//     })
//     .finally(() => {
//       db.destroyConnection()
//     })
// }

// function tasksIhaveCreated (id) {
//   return db.tasksIhaveCreated (id)
//     .then((tasks) => {
//       console.log(tasks)
//     })
//     .catch(() => {
//       db.destroyConnection()
//     })
//     .finally(() => {
//       db.destroyConnection()
//     })
// }



module.exports = {
  getAllTasks,
  getOneTask,
  deleteTask,
  updateTask,
  addTask,
  getAllUsers,

  // getTitleOfAllTasks,
  // getAllTasksThatAreNotMine,
  // tasksIhaveCreated,
}