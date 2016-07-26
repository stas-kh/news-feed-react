const postsSection = "iFeedVideos";

export default class LSWorker {

	static addNewPost(newPost) {
		let posts = this.getPosts() || [];
		posts.push(newPost);

		localStorage.setItem(postsSection, JSON.stringify(posts));
	}

	static getPosts() {
		/* to remove */
		if (!localStorage.getItem(postsSection)) {
			localStorage.setItem(postsSection, this.initMockData());
		}

		return JSON.parse(localStorage.getItem(postsSection));
	}

	static initMockData() {
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
		}];

		return JSON.stringify(videosMock);
	}
}