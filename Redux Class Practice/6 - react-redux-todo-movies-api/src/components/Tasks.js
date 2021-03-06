import React, { Component } from "react";
import List from "./List";
import { connect } from "react-redux";
import {
	createTaskAction,
	toggleTaskAction,
	deleteTaskAction
} from "../actions/tasks";

class Tasks extends Component {
	add_item = () => {
		const input = document.getElementById("task_input");
		const value = input.value;
		if (value === "") {
			input.focus();
			alert("Please enter task");
			return false;
		}
		input.value = "";

		this.props.dispatch(createTaskAction(value));
	};
	delete_item = id => {
		this.props.dispatch(deleteTaskAction(id));
	};
	toggle_item = id => {
		this.props.dispatch(toggleTaskAction(id));
	};

	render() {
		return (
			<div>
				<h1>Tasks to do</h1>
				<input
					id="task_input"
					type="text"
					placeholder="Type movie name here."
				/>
				<button id="task_button" onClick={this.add_item}>
					Add Task
				</button>
				<List
					items={this.props.task}
					toggle={this.toggle_item}
					delete={this.delete_item}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		task: state.task
	};
};
const mapDispatchToProps = dispatch => ({
	dispatch: dispatch
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Tasks);
