import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";

/*
Use React and the data below to display a list of people alongside their books they like.

Fazal Deen's likes a Imran Series book.

For detailed instructions, refer to instructions.md.
*/

const chart = [
	{
		id: 1,
		peepsID: "1",
		bookLikedID: "1"
	},
	{
		id: 2,
		peepsID: "2",
		bookLikedID: "1"
	},
	{
		id: 3,
		peepsID: "4",
		bookLikedID: "5"
	},
	{
		id: 4,
		peepsID: "5",
		bookLikedID: "2"
	},
	{
		id: 5,
		peepsID: "3",
		bookLikedID: "5"
	},
	{
		id: 6,
		peepsID: "6",
		bookLikedID: "4"
	}
];

const peeps = {
	1: {
		id: 1,
		name: "Fazal Deen",
		readerCategory: "champ"
	},
	2: {
		id: 2,
		name: "Irfan",
		readerCategory: "rising-star"
	},
	3: {
		id: 3,
		name: "Muneeb",
		readerCategory: "beginner"
	},
	4: {
		id: 4,
		name: "Osama",
		readerCategory: "champ"
	},
	5: {
		id: 5,
		name: "Najam",
		readerCategory: "champ"
	},
	6: {
		id: 6,
		name: "Aamir",
		readerCategory: "beginner"
	}
};

const books = {
	1: {
		id: 1,
		name: "Imran Series"
	},
	2: {
		id: 2,
		name: "Harry Potter"
	},
	3: {
		id: 3,
		name: "I Am Malala"
	},
	4: {
		id: 4,
		name: "Bang-e-Dara by Allama Iqbal"
	},
	5: {
		id: 5,
		name: "Jokes 101"
	}
};

class App extends Component {
	render() {
		var booksLikedBy = [];
		chart.map(rec => {
			//console.log(rec.bookLikedID, rec.peepsID, booksLikedBy);
			return (
				(!booksLikedBy[rec.bookLikedID])? booksLikedBy[rec.bookLikedID] = [rec.peepsID] : booksLikedBy[rec.bookLikedID].push(rec.peepsID)
			)
		});
		console.log(booksLikedBy);
		return (
			<div>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">
						React Bootcamp - Train the Trainer - Coding Practice
					</h1>
				</header>
				<h2>Book People liked</h2>
				<Books booksLikedBy={booksLikedBy} peeps={peeps} books={books} />
			</div>
		);
	}
}

class Books extends Component {
	render() {
		const {booksLikedBy, peeps, books} = this.props;
		return(
			<div>
			{
				Object.values(books).map(book => {
					return (
						<div key={book.id}>
							<h2>{book.name}</h2>
							{
								(booksLikedBy[book.id])
								? 
								<div>
									<p>Liked By:</p>
									<PeepsList bookLikedBy={booksLikedBy[book.id]} peeps={peeps} />
								</div>
								:
								<p>None of the peeps in the chart liked this book</p>
							}							
						</div>
					)
				})
			}
			</div>
		);
	}
}

function PeepsList(props){
	return(
		<ul>
			{
				//console.log(props.bookLikedBy)
				props.bookLikedBy.map(peepId => <li key={peepId}>{props.peeps[peepId].name}</li>)
			}
		</ul>
	);
}


export default App;
