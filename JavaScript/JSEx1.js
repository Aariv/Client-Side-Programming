// Create object via object initializer
var request = {
	type: 'POST', 
	url: 'apple.php'
};

// Use dot operator to access the properties
console.log(request.url);
console.log(request.type);

// Updatig properties values
request.url = 'orange.php';
console.log(request.url);

// the index operator to access the properties
console.log(['type']);
console.log(['url']);

request['url'] = 'banana.php';
console.log(request['url']);

var key = 'url';
console.log(request[key]);

// Check if property exists
console.log(request.hasOwnProperty('type'));
console.log(request.hasOwnProperty('url'));

delete request.type;
console.log(request.hasOwnProperty('type'));
console.log(request.hasOwnProperty('url'));

