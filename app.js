"use strict";
const nodemailer = require("nodemailer");
 require('dotenv').config();



const email = process.env.GOOGLE_EMAIL;
const pass = process.env.GOOGLE_PASSWORD;

async function notifyAdmin(){

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    
    user: email,
    pass: pass,
  },
});



  const info = await transporter.sendMail({
    from: email, 
    to: email, 
    subject: "TEST MESSAGE", 
   
    html: `
    <h1>Hello!</h1>
    `,
  });

  console.log("Message sent: %s", info.messageId);
}

async function main() {
    await notifyAdmin()
}

main().catch(console.error);
