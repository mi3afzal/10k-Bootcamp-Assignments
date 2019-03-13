import React, { Component } from "react";
import List from "./List";
import { connect } from "react-redux";
import {
	createMovieAction,
	toggleMovieAction,
	deleteMovieAction
} from "../actions/movies";

class Movies extends Component {
	render() {
		return (
			<div>
				<h1>Movies to watch</h1>
				<input
					id="movie_input"
					type="text"
					placeholder="Type movie name here."
				/>
				<button id="movie_button" onClick={this.props.add_item}>
					Add Movie
				</button>
				<List
					items={this.props.movie}
					toggle={this.props.toggle_item}
					delete={this.props.delete_item}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		movie: state.movie
	};
};
const mapDispatchToProps = dispatch => ({
	add_item: () => {
		const input = document.getElementById("movie_input");
		const value = input.value;
		if (value === "") {
			input.focus();
			alert("Please enter movie name");
			return false;
		}
		input.value = "";

		dispatch(createMovieAction(value));
	},
	delete_item: id => {
		dispatch(deleteMovieAction(id));
	},
	toggle_item: id => {
		dispatch(toggleMovieAction(id));
	}
});

//export default Movies;
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Movies);
