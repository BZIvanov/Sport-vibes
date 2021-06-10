const router = require('express').Router();
const {
  getAllProjects,
  getProject,
  createProject,
} = require('../controllers/projects');
const { getAllUsers, getUser } = require('../controllers/users');

// PROJECTS
// https://developer.atlassian.com/cloud/jira/platform/rest/v2/api-group-projects/#api-group-projects
router.get('/get-all-projects', getAllProjects);
router.get('/get-project', getProject);
router.post('/create-project', createProject);

// USERS
// https://developer.atlassian.com/cloud/jira/platform/rest/v2/api-group-users/#api-group-users
router.get('/get-all-users', getAllUsers);
router.get('/get-user', getUser);

module.exports = router;
