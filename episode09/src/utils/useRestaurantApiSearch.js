import { RES_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantApiSearch = () => {
	const [newRestaurantData, setNewRestaurantData] = useState(null);

	useEffect(() => {
		fetchLiveData();
	}, []);

	const fetchLiveData = async () => {
		const fetchData = await fetch(RES_API);
		const response = await fetchData.json();

		setNewRestaurantData(
			response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
	};

	// console.log("From API search", newRestaurantData);
	return newRestaurantData;
};

export default useRestaurantApiSearch;
