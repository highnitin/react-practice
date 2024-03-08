import CardFoodType from "./CardFoodType";
import CardRating from "./CardRating";
import CardETA from "./CardEta";

const CardFeatureSection = (props) => {
	const { veg, avgRating, slaString } = props.featureSection;
	return (
		<section className="featureSection flex flex-row space-x-2">
			<CardFoodType finalFoodType={veg} />
			<CardRating finalRating={avgRating} />
			<CardETA finalETA={slaString} />
		</section>
	);
};

export default CardFeatureSection;
