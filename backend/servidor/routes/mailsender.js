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

  // send mail with defined transport object
  /*let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });*/

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

  //console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

});

module.exports = router;

