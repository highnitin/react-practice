import timer from "../../learnings/timer.gif";
import money from "../../learnings/money.gif";

import RestaurantCoupounCard from "./RestaurantCoupounCard";

const RestaurantOffer = (props) => {
	// console.log(props);
	// console.log("Hello from resoffer.js", props);
	const offerArray = props.data.offers;
	const { sla, costForTwoMessage } = props.newData;

	return (
		<section className="w-full">
			<section className="py-5 flex space-x-4">
				<section className="flex justify-center items-center space-x-2">
					<img
						src={timer}
						className="w-auto h-7"
					/>
					<p className="text-lg font-semibold">
						{sla.slaString ? sla.slaString : "30 MINS"}
					</p>
				</section>

				<section className="flex justify-center items-center space-x-2">
					<img
						src={money}
						className="w-auto h-7"
					/>
					<p className="text-lg font-semibold">{costForTwoMessage}</p>
				</section>
			</section>
			<section className="flex space-x-3 overflow-hidden mt-2 mb-10">
				{offerArray.map((element) => (
					<RestaurantCoupounCard
						key={element.info.offerIds[0]}
						data={element}
					/>
				))}
			</section>
		</section>
	);
};

export default RestaurantOffer;
