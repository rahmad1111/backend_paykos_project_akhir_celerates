const { findAllBooks, findByid, createBook } = require('../../../controller/controllerBooks');

const router = require('express').Router();

router.get('/books', findAllBooks)
router.get('/books/:id', findByid)
router.post('/books', createBook)

module.exports = router