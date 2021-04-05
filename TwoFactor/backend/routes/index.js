const router = require('express').Router();
const { getAll, register, verify } = require('../controllers/user');

router.route('/users').get(getAll);
router.route('/register').post(register);
router.route('/verify').post(verify);

module.exports = router;
