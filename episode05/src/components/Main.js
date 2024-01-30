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
			{/* Step 1: Pass onFilter callback */}
			<CardContainer
				newRestaurantData={filteredData || restaurantData}
				// Step 5: Pass filteredData to CardContainer
			/>
		</main>
	);
};

export default Main;
