// import restaurantData from "../utils/demoData";

let restaurantData;

const fetchLiveData = async () => {
	const fetchData = await fetch(
		"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1372529&lng=79.058856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
	);
	const response = await fetchData.json();
	restaurantData =
		response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
};

fetchLiveData();
// console.log(restaurantData[0].info);

const SearchSection = ({ onFilter }) => {
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
				// Step 2: Handle click event
				onClick={filterButtonSectionEvent}>
				Filter the fukng best
			</button>

			<button
				className="filterButtonSection"
				onClick={ClearButtonSectionEvent}
				// Step 2: Handle clear click event (Add on)
			>
				Clear Filter
			</button>
		</section>
	);
};

export default SearchSection;
