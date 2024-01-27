/*

Componnent Destructuring (white > blue > red > purple)

App (white)
 - Header (blue)
    - Logo (red)
        - Image
    - NavBar (red)
        - List (home | about | blog | contact | cart)
 - Body (blue)
    - Search (red)
        - Input box
        - Button
    - RestaurantCardContainer (red)
        - Cards (purple)
            - Image
            - Name
            - Features
                - Price
                - Rating
                - ETA
            - Cuisine List
            - Address
 - Footer (blue)
    - Content (red)

*/

import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="heading">Hello Developer</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

// components for header

const Logo = () => {
	return (
		<section className="logoContainer">
			<img
				className="logoImg"
				src="https://i0.wp.com/www.highnitin.com/wp-content/uploads/2022/07/cropped-highnitin_logo_dark.png?resize=84%2C65&ssl=1"
				alt="Food App Logo"
			/>
		</section>
	);
};

const NavBar = () => {
	return (
		<nav className="navBar">
			<ul className="navBarList">
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
				<li>Blog</li>
				<li>Cart</li>
			</ul>
		</nav>
	);
};

// Header component

const Heading = () => {
	return (
		<header className="headerSection">
			<Logo />
			<NavBar />
		</header>
	);
};

// components for main section

// search bar component

const SearchSection = () => {
	return (
		<section className="searchSection">
			<form
				id="formSection"
				className="formSection">
				<input
					type="text"
					name="name"
					placeholder="You're Fav food is waiting"
					className="inputSection"
				/>
				<input
					type="submit"
					value="Submit"
					className="submitButtonSection"
					disabled
				/>
			</form>
		</section>
	);
};

// CardImage component
const CardImage = () => {
	return (
		<img
			className="cardImg"
			src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2cp5ldx1kpzlaq2iuvn"
			alt="Girl in a jacket"
		/>
	);
};

// CardHeading component
const CardHeading = () => {
	return <h2 className="cardHeading">Pakodewal</h2>;
};

const CardDishName = () => {
	return <h2 className="cardDishName">Dahi Samosa Special</h2>;
};

// CardCuisineList component
const CardCuisineList = () => {
	return <h3 className="cardCuisineList">Indian, Italian, Chinese</h3>;
};

// CardAddress component
const CardAddress = () => {
	return <h3 className="cardAddress">Nagpur, MH, India</h3>;
};

// components for Featured Section
const CardPrice = () => {
	return <h3 className="cardPrice">$9.99</h3>;
};

const CardRating = () => {
	return <h3 className="cardRating">4.5/5</h3>;
};

const CardETA = () => {
	return <h3 className="cardETA">30 mins</h3>;
};

// FeaturedSection component
const CardFeatureSection = () => {
	return (
		<section className="featureSection">
			<CardPrice />
			<CardRating />
			<CardETA />
		</section>
	);
};

// Card Component
const Card = () => {
	return (
		<section className="card">
			<CardImage />
			<CardHeading />
			<CardDishName />
			<CardFeatureSection />
			<CardCuisineList />
			<CardAddress />
		</section>
	);
};

const CardContainer = () => {
	return (
		<section className="cardContainer">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</section>
	);
};

const Main = () => {
	return (
		<main className="mainSection">
			<SearchSection />
			<CardContainer />
		</main>
	);
};

const Footer = () => {
	return (
		<footer className="footerSection">
			<h3>
				{" "}
				Made with ❤️ for the developers community |{" "}
				<a
					href="https://linkedin.com/in/highnitin"
					target="_blank"
					className="footerTextLink">
					HighNitin
				</a>
			</h3>
		</footer>
	);
};

const App = () => {
	return (
		<section className="containerSection">
			<Heading />
			<Main />
			<Footer />
		</section>
	);
};

root.render(<App />);

/*
body
    <section id="root">
        <section class="containerSection">
            <header class="headerSection">
                <section className= "logoContainer"> <img /></section>
                <nav className= "navbar"> <ul> <li> Home</li> </ul></nav>
            </header>
            <main class="mainSection">
                <section className = "searchSection">
                    <input> Search Input Box </input>
                    <button> Search </button>
                </section>
                <section className = "cardContainer">
                    <section className = "card">
                    <img />
                    <h2></h2>
                    <section className = "featureSection">
                        <h3 className="price"></h3>
                        <h3 className="ratings"></h3>
                        <h3 className="ETA"></h3>
                    </section>
                    <h3></h3>
                    <h3></h3>
                    </section>
                </section>
            </main>
            <footer class="footerSection">
            
            </footer>
        </section>
    </section>
        
body    
*/
