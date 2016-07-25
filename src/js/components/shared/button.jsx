import React from "react";

export default class Button extends React.Component {
	render() {
		return (
			<div className="button-wrapper">
				<button className="btn" onClick={this.props.action}>Post it</button>
			</div>
		)
	}
}