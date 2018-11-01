const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const clientsApi = require('./routes/clientsApi.js')

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/clients', clientsApi);

app.listen(8000, () => {
  console.log("Server started on port " + 8000);
});