import React from "react";

export class Thumbnail extends React.Component {
	getThumbnailSrc() {
		return `http://img.youtube.com/vi/${this.props.thumbSrc}/default.jpg`;
	}

	render() {
		return (
			<div className="thumbnail">
				<img src={this.getThumbnailSrc()}/>
			</div>
		)
	}
}