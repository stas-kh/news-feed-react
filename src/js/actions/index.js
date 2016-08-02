import {ADD_POST} from "../constants/actionTypes";

export const addPost = (newPost) => {
	return {
		type: ADD_POST,
		newPost
	}
};