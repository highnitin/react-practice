import RestaurantSingleMenu from "./RestaurantSingleMenu";

const RestaurantMenu = (props) => {
	// console.log(props.data.itemCards);
	const menuArray = props.data.itemCards;
	// console.log(menuArray);
	return (
		<section className="restaurantMenu">
			<h2 className="restaurantRecommendation">
				Recommended ({menuArray.length})
			</h2>

			<section className="restaurantSingleMenuContainer">
				{menuArray.map((element) => (
					<RestaurantSingleMenu
						key={element.card.info.id}
						data={element}
					/>
				))}
			</section>
		</section>
	);
};

export default RestaurantMenu;
