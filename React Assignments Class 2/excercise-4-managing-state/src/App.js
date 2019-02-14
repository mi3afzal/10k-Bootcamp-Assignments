import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {
	
	state = {
		numQuestions:0,
		numCorrect:0
	}

	markAnswer = (clickedValue, answer) => {
		console.log(clickedValue, answer);
		this.setState( (previousState) => {
			return(
				(answer === clickedValue) 
				? {numQuestions: previousState.numQuestions+1, numCorrect: previousState.numCorrect+1}
				: {numQuestions: previousState.numQuestions+1}
			)
		});
	}

	render() {
		const number1 = Math.floor(Math.random() * 100);
		const number2 = Math.floor(Math.random() * 100);
		const number3 = Math.floor(Math.random() * 100);
		const proposedAnswer = Math.floor(Math.random() * 3) + number1 + number2 + number3;
		const answer = (proposedAnswer === (number1 + number2 + number3)) ? true : false;
		
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">React Bootcamp - Train the Trainer - Coding Practice</h1>        
				</header>
			
				<div className="game">
					<h2>ADD THE NUMBERS GAME</h2>
					<div className="equation">
						<p className="text">{`${number1} + ${number2} + ${number3} = ${proposedAnswer}`}</p>
					</div>
					<button onClick={() => this.markAnswer(true, answer)}>True</button>
					<button onClick={() => this.markAnswer(false, answer)}>False</button>

					<p className="text">
						You have answered {this.state.numCorrect} question correctly out of total {this.state.numQuestions} questions.
					</p>
				</div>
			</div>
		);
	}
}

export default App;
