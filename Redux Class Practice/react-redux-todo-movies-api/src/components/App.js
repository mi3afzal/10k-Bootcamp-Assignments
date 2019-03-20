import React, { Component } from "react";
import Tasks from "./Tasks";
import Movies from "./Movies";
import { connect } from "react-redux";
import { fetchInitialData } from "../actions";

class App extends Component {
	componentDidMount() {
		//this.props.store.subscribe(() => this.forceUpdate());
		this.props.dispatch(fetchInitialData());
	}
	render() {
		//const { task, movie } = this.props.store.getState();
		return (
			<div className="App">
				<h1>Todo Movies App</h1>
				{/* <Tasks task={task} dispatch={this.props.store.dispatch} /> */}
				<Tasks />
				<hr />
				{/* <Movies movie={movie} dispatch={this.props.store.dispatch} /> */}
				<Movies />
			</div>
		);
	}
}

export default connect()(App);

/*
Redux 
1) store
2) state
3) reducers 
4) actions
5) dispatch
6) listeners 
7) subscribe

Store holds global state.
any user action invoke dispatch function of store.
dispatch function send action and current state to the reducers.
reducers update state based on rules described in reducer function and 
return midified state. which will replace global state of store.
then dispatch function call all listener functions and pass them updated state.
these listener functions could be added through subscribe function


React-Redux
1) Provider -> make store available to every main and child component
2) connect -> wrappe component.
	i) mapStateToProps -> send state to component on every change.
	ii) mapDispatchToProps -> add dispatch to component.


Redux-thunk
1) add thunk as middleware 
2) add data_api to index file. so we can use it as API in js code.
3) create a high order function which will get responce from API and dispatch action.
	thunk as a middleware will handle this high order function
4) handle dispatched action in reducers.

*/
