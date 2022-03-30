require('dotenv').config();
const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

const port = process.env.PORT || 7000;
//database
require('./db/db');

const router = require('./router/router');
app.use('/', router);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.listen(port, () => {
  console.log(`port is listen at ${port}`);
});
