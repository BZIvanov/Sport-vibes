const router = require('express').Router();
const { register, verify } = require('../controllers/user');

router.route('/register').post(register);
router.route('/verify').post(verify);

module.exports = router;
