import React, { Component } from "react";
import List from "./List";
import {
	createMovieAction,
	toggleMovieAction,
	deleteMovieAction
} from "../actions/movies";

class Movies extends Component {
	add_item = () => {
		const input = document.getElementById("movie_input");
		const value = input.value;
		if (value === "") {
			input.focus();
			alert("Please enter movie name");
			return false;
		}
		input.value = "";

		this.props.dispatch(createMovieAction(value));
	};
	delete_item = id => {
		this.props.dispatch(deleteMovieAction(id));
	};
	toggle_item = id => {
		this.props.dispatch(toggleMovieAction(id));
	};

	render() {
		return (
			<div>
				<h1>Movies to watch</h1>
				<input
					id="movie_input"
					type="text"
					placeholder="Type movie name here."
				/>
				<button id="movie_button" onClick={this.add_item}>
					Add Movie
				</button>
				<List
					items={this.props.movie}
					toggle={this.toggle_item}
					delete={this.delete_item}
				/>
			</div>
		);
	}
}

export default Movies;
