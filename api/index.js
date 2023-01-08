require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

// nodemailer transport
let transporter = nodemailer.createTransport({
  host: 'smtp.',
  port: 465,
  secure: true,
  auth: {
    user: '',
    pass: '',
  }
});

// defining email options
let mailOptions = {
  from: '"Your Name" <your-email@example.com>',
  to: 'recipient@example.com',
  subject: 'New Form Submission',
  text: 'A user has submitted the form on your website.',
  html: '<b>A user has submitted the form on your website.</b>'
};

//set up 



//Server start up
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});