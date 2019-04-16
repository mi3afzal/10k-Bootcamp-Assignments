const fs = require("fs");
const chalk = require("chalk");

let data = [];

const isDuplicate = (title, data) => {
	const dataFound = data.find(d => d.title === title);
	return !dataFound ? false : true;
};

const saveData = data => {
	const jsonData = JSON.stringify(data);
	fs.writeFileSync("data.txt", jsonData);
};

const loadData = () => {
	try {
		const jsonData = fs.readFileSync("data.txt");
		return JSON.parse(jsonData);
	} catch (error) {
		console.log("Error Reading File: ", error.message);
		return [];
	}
};

const addTask = (title, description) => {
	data = loadData();
	if (isDuplicate(title, data)) {
		console.log("Task already present in database.");
	} else {
		const newTask = { title, description };
		const newData = [...data, newTask];
		saveData(newData);
		console.log("Task has been saved in database.");
	}
};

const deleteTask = title => {
	data = loadData();
	const newData = data.filter(d => d.title !== title);
	if (newData.length !== data.length) {
		saveData(newData);
		console.log(chalk.bgGreen.bold("Task has been deleted in database."));
	} else {
		console.log(chalk.bgRed.bold("Task not found in database."));
	}
};

const listTasks = () => {
	data = loadData();

	if (data.length > 0) {
		console.log(chalk.white.bgBlue.bold("-- Task List --"));
		data.map(d => {
			console.log(chalk.white.bgBlue.bold(d.title));
			console.log(chalk.blue("	" + d.description));
		});
	} else {
		console.log(chalk.inverse.bold("No tasks to show."));
	}
};

const getTask = title => {
	data = loadData();
	if (data.length === 0) {
		console.log(chalk.inverse.bold("No tasks to show."));
		return true;
	}

	const dataObj = data.find(d => d.title === title);
	if (dataObj) {
		console.log(chalk.white.bgBlue.bold(dataObj.title));
		console.log(chalk.blue("	" + dataObj.description));
	} else {
		console.log(chalk.bgRed.bold("Task not found in database."));
	}
};

module.exports = {
	addTask,
	listTasks,
	getTask,
	deleteTask
};
