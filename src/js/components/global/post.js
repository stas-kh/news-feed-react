export default class Post {
	constructor(description, link) {
		this.description = description;
		this.link = link;
		this.postTime = new Date().getTime();
	}
}