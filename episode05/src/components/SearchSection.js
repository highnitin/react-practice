import { useState } from "react";
import restaurantData from "../utils/demoData";

const SearchSection = ({ onFilter }) => {
	const handleFilterClick = () => {
		const filteredData = restaurantData.filter(
			(res) => res.card.card.info.avgRating > 4.3
		);
		console.log(filteredData); // Step 3: Log filtered data to console
		onFilter(filteredData); // Step 4: Pass filteredData to onFilter callback
	};

	const handleFilterClear = () => {
		const filteredData = restaurantData.filter(
			(res) => res.card.card.info.avgRating
		);
		console.log(filteredData); // Step 3: Log filtered data to console
		onFilter(filteredData); // Step 4: Pass filteredData to onFilter callback
	};

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
			<button
				className="filterButtonSection"
				onClick={handleFilterClick} // Step 2: Handle click event
			>
				Filter the fukng best
			</button>

			<button
				className="filterButtonSection"
				onClick={handleFilterClear} // Step 2: Handle clear click event (Add on)
			>
				Clear Filter
			</button>
		</section>
	);
};

export default SearchSection;
