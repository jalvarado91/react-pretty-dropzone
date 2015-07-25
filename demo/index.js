'use strict';

require('./main.css');
require('../style.css');

var React = require('react');
var App = require('./app.jsx');

main();

function main() {
  var app = document.createElement('div');
  document.body.appendChild(app);

  React.render(<App />, app);
}
