exports.up = (knex) => {
  return knex.schema.createTable('sub_tasks', (table) => {
    table.increments('id');
    table.text('name');
    table
      .integer('task_id')
      .references('tasks.id')
      .notNullable()
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('sub_tasks');
};
