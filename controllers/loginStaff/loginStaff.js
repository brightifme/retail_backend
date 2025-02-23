const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Staff = require('../../models/Staff');

router.post('/loginstaff', async (req, res) => {
  try {
    const { email, password } = req.body;
    const staff = await Staff.findOne({
      where: { email },
      attributes: ['id', 'email', 'password', 'retailBusinessId'],
    });

    if (!staff) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isValidPassword = password === staff.password;

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      {
        staffId: staff.id,
        retailBusinessId: staff.retailBusinessId,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '1h',
      }
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;