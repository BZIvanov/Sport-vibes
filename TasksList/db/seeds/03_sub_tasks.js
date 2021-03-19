exports.seed = function (knex) {
  return knex('sub_tasks')
    .del()
    .then(function () {
      return knex('sub_tasks').insert([
        { task_id: 1, name: 'Sub Task 1 for task 1' },
        { task_id: 1, name: 'Sub Task 2 for task 1' },
        { task_id: 2, name: 'Sub Task 1 for task 2' },
        { task_id: 2, name: 'Sub Task 2 for task 2' },
        { task_id: 2, name: 'Sub Task 3 for task 2' },
      ]);
    });
};
