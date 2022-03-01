const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/contact', async (req, res) => {
  const { firstName, lastName, email, commentOrConcern } = req.body;
  try {
    const userData = {
      firstName,
      lastName,
      email,
      commentOrConcern,
    };
    console.log(`====== userData ======`);
    console.log(userData);
    res.json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

module.exports = router;
