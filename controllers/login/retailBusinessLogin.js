const express = require('express');
const router = express.Router();
const RetailBusiness = require('../../models/RetailBusiness');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
try {
const { email, password } = req.body;

const retailBusiness = await RetailBusiness.findOne({ where: { email } });

if (!retailBusiness) {
  return res.status(401).json({ message: 'Invalid email or password' });
}

const isPasswordValid = await bcrypt.compare(password, retailBusiness.password);

if (!isPasswordValid) {
  return res.status(401).json({ message: 'Invalid email or password' });
}

const token = jwt.sign({ retailBusinessId: retailBusiness.id }, process.env.SECRET_KEY, { expiresIn: '1h' });

res.json({ token });
console.log('login successful')

} catch (error) {
console.error(error);
res.status(500).json({ message: 'Internal Server Error' });
}
});

module.exports = router;