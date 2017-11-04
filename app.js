module.exports = require('./node_modules/twitter-node-client/lib/Twitter');

const	bodyParser	= require('body-parser'),
		express		= require('express'),
		OAuth2		= require('oauth').OAuth2,
		https		= require('https'),
		app			= express();

//configuration for URL and JSON encoded bodies
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Twitter client congfig
const config = {
	consumerKey: "1hKu0Iv0W3ijYhqIKZ8diTGc7", 
	consumerSecret: "x4LPXRCcJXWJ86NwIbfHcW39hzIR9nBml9keNagB3oZ7HGyC2l" 
};

//Twitter auth
let token = null;
let oauth2 = new OAuth2(config.consumerKey, config.consumerSecret, 'http://api.twitter.com/', null, 'oauth2/token', null);
oauth2.getOAuthAccessToken('', {
	'grant_type' : 'client_credentials'
	}, function(e, access_token){
		token = access_token;
});

app.get("/", function(req, res, err){
	if(err){
		console.log(err);
	}
	res.send("Here's your index route!");
});

app.get("/:query", function(req, res, err){
	let query = req.params.query;
	let options = {
		hostname: 'api.twitter.com',
		path: '/1.1/search/tweets.json?q=' + query,
		headers: {
			Authorization: 'Bearer ' + token
		}
	};
	https.get(options, function(result){
		let buffer = '';
		result.setEncoding('utf8');
		result.on('data', function(data){
			buffer+= data;
		});
		result.on('end', function(){
			let tweets = JSON.parse(buffer);
			res.send(tweets);
		});
	});
});

app.listen(3000, function(){
	console.log("She's serving FACE, on port 3000, honey!");
});
