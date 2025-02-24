const express = require('express');
//const cors = require('cors'); 
const app = express();
const retailBusinessRouter = require('./routes/retailBusiness/index');
const retailBusinessLoginRoute = require('./controllers/login/retailBusinessLogin')
const productRoute = require('./routes/product/index')
const orderRoute = require('./routes/order/index')
const customerRoute = require('./routes/customer/index')
const staffRoute = require('./routes/staff/index') // Add this line
const staffLoginRoute = require('./controllers/loginStaff/loginStaff')

const sequelize = require('/database/sequelize')
require('dotenv').config();


//app.use(cors()); // Enable CORS
app.use(express.json()); // **Parse JSON requests**
app.use(express.urlencoded({ extended: true })); // **Parse URL-encoded data**

// Middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  next();
});

app.options('_', (req, res) => {
  res.header('Access-Control-Allow-Origin', '_');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.status(200).end();
});

// Routes
app.use('/retail-business', retailBusinessRouter);
app.use('/', retailBusinessLoginRoute);
app.use('/', productRoute);
app.use('/', orderRoute);
app.use('/', customerRoute);
app.use('/', staffRoute); // Add this line
app.use('/', staffLoginRoute); 

// Models
const RetailBusiness = require('./models/RetailBusiness');
const Staff = require('./models/Staff'); // Add this line

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Endpoints

// Start Server
const port = 5000;
sequelize.authenticate().then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}).catch((error) => {
  console.error('error connecting to database', error)
})

//npx nodemon index.js