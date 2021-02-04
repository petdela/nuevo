var express = require('express');
var router = express.Router();

const clientesController = require("../controllers/clientes.controller.js");

//Busqueda
router.get('/', clientesController.findAll);
router.get('/:correo', clientesController.findOne);

//Anadir
//router.post('/save', usersController.create);

//Update
//router.post('/update', usersController.update);

//Delete
//router.post('/delete', usersController.delete);

//authentication
//router.post('/auth',usersController.auth);

//router.get('/final', usersController.final);


module.exports = router;