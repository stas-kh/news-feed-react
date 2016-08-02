import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import iFeedApp from "./reducers";
import Root from "./components/root";

let store = createStore(iFeedApp);

render(
	<Provider store={store}>
		<Root />
	</Provider>, 
	document.querySelector("#root")
);