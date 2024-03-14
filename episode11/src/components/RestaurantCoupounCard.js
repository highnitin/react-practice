const RestaurantCoupounCard = (props) => {
	console.log("resCoupon", props);
	const imageUrlForCoupon =
		"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/";
	const { header, couponCode, description, offerLogo, offerTag } =
		props.data.info;
	let slugForFun;
	{
		offerLogo === "offers/generic"
			? (slugForFun = "offers/generic")
			: (slugForFun = offerLogo);
	}

	let imgSlug = imageUrlForCoupon + offerLogo;
	return (
		<section className="flex border border-gray-300 rounded-lg min-w-48 px-2 py-4 justify-start">
			<p className="vertical-lr text-xs text-gray-400 -rotate-90 border ">
				{offerTag}
			</p>
			<section className=" flex flex-col justify-center space-y-1">
				<section className="w-full flex items-center space-x-1">
					<img
						src={imgSlug}
						className="h-5 w-5"
					/>
					<h2 className="text-sm font-semibold w-10/12 text-gray-200">
						{header}
					</h2>
				</section>
				<p className="text-xs text-gray-400">
					{couponCode} {description ? " | " + description : null}
				</p>
			</section>
		</section>
	);
};

export default RestaurantCoupounCard;
