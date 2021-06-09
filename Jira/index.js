const express = require('express');
const { Version2Client } = require('jira.js');

const app = express();

const client = new Version2Client({
  host: 'https://aws-biser.atlassian.net',
  authentication: {
    basic: {
      email: 'biser.ivanov@gmail.com',
      apiToken: 'PpGU40aczGc5ywlnBEK312Ay',
    },
  },
});

app.get('/', async (req, res, next) => {
  res.send('Works');
});

app.get('/get-all-projects', async (req, res) => {
  const projects = await client.projects.getAllProjects();

  res.send(JSON.stringify(projects));
});

app.get('/get-project', async (req, res) => {
  try {
    const project = await client.projects.getProject({
      projectIdOrKey: 'NW',
    });

    res.send(JSON.stringify(project));
  } catch (err) {
    res.send(JSON.stringify(err));
  }
});

app.get('/get-all-users', async (req, res) => {
  try {
    const users = await client.users.getAllUsers();

    res.send(JSON.stringify(users));
  } catch (err) {
    res.send(JSON.stringify(err));
  }
});

app.get('/get-user', async (req, res) => {
  try {
    const user = await client.users.getUser({
      accountId: '61c0b4d0f7515400693541b3',
    });

    res.send(JSON.stringify(user));
  } catch (err) {
    res.send(JSON.stringify(err));
  }
});

app.get('/create-project', async (req, res) => {
  try {
    const project = await client.projects.createProject({
      name: 'my-new-proj',
      key: 'MNP',
      projectTypeKey: 'software',
      projectTemplateKey:
        'com.pyxis.greenhopper.jira:gh-simplified-agility-scrum',
      leadAccountId: '61c0b4d0f7515400693541b3',
    });

    res.send(JSON.stringify(project));
  } catch (err) {
    console.log(err);
    res.send(JSON.stringify(err));
  }
});

app.listen(3000, () => console.log('Listening'));
