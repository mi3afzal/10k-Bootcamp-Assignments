var request = require("request");

const word = "chai";
const options = {
	url: "https://od-api.oxforddictionaries.com:443/api/v1/entries/en/" + word,
	headers: {
		Accept: "application/json",
		app_id: "3dc72b14",
		app_key: "244a64bfafebf302457b4a0362dc5ed0"
	}
};

request(options, (error, respose) => {
	console.log("error:", error);
	//console.log("Response:", respose);
	console.log("StatusCode:", respose && respose.statusCode);
	console.log("Response Body:", respose && respose.body);
});
