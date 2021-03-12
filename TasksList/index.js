const express = require('express');
const knex = require('./db');

const app = express();

app.use(express.json());

app.get('/users', (req, res, next) => {
  knex('users')
    .where('deleted_at', null)
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.json(err));
});

app.post('/users', (req, res, next) => {
  const { username } = req.body;

  knex('users')
    .insert({ username })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.json(err));
});

app.put('/users/:id', (req, res, next) => {
  const { username } = req.body;
  const { id } = req.params;

  knex('users')
    .update({ username })
    .where({ id })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => res.json(err));
});

app.delete('/users/:id', (req, res, next) => {
  const { id } = req.params;

  knex('users')
    .where({ id })
    .update('deleted_at', new Date())
    // .del()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => res.json(err));
});

app.get('/tasks', async (req, res, next) => {
  try {
    const { userId, page = 1 } = req.query;

    const query = knex('tasks')
      .limit(5)
      .offset((page - 1) * 5);

    const counter = knex('tasks').count();

    if (userId) {
      query
        .where({ user_id: userId })
        .join('users', 'users.id', '=', 'tasks.user_id')
        .select('tasks.*', 'users.username')
        .where('users.deleted_at', null);

      counter.where({ user_id: userId });
    }

    const [count] = await counter;

    const tasks = await query;
    res.json({ count, tasks });
  } catch (err) {
    res.json(err);
  }
});

app.post('/tasks', async (req, res, next) => {
  try {
    const { title, userId } = req.body;

    const tasks = await knex('tasks').insert({ title, user_id: userId });
    res.json(tasks);
  } catch (err) {
    res.json(err);
  }
});

app.listen(3000, () => console.log('Listening on port 3000'));
