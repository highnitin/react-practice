import { useState } from "react";
import RestaurantSingleMenu from "./RestaurantSingleMenu";
import down from "../../learnings/down.png";
import upArrow from "../../learnings/upArrow.png";

const RestaurantAccordianMenu = ({ menuList, showAccordian, setShowIndex }) => {
	const accordianClicked = () => {
		setShowIndex();
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
	console.log("From resaccordian menu", RestaurantAccordianMenu);
	return ({ menuList }) => {
		const [showIndexx, setShowIndexx] = useState(0);
		const { title, categories } = menuList.card.card;

		return (
			<section className="border mt-3 bg-white rounded-sm">
				<p className="px-5 pt-5 text-xl font-extrabold text-gray-600">
					{title}
				</p>

				{categories.map((element, index) => (
					<RestaurantAccordianMenu
						key={element.title + Math.random() * 1000}
						menuList={element}
						showAccordian={index == showIndexx ? true : false}
						setShowIndexx={() => setShowIndexx(index)}
					/>
				))}
			</section>
		);
	};
};

export default RestaurantAccordianMenu;
