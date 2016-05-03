var nodemailer = require('nodemailer'),
	config	   = require('../config'),
	log		   = require('../util/log')(module);

var transport = nodemailer.createTransport(config.get('mail'));

function sendMail(mailOptions) {
	validate(mailOptions);

	transport.sendMail(mailOptions, (err) => {
		if (err) log.error(err);
	});
}

function validate(mailOptions) {
	mailOptions.from ||  new Error('Missing from option'); 
	mailOptions.to ||  new Error('Missing to option'); 
	mailOptions.subject ||  new Error('Missing subject option'); 
	mailOptions.text 
	|| mailOptions.html
	||  new Error('Missing text or html options'); 
}

module.exports = sendMail;
