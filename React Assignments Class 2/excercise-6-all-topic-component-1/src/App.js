import React from "react";
import "./App.css";
import Header from "./Header";
import Form from "./Form";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Form />
			</div>
		);
	}
}

export default App;
