
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {t_id: 1, 
        title: 'pick up plastic', 
        description: 'asdf sdf;lkj sdafljlkj sdaflkjlk;', category: "environment",
        expiry: "2018-11-29T00:00:00.000Z",
        completes: 200,
        created_at: "2018-11-29T00:00:00.000Z",
        created_by: 10002,
        },
        {t_id: 2, 
        title: 'pick up plastic 2', 
        description: 'asdf sdf;lkj sdafljlkj sdaflkjlk;', category: "environment",
        expiry: "2018-11-29T00:00:00.000Z",
        completes: 200,
        created_at: "2018-11-29T00:00:00.000Z",
        created_by: 10002,
        },
        {t_id: 3, 
        title: 'pick up plastic 3', 
        description: 'asdf sdf;lkj sdafljlkj sdaflkjlk;', category: "environment",
        expiry: "2018-11-29T00:00:00.000Z",
        completes: 200,
        created_at: "2018-11-29T00:00:00.000Z",
        created_by: 10002,
        },
        {t_id: 4, 
        title: 'pick up plastic 4', 
        description: 'asdf sdf;lkj sdafljlkj sdaflkjlk;', category: "environment",
        expiry: "2018-11-29T00:00:00.000Z",
        completes: 200,
        created_at: "2018-11-29T00:00:00.000Z",
        created_by: 10001,
        },
        {t_id: 5, 
        title: 'pick up plastic 5', 
        description: 'asdf sdf;lkj sdafljlkj sdaflkjlk;', category: "environment",
        expiry: "2018-11-29T00:00:00.000Z",
        completes: 200,
        created_at: "2018-11-29T00:00:00.000Z",
        created_by: 10001,
        },
        {t_id: 6, 
        title: 'pick up plastic 6', 
        description: 'asdf sdf;lkj sdafljlkj sdaflkjlk;', category: "environment",
        expiry: "2018-11-29T00:00:00.000Z",
        completes: 200,
        created_at: "2018-11-29T00:00:00.000Z",
        created_by: 10003,
        }
      ]);
    });
};
