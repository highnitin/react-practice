import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Blog from "./Blog";
import Error from "./Error";

const App = () => {
	return (
		<section className="containerSection">
			<Header />
			<Main />
			<Footer />
		</section>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
	{
		path: "/blog",
		element: <Blog />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// create a page -
