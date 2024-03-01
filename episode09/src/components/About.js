import { Component } from "react";

class About extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		const information = {
			name: "HighNitin",
			description: "Tech VA",
			location: "India",
			skills: "AI Enthusiast",
			count: 0,
		};
		return (
			<section className="aboutPage page">
				<h1>About Page</h1>
				<p>Welcome to About Page</p>
				<section className="aboutPageContainer">About Us</section>
			</section>
		);
	}
}

export default About;
