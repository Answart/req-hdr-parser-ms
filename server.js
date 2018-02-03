'use strict';

const express  = require('express'),
  app          = express(),
  port         = process.env.PORT || 8000,
  routes       = require('./app/routes.js');


app.use('/public', express.static(__dirname + '/public'));

app.use(routes);


app.listen(port, function() {
  console.log('Server running on port ' + port);
});
