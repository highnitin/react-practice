/*

Componnent Destructuring (white > blue > red > purple)

App (white)
 - Header (blue)
    - Logo (red)
        - Image
    - NavBar (red)
        - List (home | about | blog | contact | cart)
 - Body (blue)
    - Search (red)
        - Input box
        - Button
    - RestaurantCardContainer (red)
        - Cards (purple)
            - Image
            - Name
            - Features
                - Price
                - Rating
                - ETA
            - Cuisine List
            - Address
 - Footer (blue)
    - Content (red)

*/

import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="heading">Hello Developer</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

// components for header

const Logo = () => {
	return (
		<section className="logoContainer">
			<img
				className="logoImg"
				src="https://i0.wp.com/www.highnitin.com/wp-content/uploads/2022/07/cropped-highnitin_logo_dark.png?resize=84%2C65&ssl=1"
				alt="Food App Logo"
			/>
		</section>
	);
};

const NavBar = () => {
	return (
		<nav className="navBar">
			<ul className="navBarList">
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
				<li>Blog</li>
				<li>Cart</li>
			</ul>
		</nav>
	);
};

// Header component

const Heading = () => {
	// console.log(props);
	// console.log(props.logoUrl);
	return (
		<header className="headerSection">
			<Logo />
			<NavBar />
		</header>
	);
};

// components for main section

// search bar component

const SearchSection = () => {
	return (
		<section className="searchSection">
			<form
				id="formSection"
				className="formSection">
				<input
					type="text"
					name="name"
					placeholder="You're Fav food is waiting"
					className="inputSection"
				/>
				<input
					type="submit"
					value="Submit"
					className="submitButtonSection"
					disabled
				/>
			</form>
		</section>
	);
};

// CardImage component
const CardImage = (props) => {
	console.log(props.url);
	url = props.url;
	return (
		<img
			className="cardImg"
			src={url}
			alt="Image Food Dish"
		/>
	);
};

// CardHeading component
const CardHeading = (props) => {
	return <h2 className="cardHeading">{props.heading}</h2>;
};

const CardDishName = (props) => {
	return <h2 className="cardDishName">{props.dishName}</h2>;
};

// CardCuisineList component
const CardCuisineList = (props) => {
	return <h3 className="cardCuisineList">{props.cuisineList}</h3>;
};

// CardAddress component
const CardAddress = (props) => {
	return <h3 className="cardAddress">{props.address}</h3>;
};

// components for Featured Section
const CardPrice = (props) => {
	price = props.finalPrice.cardPrice;
	return <h3 className="cardPrice">{price}</h3>;
};

const CardRating = (props) => {
	rating = props.finalRating.cardRating;
	return <h3 className="cardRating">{rating}</h3>;
};

const CardETA = (props) => {
	eta = props.finalETA.cardETA;
	return <h3 className="cardETA">{eta}</h3>;
};

// FeaturedSection component
const CardFeatureSection = (props) => {
	return (
		<section className="featureSection">
			<CardPrice finalPrice={props.featureSection} />
			<CardRating finalRating={props.featureSection} />
			<CardETA finalETA={props.featureSection} />
		</section>
	);
};

// Card Component
const Card = (props) => {
	return (
		<section className="card">
			<CardImage url={props.cardImg} />
			<CardHeading heading={props.cardHeading} />
			<CardDishName dishName={props.cardDishName} />
			<CardFeatureSection featureSection={props.cardFeatureSection} />
			<CardCuisineList cuisineList={props.cardCuisineList} />
			<CardAddress address={props.cardAddress} />
		</section>
	);
};

// id = card.card.info.id
// image = card.card.info.cloudinaryImageId
// name = card.card.info.name
// dishName = card.card.info.costForTwo
// pricingDiscount = card.card.info.aggregatedDiscountInfoV3.header
// rating = card.card.info.avgRating
// eta = card.card.info.sla.slaString
// cuisines = card.card.info.cuisines (array)
// address = card.card.info.locality + card.card.info.areaName

