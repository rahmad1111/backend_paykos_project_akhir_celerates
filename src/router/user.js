const { findAllUsers, findUsersByid, createUsers, deleteUser, updateUser} = require('../controller/controllerUsers')
const router = require('express').Router();
const AuthMiddle= require('../middleware(wait)/VerifyToken.js');
// Users
router.post('/data',AuthMiddle, findAllUsers)
router.get('/:id',AuthMiddle, findUsersByid)
router.post('/',AuthMiddle, createUsers)
router.patch('/:id',AuthMiddle, updateUser)
router.delete('/:id',AuthMiddle, deleteUser)

module.exports = router;