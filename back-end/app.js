const express = require('express');
const cors = require('cors');
const app = express();
const snackController = require('./controllers/snackController');

app.use(cors());
app.use(express.json());

app.use('/snacks', snackController);

app.get('/', (req, res) => {
  res.send("Get Snack'n at Snack-a-log!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;