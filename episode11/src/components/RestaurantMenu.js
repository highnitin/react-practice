import RestaurantAccordianMenu from "./RestaurantAccordianMenu";

const RestaurantMenu = ({ data }) => {
	// console.log("forkey", data);
	const uniqueKeyID = 122111;
	return (
		<section className="restaurantMenu">
			{data.map((element) => (
				<RestaurantAccordianMenu
					key={element.card.card.title + uniqueKeyID}
					menuList={element}
				/>
			))}
		</section>
	);
};

export default RestaurantMenu;
