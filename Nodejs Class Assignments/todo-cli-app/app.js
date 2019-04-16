const yargs = require("yargs");
const { addTask, listTasks, getTask, deleteTask } = require("./todo");

debugger;

yargs.command({
	command: "add",
	describe: "Add Todo Task",
	builder: {
		title: {
			describe: "Title for todo task",
			alias: "t",
			demandOption: true,
			type: "string"
			//default: ".."
		},
		description: {
			describe: "Description for todo task",
			alias: "d",
			demandOption: true,
			type: "string"
		}
	},
	handler: ({ title, description }) => {
		addTask(title, description);
	}
});

yargs.command({
	command: "list",
	describe: "List all Todo Task",
	handler: () => {
		listTasks();
	}
});

yargs.command({
	command: "get",
	describe: "Get Todo Task",
	builder: {
		title: {
			describe: "Todo task title to get",
			alias: "t",
			demandOption: true,
			type: "string"
		}
	},
	handler: ({ title }) => {
		getTask(title);
	}
});

yargs.command({
	command: "delete",
	describe: "Delete Todo Task",
	builder: {
		title: {
			describe: "Todo task title to delete",
			alias: "t",
			demandOption: true,
			type: "string"
		}
	},
	handler: ({ title }) => {
		deleteTask(title);
	}
});

yargs.parse();
