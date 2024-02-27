import { MENU_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantApiSearch = () => {
	const [newRestaurantData, setNewRestaurantData] = useState();

	const fetchLiveData = async () => {
		const fetchData = await fetch(MENU_API);
		const response = await fetchData.json();

		setNewRestaurantData(
			response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
	};
	fetchLiveData();

	console.log("From API search", newRestaurantData);
	return newRestaurantData;
};

export default useRestaurantApiSearch;
