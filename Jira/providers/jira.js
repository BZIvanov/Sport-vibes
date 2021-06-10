const { Version2Client } = require('jira.js');

module.exports = new Version2Client({
  host: process.env.JIRA_HOST,
  authentication: {
    basic: {
      email: process.env.JIRA_MAIL,
      apiToken: process.env.JIRA_API_TOKEN,
    },
  },
});
