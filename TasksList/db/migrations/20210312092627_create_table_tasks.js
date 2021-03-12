exports.up = (knex) => {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id');
    table.text('title');
    table
      .integer('user_id')
      .references('users.id')
      .notNullable()
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('tasks');
};
