const client = require('../providers/jira');
const asyncMiddleware = require('../middleware/async');

module.exports.getAllProjects = asyncMiddleware(async (req, res) => {
  const projects = await client.projects.getAllProjects();
  res.send(projects);
});

module.exports.getProject = asyncMiddleware(async (req, res) => {
  const { id } = req.query;
  if (!id) {
    throw new Error('Project id or key is required query param.');
  }

  const project = await client.projects.getProject({
    projectIdOrKey: id,
  });
  res.send(project);
});

module.exports.createProject = asyncMiddleware(async (req, res) => {
  const { name, key, accountId } = req.body;
  if (!name || !key || !accountId) {
    throw new Error('Name, Key and Account id are required in the body.');
  }

  // ctrl + click the createProject function to see more configs or read the docs. This example is with hardcoded scrum template
  const project = await client.projects.createProject({
    name,
    key,
    leadAccountId: accountId,
    projectTypeKey: 'software',
    projectTemplateKey:
      'com.pyxis.greenhopper.jira:gh-simplified-agility-scrum',
  });
  res.send(project);
});
