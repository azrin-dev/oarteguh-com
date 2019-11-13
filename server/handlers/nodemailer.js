"use strict";
const nodemailer = require('nodemailer');
const pug = require('pug');
const express = require('express');
const path = require('path');
const app = express();

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});
const from = 'Oar Teguh Admin <admin@oarteguh.com>';

exports.newContactForm = async(options) => {
    const message = {
        from,
        to: `${options.dept}@oarteguh.com`,
        subject: `New Contact Form from ${options.name}`,
        html: `  
                     ${options.phone}<br>
                     <p>${options.text}</p>  
               `
    };
    const informAdmin = await transport.sendMail(message)
        .catch(error => { return error });
    if (informAdmin) return informAdmin;
};

exports.authEmail = async(options) => {
    const viewsPath = app.get('views');
    const uri = `localhost:4200/user/register/token/${options.authToken}`;
    let data = {
        title: 'AZRIN.DEV Email Authentication',
        to: options.to,
        uri
    };
    const html = pug.renderFile(viewsPath + '/email/auth-email.pug', data);
    let message = {
        from,
        to: options.to,
        subject: 'AZRIN.DEV Email Authentication',
        html
    };
    const email = await transport.sendMail(message)
        .catch(error => { return error });
    if (email) return email;
};