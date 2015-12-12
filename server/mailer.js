var nodemailer = Meteor.npmRequire('nodemailer');

Meteor.startup(function(){
    console.log('Starting the Meteor Up.');
});

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'dinebellavitawebmailer@gmail.com',
        pass: 'BellaVita1'
    }
});



Router.route('/contact', {where: 'server'}).post(function(){
    var request = this.request.body;
    var to = request.to, subject = request.subject, body = request.body;
    sendMail(to, subject, body);
    var json = {"result":"success"}; // what ever data you want to return
    this.response.setHeader('Content-Type', 'application/json');
    this.response.end(JSON.stringify(json));
});

function sendMail(to, subject, body){
    transporter.sendMail({
        from: 'mailer@dinebellavita.com',
        to: to,
        subject: subject,
        text: body
    });
}



