
exports.up = function(knex) {
  return knex.schema.createTable('tasks', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.string('description')
    table.string('category')
    table.date('expiry')
    table.integer('completes')
    table.timestamp('created_at').default(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
};
