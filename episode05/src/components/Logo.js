import { LOGO_URL } from "../utils/constants";
const Logo = () => {
	return (
		<section className="logoContainer">
			<img
				className="logoImg"
				src={LOGO_URL}
				alt="Food App Logo"
			/>
		</section>
	);
};

export default Logo;
