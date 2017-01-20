var nodemailer = require('nodemailer');

var mailTransport = nodemailer.createTransport('smtps://user%40gmail.com:email_password@smtp.gmail.com');

var mailOptions = {
   from: "Sender Name <tgmilka@yahoo.com>",
   to: "Recipient Name <tgmilka@gmail.com>",
   subject: "Hello World",
   text: "Test email with node.js"
   html: '<b>Test email with node.js</b>'
};


mailTransport.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});





























// // setup e-mail data with unicode symbols
// var mailOptions = {
//     from: '"Fred Foo ?" <foo@blurdybloop.com>', // sender address
//     to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: 'Hello world ?', // plaintext body
//     html: '<b>Hello world ?</b>' // html body
// };

// // send mail with defined transport object
// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);
// });