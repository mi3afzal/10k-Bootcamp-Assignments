import React, { Component } from "react";
import Input from "./Input";
import "../css/Login.css";
import { validateForm } from "../utilities/Helper";
import { USERS_OBJECT, login } from "../utilities/AuthStorage";

class Login extends Component {
	constructor(props) {
		super(props);

		if (JSON.parse(localStorage.getItem("logedinUser"))) {
			this.props.history.push("/dashboard");
		}

		this.state = {
			users: USERS_OBJECT,
			username: "",
			password: "",
			isAuth: false,
			currentUser: null,
			errors: {
				hasError: false,
				errorsObj: {},
				serverError: ""
			}
		};
	}

	onChange = event => {
		const { errors, username, password } = this.state;
		this.setState({
			[event.target.name]: event.target.value,
			errors: validateForm(
				"each",
				{ username, password },
				event.target.name,
				errors
			)
		});
	};

	validate_old = () => {
		const { errors, username, password } = this.state;
		errors.hasError = false;

		if (username.length < 3) {
			errors.hasError = true;
			let message = "Username can't be less than 4 characters";
			errors.errorsObj["username"]
				? (errors.errorsObj["username"].message = message)
				: (errors.errorsObj["username"] = { message: message });
		} else {
			delete errors.errorsObj["username"];
		}

		if (password.length < 5) {
			errors.hasError = true;
			let message = "Password can't be less than 5 characters";
			errors.errorsObj["password"]
				? (errors.errorsObj["password"].message = message)
				: (errors.errorsObj["password"] = { message: message });
		} else {
			delete errors.errorsObj["password"];
		}

		return errors.hasError
			? errors
			: {
					hasError: false,
					errorsObj: {},
					serverError: ""
			  };
	};

	onSubmit = event => {
		event.preventDefault();
		const { users, errors, username, password } = this.state;

		//const validate = validate();
		const validate = validateForm("all", { username, password });
		if (validate.hasError) {
			this.setState({ errors: validate });
			return;
		}

		var verifiedUsers = users.filter(user => {
			return user.username === username && user.password === password;
		});

		if (verifiedUsers.length === 1) {
			login(verifiedUsers[0]);
			this.props.history.push("/dashboard");
			/* this.props.history.push({
				pathname: "/dashboard",
				state: { isAuth: true }
			}); */
		} else {
			errors.serverError = "Wrong Credentials";
			this.setState({ errors });
			return;
		}
	};

	render() {
		return (
			<div className="login-form-wrapper">
				<form onSubmit={event => this.onSubmit(event)}>
					<h1>Login</h1>
					{this.state.errors.serverError && (
						<p>
							<strong className="error">
								{this.state.errors.serverError}
							</strong>
						</p>
					)}
					<Input
						type="text"
						value={this.state.username}
						name="username"
						label="Username"
						id="username"
						placeholder="Enter Your username"
						onChange={event => this.onChange(event)}
						errors={this.state.errors}
					/>

					<Input
						type="password"
						value={this.state.password}
						name="password"
						label="Password"
						id="password"
						placeholder="Enter Your password"
						onChange={event => this.onChange(event)}
						errors={this.state.errors}
					/>

					<Input type="submit" value="Login" name="submit" />
				</form>
			</div>
		);
	}
}

export default Login;
