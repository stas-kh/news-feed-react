import React from 'react';
import {VideoPost} from "./videoPost";

export class VideoList extends React.Component {
	constructor(props) {
		super(props);
		this.videoWidth = 700;
	}
	render() {
		return (
			<div className="feed-container">
				{this.props.source.map((video, index) => {
					return <VideoPost src={video.link} width={this.videoWidth} description={video.description} postTime={video.postTime} key={index}/>
				})}
			</div>
		)
	}
}