import React from 'react';
import {VideoFooter} from "./videoFooter";

export class VideoPost extends React.Component {
	constructor(props) {
		super(props);

		this.postTime = new Date(this.props.postTime).toLocaleString("en-US");
	}
	createEmbedVideoLink() {
		const LINK_PREFIX = "https://www.youtube.com/embed/";
		return LINK_PREFIX + this.getVideoID();
	}
	getVideoID() {
		let videoID = '',
			url = null;
		if (this.props.src !== null) {
			url = this.props.src.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
			if (url[2] !== undefined) {
				videoID = url[2].split(/[^0-9a-z_\-]/i);
				videoID = videoID[0];
			} else {
				videoID = url;
			}
		}
		return videoID;
	}
	calcVideoHeight() {
		return ((this.props.width * 9) / 16);
	}
	render() {
		return (
			<section className="video-container">
				<h1 className="video-title">{this.props.description}</h1>
				<iframe 
					width={this.props.width}
					height={this.calcVideoHeight()}
					src={this.createEmbedVideoLink()}
					frameBorder="0" 
			        allowFullScreen>
				</iframe>
				<VideoFooter postTime={this.postTime}/>
			</section>
		)
	}
}