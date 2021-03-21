require('./db/db-setup')();
const express = require('express');
const User = require('./db/models/user');

const app = express();
app.use(express.json());

app.get('/user/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.query()
      .findById(id)
      .withGraphFetched('channel')
      .debug(); // with debug method we can console.log executed raw query

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(3000, () => console.log('Listening on port 3000'));
