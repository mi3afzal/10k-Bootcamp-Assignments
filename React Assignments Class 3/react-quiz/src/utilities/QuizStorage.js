const QUIZ_DATA_OBJECT = {
	userAllowedCourses: [
		{
			id: 1,
			userID: 1,
			courseID: [1, 2, 3],
			quizzes: [{ id: 3, marks: null }, { id: 2, marks: null }]
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
			quizID: 1,
			question: "What is true about react?",
			answers: [
				{ id: 1, answer: "React is framework" },
				{ id: 2, answer: "React is machine language" },
				{ id: 3, answer: "React is JS library" }
			],
			correctAns: [3],
			multipleAns: false
		},
		{
			id: 1,
			quizID: 1,
			question: "Data in React is?",
			answers: [
				{ id: 1, answer: "BiDirectional" },
				{ id: 2, answer: "UniDirectional" }
			],
			correctAns: [2],
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

export const removeQuizData = () => {
	localStorage.removeItem(Quiz_KEY);
};

export const getQuizDataByIndex = index => {
	let data = JSON.parse(localStorage.getItem(Quiz_KEY));
	return data[index];
};

// Save default Quiz data into localStorage on first visit
if (!localStorage.getItem(Quiz_KEY)) {
	setQuizData(QUIZ_DATA_OBJECT);
}

// APIs
export const getUserCoursesObj = userID => {
	const dataIndex = getQuizDataByIndex("userAllowedCourses");
	return dataIndex.find(obj => obj.userID === userID);
};

export const getQuizObj = quizID => {
	quizID = Number(quizID);
	const dataIndex = getQuizDataByIndex("quizzes");
	return dataIndex.find(obj => obj.id === quizID);
};

export const getQuestions = quizID => {
	quizID = Number(quizID);
	const dataIndex = getQuizDataByIndex("questions");
	return dataIndex.filter(obj => obj.quizID === quizID);
};

export const updateUserMarks = (userID, quizID, marks) => {
	userID = Number(userID);
	quizID = Number(quizID);
	let data = getQuizData();

	const userIndex = data.userAllowedCourses.findIndex(
		obj => obj.userID === userID
	);
	if (userIndex === -1) return false;

	const quizIndex = data.userAllowedCourses[userIndex].quizzes.findIndex(
		obj => obj.id === quizID
	);

	if (quizIndex === -1)
		data.userAllowedCourses[userIndex].quizzes.push({
			id: quizID,
			marks: marks
		});
	else data.userAllowedCourses[userIndex].quizzes[quizIndex].marks = marks;
	setQuizData(data);
	return true;
};

// quiz Progress storage
const QUIZ_PROGRESS_KEY = "quizProgress_";
export const setQuizProgressData = (quizID, quizProgressDataObj) => {
	localStorage.setItem(
		QUIZ_PROGRESS_KEY + quizID,
		JSON.stringify(quizProgressDataObj)
	);
};

export const getQuizProgressData = quizID => {
	return JSON.parse(localStorage.getItem(QUIZ_PROGRESS_KEY + quizID));
};
