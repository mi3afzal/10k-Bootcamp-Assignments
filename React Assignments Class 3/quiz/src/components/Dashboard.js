import React, { Component } from "react";
import { loginUser } from "../utilities/LoginLocalStorage";

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: loginUser(),
			courses: [
				{ id: 1, title: "React" },
				{ id: 2, title: "NodeJS" },
				{ id: 3, title: "Kubernetes" }
			],
			quizzes: [
				{
					id: 1,
					courseID: 1,
					quiz_title: "React quiz 1",
					proctKey: "react1"
				},
				{
					id: 2,
					courseID: 1,
					quiz_title: "React quiz 2",
					proctKey: "react2"
				},
				{
					id: 3,
					courseID: 1,
					quiz_title: "React quiz 3",
					proctKey: "react3"
				},
				{
					id: 4,
					courseID: 2,
					quiz_title: "NodeJS quiz 1",
					proctKey: "node1"
				},
				{
					id: 5,
					courseID: 2,
					quiz_title: "NodeJS quiz 2",
					proctKey: "node2"
				},
				{
					id: 6,
					courseID: 3,
					quiz_title: "Kubernetes quiz 1",
					proctKey: "kube1"
				}
			],
			userAllowedQuizzes: [
				{
					id: 1,
					userID: 1,
					courseID: [1, 2, 3],
					quizzes: [{ id: 1, marks: null }, { id: 2, marks: null }]
				},
				{
					id: 2,
					userID: 2,
					courseID: [1, 2],
					quizzes: [{ id: 1, marks: null }, { id: 2, marks: null }]
				}
			]
		};
		/* if (this.props.location.state) {
			if (!this.props.location.state.isAuth) {
				this.props.history.push("/");
			}
		} else {
			this.props.history.push("/");
		} */
	}
	render() {
		const { courses } = this.state;
		return (
			<div>
				<h1>Dashboard</h1>
				<h3>Courses</h3>
				<ul>
					{courses.map(course => (
						<li key={course.id}>{course.title}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Dashboard;
