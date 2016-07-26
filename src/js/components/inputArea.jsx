import React from "react";
import Button from "./shared/button";
import Post from "./global/post";
import LSWorker from "./global/LSWorker";

const maxContentLength = 140;

const initialState = {
	content: "",
	remainingSymbols: maxContentLength
};

export class InputArea extends React.Component {
	constructor(props) {
		super(props);

		this.URI_PATTERN = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig;

		this.state = initialState;

		this.onContentChanged = this.onContentChanged.bind(this);
		this.addPost = this.addPost.bind(this);
	}
	reset() {
		this.setState(initialState);
	}
	addPost() {
		let postData = this.generatePostData(),
			newPost = new Post(postData.content, postData.links);

		LSWorker.addNewPost(newPost);

		this.reset();
	}
	generatePostData() {
		let links = this.state.content.match(this.URI_PATTERN);
		
		if (Array.isArray(links)) {
			links = links[0];
		} else {
			links = null;
		}

		return {
			links: links,
			content: this.state.content.replace(this.URI_PATTERN, "").trim()
		};
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
		return maxContentLength - content.length;
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