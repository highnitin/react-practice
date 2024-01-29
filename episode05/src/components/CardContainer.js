import restaurantData from "../utils/demoData";
import Card from "./Card";

const CardContainer = () => {
	const uniqueKeyID = restaurantData[0].card.card.info.id;
	return (
		<section className="cardContainer">
			{restaurantData.map((element, index) => (
				<Card
					key={index + "resAPP" + uniqueKeyID}
					propsResData={element}
				/>
			))}
		</section>
	);
};

export default CardContainer;
