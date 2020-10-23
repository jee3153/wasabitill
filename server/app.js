const express = require('express');

const app = express();
const cors = require('cors'); // req.body
const products = require('./routes/products');

/* MIDDLEWARE */
app.use(cors()); // connecting with client-side
app.use(express.json()); // allows us to access to access the req.body

/* ROUTES */

app.use('/products', products);

app.get('/', (req, res) => {
  res.status(200).send('Hello world!');
});

module.exports = app;