const restaurantData = [
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				info: {
					id: "556483",
					name: "Bombaywala Restaurant",
					cloudinaryImageId: "d788388dcb930a5c5b3a2ec99e23d791",
					locality: "Hingna Road",
					areaName: "Hingna T Point",
					costForTwo: "₹250 for two",
					cuisines: [
						"Indian",
						"North Indian",
						"Tandoor",
						"South Indian",
						"Fast Food",
					],
					avgRating: 4.4,
					veg: true,
					parentId: "9269",
					avgRatingString: "4.4",
					totalRatingsString: "500+",
					promoted: true,
					adTrackingId:
						"cid=10378963~p=2~eid=0000018d-4bb0-6e18-5f55-7ef000860242~srvts=1706371870232~80397",
					sla: {
						deliveryTime: 39,
						lastMileTravel: 6.4,
						serviceability: "SERVICEABLE",
						slaString: "35-40 mins",
						lastMileTravelString: "6.4 km",
						iconType: "ICON_TYPE_EMPTY",
					},
					availability: {
						nextCloseTime: "2024-01-27 22:45:00",
						opened: true,
					},
					badges: {},
					isOpen: true,
					type: "F",
					badgesV2: {
						entityBadges: {
							imageBased: {},
							textExtendedBadges: {},
							textBased: {},
						},
					},
					aggregatedDiscountInfoV3: {
						header: "20% OFF",
						subHeader: "UPTO ₹50",
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
						differentiatedUiMediaDetails: {
							maxDuration: "3000",
							mediaType: "ADS_MEDIA_ENUM_IMAGE",
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
					restaurantOfferPresentationInfo: {},
					externalRatings: {
						aggregatedRating: {
							rating: "--",
						},
					},
					ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
				},
				analytics: {},
				cta: {
					link: "swiggy://menu?restaurant_id=556483&source=collection&query=Samosa",
					text: "RESTAURANT_MENU",
					type: "DEEPLINK",
				},
				widgetId: "collectionV5RestaurantListWidget_Contextual",
			},
			relevance: {
				type: "RELEVANCE_TYPE_ON_MENU_RETURN",
				sectionId: "MENU_RETURN_FOOD",
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				info: {
					id: "53969",
					name: "Shree Ganesh Sagar",
					cloudinaryImageId: "skv4nitrcnk0mnzrwvea",
					locality: "Hanuman Mandir Road",
					areaName: "Dharampeth",
					costForTwo: "₹300 for two",
					cuisines: [
						"South Indian",
						"North Indian",
						"Chinese",
						"Desserts",
						"Beverages",
						"Fast food",
						"Snacks",
					],
					avgRating: 4.3,
					veg: true,
					parentId: "4833",
					avgRatingString: "4.3",
					totalRatingsString: "1K+",
					promoted: true,
					adTrackingId:
						"cid=10848762~p=4~eid=0000018d-4bb0-6e18-5f55-7ef20086044a~srvts=1706371870232~80397",
					sla: {
						deliveryTime: 25,
						lastMileTravel: 1,
						serviceability: "SERVICEABLE",
						slaString: "25-30 mins",
						lastMileTravelString: "1.0 km",
						iconType: "ICON_TYPE_EMPTY",
					},
					availability: {
						nextCloseTime: "2024-01-27 22:30:00",
						opened: true,
					},
					badges: {
						imageBadges: [
							{
								imageId: "v1695133679/badges/Pure_Veg111.png",
								description: "pureveg",
							},
						],
					},
					isOpen: true,
					aggregatedDiscountInfoV2: {},
					type: "F",
					badgesV2: {
						entityBadges: {
							imageBased: {
								badgeObject: [
									{
										attributes: {
											imageId: "v1695133679/badges/Pure_Veg111.png",
											description: "pureveg",
										},
									},
								],
							},
							textExtendedBadges: {},
							textBased: {},
						},
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
						differentiatedUiMediaDetails: {
							maxDuration: "3000",
							mediaType: "ADS_MEDIA_ENUM_IMAGE",
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
					restaurantOfferPresentationInfo: {},
					externalRatings: {
						aggregatedRating: {
							rating: "--",
						},
					},
					ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
				},
				analytics: {},
				cta: {
					link: "swiggy://menu?restaurant_id=53969&source=collection&query=Samosa",
					text: "RESTAURANT_MENU",
					type: "DEEPLINK",
				},
				widgetId: "collectionV5RestaurantListWidget_Contextual",
			},
			relevance: {
				type: "RELEVANCE_TYPE_ON_MENU_RETURN",
				sectionId: "MENU_RETURN_FOOD",
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				info: {
					id: "52699",
					name: "Bula's Kitchen",
					cloudinaryImageId: "juidass9btztljfdnzww",
					locality: "Khamla Square",
					areaName: "Pratap Nagar",
					costForTwo: "₹400 for two",
					cuisines: [
						"North Indian",
						"Biryani",
						"Mughlai",
						"Tandoor",
						"Chinese",
						"Fast Food",
						"Rolls & Wraps",
						"Pastas",
						"Momos",
						"Beverages",
						"Desserts",
						"Afghani",
					],
					avgRating: 4.4,
					parentId: "9588",
					avgRatingString: "4.4",
					totalRatingsString: "10K+",
					promoted: true,
					adTrackingId:
						"cid=10324341~p=7~eid=0000018d-4bb0-6e18-5f55-7ef50086073d~srvts=1706371870232~80397",
					sla: {
						deliveryTime: 32,
						lastMileTravel: 3.5,
						serviceability: "SERVICEABLE",
						slaString: "30-35 mins",
						lastMileTravelString: "3.5 km",
						iconType: "ICON_TYPE_EMPTY",
					},
					availability: {
						nextCloseTime: "2024-01-27 23:00:00",
						opened: true,
					},
					badges: {},
					isOpen: true,
					aggregatedDiscountInfoV2: {},
					type: "F",
					badgesV2: {
						entityBadges: {
							textBased: {},
							imageBased: {},
							textExtendedBadges: {},
						},
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
						differentiatedUiMediaDetails: {
							maxDuration: "3000",
							mediaType: "ADS_MEDIA_ENUM_IMAGE",
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
					restaurantOfferPresentationInfo: {},
					externalRatings: {
						aggregatedRating: {
							rating: "--",
						},
					},
					ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
				},
				analytics: {},
				cta: {
					link: "swiggy://menu?restaurant_id=52699&source=collection&query=Samosa",
					text: "RESTAURANT_MENU",
					type: "DEEPLINK",
				},
				widgetId: "collectionV5RestaurantListWidget_Contextual",
			},
			relevance: {
				type: "RELEVANCE_TYPE_ON_MENU_RETURN",
				sectionId: "MENU_RETURN_FOOD",
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				info: {
					id: "61885",
					name: "Haldiram's Sweets and Namkeen",
					cloudinaryImageId: "a2786e375e579284f2d073a47fcb7be4",
					locality: "Jivan Chhaya Society",
					areaName: "Pratap Nagar",
					costForTwo: "₹400 for two",
					cuisines: ["Sweets", "Snacks", "Desserts", "Bakery", "Beverages"],
					avgRating: 4.8,
					veg: true,
					parentId: "391465",
					avgRatingString: "4.8",
					totalRatingsString: "5K+",
					promoted: true,
					adTrackingId:
						"cid=10848787~p=9~eid=0000018d-4bb0-6e18-5f55-7ef700860946~srvts=1706371870232~80397",
					sla: {
						deliveryTime: 24,
						lastMileTravel: 4.2,
						serviceability: "SERVICEABLE",
						slaString: "20-25 mins",
						lastMileTravelString: "4.2 km",
						iconType: "ICON_TYPE_EMPTY",
					},
					availability: {
						nextCloseTime: "2024-01-27 22:30:00",
						opened: true,
					},
					badges: {
						imageBadges: [
							{
								imageId: "v1695133679/badges/Pure_Veg111.png",
								description: "pureveg",
							},
						],
					},
					isOpen: true,
					aggregatedDiscountInfoV2: {},
					type: "F",
					badgesV2: {
						entityBadges: {
							textBased: {},
							imageBased: {
								badgeObject: [
									{
										attributes: {
											imageId: "v1695133679/badges/Pure_Veg111.png",
											description: "pureveg",
										},
									},
								],
							},
							textExtendedBadges: {},
						},
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
						differentiatedUiMediaDetails: {
							maxDuration: "3000",
							mediaType: "ADS_MEDIA_ENUM_IMAGE",
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
					restaurantOfferPresentationInfo: {},
					externalRatings: {
						aggregatedRating: {
							rating: "--",
						},
					},
					ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
				},
				analytics: {},
				cta: {
					link: "swiggy://menu?restaurant_id=61885&source=collection&query=Samosa",
					text: "RESTAURANT_MENU",
					type: "DEEPLINK",
				},
				widgetId: "collectionV5RestaurantListWidget_Contextual",
			},
			relevance: {
				type: "RELEVANCE_TYPE_ON_MENU_RETURN",
				sectionId: "MENU_RETURN_FOOD",
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				info: {
					id: "55054",
					name: "Reddy's Gokul Brindavan Restaurant",
					cloudinaryImageId: "dfkbemd7eretrwbbesyo",
					locality: "Laxminagar",
					areaName: "Dharampeth",
					costForTwo: "₹300 for two",
					cuisines: [
						"South Indian",
						"Snacks",
						"Desserts",
						"beverages",
						"sweets",
					],
					avgRating: 4.7,
					veg: true,
					parentId: "168579",
					avgRatingString: "4.7",
					totalRatingsString: "10K+",
					promoted: true,
					adTrackingId:
						"cid=10848770~p=13~eid=0000018d-4bb0-6e18-5f55-7efb00860d39~srvts=1706371870232~80397",
					sla: {
						deliveryTime: 21,
						lastMileTravel: 1,
						serviceability: "SERVICEABLE",
						slaString: "20-25 mins",
						lastMileTravelString: "1.0 km",
						iconType: "ICON_TYPE_EMPTY",
					},
					availability: {
						nextCloseTime: "2024-01-27 22:30:00",
						opened: true,
					},
					badges: {
						imageBadges: [
							{
								imageId: "v1695133679/badges/Pure_Veg111.png",
								description: "pureveg",
							},
						],
					},
					isOpen: true,
					aggregatedDiscountInfoV2: {},
					type: "F",
					badgesV2: {
						entityBadges: {
							textBased: {},
							imageBased: {
								badgeObject: [
									{
										attributes: {
											description: "pureveg",
											imageId: "v1695133679/badges/Pure_Veg111.png",
										},
									},
								],
							},
							textExtendedBadges: {},
						},
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
						differentiatedUiMediaDetails: {
							maxDuration: "3000",
							mediaType: "ADS_MEDIA_ENUM_IMAGE",
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
					restaurantOfferPresentationInfo: {},
					externalRatings: {
						aggregatedRating: {
							rating: "--",
						},
					},
					ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
				},
				analytics: {},
				cta: {
					link: "swiggy://menu?restaurant_id=55054&source=collection&query=Samosa",
					text: "RESTAURANT_MENU",
					type: "DEEPLINK",
				},
				widgetId: "collectionV5RestaurantListWidget_Contextual",
			},
			relevance: {
				type: "RELEVANCE_TYPE_ON_MENU_RETURN",
				sectionId: "MENU_RETURN_FOOD",
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				info: {
					id: "53485",
					name: "Haldiram's Restaurant",
					cloudinaryImageId: "zhzmhzih7j2u4i2kkze8",
					locality: "Dharampeth",
					areaName: "Dharampeth",
					costForTwo: "₹400 for two",
					cuisines: [
						"North Indian",
						"South Indian",
						"Biryani",
						"Chinese",
						"Chaat",
						"Thalis",
						"Bakery",
						"Sweets",
						"Beverages",
						"Desserts",
						"Snacks",
						"Continental",
						"Momos",
						"Pastas",
						"Burgers",
					],
					avgRating: 4.4,
					parentId: "351771",
					avgRatingString: "4.4",
					totalRatingsString: "10K+",
					sla: {
						deliveryTime: 22,
						lastMileTravel: 0.3,
						serviceability: "SERVICEABLE",
						slaString: "20-25 mins",
						lastMileTravelString: "0.3 km",
						iconType: "ICON_TYPE_EMPTY",
					},
					availability: {
						nextCloseTime: "2024-01-28 01:00:00",
						opened: true,
					},
					badges: {},
					isOpen: true,
					type: "F",
					badgesV2: {
						entityBadges: {
							textBased: {},
							imageBased: {},
							textExtendedBadges: {},
						},
					},
					aggregatedDiscountInfoV3: {
						header: "20% OFF",
						subHeader: "UPTO ₹50",
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
						differentiatedUiMediaDetails: {
							maxDuration: "3000",
							mediaType: "ADS_MEDIA_ENUM_IMAGE",
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
					restaurantOfferPresentationInfo: {},
					externalRatings: {
						aggregatedRating: {
							rating: "--",
						},
					},
					ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
				},
				analytics: {},
				cta: {
					link: "swiggy://menu?restaurant_id=53485&source=collection&query=Samosa",
					text: "RESTAURANT_MENU",
					type: "DEEPLINK",
				},
				widgetId: "collectionV5RestaurantListWidget_Contextual",
			},
			relevance: {
				type: "RELEVANCE_TYPE_ON_MENU_RETURN",
				sectionId: "MENU_RETURN_FOOD",
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				info: {
					id: "83174",
					name: "Gangour",
					cloudinaryImageId: "152b637e1f6967b09313c9e305287c40",
					locality: "Sudama Theatre",
					areaName: "Dharampeth",
					costForTwo: "₹150 for two",
					cuisines: [
						"Fast Food",
						"Street Food",
						"Sweets",
						"Desserts",
						"Beverages",
						"Snacks",
						"Bakery",
					],
					avgRating: 4.2,
					veg: true,
					parentId: "6009",
					avgRatingString: "4.2",
					totalRatingsString: "1K+",
					sla: {
						deliveryTime: 17,
						lastMileTravel: 0.8,
						serviceability: "SERVICEABLE",
						slaString: "15-20 mins",
						lastMileTravelString: "0.8 km",
						iconType: "ICON_TYPE_EMPTY",
					},
					availability: {
						nextCloseTime: "2024-01-27 22:00:00",
						opened: true,
					},
					badges: {
						imageBadges: [
							{
								imageId: "v1695133679/badges/Pure_Veg111.png",
								description: "pureveg",
							},
						],
					},
					isOpen: true,
					aggregatedDiscountInfoV2: {},
					type: "F",
					badgesV2: {
						entityBadges: {
							textBased: {},
							imageBased: {
								badgeObject: [
									{
										attributes: {
											description: "pureveg",
											imageId: "v1695133679/badges/Pure_Veg111.png",
										},
									},
								],
							},
							textExtendedBadges: {},
						},
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
						differentiatedUiMediaDetails: {
							maxDuration: "3000",
							mediaType: "ADS_MEDIA_ENUM_IMAGE",
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
					restaurantOfferPresentationInfo: {},
					externalRatings: {
						aggregatedRating: {
							rating: "--",
						},
					},
					ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
				},
				analytics: {},
				cta: {
					link: "swiggy://menu?restaurant_id=83174&source=collection&query=Samosa",
					text: "RESTAURANT_MENU",
					type: "DEEPLINK",
				},
				widgetId: "collectionV5RestaurantListWidget_Contextual",
			},
			relevance: {
				type: "RELEVANCE_TYPE_ON_MENU_RETURN",
				sectionId: "MENU_RETURN_FOOD",
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				info: {
					id: "495253",
					name: "Anna Idli",
					cloudinaryImageId: "k5sziqdahyihfdphxcfv",
					locality: "Laxminagar",
					areaName: "Laxminagar",
					costForTwo: "₹300 for two",
					cuisines: ["South Indian", "Beverages", "desserts", "Fast Food"],
					avgRating: 4.3,
					veg: true,
					parentId: "3790",
					avgRatingString: "4.3",
					totalRatingsString: "1K+",
					sla: {
						deliveryTime: 23,
						lastMileTravel: 2,
						serviceability: "SERVICEABLE",
						slaString: "20-25 mins",
						lastMileTravelString: "2.0 km",
						iconType: "ICON_TYPE_EMPTY",
					},
					availability: {
						nextCloseTime: "2024-01-27 23:00:00",
						opened: true,
					},
					badges: {},
					isOpen: true,
					type: "F",
					badgesV2: {
						entityBadges: {
							textBased: {},
							imageBased: {},
							textExtendedBadges: {},
						},
					},
					aggregatedDiscountInfoV3: {
						header: "30% OFF",
						subHeader: "UPTO ₹75",
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
						differentiatedUiMediaDetails: {
							maxDuration: "3000",
							mediaType: "ADS_MEDIA_ENUM_IMAGE",
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
					restaurantOfferPresentationInfo: {},
					externalRatings: {
						aggregatedRating: {
							rating: "--",
						},
					},
					ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
				},
				analytics: {},
				cta: {
					link: "swiggy://menu?restaurant_id=495253&source=collection&query=Samosa",
					text: "RESTAURANT_MENU",
					type: "DEEPLINK",
				},
				widgetId: "collectionV5RestaurantListWidget_Contextual",
			},
			relevance: {
				type: "RELEVANCE_TYPE_ON_MENU_RETURN",
				sectionId: "MENU_RETURN_FOOD",
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				info: {
					id: "620948",
					name: "Chaskaa",
					cloudinaryImageId: "7e36d04f4f75e319367ac02f3d7906c7",
					locality: "AmBazaari Road\n",
					areaName: "Sitabuldi",
					costForTwo: "₹200 for two",
					cuisines: [
						"North Indian",
						"South Indian",
						"Thalis",
						"Maharashtrian",
						"Chinese",
						"Snacks",
						"Beverages",
					],
					avgRating: 4.2,
					veg: true,
					parentId: "14224",
					avgRatingString: "4.2",
					totalRatingsString: "100+",
					sla: {
						deliveryTime: 26,
						lastMileTravel: 2.6,
						serviceability: "SERVICEABLE",
						slaString: "25-30 mins",
						lastMileTravelString: "2.6 km",
						iconType: "ICON_TYPE_EMPTY",
					},
					availability: {
						nextCloseTime: "2024-01-27 23:00:00",
						opened: true,
					},
					badges: {},
					isOpen: true,
					type: "F",
					badgesV2: {
						entityBadges: {
							textBased: {},
							imageBased: {},
							textExtendedBadges: {},
						},
					},
					aggregatedDiscountInfoV3: {
						header: "20% OFF",
						subHeader: "UPTO ₹50",
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
						differentiatedUiMediaDetails: {
							maxDuration: "3000",
							mediaType: "ADS_MEDIA_ENUM_IMAGE",
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
					restaurantOfferPresentationInfo: {},
					externalRatings: {
						aggregatedRating: {
							rating: "--",
						},
					},
					ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
				},
				analytics: {},
				cta: {
					link: "swiggy://menu?restaurant_id=620948&source=collection&query=Samosa",
					text: "RESTAURANT_MENU",
					type: "DEEPLINK",
				},
				widgetId: "collectionV5RestaurantListWidget_Contextual",
			},
			relevance: {
				type: "RELEVANCE_TYPE_ON_MENU_RETURN",
				sectionId: "MENU_RETURN_FOOD",
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				info: {
					id: "54123",
					name: "Matadin Ram Bhandar",
					cloudinaryImageId: "qd8r8xbcgtfnknvwzid5",
					locality: "Income Tax Colony",
					areaName: "Pratap Nagar",
					costForTwo: "₹300 for two",
					cuisines: [
						"South Indian",
						"North Indian",
						"Sweets",
						"Thalis",
						"Chinese",
						"Fast Food",
						"Desserts",
						"Beverages",
						"Snacks",
						"pastas",
						"bengali",
					],
					avgRating: 4.5,
					veg: true,
					parentId: "133427",
					avgRatingString: "4.5",
					totalRatingsString: "10K+",
					sla: {
						deliveryTime: 28,
						lastMileTravel: 3,
						serviceability: "SERVICEABLE",
						slaString: "25-30 mins",
						lastMileTravelString: "3.0 km",
						iconType: "ICON_TYPE_EMPTY",
					},
					availability: {
						nextCloseTime: "2024-01-27 22:30:00",
						opened: true,
					},
					badges: {
						imageBadges: [
							{
								imageId: "v1695133679/badges/Pure_Veg111.png",
								description: "pureveg",
							},
						],
					},
					isOpen: true,
					type: "F",
					badgesV2: {
						entityBadges: {
							textBased: {},
							imageBased: {
								badgeObject: [
									{
										attributes: {
											description: "pureveg",
											imageId: "v1695133679/badges/Pure_Veg111.png",
										},
									},
								],
							},
							textExtendedBadges: {},
						},
					},
					aggregatedDiscountInfoV3: {
						header: "FREE ITEM",
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
						differentiatedUiMediaDetails: {
							maxDuration: "3000",
							mediaType: "ADS_MEDIA_ENUM_IMAGE",
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
					restaurantOfferPresentationInfo: {},
					externalRatings: {
						aggregatedRating: {
							rating: "--",
						},
					},
					ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
				},
				analytics: {},
				cta: {
					link: "swiggy://menu?restaurant_id=54123&source=collection&query=Samosa",
					text: "RESTAURANT_MENU",
					type: "DEEPLINK",
				},
				widgetId: "collectionV5RestaurantListWidget_Contextual",
			},
			relevance: {
				type: "RELEVANCE_TYPE_ON_MENU_RETURN",
				sectionId: "MENU_RETURN_FOOD",
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				info: {
					id: "54452",
					name: "Krishnum",
					cloudinaryImageId: "bjpqvpk8b5mc2fsd9udn",
					locality: "Vivekanand Nagar",
					areaName: "Sai Mandir, Wardha Road",
					costForTwo: "₹300 for two",
					cuisines: [
						"South indian",
						"North Indian",
						"Thalis",
						"Chinese",
						"Rolls & Wraps",
						"Fast Food",
						"Desserts",
						"Beverages",
						"Pizzas",
						"Burgers",
						"Snacks",
					],
					avgRating: 4.3,
					parentId: "4834",
					avgRatingString: "4.3",
					totalRatingsString: "5K+",
					sla: {
						deliveryTime: 29,
						lastMileTravel: 3,
						serviceability: "SERVICEABLE",
						slaString: "25-30 mins",
						lastMileTravelString: "3.0 km",
						iconType: "ICON_TYPE_EMPTY",
					},
					availability: {
						nextCloseTime: "2024-01-27 23:00:00",
						opened: true,
					},
					badges: {
						imageBadges: [
							{
								imageId: "v1695133679/badges/Pure_Veg111.png",
								description: "pureveg",
							},
						],
					},
					isOpen: true,
					type: "F",
					badgesV2: {
						entityBadges: {
							imageBased: {
								badgeObject: [
									{
										attributes: {
											description: "pureveg",
											imageId: "v1695133679/badges/Pure_Veg111.png",
										},
									},
								],
							},
							textExtendedBadges: {},
							textBased: {},
						},
					},
					aggregatedDiscountInfoV3: {
						header: "60% OFF",
						subHeader: "UPTO ₹120",
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
						differentiatedUiMediaDetails: {
							maxDuration: "3000",
							mediaType: "ADS_MEDIA_ENUM_IMAGE",
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
					restaurantOfferPresentationInfo: {},
					externalRatings: {
						aggregatedRating: {
							rating: "--",
						},
					},
					ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
				},
				analytics: {},
				cta: {
					link: "swiggy://menu?restaurant_id=54452&source=collection&query=Samosa",
					text: "RESTAURANT_MENU",
					type: "DEEPLINK",
				},
				widgetId: "collectionV5RestaurantListWidget_Contextual",
			},
			relevance: {
				type: "RELEVANCE_TYPE_ON_MENU_RETURN",
				sectionId: "MENU_RETURN_FOOD",
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				info: {
					id: "392097",
					name: "Golgappa Express",
					cloudinaryImageId: "6aef813b12e7e205901c20845eefc776",
					locality: "High Court Road",
					areaName: "Dharampeth",
					costForTwo: "₹200 for two",
					cuisines: [
						"Chaat",
						"North Indian",
						"Chinese",
						"Street Food",
						"Fast Food",
						"Beverages",
					],
					avgRating: 4.3,
					veg: true,
					parentId: "88609",
					avgRatingString: "4.3",
					totalRatingsString: "100+",
					sla: {
						deliveryTime: 25,
						lastMileTravel: 0.7,
						serviceability: "SERVICEABLE",
						slaString: "20-25 mins",
						lastMileTravelString: "0.7 km",
						iconType: "ICON_TYPE_EMPTY",
					},
					availability: {
						nextCloseTime: "2024-01-27 23:00:00",
						opened: true,
					},
					badges: {},
					isOpen: true,
					type: "F",
					badgesV2: {
						entityBadges: {
							textBased: {},
							imageBased: {},
							textExtendedBadges: {},
						},
					},
					aggregatedDiscountInfoV3: {
						header: "30% OFF",
						subHeader: "UPTO ₹75",
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
						differentiatedUiMediaDetails: {
							maxDuration: "3000",
							mediaType: "ADS_MEDIA_ENUM_IMAGE",
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
					restaurantOfferPresentationInfo: {},
					externalRatings: {
						aggregatedRating: {
							rating: "--",
						},
					},
					ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
				},
				analytics: {},
				cta: {
					link: "swiggy://menu?restaurant_id=392097&source=collection&query=Samosa",
					text: "RESTAURANT_MENU",
					type: "DEEPLINK",
				},
				widgetId: "collectionV5RestaurantListWidget_Contextual",
			},
			relevance: {
				type: "RELEVANCE_TYPE_ON_MENU_RETURN",
				sectionId: "MENU_RETURN_FOOD",
			},
		},
	},
];

const CardContainer = () => {
	return (
		<section className="cardContainer">
			<Card
				cardImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2cp5ldx1kpzlaq2iuvn"
				cardHeading="Shree Gajanan Shopee"
				cardDishName="Alu Puri"
				cardFeatureSection={{
					cardPrice: "$99",
					cardRating: "5.0/5.0",
					cardETA: "40 mins",
				}}
				cardCuisineList="Indian, Lazzizz, Khana"
				cardAddress="Pune, MH, India"
			/>
			<Card
				cardImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2cp5ldx1kpzlaq2iuvn"
				cardHeading="Ramson's Sweet"
				cardDishName="Dahi Samosa Chat"
				cardFeatureSection={{
					cardPrice: "$199",
					cardRating: "4.0/5.0",
					cardETA: "10 mins",
				}}
				cardCuisineList="Indian, Chinese, Italian"
				cardAddress="Nagpur, MH, India"
			/>
			<Card
				cardImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2cp5ldx1kpzlaq2iuvn"
				cardHeading="Rameshwaram"
				cardDishName="Puliogiri"
				cardFeatureSection={{
					cardPrice: "$199",
					cardRating: "3.0/5.0",
					cardETA: "10 mins",
				}}
				cardCuisineList="Indian, Mexican"
				cardAddress="Bangalore, KA, India"
			/>
			<Card
				cardImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2cp5ldx1kpzlaq2iuvn"
				cardHeading="Ramson's Sweet"
				cardDishName="Dahi Samosa Chat"
				cardFeatureSection={{
					cardPrice: "$199",
					cardRating: "4.0/5.0",
					cardETA: "10 mins",
				}}
				cardCuisineList="Indian, Chinese, Italian"
				cardAddress="Nagpur, MH, India"
			/>
			<Card
				cardImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2cp5ldx1kpzlaq2iuvn"
				cardHeading="Rameshwaram"
				cardDishName="Puliogiri"
				cardFeatureSection={{
					cardPrice: "$199",
					cardRating: "3.0/5.0",
					cardETA: "10 mins",
				}}
				cardCuisineList="Indian, Mexican"
				cardAddress="Bangalore, KA, India"
			/>
			<Card
				cardImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2cp5ldx1kpzlaq2iuvn"
				cardHeading="Ramson's Sweet"
				cardDishName="Dahi Samosa Chat"
				cardFeatureSection={{
					cardPrice: "$199",
					cardRating: "4.0/5.0",
					cardETA: "10 mins",
				}}
				cardCuisineList="Indian, Chinese, Italian"
				cardAddress="Nagpur, MH, India"
			/>
			<Card
				cardImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2cp5ldx1kpzlaq2iuvn"
				cardHeading="Rameshwaram"
				cardDishName="Puliogiri"
				cardFeatureSection={{
					cardPrice: "$199",
					cardRating: "3.0/5.0",
					cardETA: "10 mins",
				}}
				cardCuisineList="Indian, Mexican"
				cardAddress="Bangalore, KA, India"
			/>
			<Card
				cardImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2cp5ldx1kpzlaq2iuvn"
				cardHeading="Ramson's Sweet"
				cardDishName="Dahi Samosa Chat"
				cardFeatureSection={{
					cardPrice: "$199",
					cardRating: "4.0/5.0",
					cardETA: "10 mins",
				}}
				cardCuisineList="Indian, Chinese, Italian"
				cardAddress="Nagpur, MH, India"
			/>
			<Card
				cardImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2cp5ldx1kpzlaq2iuvn"
				cardHeading="Rameshwaram"
				cardDishName="Puliogiri"
				cardFeatureSection={{
					cardPrice: "$199",
					cardRating: "3.0/5.0",
					cardETA: "10 mins",
				}}
				cardCuisineList="Indian, Mexican"
				cardAddress="Bangalore, KA, India"
			/>
			<Card
				cardImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2cp5ldx1kpzlaq2iuvn"
				cardHeading="Ramson's Sweet"
				cardDishName="Dahi Samosa Chat"
				cardFeatureSection={{
					cardPrice: "$199",
					cardRating: "4.0/5.0",
					cardETA: "10 mins",
				}}
				cardCuisineList="Indian, Chinese, Italian"
				cardAddress="Nagpur, MH, India"
			/>
		</section>
	);
};

const Main = () => {
	return (
		<main className="mainSection">
			<SearchSection />
			<CardContainer />
		</main>
	);
};

const Footer = () => {
	return (
		<footer className="footerSection">
			<h3>
				{" "}
				Made with ❤️ for the developers community |{" "}
				<a
					href="https://linkedin.com/in/highnitin"
					target="_blank"
					className="footerTextLink">
					HighNitin
				</a>
			</h3>
		</footer>
	);
};

const App = () => {
	return (
		<section className="containerSection">
			<Heading />
			<Main />
			<Footer />
		</section>
	);
};

root.render(<App />);

/*
body
    <section id="root">
        <section class="containerSection">
            <header class="headerSection">
                <section className= "logoContainer"> <img /></section>
                <nav className= "navbar"> <ul> <li> Home</li> </ul></nav>
            </header>
            <main class="mainSection">
                <section className = "searchSection">
                    <input> Search Input Box </input>
                    <button> Search </button>
                </section>
                <section className = "cardContainer">
                    <section className = "card">
                    <img />
                    <h2></h2>
                    <section className = "featureSection">
                        <h3 className="price"></h3>
                        <h3 className="ratings"></h3>
                        <h3 className="ETA"></h3>
                    </section>
                    <h3></h3>
                    <h3></h3>
                    </section>
                </section>
            </main>
            <footer class="footerSection">
            
            </footer>
        </section>
    </section>
        
body    
*/
