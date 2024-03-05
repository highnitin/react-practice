import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const Contact = lazy(() => import("./Contact"));
const Blog = lazy(() => import("./Blog"));
const RestaurantDetails = lazy(() => import("./RestaurantDetails"));
const About = lazy(() => import("./About"));
const Grocery = lazy(() => import("./Grocery"));
const Error = lazy(() => import("./Error"));

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
				element: (
					<Suspense>
						<About />
					</Suspense>
				),
			},
			{
				path: "/contact",
				element: (
					<Suspense>
						<Contact />
					</Suspense>
				),
			},
			{
				path: "/blog",
				element: (
					<Suspense>
						<Blog />
					</Suspense>
				),
			},
			{
				path: "/grocery",
				element: (
					<Suspense>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: "/restaurant/:resId",
				element: (
					<Suspense>
						<RestaurantDetails />,
					</Suspense>
				),
			},
		],
		errorElement: (
			<Suspense>
				<Error />
			</Suspense>
		),
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
