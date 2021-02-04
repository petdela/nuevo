var express = require('express');
const nodemailer = require('nodemailer');
let fs = require('fs');
var router = express.Router();


router.post('/', (req, res) => {

    console.log(req.body);

    let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dmc.mailsender@gmail.com', // generated ethereal user
      pass: 'Hola1234', // generated ethereal password
    }
  });

    const mailOptions = {
        from: 'dmc.mailsender@gmail.com',
        to: req.body.users,
        subject: req.body.asunto,
        text: req.body.contenido,
        attachments: [
            {
                filename: req.body.adjunto,
                content: fs.createReadStream(req.body.adjunto)
            }
        ]
    };


    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

});




router.post('/contactus', (req, res) => {
     console.log(req.body);
     var contenidox = 'Nombre: ' + req.body.name + "\nCorreo: " + req.body.email + "\nTema: " + req.body.subject + "\nMensaje: " + req.body.message;

    let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dmc.mailsender@gmail.com', // generated ethereal user
      pass: 'Hola1234', // generated ethereal password
    }
  });

    const mailOptions = {
        from: 'dmc.mailsender@gmail.com',
        to: 's.mendoza99@outlook.com, petterdelacruz99@outlook.com',
        subject: 'Nuevo Contacto!',
        text: contenidox
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

})

module.exports = router;

