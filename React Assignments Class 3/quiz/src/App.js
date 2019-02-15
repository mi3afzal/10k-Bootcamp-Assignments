import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Router from "./Routes";

class App extends Component {
	state = {
		users: [
			{ id: 0, username: "admin", password: "irfan" },
			{ id: 1, username: "irfan", password: "admin" }
		],
		isAuth: false,
		currentUser: null,
		courses: [
			{ id: 0, title: "React" },
			{ id: 1, title: "Kubernetes" },
			{ id: 2, title: "NodeJS" }
		],
		quizzes: [
			{
				id: 0,
				courseID: 0,
				quiz_title: "React quiz 1",
				proctKey: null
			}
		],
		questions: [
			{
				id: 0,
				quizID: 0,
				question: "What is true about react?",
				answers: [
					{ id: 0, answer: "React is framework" },
					{ id: 1, answer: "React is machine language" },
					{ id: 2, answer: "React is JS library" }
				],
				correctAns: [2],
				multipleAns: false
			},
			{
				id: 1,
				quizID: 0,
				question: "Data in React is?",
				answers: [
					{ id: 0, answer: "BiDirectional" },
					{ id: 1, answer: "UniDirectional" }
				],
				correctAns: [1],
				multipleAns: false
			}
		],
		userAllowedQuizzes: [
			{
				id: 0,
				userID: 0,
				courseID: [0, 1],
				quizzes: [{ id: 0, marks: null }, { id: 1, marks: null }]
			},
			{
				id: 1,
				userID: 1,
				courseID: [0, 1],
				quizzes: [{ id: 0, marks: null }, { id: 1, marks: null }]
			}
		]
	};
	render() {
		return (
			<div>
				<Router />
			</div>
		);
	}
}

export default App;
