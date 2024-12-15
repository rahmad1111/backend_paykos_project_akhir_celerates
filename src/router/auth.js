const { login, logout } = require('../controller/controllerLogin');
// const verifyToken = require('../middleware(wait)/VerifyToken.js')
const router = require('express').Router();
// router.use(verifyToken)

router.post('/signin', login);
router.delete('/logout', logout);

module.exports = router