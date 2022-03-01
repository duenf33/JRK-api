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
    html:
      '<div> Customers First Name: ' +
      firstName +
      '</div>' +
      '<div> Customers Last Name: ' +
      lastName +
      '</div>' +
      '<div> Users email: ' +
      email +
      '</div>' +
      '<div> Comment or Concern: ' +
      commentOrConcern +
      '</div>',
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
