const DatosS = require("../collections/datos.model");
var mongoose = require('mongoose');
const nodemailer = require("nodemailer");
let fs=require("fs");

// Retrieve all Usuarios from the database.
exports.findAll = (req, res) => {
    
    DatosS.find({'Nombre' : String(req.body.nombre)}, (err, docs) => {
    	 let transporter = nodemailer.createTransport({
    		service: 'gmail',
    		auth: {
     	 user: 'dmc.mailsender@gmail.com', // generated ethereal user
     	 pass: 'Hola1234', // generated ethereal password
    	}
  	});
  	
  	const mailOptions = {
        from: 'dmc.mailsender@gmail.com',
        to: 'petterdelacruz99@outlook.com',
        subject: 'Reporte',
        text: 'Adjunto el JSON',
        attachments: [
            {
                filename: "reporte.json",
                content: String(docs),  //JSON.Stringify(docs),
                contentType: 'text/plain' 
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
    })
};

