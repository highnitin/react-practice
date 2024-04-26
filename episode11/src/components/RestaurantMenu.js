import { useState } from "react";
import RestaurantAccordianMenu from "./RestaurantAccordianMenu";
import { UpdatedRestaurantAccordianMenu } from "./RestaurantAccordianMenu";

const RestaurantMenu = ({ data }) => {
	// console.log("restaurant menu", data);
	const [showIndex, setShowIndex] = useState(0);
	const RestaurantAccordianMenuWithExtraMenu = UpdatedRestaurantAccordianMenu(
		RestaurantAccordianMenu
	);
	const uniqueKeyID = 122111;
	return (
		<section className="w-full mb-8">
			{data.map((element, index) =>
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
						showAccordian={index == showIndex ? true : false}
						setShowIndex={() => setShowIndex(index)}
					/>
				)
			)}
		</section>
	);
};
// RestaurantMenu.displayName = "AnyName";
export default RestaurantMenu;
