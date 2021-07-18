const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app	  = express();

// Insert web scraping functionality here
app.get('/', function(req, res) {
	let businessName = req.query.name;
	let searchTerm = req.query.search;
	
	let url = 'https://www.yelp.com/biz/' + businessName + '?sort_by=date_desc&q=' + searchTerm;
	
	request(url, function(error, response, html) {
		if(!error) {
			var $ = cheerio.load(html);
			var review = $('#wrap > div.main-content-wrap.main-content-wrap--full > yelp-react-root > div > div.margin-t3__373c0__1l90z.margin-b6__373c0__2Azj6.border-color--default__373c0__2oFDT > div > div > div.margin-b6__373c0__2Azj6.border-color--default__373c0__2oFDT > div > div.arrange-unit__373c0__1piwO.arrange-unit-grid-column--8__373c0__2yTAx.padding-r2__373c0__28zpp.border-color--default__373c0__2oFDT > div:nth-child(6) > section:nth-child(2) > div.css-79elbk.border-color--default__373c0__2oFDT > div > ul > li:nth-child(1) > div > div:nth-child(4) > p').text();
			var json = {
					businessName: businessName,
					searchTerm: searchTerm,
					review: review
			};
			res.send(json);
			console.log(json);
		}
	})
});

// Run app on port 8080
app.listen('8080');

module.exports = app;