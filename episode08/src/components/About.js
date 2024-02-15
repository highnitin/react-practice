import UserFunction from "./UserFunction";
import UserClasss from "./UserClass";
import { Component } from "react";

class About extends Component {
	constructor(props) {
		super(props);
		console.log("Parent constructor");
	}

	componentDidMount() {
		console.log("Parent component did mount");
	}

	render() {
		console.log("Parent Render");
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
				<section className="aboutPageContainer">
					<UserFunction
						name={"Nitin"}
						description={"Tech VA"}
						location={"India"}
						skills={"AI Enthusiast"}
						count={0}
					/>
					<UserClasss
						name={"First"}
						description={"Tech VA"}
						location={"India"}
						skills={"AI Enthusiast"}
						count={0}
					/>
					<UserClasss
						name={"Second"}
						description={"Tech VA"}
						location={"India"}
						skills={"AI Enthusiast"}
						count={0}
					/>
				</section>
			</section>
		);
	}
}

export default About;
