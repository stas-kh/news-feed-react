import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import iFeedApp from "./reducers";
import Root from "./components/root";

render(
	<Provider store={createStore(iFeedApp)}>
		<Root />
	</Provider>,
	document.querySelector("#root")
);