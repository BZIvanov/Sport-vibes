const speakeasy = require('speakeasy');

const secret = speakeasy.generateSecret({
  name: 'MyAwesomeApp',
});

exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          username: 'Irina',
          auth_secret: secret.base32,
          otpauth_url: secret.otpauth_url,
        },
      ]);
    });
};
