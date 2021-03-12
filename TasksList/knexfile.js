// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'knex_demo',
      user: 'postgres',
      password: '12345678',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds`,
    },
  },

  production: {
    client: 'pg',
    connection: {
      database: 'knex_demo',
      user: 'postgres',
      password: '12345678',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds`,
    },
  },
};
