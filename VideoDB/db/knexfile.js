// knexSnakeCaseMappers will tranform names like firstName => first_name
const { knexSnakeCaseMappers } = require('objection');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'demo',
      user: 'postgres',
      password: '12345678',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
    ...knexSnakeCaseMappers,
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'demo',
      user: 'postgres',
      password: '12345678',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
    ...knexSnakeCaseMappers,
  },
};
