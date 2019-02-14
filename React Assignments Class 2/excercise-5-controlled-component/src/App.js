import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {inputValue:''}

	inputHandler = (event) => {
		this.setState({inputValue: event.target.value});
	}
	
	render() {
		return (
		  	<div className="App">
				<header className="App-header">
			  		<img src={logo} className="App-logo" alt="logo" />
			  		<h1 className="App-title">React Bootcamp - Train the Trainer - Coding Excercise</h1>        
				</header>
			
				<div className="container">
			  		<input type="text" placeholder="Write your text here" value={this.state.inputValue} onChange={this.inputHandler} />
			  		<p className="echo">You are saying: {this.state.inputValue}</p>
			  		<p>What ever you type into the input field it should reflect here.</p>
				</div>
		  	</div>
		);
	}
}

export default App;

