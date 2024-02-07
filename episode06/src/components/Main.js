// import ResCard from "./NewCard";
import React from "react";
import NewCard from "./NewCard";
import restaurantData from "../utils/demoData";
import { useState } from "react";
import { useEffect } from "react";

const Main = () => {
	const [newRestaurantData, setNewRestaurantData] = useState(restaurantData);

	useEffect(() => {
		console.log("After Fetching");
		fetchLiveData();
	}, []);

	const fetchLiveData = async () => {
		const fetchData = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1372529&lng=79.058856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const response = await fetchData.json();
		setNewRestaurantData(
			response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
		);
		console.log(
			"Received Data",
			response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
		);
	};

	return (
		<main className="mainSection">
			<section className="cardContainer">
				{newRestaurantData.map((element) => (
					<NewCard propData={element} />
					// <NewCard propData={element} />
				))}
			</section>
		</main>
	);
};

export default Main;

// const [newRestaurantData, setNewRestaurantData] = useState(null);

// useEffect(() => {
// console.log("After Fetching");
// fetchLiveData();
// }, []);

// const fetchLiveData = async () => {
// 	const fetchData = await fetch(
// 		"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1372529&lng=79.058856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
// 	);
// 	const response = await fetchData.json();
// 	setNewRestaurantData(
// 		response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
// 	);
// 	console.log(
// 		"Received Data",
// 		response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
// 	);
// };

// console.log("From this console", restaurantData);

// const handleFilter = (data) => {
// 	setNewRestaurantData(data);
// };
