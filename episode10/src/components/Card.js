import CardImage from "./CardImage";
import CardHeading from "./CardHeading";
import CardPriceForTwo from "./CardPriceForTwo";
import CardFeatureSection from "./CardFeatureSection";
import CardCuisineList from "./CardCuisineList";
import CardAddress from "./CardAddress";
import { Link } from "react-router-dom";

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
		id,
	} = props.propData.info;

	const { slaString } = sla;
	const featureArray = { veg, avgRating, slaString };
	const completeCuisineList = cuisines.join(", ");
	const completeAddress = locality + ", " + areaName;
	return (
		<Link to={"restaurant/" + id}>
			<section className="card flex flex-col justify-between items-start border-2 border-gray-400 m-5 p-3 w-64 min-h-96 max-h-96 overflow-hidden rounded-md">
				<CardImage url={cloudinaryImageId} />
				<CardHeading heading={name} />
				<CardPriceForTwo priceForTwo={costForTwo} />
				<CardFeatureSection featureSection={featureArray} />
				<CardCuisineList cuisineList={completeCuisineList} />
				<CardAddress address={completeAddress} />
			</section>
		</Link>
	);
};

export default Card;
