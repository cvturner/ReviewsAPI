const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app	  = express();

// Insert web scraping functionality here
app.get('/', function(req, res) {
	
});

// Run app on port 8080
app.listen('8080');

module.exports = app;