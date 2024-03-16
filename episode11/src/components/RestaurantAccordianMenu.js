import { useState } from "react";
import RestaurantSingleMenu from "./RestaurantSingleMenu";
import down from "../../learnings/down.png";
import upArrow from "../../learnings/upArrow.png";

const RestaurantAccordianMenu = ({ menuList }) => {
	console.log("outside HOC", menuList);
	const [showAccordian, setShowAccordian] = useState(true);
	const accordianClicked = () => {
		showAccordian ? setShowAccordian(false) : setShowAccordian(true);
	};

	const { title, itemCards } = menuList.card.card;
	// console.log("CompleteMenuInformation", itemCards);
	return (
		<section className="bg-white p-2 my-4 text-black rounded-sm">
			<section
				className="cursor-pointer p-3 flex justify-between border-b-2 items-center"
				onClick={accordianClicked}>
				<p className="text-lg font-bold">
					{title} ({itemCards.length})
				</p>
				{showAccordian ? (
					<img
						src={upArrow}
						className="w-7"
					/>
				) : (
					<img
						src={down}
						className="w-7"
					/>
				)}
			</section>
			<section className="p-3">
				{showAccordian
					? itemCards.map((element) => (
							<RestaurantSingleMenu
								key={element.card.info.id}
								individualMenuList={element}
							/>
					  ))
					: null}
			</section>
		</section>
	);
};

export const UpdatedRestaurantAccordianMenu = (RestaurantAccordianMenu) => {
	return ({ menuList }) => {
		// console.log("inside HOC", menuList);
		// const [title] = menuList.card.card;
		// const categories = menuList.card.card.categories;
		// console.log(categories);
		return (
			<section className="border p-5 m-5 border-pink-500 bg-green-600">
				<p>{title}</p>
				<RestaurantAccordianMenu menuList={menuList} />

				{/* {categories.map((element) => (
					<RestaurantAccordianMenu menuList={element} />
				))} */}
			</section>
		);
	};
};

export default RestaurantAccordianMenu;
