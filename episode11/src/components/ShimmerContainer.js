import { SHIMMER_CARD_COUNT } from "../utils/constants";
import ShimmerCard from "./ShimmerCard";
const uniqueKeyShimmerCard = 121;
const ShimmerContainer = () => {
	return (
		<section className="flex flex-row items-center justify-center flex-wrap	">
			{SHIMMER_CARD_COUNT.map((element) => (
				<ShimmerCard key={uniqueKeyShimmerCard + element} />
			))}
		</section>
	);
};

export default ShimmerContainer;
