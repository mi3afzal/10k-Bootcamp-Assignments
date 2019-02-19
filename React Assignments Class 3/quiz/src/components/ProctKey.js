import React, { Component } from "react";
import Input from "./Input";
import "../css/Login.css";

class ProctKey extends Component {
	constructor(props) {
		super(props);
		this.state = {
			key: "",
			quizKey: this.props.quizKey,
			errors: {
				hasError: false,
				errorsObj: {},
				serverError: ""
			}
		};
	}

	onChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	onSubmit = event => {
		event.preventDefault();
		const { errors, key, quizKey } = this.state;

		if (quizKey !== key) {
			errors.serverError = "Wrong Key";
			this.setState({ errors });
			return;
		}

		errors.serverError = "";
		this.setState({ errors });
		this.props.proctKeySuccessfull();
	};

	render() {
		return (
			<div className="proct-key-form-wrapper">
				<form onSubmit={event => this.onSubmit(event)}>
					<h1>Proctoring Key</h1>
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
						name="key"
						label="key"
						id="key"
						placeholder="Enter key here"
						onChange={event => this.onChange(event)}
						errors={this.state.errors}
					/>

					<Input type="submit" value="Start Quiz" name="submit" />
				</form>
			</div>
		);
	}
}

export default ProctKey;
