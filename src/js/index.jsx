import React from "react";
import ReactDOM from "react-dom";
import {VideoList} from "./components/videoList";
import {InputArea} from "./components/inputArea";

let videosMock = [
	{
		description: "Here is my test video",
		link: "https://www.youtube.com/embed/WKmmM2ItjnY"
	},
	{
		description: "Here is my test video 2",
		link: "https://www.youtube.com/watch?v=aLRBrlQwS4A"
	}, {
		description: "Here is my test video 3",
		link: "https://www.youtube.com/watch?v=lFIIMEe2Ht0"
	}
];

ReactDOM.render(<VideoList source={videosMock}/>, document.querySelector(".feed-container"));
ReactDOM.render(<InputArea/>, document.querySelector(".input-wrapper"));