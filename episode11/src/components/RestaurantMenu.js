import RestaurantSingleMenu from "./RestaurantSingleMenu";

const RestaurantMenu = ({ data }) => {
	const uniqueKeyID = 122111;
	// console.log("Props from here", props);
	// const menuArray =
	// 	props.data.itemCards ||
	// 	props.data.carousel ||
	// 	props.data.categories[0].itemCards ||
	// 	props.data.categories[1].itemCards;

	// console.log("Props from here", menuArray);
	return (
		<section className="restaurantMenu">
			{data.map((element) => (
				<RestaurantSingleMenu data={element} />
			))}
		</section>
	);
};

export default RestaurantMenu;

// return (
// 	<section className="restaurantMenu">
// 		<h2 className="restaurantRecommendation">
// 			Recommended ({menuArray.length})
// 		</h2>

// 		<section className="restaurantSingleMenuContainer">
// 			{menuArray.map((element, index) =>
// 				props.data.itemCards ? (
// 					<RestaurantSingleMenu
// 						key={element.card.info.id}
// 						data={element}
// 					/>
// 				) : (
// 					<RestaurantSingleMenu
// 						key={index + "resID" + uniqueKeyID}
// 						data={element}
// 					/>
// 				)
// 			)}
// 		</section>
// 	</section>
// );
