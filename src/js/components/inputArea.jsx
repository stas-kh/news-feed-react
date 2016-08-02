import React from "react";
import Button from "./shared/button";
import Post from "./global/post";
import LSWorker from "./global/LSWorker";
import {Thumbnail} from "./thumbnail";
import VideoData from "./global/videoData";

const maxContentLength = 140;

const initialState = {
	content: "",
	remainingSymbols: maxContentLength
};

export class InputArea extends React.Component {
	constructor(props) {
		super(props);

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
		return {
			links: VideoData.getVideoLink(this.state.content),
			content: this.state.content.replace(VideoData.URI_PATTERN, "").trim()
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
		var thumb = "",
			videoLink = VideoData.getVideoID(this.state.content);
		if (videoLink !== "") {
			console.log(videoLink);
			thumb = <Thumbnail thumbSrc={videoLink}/>
		}
		return (
			<div className="input-area">
				<div className="textarea-wrapper">
					{thumb}
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