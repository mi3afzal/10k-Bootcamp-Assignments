import React from "react";

const TodoList = props => {
	return (
		<div>
			<p className="items">Item List</p>
			<ol className="item-list">
				{props.itemList.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ol>
		</div>
	);
};

export default TodoList;
