import { useState } from "react";

let restaurantData;

const fetchLiveData = async () => {
	const fetchData = await fetch(
		"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1372529&lng=79.058856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
	);
	const response = await fetchData.json();
	restaurantData =
		response?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
			?.restaurants;
};

fetchLiveData();

const SearchSection = ({ onFilter }) => {
	const [inputValue, setInputValue] = useState("");

	const filterButtonSectionEvent = () => {
		const filteredData = restaurantData.filter(
			(res) => res.info.avgRating >= 4.4
		);
		onFilter(filteredData);
	};

	const ClearButtonSectionEvent = () => {
		const filteredData = restaurantData.filter((res) => res.info);
		onFilter(filteredData);
	};

	const searchButtonClickEvent = () => {
		const filteredData = restaurantData.filter((res) =>
			res.info.name.toLowerCase().includes(inputValue.toLowerCase())
		);

		filteredData.length === 0 ? null : onFilter(filteredData);
	};

	const inputOnChangeEvent = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<section className="searchSection">
			<input
				type="text"
				name="name"
				placeholder="You're Fav food is waiting"
				className="inputSection"
				value={inputValue}
				onChange={inputOnChangeEvent}
			/>
			<button
				className="submitButtonSection"
				onClick={searchButtonClickEvent}
				value={"submit"}>
				Search Now!
			</button>
			<button
				className="filterButtonSection"
				onClick={filterButtonSectionEvent}>
				Filter the fukng best
			</button>

			<button
				className="filterButtonSection"
				onClick={ClearButtonSectionEvent}>
				Clear Filter
			</button>
		</section>
	);
};

export default SearchSection;
