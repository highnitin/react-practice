import React from "react";
import Card from "./Card";

const CardContainer = ({ newRestaurantData }) => {
	const uniqueKeyID = newRestaurantData[0]?.card.card.info.id || "";

	return (
		<section className="cardContainer">
			{newRestaurantData.map((element, index) => (
				<Card
					key={index + "resAPP" + uniqueKeyID}
					propsResData={element}
				/>
			))}
		</section>
	);
};

export default CardContainer;
