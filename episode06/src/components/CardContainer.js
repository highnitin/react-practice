import Card from "./Card";

const CardContainer = ({ dataRestaurant }) => {
	const uniqueKeyID = dataRestaurant[0].info.id;

	return (
		<section className="cardContainer">
			{dataRestaurant.map((element, index) => (
				<Card
					key={index + "resAPP" + uniqueKeyID}
					propData={element}
				/>
			))}
		</section>
	);
};

export default CardContainer;
