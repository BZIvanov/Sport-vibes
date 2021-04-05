require('dotenv').config();
const express = require('express');
require('./db');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use('/api', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
