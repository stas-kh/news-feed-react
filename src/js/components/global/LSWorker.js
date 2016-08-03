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
			description: "Excelent expirience in Pokemon Go",
			link: "https://www.youtube.com/embed/WKmmM2ItjnY",
			postTime: 1469439029999
		}, {
			description: "Let's go to Europe, guys",
			link: "https://www.youtube.com/watch?v=aLRBrlQwS4A",
			postTime: 1469439022222
		}, {
			description: "Amazing song by Katy Perry",
			link: "https://www.youtube.com/watch?v=lFIIMEe2Ht0",
			postTime: 1469439011111
		}];

		return JSON.stringify(videosMock);
	}
}