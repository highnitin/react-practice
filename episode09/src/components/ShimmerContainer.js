import ShimmerCard from "./ShimmerCard";
import { SHIMMER_CARD_COUNT } from "../utils/constants";
const uniqueKeyShimmerCard = 121;
const ShimmerContainer = () => {
	return (
		<section className="shimmerContainer">
			{SHIMMER_CARD_COUNT.map((element) => (
				<ShimmerCard key={uniqueKeyShimmerCard + element} />
			))}
		</section>
	);
};

export default ShimmerContainer;
