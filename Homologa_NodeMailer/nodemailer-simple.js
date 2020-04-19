//ENVIANDO 2 ARQUIVOS EM ANEXO. UMA IMAGEM E UM PDF.
//COM UMA VIEW EXTERNA REPRESENTANDO O HTML.
//TEMPLATE ENGINE HANDLE BAR


const nodemailer = require("nodemailer");
const path = require('path')
const hbs = require('nodemailer-express-handlebars')

async function main() {

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass // generated ethereal password
        }
    });

    transporter.use('compile', hbs({
        // viewEngine: 'express-handlebars',
        viewEngine: {
            extName: '.hbs',
            partialsDir: 'views',
            layoutsDir: 'views',
            defaultLayout: 'index.hbs',
        },
        viewPath: 'views',
        extName: '.hbs',

    }))

    const messageHTML = '<h1>Teste</h1>'
        + `<img src="cid:nodejs"/>`
        + '<p>that is a text</p> <strong>teste</strong>'

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Diego Souza 👻" <foo@example.com>', // sender address
        to: "diegomagasouza@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        template: 'index'// html: messageHTML
        ,// html body
        attachments: [
            {
                filename: "example.pdf",
                path: path.join(__dirname, 'example.pdf'),
                contentType: "application/pdf"
            },
            {
                filename: 'nodejs.png',
                path: __dirname + '/nodejs.png',
                cid: 'nodejs'
            }],


    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);