exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('username', 20).notNullable();
    table.string('auth_secret').nullable();
    table.string('otpauth_url').nullable();
    table.timestamp('last_used').nullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
