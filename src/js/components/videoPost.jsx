import React from 'react';
import {VideoFooter} from "./videoFooter";
import VideoData from "./global/videoData";

export class VideoPost extends React.Component {
	constructor(props) {
		super(props);

		this.postTime = new Date(this.props.postTime).toLocaleString("en-US");
		this.videoId = VideoData.getVideoID(this.props.src);
	}
	calcVideoHeight() {
		return ((this.props.width * 9) / 16);
	}
	render() {
		let iFrame = "",
			postClass = "video-container",
			videoSource = null;
		if (this.videoId !== "") {
			videoSource = VideoData.createEmbedVideoLink(this.videoId);
			iFrame = <iframe
						width={this.props.width}
						height={this.calcVideoHeight()}
						src={videoSource}
						frameBorder="0"
						allowFullScreen>
					</iframe>;
		} else {
			postClass += " left-aligned";
		}
		return (
			<section className={postClass}>
				<h1 className="video-title">{this.props.description}</h1>
				{iFrame}
				<VideoFooter postTime={this.postTime}/>
			</section>
		)
	}
}