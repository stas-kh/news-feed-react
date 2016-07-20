import React from 'react';

export class VideoPlayer extends React.Component {
	createEmbedVideoLink() {
		const LINK_PREFIX = "https://www.youtube.com/embed/";
		return LINK_PREFIX + this.getVideoID();
	}
	getVideoID() {
		let ID = '',
			url = this.props.src.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
		if (url[2] !== undefined) {
			ID = url[2].split(/[^0-9a-z_\-]/i);
			ID = ID[0];
		} else {
			ID = url;
		}
		return ID;
	}
	calcVideoHeight() {
		return ((this.props.width * 9) / 16);
	}
	render() {
		return (
			<section className="video-container">
				<iframe 
					width={this.props.width}
					height={this.calcVideoHeight()}
					src={this.createEmbedVideoLink()}
					frameBorder="0" 
			        allowFullScreen>
				</iframe>
			</section>
		)
	}
}