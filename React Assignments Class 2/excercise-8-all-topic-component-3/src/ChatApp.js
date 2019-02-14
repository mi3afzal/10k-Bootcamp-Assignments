import React from "react";
import ChatWindow from "./ChatWindow";

const users = [{ username: "Irfan" }, { username: "Aamir_Pinger" }];

class ChatApp extends React.Component {
	state = {
		messages: [
			{ username: "Irfan", text: "Hi, Aamir!" },
			{ username: "Irfan", text: "How are you?" },
			{ username: "Aamir_Pinger", text: "Hello, {Irfan}! Good n you?" }
		]
	};

	addNewMessage = (un, msg) => {
		//console.log("addNewMessage", un, msg);
		this.setState(oldState =>
			oldState.messages.push({ username: un, text: msg })
		);
	};

	render() {
		return (
			<div className="shell">
				{users.map(user => (
					<ChatWindow
						user={user}
						messages={this.state.messages}
						addNewMessage={this.addNewMessage}
					/>
				))}
			</div>
		);
	}
}
export default ChatApp;
