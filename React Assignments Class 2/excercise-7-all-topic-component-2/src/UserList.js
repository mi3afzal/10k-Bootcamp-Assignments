import React, { Component } from "react";

class UserList extends Component {
	state = {
		hideNumber: false
	};

	handleHide = () => {
		this.setState({ hideNumber: !this.state.hideNumber });
	};

	render() {
		let buttonText = this.state.hideNumber
			? "Show no of games user played"
			: "Hide no of games played by user";

		return (
			<div>
				<p className="items">Players List</p>
				<ul className="item-list">
					{this.props.itemList.map((item, index) => (
						<li key={index}>{`${item} has played ${
							!this.state.hideNumber ? 0 : "*"
						} games.`}</li>
					))}
				</ul>
				{this.props.itemList.length > 0 ? (
					<button onClick={this.handleHide}>{buttonText}</button>
				) : null}
			</div>
		);
	}
}

export default UserList;
