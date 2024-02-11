import React from "react";
import CardContainer from "./CardContainer";
// import restaurantData from "../utils/demoData";
import { useState } from "react";
import { useEffect } from "react";
import SearchSection from "./SearchSection";

const Main = () => {
	const [newRestaurantData, setNewRestaurantData] = useState([]);

	const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

	useEffect(() => {
		fetchLiveData();
	}, []);

	const fetchLiveData = async () => {
		const fetchData = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1372529&lng=79.058856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const response = await fetchData.json();
		// console.log(response.data);
		setNewRestaurantData(
			response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
		setFilteredRestaurantList(
			response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
	};

	const handleFilter = (data) => {
		setFilteredRestaurantList(data);
	};

	return (
		<main className="mainSection">
			<SearchSection onFilter={handleFilter} />
			<CardContainer dataRestaurant={filteredRestaurantList} />
		</main>
	);
};

export default Main;

// for element
// object aara hai and element k aandar no aaray

// props.propdata.card.card.info

// for newRestaurant
// array aara hai and hume array element ko access karna hai
