import React, { Component } from "react";
import UserList from "./UserList";

export default class Form extends Component {
	state = {
		value: "",
		itemList: []
	};

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	addNewItem = event => {
		event.preventDefault();
		this.setState(oldState => ({
			itemList: [...oldState.itemList, this.state.value],
			value: ""
		}));
	};

	removeLastItem = event => {
		this.setState(prevState => ({
			itemList: this.state.itemList.slice(0, -1)
		}));
	};

	inputIsEmpty = () => {
		return this.state.value === "";
	};

	noItemsFound = () => {
		return this.state.itemList.length === 0;
	};

	render() {
		return (
			<div>
				<h2>Players List</h2>

				<form onSubmit={this.addNewItem}>
					<input
						type="text"
						placeholder="Enter User Name"
						value={this.state.value}
						onChange={this.handleChange}
					/>
					<button disabled={this.inputIsEmpty()}>Add Player</button>
				</form>

				<button
					onClick={this.removeLastItem}
					disabled={this.noItemsFound()}
				>
					Delete Player
				</button>

				<UserList itemList={this.state.itemList} />
			</div>
		);
	}
}
