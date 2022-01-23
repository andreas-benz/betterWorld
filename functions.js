const db = require('./db')

// module.exports = {
//   getAllTasks,
//   getTitleOfAllTasks,
//   getOneTask
//  }

function getAllTasks () {
  return db.getAllTasks()
    .then((tasks) => {
      console.log(tasks)
    })
    .catch(() => {
      db.destroyConnection()
    })
    .finally(() => {
      db.destroyConnection()
    })
}

function getAllTasksThatAreNotMine (id) {
  return db.getAllTasksThatAreNotMine(id)
    .then((tasks) => {
      console.log(tasks)
    })
    .catch(() => {
      db.destroyConnection()
    })
    .finally(() => {
      db.destroyConnection()
    })
}

function getTitleOfAllTasks () {
  return db.getAllTasks()
    .then((tasks) => {
      tasks.forEach(task => {
        console.log(task.title)
      })
    })
    .catch(() => {
      db.destroyConnection()
    })
    .finally(() => {
      db.destroyConnection()
    })
  }

function getOneTask(id) {
  return db.getOneTask(id)
    .then((task) => {
      console.log(`${task.id} ${task.title}, ${task.description}`)
    })
    .catch((err) => {
      console.log('oh no - an error:', err.message)
    })
    .finally(() => {
      db.destroyConnection()
    })
}

function addTask (title, description) {
  return db.addTask(title, description)
    .then(() => {
      return db.getAllTasks()
    })
    .then((tasks) => {
      tasks.forEach(task => {
        console.log(task.id)
        console.log(task.title)
        console.log(task.description)
      })
    })
    .catch((err) => {
      console.log('oh no - an error:', err.message)
    })
    .finally(() => {
      db.destroyConnection()
    })
}

function updateTask (id, title, description) {
  return db.updateTask(id, title, description)
    .then(() => {
      return db.getAllTasks()
    })
    .then((tasks) => {
      tasks.forEach(task => {
        console.log(task.id)
        console.log(task.title)
        console.log(task.description)
      })
    })
    .catch((err) => {
      console.log('oh no - an error:', err.message)
    })
    .finally(() => {
      db.destroyConnection()
    })
}

function deleteTask (id) {
  return db.deleteTask(id)
    .then(() => {
      return db.getAllTasks()
    })
    .then((tasks) => {
      tasks.forEach(task => {
        console.log(task.id)
        console.log(task.title)
        console.log(task.description)
      })
    })
    .catch((err) => {
      console.log('oh no - an error:', err.message)
    })
    .finally(() => {
      db.destroyConnection()
    })
}

function tasksIhaveCreated (id) {
  return db.tasksIhaveCreated (id)
    .then((tasks) => {
      console.log(tasks)
    })
    .catch(() => {
      db.destroyConnection()
    })
    .finally(() => {
      db.destroyConnection()
    })
}



module.exports = {
  getAllTasks,
  getTitleOfAllTasks,
  getAllTasksThatAreNotMine,
  getOneTask,
  addTask,
  updateTask,
  deleteTask,
  tasksIhaveCreated,
}