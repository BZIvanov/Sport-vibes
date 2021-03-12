exports.seed = function (knex) {
  // Deletes ALL existing entries in the table
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries in the table
      return knex('users').insert([
        { username: 'Bistra' },
        { username: 'Georgi' },
        { username: 'Grozdanka' },
      ]);
    });
};
