exports.seed = function (knex) {
  return knex('tasks')
    .del()
    .then(function () {
      return knex('tasks').insert([
        { user_id: 1, title: 'Task 1 for User 1' },
        { user_id: 2, title: 'Task 1 for User 2' },
      ]);
    });
};
