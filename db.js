const knex = require('knex')
const config = require('./knexfile').development //so that js knows where the DB is and how it can be accessed
const conn = knex(config)

function getAllTasks (database = conn) {
    return database('tasks')
      .select()   
  }

function getOneTask(id, database = conn) {
   return database('tasks')
    .select()
    .where('id', id) //returns all entries where ids match
    .first() //returns only one entry
}

function addTask (title, description, database = conn) {
  const taskObj = {
    title: title,
    description: description
  }
  return database('tasks')
    .insert(taskObj)
    // .insert({ title: title })
}

function updateTask (id, title, description, database = conn) {
  return database('tasks')
    .where('id', id)
    .update({
      title: title,
      description: description
    })
}

function deleteTask (id, database = conn) {
  return database('tasks')
    .where('id', id)
    .del()
}


function destroyConnection (database = conn) {
  return database.destroy()
}

module.exports = {
 getAllTasks,
 getOneTask,
 addTask,
 updateTask,
 deleteTask,
 destroyConnection
}