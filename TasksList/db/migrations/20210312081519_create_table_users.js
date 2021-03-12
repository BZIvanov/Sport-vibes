exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.text('username').unique().notNullable();
    // note that it is timestamp, there is also timestamps
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
