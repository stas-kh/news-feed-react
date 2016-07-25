import React from "react";

export class Header extends React.Component {
	render() {
		const pageTitle = "iFeed project [React]";
		const authorSubscription = "by StasKh";
		return (
			<header className="page-header">
				<div className="logo"></div>
				<h1>{pageTitle}</h1>
				<h3>{authorSubscription}</h3>
			</header>
		)
	}
}