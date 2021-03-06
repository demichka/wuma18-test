// Require the express module
const Sass = require('./sass');
const config = require('./config.json');
const express = require('express');
// Create a new web server
const app = express();
// Tell the web server to serve files
// from the www folder
app.use(express.static('www'));
// Start the web server on port 3000
app.listen(3004,() => console.log('Listening on port 3004'));
// start the sass compiler
for (let conf of config.sass) {
    new Sass(conf);
  }