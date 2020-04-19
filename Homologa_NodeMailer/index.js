const NodeMailer = require('nodemailer')
const Email = require('email-templates');

const emailData = NodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'email', // generated ethereal user
        pass: 'senha' // generated ethereal password
    }
})

const email = new Email({
    message: {
        from: 'niftylettuce@gmail.com'
    },
    // uncomment below to send emails in development/test env:
    send: true,
    transport: emailData,
    views: {
        options: {
            //view template Ejs
            extension: 'ejs'
        }
    }
});

email.send({
    template: 'mars',
    message: {
        to: 'diegomagasouza@gmail.com'
    },
    locals: {
        name: 'Elon'
    }
})
    .then(console.log)
    .catch(console.error);