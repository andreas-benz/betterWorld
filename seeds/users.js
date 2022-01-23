
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {u_id: 10001, name: 'Andreas'},
        {u_id: 10002, name: 'Peter'},
        {u_id: 10003, name: 'Amanda'}
      ]);
    });
};
