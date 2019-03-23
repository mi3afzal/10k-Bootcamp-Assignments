import React, { Component } from "react";
import { loginUser } from "../utilities/AuthStorage";
import ProctKey from "./ProctKey";
import {
	getUserCoursesObj,
	getQuizObj,
	getQuestions,
	updateUserMarks,
	setQuizProgressData,
	getQuizProgressData
} from "../utilities/QuizStorage";
import "../css/Quiz.css";
import Question from "./Question";

class Quiz extends Component {
	constructor(props) {
		super(props);

		const currentUser = loginUser();
		const currentQuizId = this.props.match.params.quizId;

		const quizObj = getQuizObj(currentQuizId);
		const questions = getQuestions(currentQuizId);
		let userQuizObj = getUserCoursesObj(currentUser.id).quizzes.find(
			obj => obj.id === Number(currentQuizId)
		);
		if (userQuizObj === undefined)
			userQuizObj = { id: currentQuizId, marks: null };

		const syncStateObj = getQuizProgressData(currentQuizId);
		const progressObj = {
			quizProgress: 0,
			quizScore: 0,
			proctKeySuccess: false
		};
		if (syncStateObj !== null) {
			progressObj.quizProgress = syncStateObj.quizProgress;
			progressObj.quizScore = syncStateObj.quizScore;
			progressObj.proctKeySuccess = syncStateObj.proctKeySuccess;
		}

		this.state = {
			currentUser,
			currentQuizId,
			userQuizObj,
			quizObj,
			questions,
			totalQuestions: questions.length,
			...progressObj
		};
	}

	proctKeySuccessfull = () => {
		const { currentQuizId, quizScore, quizProgress } = this.state;
		setQuizProgressData(currentQuizId, {
			quizScore,
			proctKeySuccess: true,
			quizProgress
		});

		this.setState({ proctKeySuccess: true });
	};

	updateQuizScore = score => {
		const {
			currentUser,
			currentQuizId,
			quizProgress,
			userQuizObj,
			totalQuestions,
			proctKeySuccess
		} = this.state;
		if (totalQuestions === quizProgress + 1) {
			userQuizObj.marks = score;
			updateUserMarks(currentUser.id, currentQuizId, score);
		}

		this.setState(prevState => ({
			quizScore: score,
			quizProgress: prevState.quizProgress + 1,
			userQuizObj
		}));

		setQuizProgressData(currentQuizId, {
			quizScore: score,
			proctKeySuccess,
			quizProgress: quizProgress + 1
		});
		//console.log(this.state);
	};

	render() {
		const {
			userQuizObj,
			quizObj,
			questions,
			totalQuestions,
			quizProgress,
			quizScore,
			proctKeySuccess
		} = this.state;
		//console.log(this.props);
		//console.log(this.state);

		const showResult = userQuizObj && userQuizObj.marks !== null;
		const showKeyInput =
			(!userQuizObj || userQuizObj.marks === null) && !proctKeySuccess;
		return (
			<div>
				<h1>
					{quizObj.id} - {quizObj.quiz_title}
				</h1>
				{showResult && (
					<DisplayResult
						userQuizObj={userQuizObj}
						totalQuestions={totalQuestions}
					/>
				)}
				{showKeyInput && (
					<ProctKey
						userQuizObj={userQuizObj}
						quizKey={quizObj.proctKey}
						proctKeySuccessfull={this.proctKeySuccessfull}
					/>
				)}
				{proctKeySuccess &&
					!showResult &&
					questions[quizProgress] !== undefined && (
						<Question
							question={questions[quizProgress]}
							quizScore={quizScore}
							updateQuizScore={this.updateQuizScore}
						/>
					)}

				{proctKeySuccess && !showResult && questions.length === 0 && (
					<div>
						<p>Questions are not available for this quiz yet</p>
					</div>
				)}
			</div>
		);
	}
}

const DisplayResult = props => {
	return (
		<div className="result">
			<h2>You have completed the Quiz</h2>
			<h2>
				Your score is {props.userQuizObj.marks} out of
				{props.totalQuestions}
			</h2>
		</div>
	);
};

export default Quiz;
