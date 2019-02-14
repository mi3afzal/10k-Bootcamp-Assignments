import React from "react";

class ChatWindow extends React.Component {
	state = { inputValue: "" };

	inputHandler = event => {
		this.setState({ inputValue: event.target.value });
	};

	/*
  	If the user did not type anything, he/she should not be
  	allowed to submit.
  	*/
	isDisabled = () => {
		return this.state.inputValue.length === 0;
	};

	sendMessage = event => {
		/*console.log(
			"sendMessage",
			this.props.user.username,
			this.state.inputValue
		);*/
		event.preventDefault();

		this.props.addNewMessage(
			this.props.user.username,
			this.state.inputValue
		);

		this.setState({ inputValue: "" });
	};

	render() {
		return (
			<div className="chat-window">
				<h2>GhupShap Chat App</h2>
				<div className="name sender">{this.props.user.username}</div>

				<ul className="message-list">
					{this.props.messages.map((message, index) => (
						<li
							key={index}
							className={
								message.username === this.props.user.username
									? "message sender"
									: "message recipient"
							}
						>
							<p>{`${message.username}: ${message.text}`}</p>
						</li>
					))}
				</ul>

				<div>
					<form className="input-group" onSubmit={this.sendMessage}>
						<input
							type="text"
							className="form-control"
							placeholder="Enter your message..."
							value={this.state.inputValue}
							onChange={this.inputHandler}
						/>
						<div className="input-group-append">
							<button
								className="btn submit-button"
								disabled={this.isDisabled()}
							>
								SEND
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
export default ChatWindow;
