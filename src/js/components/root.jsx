import React from "react";
import {Header} from "./header";
import {InputArea} from "./inputArea";
import {VideoList} from "./videoList";
import {connect} from 'react-redux'

class Root extends React.Component {
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

const mapStateToProps = (state) => {
	let posts = state.posts.sort((a, b) => b["postTime"] - a["postTime"]);
	return {
		videosList: posts
	}
};

export default connect(mapStateToProps)(Root);