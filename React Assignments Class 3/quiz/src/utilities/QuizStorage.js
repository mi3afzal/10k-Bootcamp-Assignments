const QUIZ_DATA_OBJECT = {
	userAllowedCourses: [
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
	],
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
	]
};

const Quiz_KEY = "QuizData";

export const setQuizData = quizDataObj => {
	localStorage.setItem(Quiz_KEY, JSON.stringify(quizDataObj));
};

export const getQuizData = () => {
	return JSON.parse(localStorage.getItem(Quiz_KEY));
};

export const getQuizDataByIndex = index => {
	let data = JSON.parse(localStorage.getItem(Quiz_KEY));
	return data[index];
};

export const getUserCoursesObj = userID => {
	const userAllowedCourses = getQuizDataByIndex("userAllowedCourses");
	return userAllowedCourses.filter(userObj => userObj.userID === userID)[0];
};

export const removeQuizData = () => {
	localStorage.removeItem(Quiz_KEY);
};

if (!localStorage.getItem(Quiz_KEY)) {
	setQuizData(QUIZ_DATA_OBJECT);
}
