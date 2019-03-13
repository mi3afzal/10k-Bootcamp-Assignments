import React, { Component } from "react";

class List extends Component {
	render() {
		return (
			<ol>
				{this.props.items.map(rec => (
					<li key={rec.id}>
						<a
							href="javascript:void(0);"
							onClick={() => this.props.toggle(rec.id)}
							style={{
								textDecoration: rec.done ? "line-through" : ""
							}}
						>
							{rec.name}
						</a>
						<button onClick={() => this.props.delete(rec.id)}>
							X
						</button>
					</li>
				))}
			</ol>
		);
	}
}

export default List;
