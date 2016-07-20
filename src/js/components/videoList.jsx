import React from 'react';
import {VideoPlayer} from "./videoPlayer";

export class VideoList extends React.Component {
	constructor() {
		super();
		this.videoWidth = 500;
	}
	render() {
		return (
			<div>
				{this.props.source.map((video, index) => {
					return <VideoPlayer src={video.link} width={this.videoWidth} key={index}/>
				})}
			</div>
		)
	}
}