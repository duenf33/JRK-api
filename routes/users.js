const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');

require('dotenv').config();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/contact', (req, res) => {
  const { firstName, lastName, email, commentOrConcern } = req.body;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'johnson.gregory.b@outlook.com', // Change to your recipient
    from: '3531op@gmail.com', // Change to your verified sender
    subject: 'Message from user JRK site.',
    html: `<div> Name: ${firstName} ${lastName}</div>
           <div> Email: ${email}</div>
           <div> Message: ${commentOrConcern}\n</div>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('msg:', msg);
      console.log('Email sent');
      res.json('email sent');
    })
    .catch((err) => {
      console.error(JSON.stringify(err));
    });
});

module.exports = router;
