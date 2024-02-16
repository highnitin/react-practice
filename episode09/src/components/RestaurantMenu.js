import RestaurantSingleMenu from "./RestaurantSingleMenu";

const RestaurantMenu = (props) => {
	const menuArray = props.data.itemCards || props.data.carousel;

	return (
		<section className="restaurantMenu">
			<h2 className="restaurantRecommendation">
				Recommended ({menuArray.length})
			</h2>

			<section className="restaurantSingleMenuContainer">
				{menuArray.map((element) =>
					props.data.itemCards ? (
						<RestaurantSingleMenu
							key={element.card.info.id}
							data={element}
						/>
					) : (
						<RestaurantSingleMenu
							key={element.dish.info.id}
							data={element}
						/>
					)
				)}
			</section>
		</section>
	);
};

export default RestaurantMenu;
