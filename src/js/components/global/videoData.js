export default class VideoData {
	static get URI_PATTERN() {
		return /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig;
	}

	static getVideoLink(content) {
		let videoLink = "",
			links = this.matchOnURL(content);

		if (Array.isArray(links)) {
			videoLink = links[0];
		}

		return videoLink;
	}

	static matchOnURL(content) {
		return content.match(this.URI_PATTERN);
	}

	static getVideoID(source) {
		let videoID = "",
			url = null;
		if (source !== null) {
			url = source.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
			if (url[2] !== undefined) {
				videoID = url[2].split(/[^0-9a-z_\-]/i);
				videoID = videoID[0];
			}
		}
		return videoID;
	}

	static createEmbedVideoLink(videoID) {
		const LINK_PREFIX = "https://www.youtube.com/embed/";
		return LINK_PREFIX + videoID;
	}
}