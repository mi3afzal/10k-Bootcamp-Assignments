import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import ChatApp from "./ChatApp";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<ChatApp />
			</div>
		);
	}
}

export default App;
