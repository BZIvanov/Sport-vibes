const client = require('../providers/jira');
const asyncMiddleware = require('../middleware/async');

module.exports.createIssue = asyncMiddleware(async (req, res) => {
  const { projectId, assignee } = req.body;
  if (!projectId || !assignee) {
    throw new Error('Project id and Assignee are required in the body.');
  }

  const project = await client.issues.createIssue({
    fields: {
      project: {
        id: projectId,
      },
      summary: 'Some dummy text for the issue',
      description: 'Some dummy description text.',
      issuetype: {
        name: 'Task', // 'Task', 'Story' etc..
      },
      assignee: {
        id: assignee,
      },
      reporter: {
        id: assignee,
      },
    },
  });
  res.send(project);
});

module.exports.getIssue = asyncMiddleware(async (req, res) => {
  const { id } = req.query;
  if (!id) {
    throw new Error('Issue id or key is required query param.');
  }

  const issue = await client.issues.getIssue({
    issueIdOrKey: id, // 'MNP-1' for example
  });
  res.send(issue);
});
