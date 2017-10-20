const express = require('express');
const bodyParser = require('body-parser');
let api = require('./expressRoutes');

let app = express();
let port = 3000;

app.use('/api', api);
app.use(bodyParser.json());
app.listen(port, () => {
  console.log('server start # ' + port);
});
