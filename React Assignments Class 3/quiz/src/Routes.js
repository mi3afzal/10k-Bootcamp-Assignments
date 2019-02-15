import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { isLogin, logout } from "./utilities/LoginLocalStorage";

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navbar />
					<Switch>
						<PublicRoute
							restricted={true}
							exact
							path="/"
							component={Login}
						/>
						<PrivateRoute
							exact
							path="/dashboard"
							component={Dashboard}
						/>
						<PrivateRoute exact path="/logout" component={Logout} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				isLogin() && restricted ? (
					<Redirect to="/dashboard" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				isLogin() ? <Component {...props} /> : <Redirect to="/" />
			}
		/>
	);
};

const Navbar = () => {
	if (!isLogin()) return "";
	else {
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
	}
};

const Logout = props => {
	logout();
	props.history.push("/");
	return "";
};

export default Router;
