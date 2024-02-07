import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
// import Demo from "./Demo";

const App = () => {
	return (
		<section className="containerSection">
			<Header />
			<Main />
			<Footer />
		</section>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
