import React from "react";
import CardContainer from "./CardContainer";
import { useState } from "react";
import SearchSection from "./SearchSection";
import useRestaurantApi from "../utils/useRestaurantApi";

const Main = () => {
	const restaurantInfo = useRestaurantApi();
	const [newRestaurantInfo, setNewRestaurantInfo] = useState();
	const handleFilter = (restaurants) => {
		setNewRestaurantInfo({ restaurants });
	};

	return (
		<main className="mainSection p-4 m-2 w-full flex flex-col justify-center items-center">
			<SearchSection onFilter={handleFilter} />
			<CardContainer
				dataRestaurant={newRestaurantInfo ? newRestaurantInfo : restaurantInfo}
			/>
		</main>
	);
};

export default Main;
