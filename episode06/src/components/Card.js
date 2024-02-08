import CardImage from "./CardImage";
import CardHeading from "./CardHeading";
import CardPriceForTwo from "./CardPriceForTwo";
import CardFeatureSection from "./CardFeatureSection";
import CardCuisineList from "./CardCuisineList";
import CardAddress from "./CardAddress";

const Card = (props) => {
	const {
		name,
		cloudinaryImageId,
		costForTwo,
		cuisines,
		locality,
		areaName,
		veg,
		avgRating,
		sla,
	} = props.propData.info;

	const { slaString } = sla;
	const featureArray = { veg, avgRating, slaString };
	const completeCuisineList = cuisines.join(", ");
	const completeAddress = locality + ", " + areaName;
	return (
		<section className="card">
			<CardImage url={cloudinaryImageId} />
			<CardHeading heading={name} />
			<CardPriceForTwo priceForTwo={costForTwo} />
			<CardFeatureSection featureSection={featureArray} />
			<CardCuisineList cuisineList={completeCuisineList} />
			<CardAddress address={completeAddress} />
		</section>
	);
};

export default Card;
