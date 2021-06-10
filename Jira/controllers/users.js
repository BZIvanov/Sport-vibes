const client = require('../providers/jira');
const asyncMiddleware = require('../middleware/async');

module.exports.getAllUsers = asyncMiddleware(async (req, res) => {
  const users = await client.users.getAllUsers();
  res.send(users);
});

module.exports.getUser = asyncMiddleware(async (req, res) => {
  const { id } = req.query;
  if (!id) {
    throw new Error('Account id is required query param.');
  }

  const user = await client.users.getUser({
    accountId: id,
  });
  res.send(user);
});
