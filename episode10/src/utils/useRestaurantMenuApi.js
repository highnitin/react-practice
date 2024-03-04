import { MENU_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenuApi = (resId) => {
	const [restaurantData, setRestaurantData] = useState(null);

	useEffect(() => {
		fetchRestaurantDetails();
	}, []);

	const fetchRestaurantDetails = async () => {
		const data = await fetch(MENU_API + resId);
		const response = await data.json();
		setRestaurantData(response.data);
	};

	return restaurantData;
};
export default useRestaurantMenuApi;
