var  https = require("https");

var simpleGithubAPI = {
	getRepositories: function (username, callback) {
		var options = {
			host: "api.github.com",
			path: "/users/" + username + "/repos",
			method: "GET",
			headers : {
		        'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
		    }
		};


		var request = https.request(options, function (response) {
			var body = "";
			response.on('data', function(chunk) {
				body += chunk.toString('utf8');
			});

			response.on('end', function() {
				var repos = [];
				var json = JSON.parse(body);

				json.forEach(function (repo) {
					repos.push({
						name: repo.name,
						// desc: repo.description,
						language: repo.language
					});
				});

				callback(repos);
			});
		});

		request.end();
	},

	getGists: function (username, callback) {
		// TODO: get the result and call callback function passign result as argument
		return[];
	}
};

module.exports = simpleGithubAPI;
