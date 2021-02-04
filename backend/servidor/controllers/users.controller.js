const db = require("../models");
var CryptoJS = require("crypto-js");
var auth = require('../middleware/auth');
const User = db.user;
const Cliente = db.cliente;
const Op = db.Sequelize.Op;

// Retrieve all Usuarios from the database.
exports.findAll = (req, res) => {
  User.findAll()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

//retrieve one user based on email
exports.findOne = (req, res) => {
    User.findAll({where: {Correo: req.params.id}})
    .then(result => {
         res.json(result);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrio un error"
      });
    });

};

exports.create = (req, res) => {
  if(!req.body.correo || !req.body.nombres || !req.body.apellidos || !req.body.contrasena){
    res.status(400).send({
      message: "Uno de los campos no ha sido incluido"
    });
    return;
  }
  const usuario = {
        Correo: req.body.correo,
        Nombres: req.body.nombres,
        Apellidos: req.body.apellidos,
        Contrasena: CryptoJS.MD5(req.body.contrasena).toString(),
        Rol: 2
    };
  User.create(usuario)
        .then(data => {
            const cliente = {
              Correo_cl: req.body.correo,
              Foto: null
            }
            Cliente.create(cliente)
            .then(data1 => {
              res.redirect('/users');
            })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ha ocurrido un error con la reacion del usuario"
            });
        });
};

exports.update = (req, res) => {
  if(!req.body.nombres || !req.body.apellidos){
    res.status(400).send({
      message: "Uno de los campos no ha sido incluido"
    });
    return;
  }
  User.update({Nombres: req.body.nombres, Apellidos: req.body.apellidos},{where: {Correo: req.cookies.user.replace("%40", "@")}})
    .then(data => {
      res.redirect('http://localhost:4200/Cliente');
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while updating user."
      });
    });
};

//delete user
exports.delete = (req, res) => {
  if(!req.body.correo){
    res.status(400).send({
      message: "Id not included in data. Please try again"
    });
    return;
  }
    User.destroy({
    where: { Correo: req.body.correo}
  }).then(data => {
      res.redirect('/users/1');
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while deleting user."
      });
    });
};

//authenticate

exports.auth = (req, res) => {
   if(!req.body.user || !req.body.password){
    res.redirect('http://localhost:4200/Login');
    return;
   }
   User.findAll({where: {Correo: req.body.user}})
   .then(data =>{
      if( (CryptoJS.MD5(req.body.password).toString().localeCompare(data[0].Contrasena)) == 0 ){
        res.cookie('user', req.body.user, {maxAge: 1000 * 60 * 15})
        if(data[0].Rol == 1){
        	res.redirect('http://localhost:4200/Admin');
        }
        else{
        	res.redirect('http://localhost:4200/Cliente');
        }
      }
      else{
        res.redirect('http://localhost:4200/Login');
      }
   })
   .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while deleting user."
      });
    });
}

