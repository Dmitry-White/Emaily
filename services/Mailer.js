const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

const keys = require('../config/keys');


class Mailer extends helper.Mail {
    constructor() {
        console.log("!");
    };
};

module.exports = Mailer;
