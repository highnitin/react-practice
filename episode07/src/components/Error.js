import Header from "./Header";
import Footer from "./Footer";

import { useRouteError } from "react-router-dom";

const Error = () => {
	const err = useRouteError();
	// console.log(err.status);
	// console.log(err.data);
	return (
		<>
			<Header />
			<section className="errorPage page">
				<h1>Error Page</h1>
				<p>
					{err.status} : {err.data}
				</p>
			</section>
			<Footer />
		</>
	);
};

export default Error;
