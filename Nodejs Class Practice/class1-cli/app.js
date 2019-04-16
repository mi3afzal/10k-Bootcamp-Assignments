const yargs = require("yargs");
const fs = require("fs");

yargs.command({
	command: "delete",
	describe: "",
	builder: {
		title: {
			describe: "",
			alias: "t",
			demandOption: false,
			type: "string",
			default: ".."
		}
	},
	handler: argv => {
		console.log("Handler function");
	}
});

yargs.parse();

const myObj = {
	name: "Irfan",
	city: "FSD",
	class: "NodeJS"
};
function write_file(data) {
	const jdata = JSON.stringify(data);
	fs.writeFileSync("data.txt", jdata);
}
//write_file(myObj);

function read_file() {
	const jdata = fs.readFileSync("data.txt");
	const data = JSON.parse(jdata);
	console.log(data);
	return data;
}

var data = [];
try {
	read_file();
} catch (error) {
	console.log("Error Reading File: ", error);
}
