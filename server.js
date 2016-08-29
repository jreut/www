const log = require('util').debuglog('server');
const express = require('express');
const app = express();
const port = (process.env.PORT !== undefined) ? process.env.PORT : 3000;

app.use(express.static('dist'));
app.listen(port, function() {
  log('Listening on ' + port + '.');
});
