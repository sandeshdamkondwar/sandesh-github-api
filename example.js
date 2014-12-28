var myModule = require('./sandesh-github-api');

myModule.getRepositories("sandeshdamkondwar", function (repos) {
	console.log(repos);
	console.log("There are " + repos.length + " repos.");
});