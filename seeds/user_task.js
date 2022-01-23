
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_task').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_task').insert([
        {ut_id: 1, uid: 10001, tid: 1, status: "accepted"},
        {ut_id: 2, uid: 10001, tid: 2, status: "accepted"},
        {ut_id: 3, uid: 10001, tid: 3, status: "completed"},
        {ut_id: 4, uid: 10002, tid: 1, status: "accepted"},
        {ut_id: 5, uid: 10002, tid: 2, status: "completed"},
        {ut_id: 6, uid: 10002, tid: 3, status: "completed"},
        {ut_id: 7, uid: 10003, tid: 6, status: "accepted"},
        {ut_id: 8, uid: 10002, tid: 6, status: "accepted"},
      ]);
    });
};