import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";

let videosMock = [{
		description: "Here is my test video",
		link: "https://www.youtube.com/embed/WKmmM2ItjnY",
		postTime: 1469439028299
	}, {
		description: "Here is my test video 2",
		link: "https://www.youtube.com/watch?v=aLRBrlQwS4A",
		postTime: 1469439028299
	}, {
		description: "Here is my test video 3",
		link: "https://www.youtube.com/watch?v=lFIIMEe2Ht0",
		postTime: 1469439028299
	}
];

ReactDOM.render(<Root videosList={videosMock}/>, document.querySelector("#root"));