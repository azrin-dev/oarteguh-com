"use strict";
const nodemailer = require('nodemailer');
const pug = require('pug');
const express = require('express');
const path = require('path');

const transport = nodemailer.createTransport({
   host: "smtp.mailtrap.io",
   port: 2525,
   auth: {
     user: "8209f980356b7a",
     pass: "23f1db82635be2"
   }
 });
 const from = 'AZRIN.DEV Admin <admin@azrin.dev>';
 const company = 'azrin.dev';
 const baseUri = 'http://localhost:4200/user/';
 const viewsUri = path.join(__dirname, '../../views');

exports.authEmail = async (options) => {
   
   console.log(viewsUri);
   return viewsUri;



   // let data = {
   //    title: 'AZRIN.DEV Email Authentication',
   //    uri: `${baseUri}authentication/${options.authToken}`
   // };

   // const html = pug.renderFile('', data);
   // console.log(html);

   // let message = {
   //    from,
   //    to       : options.to,
   //    subject  : 'AZRIN.DEV Email Authentication',
   //    html 
   // };
   // const email = await transport.sendMail(message)
   //    .catch(error => {return error});

   // if(email) return email;

};

