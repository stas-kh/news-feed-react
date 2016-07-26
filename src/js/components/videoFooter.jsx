import React from "react";

export class VideoFooter extends React.Component {
	constructor(props) {
		super(props);

		this.imgSrc = "src/assets/img/like.png";
	}
	render() {
		return (
			<footer className="video-footer">
				<section className="left-video-description">
					Posted: {this.props.postTime}
				</section>
				<section className="right-video-description">
					<img src={this.imgSrc}/>
				</section>
			</footer>
		)
	}
}