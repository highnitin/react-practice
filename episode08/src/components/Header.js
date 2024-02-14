// console.log("Header4");
import Logo from "./Logo";
import NavBar from "./NavBar";
// console.log("Header5");

const Header = () => {
	// console.log("Header1");
	return (
		<header className="headerSection">
			<Logo />
			<NavBar />
		</header>
	);
};

// console.log("Header2");
export default Header;
// console.log("Header3");
