import React, { Component } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../utilities/AuthStorage";
import { getQuizData, getUserCoursesObj } from "../utilities/QuizStorage";

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		/* if (this.props.location.state) {
			if (!this.props.location.state.isAuth) {
				this.props.history.push("/");
			}
		} else {
			this.props.history.push("/");
		} */
	}
	render() {
		const currentUser = loginUser();
		const { courses, quizzes } = getQuizData();
		const allowedCourses = getUserCoursesObj(currentUser.id).courseID;

		//console.log(allowedCourses);

		return (
			<div>
				<h1>Dashboard</h1>
				<h3>Courses</h3>
				<ul>
					{courses
						.filter(course => allowedCourses.includes(course.id))
						.map(course => (
							<li key={course.id}>
								{course.title}
								<ul>
									{quizzes
										.filter(
											quiz => quiz.courseID === course.id
										)
										.map(quiz => (
											<li key={quiz.id}>
												<Link to={"/quiz/" + quiz.id}>
													{quiz.quiz_title}
												</Link>
											</li>
										))}
								</ul>
							</li>
						))}
				</ul>
			</div>
		);
	}
}

export default Dashboard;
