import RestaurantAccordianMenu from "./RestaurantAccordianMenu";
import { UpdatedRestaurantAccordianMenu } from "./RestaurantAccordianMenu";

const RestaurantMenu = ({ data }) => {
	// console.log("restaurant menu", data);
	const RestaurantAccordianMenuWithExtraMenu = UpdatedRestaurantAccordianMenu(
		RestaurantAccordianMenu
	);
	const uniqueKeyID = 122111;
	return (
		<section className="w-full">
			{data.map((element) =>
				element.card.card["@type"] ==
				"type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ? (
					<RestaurantAccordianMenuWithExtraMenu
						key={element.card.card.title + uniqueKeyID}
						menuList={element}
					/>
				) : (
					<RestaurantAccordianMenu
						key={element.card.card.title + uniqueKeyID}
						menuList={element}
					/>
				)
			)}
		</section>
	);
};

export default RestaurantMenu;
