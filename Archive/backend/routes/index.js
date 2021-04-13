const router = require('express').Router();
const { downloadFile } = require('../controllers');

router.get('/download-file', downloadFile);

module.exports = router;
