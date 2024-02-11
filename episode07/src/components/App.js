import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Blog from "./Blog";
import Error from "./Error";
import RestaurantDetails from "./RestaurantDetails";

const App = () => {
	return (
		<section className="containerSection">
			<Header />
			<Outlet />
			<Footer />
		</section>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Main />,
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
			{
				path: "/restaurant/:resID",
				element: <RestaurantDetails />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
