import React from "react";
import Button from "./shared/button";

export class InputArea extends React.Component {
	constructor(props) {
		super(props);

		this.MAX_CONTENT_LENGTH = 140;

		this.state = {
			content: "",
			remainingSymbols: this.MAX_CONTENT_LENGTH
		};

		this.onContentChanged = this.onContentChanged.bind(this);
		this.addPost = this.addPost.bind(this);
	}
	addPost() {
		console.log("Bind click");
	}
	onContentChanged(event) {
		let newValue = event.target.value,
			remainingSymbols = this.checkRemainingSymbols(newValue);

		if (remainingSymbols >= 0) {
			this.setState({
				content: newValue,
				remainingSymbols: remainingSymbols
			});
		} else {
			event.preventDefault();
		}
	}
	checkRemainingSymbols(content = this.state.content) {
		return this.MAX_CONTENT_LENGTH - content.length;
	}
	render() {
		return (
			<div className="input-area">
				<div className="textarea-wrapper">
					<textarea onChange={this.onContentChanged} 
					          value={this.state.content} 
					          name="feed-content"
					          id="feed-content" 
					          rows="5" 
					          placeholder="Tell us about your life"/>
					<div className="symbols-counter">{this.state.remainingSymbols}</div>
				</div>
				<Button action={this.addPost}/>
			</div>
		)
	}
}