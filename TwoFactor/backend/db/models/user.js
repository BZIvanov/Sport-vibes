const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['username'],
      properties: {
        id: { type: 'integer' },
        username: { type: 'string', minLength: 1, maxLength: 20 },
        auth_secret: { type: 'string', minLength: 1, maxLength: 255 },
        otpauth_url: { type: 'string', minLength: 1, maxLength: 255 },
        last_used: { type: 'string', minLength: 1, maxLength: 255 },
      },
    };
  }
}

module.exports = User;
