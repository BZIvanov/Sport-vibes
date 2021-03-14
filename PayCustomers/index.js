require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripeRoutes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(stripeRoutes);

app.listen(3100, () => console.log('Listening on port 3100...'));
