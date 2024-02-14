import UserFunction from "./UserFunction";
import UserClasss from "./UserClass";

const About = () => {
	const information = {
		name: "HighNitin",
		description: "Tech VA",
		location: "India",
		skills: "Frontend Engineer",
	};
	return (
		<section className="aboutPage page">
			<h1>About Page</h1>
			<p>Welcome to About Page</p>
			<section className="aboutPageContainer">
				<UserFunction
					name={"Nitin"}
					description={"Tech VA and Web Developer"}
					location={"India"}
					skills={"Coder, Marketer, AI Enthusiast, Web3"}
				/>
				<UserClasss data={information} />
			</section>
		</section>
	);
};

export default About;
