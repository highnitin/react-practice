import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
	return (
		<header className="headerSection flex justify-between items-center p-4 m-2 bg-orange-400 rounded-md w-full">
			<Logo />
			<NavBar />
		</header>
	);
};

export default Header;
