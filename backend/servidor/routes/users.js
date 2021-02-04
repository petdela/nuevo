var express = require('express');
var auth = require('../middleware/auth');
var router = express.Router();

const usersController = require("../controllers/users.controller.js");

//Busqueda
router.get('/', usersController.findAll);
router.get('/:id', usersController.findOne);

//Anadir
router.post('/save', usersController.create);

//Update
router.post('/update', usersController.update);

//Delete
router.post('/delete', usersController.delete);

//authentication
router.post('/auth',usersController.auth);

//router.get('/final', usersController.final);


module.exports = router;