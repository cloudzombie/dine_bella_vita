var nodemailer = Meteor.npmRequire('nodemailer');

Meteor.startup(function(){
    console.log('Starting the Meteor Up.');
});

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'dinebellavitawebmailer@gmail.com',
        pass: process.env.GMAILER_SECRET
    }
});

Meteor.methods({
    'sendEmail': function(subject, body){
        var to = "edwincv0@gmail.com, janismail88@gmail.com";
        sendMail(to, subject, body);
    }
});

function sendMail(to, subject, body){
    transporter.sendMail({
        from: 'mailer@dinebellavita.com',
        to: to,
        subject: subject,
        text: body
    }, function(error, info){
        if (error){
            console.log(error);
        }
    });
}



