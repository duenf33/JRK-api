const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');

require('dotenv').config();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/contact', async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'johnson.gregory.b@outlook.com', // Change to your recipient
    from: '3531op@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
      res.json('Email sent');
    })
    .catch((err) => {
      console.error(JSON.stringify(err));
    });
});

module.exports = router;
