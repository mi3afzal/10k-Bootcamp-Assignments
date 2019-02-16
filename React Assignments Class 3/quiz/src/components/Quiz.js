import React, { Component } from "react";
import { loginUser } from "../utilities/AuthStorage";
import { getQuizData, getUserCoursesObj } from "../utilities/QuizStorage";

class Quiz extends Component {
	constructor(props) {
		super(props);
		this.state = {
			...getQuizData(),
			currentQuizId: this.props.match.params.quizId,
			quizProgress: 0,
			quizScore: 0
		};
	}
	render() {
		const currentUser = loginUser();
		const { courses, quizzes } = getQuizData();
		const allowedCourses = getUserCoursesObj(currentUser.id).courseID;
		console.log(this.props);
		console.log(this.state);

		return (
			<div>
				<h3>{this.props.match.params.quizId} - </h3>
			</div>
		);
	}
}

export default Quiz;
