import {ADD_POST} from "../constants/actionTypes";
import LSWorker from "../components/global/LSWorker";

const initialState = {
	posts: LSWorker.getPosts()
};

const iFeedApp = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			return Object.assign({}, state, {
				posts: [...state.posts, action.newPost]
			});
		}
		default: {
			return state
		}
	}
};

export default iFeedApp;