const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
const { default: axios } = require('axios');

require('dotenv').config();

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

router.post('/captcha-verification', async (req, res) => {
  try {
    console.log('req.body.value:', req.body.value);
    const verifyCaptcha = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${req.body.value}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
      }
    );
    console.log('VerifyCaptcha ran');
    console.log(verifyCaptcha);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
