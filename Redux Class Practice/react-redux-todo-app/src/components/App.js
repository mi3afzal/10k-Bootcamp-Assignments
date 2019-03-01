import React, { Component } from "react";
import Tasks from "./Tasks";
import Movies from "./Movies";

class App extends Component {
	componentDidMount() {
		this.props.store.subscribe(() => this.forceUpdate());
	}
	render() {
		const { task, movie } = this.props.store.getState();
		return (
			<div className="App">
				<h1>Todo Movies App</h1>
				<Tasks task={task} dispatch={this.props.store.dispatch} />
				<hr />
				<Movies movie={movie} dispatch={this.props.store.dispatch} />
			</div>
		);
	}
}

export default App;
