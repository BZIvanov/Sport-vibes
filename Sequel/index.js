const express = require('express');
const { sequelize, User } = require('./models');

const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
  const { name, city } = req.body;

  try {
    const user = await User.create({ name, city });
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.listen({ port: 3000 }, async () => {
  console.log('Server listening on port 3000');
  await sequelize.sync();
  console.log('Database ready');
});
