var express = require('express');
var router = express.Router();

const datosSController = require("../controllers/datosServ.controller.js");

/* GET datos. */
router.post('/', datosSController.findAll);

module.exports = router;
