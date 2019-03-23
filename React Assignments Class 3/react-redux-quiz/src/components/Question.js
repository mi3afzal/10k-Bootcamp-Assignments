import React, { Component } from "react";

class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answerID: null,
			errors: {
				hasError: false,
				errorsObj: {},
				serverError: ""
			}
		};
	}

	onChange = event => {
		this.setState({
			answerID: event.target.value
		});
	};

	onSubmit = event => {
		event.preventDefault();
		console.log(this.state);
		const { errors, answerID } = this.state;
		const { question } = this.props;
		let quizScore = Number(this.props.quizScore);

		if (answerID === null) {
			errors.serverError = "Please Select one Option";
			this.setState({ errors });
			return;
		}

		if (question.correctAns.includes(Number(answerID))) quizScore++;
		this.props.updateQuizScore(quizScore);

		errors.serverError = "";
		this.setState({ errors, answerID: null });
	};

	render() {
		const { question } = this.props;
		return (
			<div className="Quiz">
				<form onSubmit={event => this.onSubmit(event)}>
					<div className="Ques" key={question.id}>
						<h3>{question.question}</h3>
						<br />
						{this.state.errors.serverError && (
							<p>
								<strong className="error">
									{this.state.errors.serverError}
								</strong>
							</p>
						)}
						<br />
						{question.answers.map(option => {
							return (
								<div className="radio" key={option.id}>
									<input
										type="radio"
										id={option.id}
										name={question.id}
										value={option.id}
										onChange={event => this.onChange(event)}
									/>
									<label htmlFor={option.id}>
										{option.answer}
									</label>
								</div>
							);
						})}
					</div>

					<button className="Submit" type="submit">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default Question;
