import { useState } from "react";
import RestaurantSingleMenu from "./RestaurantSingleMenu";
import down from "../../learnings/down.png";
import upArrow from "../../learnings/upArrow.png";

const RestaurantAccordianMenu = ({ menuList }) => {
	const [showAccordian, setShowAccordian] = useState(true);
	const accordianClicked = () => {
		showAccordian ? setShowAccordian(false) : setShowAccordian(true);
	};

	let title, itemCards;

	if (menuList.itemCards) {
		({ title, itemCards } = menuList);
	} else {
		({ title, itemCards } = menuList.card.card);
	}

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
			<section className="px-3 py-2">
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
		const { title, categories } = menuList.card.card;

		return (
			<section className="border mt-3 bg-white rounded-sm">
				<p className="px-5 pt-5 text-xl font-extrabold text-gray-600">
					{title}
				</p>

				{categories.map((element) => (
					<RestaurantAccordianMenu
						key={element.title + Math.random() * 1000}
						menuList={element}
					/>
				))}
			</section>
		);
	};
};

export default RestaurantAccordianMenu;
