import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";

class Router extends Component {
	state = {
		login: JSON.parse(localStorage.getItem("logedinUser")) ? true : false
	};
	render() {
		const { login } = this.state;
		return (
			<BrowserRouter>
				<div>
					{login && <Navbar />}
					<Switch>
						<PrivateRoute
							path="/dashboard"
							login={login}
							component={Dashboard}
						/>
						<Route path="/" exact component={Login} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

const PrivateRoute = ({ component: Component, login, ...rest }) => {
	return (
		<Route
			{...rest}
			exact
			render={props =>
				login ? <Component {...props} /> : <Redirect to="/" />
			}
		/>
	);
};

const Navbar = () => {
	return (
		<div>
			<strong>Quiz App</strong>

			<ul>
				<li>
					<Link to="/dashboard">Home</Link>
				</li>
				<li>
					<Link to="/about">Exams History</Link>
				</li>
				<li>
					<Link to="/logout">Logout</Link>
				</li>
			</ul>

			<hr />
		</div>
	);
};

export default Router;
