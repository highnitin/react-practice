import { useState } from "react";
import SearchSection from "./SearchSection";
import CardContainer from "./CardContainer";
import restaurantData from "../utils/demoData";

const Main = () => {
	const [filteredData, setNewRestaurantData] = useState(restaurantData);

	const handleFilter = (data) => {
		setNewRestaurantData(data);
	};

	return (
		<main className="mainSection">
			<SearchSection onFilter={handleFilter} />
			<CardContainer newRestaurantData={filteredData || restaurantData} />
		</main>
	);
};

export default Main;
