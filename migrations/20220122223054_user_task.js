
exports.up = function(knex) {
  return knex.schema.createTable('user_task', function (table) {
    table.increments('ut_id').primary();
    table.integer('tid').references('tid').inTable('tasks');
    table.integer('uid').references('uid').inTable('users');
    table.string('status')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_task')
};
