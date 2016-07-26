import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import LSWorker from "./components/global/LSWorker";

ReactDOM.render(<Root videosList={LSWorker.getPosts()}/>, document.querySelector("#root"));