import React from "react";

export class InputArea extends React.Component {
	constructor() {
		super();
		this.maxContentLength = 140;
		this.state = {
			content: ""
		};
	}
	addPost() {
		console.log("Bind click");
	}
	onContentChanged(event) {
		if (this.checkRemainingSymbols(event.target.value) >= 0) {
			this.setState({
				content: event.target.value
			});
		} else {
			event.preventDefault();
		}
	}
	checkRemainingSymbols(content = this.state.content) {
		return this.maxContentLength - content.length;
	}
	render() {
		return (
			<div className="input-area">
				<div className="textarea-wrapper">
					<textarea onChange={this.onContentChanged.bind(this)} value={this.state.content} name="feed-content"
					          id="feed-content" rows="5" placeholder="Tell us about your life"/>
					<div className="symbols-counter">{this.checkRemainingSymbols()}</div>
				</div>
				<div className="button-wrapper">
					<button className="btn" onClick={this.addPost.bind(this)}>Click me again</button>
				</div>
			</div>
		)
	}
}