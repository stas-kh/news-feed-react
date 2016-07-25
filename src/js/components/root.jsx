import React from "react";
import {Header} from "./header";
import {InputArea} from "./inputArea";
import {VideoList} from "./videoList";

export default class Root extends React.Component {
	render() {
		return (
			<section className="page-wrapper">
				<Header/>

				<div className="content-area">
					<InputArea/>
					<VideoList source={this.props.videosList}/>
				</div>
			</section>
		)
	}
}