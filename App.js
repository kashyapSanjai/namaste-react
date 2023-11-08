import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Component for food delivery app
 *
 * Header
 *  - logo
 *  - nav item
 * Body
 *  - search
 *  - restaurant card container
 *    - restaurant card
 *      - image
 *      - name
 *      - cuisines
 *      - rating
 *      - cost
 * Footer
 *  - copyright
 *  - address
 *  - links
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const {name,cuisines,avgRating,costForTwo,cloudinaryImageId,sla} = props?.restaurantInfo?.info;
  return(
    <div className="rest-card">
      <img className ="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="no image" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString} min</h4>
    </div>
  )
}

const resObj = {
	"restaurants": [
		{
			"info": {
				"id": "59505",
				"name": "Subway",
				"cloudinaryImageId": "0bf19a82b109b40c2f5c56d00f071a33",
				"locality": "Patrakar Puram",
				"areaName": "Gomti Nagar",
				"costForTwo": "₹350 for two",
				"cuisines": [
					"Healthy Food",
					"Salads",
					"Snacks",
					"Desserts",
					"Beverages"
				],
				"avgRating": 4.3,
				"feeDetails": {
					"restaurantId": "59505",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 1800
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 1800
				},
				"parentId": "2",
				"avgRatingString": "4.3",
				"totalRatingsString": "5K+",
				"sla": {
					"deliveryTime": 21,
					"lastMileTravel": 0.8,
					"serviceability": "SERVICEABLE",
					"slaString": "21 mins",
					"lastMileTravelString": "0.8 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-09 00:00:00",
					"opened": true
				},
				"badges": {},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/subway-patrakar-puram-gomti-nagar-lucknow-59505",
				"type": "WEBLINK"
			}
		},
		{
			"info": {
				"id": "84849",
				"name": "Neelkanth Sweets",
				"cloudinaryImageId": "s18pogvibjbumrnnabxr",
				"locality": "Vivek Khand 3",
				"areaName": "Gomti Nagar",
				"costForTwo": "₹300 for two",
				"cuisines": [
					"Sweets",
					"Snacks",
					"North Indian",
					"Chinese",
					"South Indian",
					"Chaat"
				],
				"avgRating": 4.3,
				"veg": true,
				"feeDetails": {
					"restaurantId": "84849",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 2300
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 2300
				},
				"parentId": "7166",
				"avgRatingString": "4.3",
				"totalRatingsString": "10K+",
				"sla": {
					"deliveryTime": 18,
					"lastMileTravel": 2.1,
					"serviceability": "SERVICEABLE",
					"slaString": "18 mins",
					"lastMileTravelString": "2.1 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-08 22:00:00",
					"opened": true
				},
				"badges": {
					"imageBadges": [
						{
							"imageId": "v1695133679/badges/Pure_Veg111.png",
							"description": "pureveg"
						}
					]
				},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {
							"badgeObject": [
								{
									"attributes": {
										"description": "pureveg",
										"imageId": "v1695133679/badges/Pure_Veg111.png"
									}
								}
							]
						},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"aggregatedDiscountInfoV3": {
					"header": "₹125 OFF",
					"subHeader": "ABOVE ₹199",
					"discountTag": "FLAT DEAL"
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/neelkanth-sweets-vivek-khand-3-gomti-nagar-lucknow-84849",
				"type": "WEBLINK"
			}
		},
		{
			"info": {
				"id": "253733",
				"name": "McDonald's",
				"cloudinaryImageId": "6dc3ed2ca21d71acff7c2a51dfe4c720",
				"locality": "West End Mall",
				"areaName": "Gomti Nagar",
				"costForTwo": "₹400 for two",
				"cuisines": [
					"American"
				],
				"avgRating": 4.1,
				"feeDetails": {
					"restaurantId": "253733",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 2900
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 2900
				},
				"parentId": "630",
				"avgRatingString": "4.1",
				"totalRatingsString": "10K+",
				"sla": {
					"deliveryTime": 28,
					"lastMileTravel": 4.2,
					"serviceability": "SERVICEABLE",
					"slaString": "28 mins",
					"lastMileTravelString": "4.2 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-08 23:45:00",
					"opened": true
				},
				"badges": {},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"aggregatedDiscountInfoV3": {
					"header": "30% OFF",
					"subHeader": "UPTO ₹75"
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/mcdonalds-west-end-mall-gomti-nagar-lucknow-253733",
				"type": "WEBLINK"
			}
		},
		{
			"info": {
				"id": "238588",
				"name": "Sweet Truth - Cake and Desserts",
				"cloudinaryImageId": "4a3b48488e3aa9bda13efd8cfcd95284",
				"locality": "Gomti Nagar",
				"areaName": "Kamta",
				"costForTwo": "₹450 for two",
				"cuisines": [
					"Snacks",
					"Bakery",
					"Desserts",
					"Beverages"
				],
				"avgRating": 4.1,
				"feeDetails": {
					"restaurantId": "238588",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 2800
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 2800
				},
				"parentId": "4444",
				"avgRatingString": "4.1",
				"totalRatingsString": "1K+",
				"sla": {
					"deliveryTime": 24,
					"lastMileTravel": 3.8,
					"serviceability": "SERVICEABLE",
					"slaString": "24 mins",
					"lastMileTravelString": "3.8 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-08 23:59:00",
					"opened": true
				},
				"badges": {},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"aggregatedDiscountInfoV3": {
					"header": "60% OFF",
					"subHeader": "UPTO ₹120"
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-gomti-nagar-kamta-lucknow-238588",
				"type": "WEBLINK"
			}
		},
		{
			"info": {
				"id": "367778",
				"name": "Burger Singh (Big Punjabi Burgers)",
				"cloudinaryImageId": "ul7hxrp3anfa5vk2ih1i",
				"locality": "Viram Khand 1",
				"areaName": "Gomti Nagar",
				"costForTwo": "₹300 for two",
				"cuisines": [
					"American",
					"Beverages",
					"Desserts",
					"Snacks",
					"Indian"
				],
				"avgRating": 4.2,
				"feeDetails": {
					"restaurantId": "367778",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 1800
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 1800
				},
				"parentId": "375065",
				"avgRatingString": "4.2",
				"totalRatingsString": "5K+",
				"sla": {
					"deliveryTime": 24,
					"lastMileTravel": 0.9,
					"serviceability": "SERVICEABLE",
					"slaString": "24 mins",
					"lastMileTravelString": "0.9 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-09 04:15:00",
					"opened": true
				},
				"badges": {},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"aggregatedDiscountInfoV3": {
					"header": "50% OFF",
					"subHeader": "UPTO ₹100"
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/burger-singh-big-punjabi-burgers-viram-khand-1-gomti-nagar-lucknow-367778",
				"type": "WEBLINK"
			}
		},
		{
			"info": {
				"id": "238584",
				"name": "Faasos - Wraps & Rolls",
				"cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
				"locality": "Gomti Nagar",
				"areaName": "Kamta",
				"costForTwo": "₹200 for two",
				"cuisines": [
					"Kebabs",
					"Fast Food",
					"Snacks",
					"North Indian",
					"American",
					"Healthy Food",
					"Desserts",
					"Beverages"
				],
				"avgRating": 4.1,
				"feeDetails": {
					"restaurantId": "238584",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 2300
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 2300
				},
				"parentId": "21809",
				"avgRatingString": "4.1",
				"totalRatingsString": "5K+",
				"sla": {
					"deliveryTime": 28,
					"lastMileTravel": 3.8,
					"serviceability": "SERVICEABLE",
					"slaString": "28 mins",
					"lastMileTravelString": "3.8 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-08 23:59:00",
					"opened": true
				},
				"badges": {},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"aggregatedDiscountInfoV3": {
					"header": "₹100 OFF",
					"subHeader": "ABOVE ₹249",
					"discountTag": "FLAT DEAL"
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-gomti-nagar-kamta-lucknow-238584",
				"type": "WEBLINK"
			}
		},
		{
			"info": {
				"id": "59323",
				"name": "Burger Point",
				"cloudinaryImageId": "zjnzepkwyntykyqzhuuv",
				"locality": "Vibhav Khand 4",
				"areaName": "Gomti Nagar",
				"costForTwo": "₹200 for two",
				"cuisines": [
					"Snacks",
					"Beverages"
				],
				"avgRating": 3.9,
				"feeDetails": {
					"restaurantId": "59323",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 2300
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 2300
				},
				"parentId": "168",
				"avgRatingString": "3.9",
				"totalRatingsString": "10K+",
				"sla": {
					"deliveryTime": 31,
					"lastMileTravel": 3,
					"serviceability": "SERVICEABLE",
					"slaString": "31 mins",
					"lastMileTravelString": "3.0 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-08 22:00:00",
					"opened": true
				},
				"badges": {},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"aggregatedDiscountInfoV3": {
					"header": "50% OFF",
					"subHeader": "UPTO ₹100"
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/burger-point-vibhav-khand-4-gomti-nagar-lucknow-59323",
				"type": "WEBLINK"
			}
		},
		{
			"info": {
				"id": "58649",
				"name": "The Belgian Waffle Co.",
				"cloudinaryImageId": "8cb220fa3997a3b928d2ffb6c098acaf",
				"locality": "Gomti Nagar",
				"areaName": "Gomti Nagar",
				"costForTwo": "₹200 for two",
				"cuisines": [
					"Waffle",
					"Desserts",
					"Ice Cream",
					"Beverages"
				],
				"avgRating": 4.3,
				"veg": true,
				"feeDetails": {
					"restaurantId": "58649",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 1800
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 1800
				},
				"parentId": "2233",
				"avgRatingString": "4.3",
				"totalRatingsString": "10K+",
				"sla": {
					"deliveryTime": 33,
					"lastMileTravel": 0.9,
					"serviceability": "SERVICEABLE",
					"slaString": "33 mins",
					"lastMileTravelString": "0.9 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-09 03:00:00",
					"opened": true
				},
				"badges": {},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"aggregatedDiscountInfoV3": {
					"header": "20% OFF",
					"subHeader": "UPTO ₹50"
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-gomti-nagar-lucknow-58649",
				"type": "WEBLINK"
			}
		},
		{
			"info": {
				"id": "238591",
				"name": "LunchBox - Meals and Thalis",
				"cloudinaryImageId": "scumfmbuuneix7vtbico",
				"locality": "Gomti Nagar",
				"areaName": "Kamta",
				"costForTwo": "₹200 for two",
				"cuisines": [
					"Biryani",
					"North Indian",
					"Punjabi",
					"Healthy Food",
					"Desserts",
					"Beverages"
				],
				"avgRating": 4.1,
				"feeDetails": {
					"restaurantId": "238591",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 2300
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 2300
				},
				"parentId": "4925",
				"avgRatingString": "4.1",
				"totalRatingsString": "1K+",
				"sla": {
					"deliveryTime": 28,
					"lastMileTravel": 3.8,
					"serviceability": "SERVICEABLE",
					"slaString": "28 mins",
					"lastMileTravelString": "3.8 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-08 23:59:00",
					"opened": true
				},
				"badges": {},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"aggregatedDiscountInfoV3": {
					"header": "60% OFF",
					"subHeader": "UPTO ₹120"
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-gomti-nagar-kamta-lucknow-238591",
				"type": "WEBLINK"
			}
		},
		{
			"info": {
				"id": "238585",
				"name": "Behrouz Biryani",
				"cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
				"locality": "Gomti Nagar",
				"areaName": "Kamta",
				"costForTwo": "₹500 for two",
				"cuisines": [
					"Biryani",
					"Mughlai",
					"North Indian",
					"Lucknowi",
					"Hyderabadi",
					"Kebabs",
					"Desserts",
					"Beverages"
				],
				"avgRating": 4.1,
				"feeDetails": {
					"restaurantId": "238585",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 3000
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 3000
				},
				"parentId": "1803",
				"avgRatingString": "4.1",
				"totalRatingsString": "1K+",
				"sla": {
					"deliveryTime": 30,
					"lastMileTravel": 3.8,
					"serviceability": "SERVICEABLE",
					"slaString": "30 mins",
					"lastMileTravelString": "3.8 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-08 23:59:00",
					"opened": true
				},
				"badges": {},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"aggregatedDiscountInfoV3": {
					"header": "60% OFF",
					"subHeader": "UPTO ₹120"
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/behrouz-biryani-gomti-nagar-kamta-lucknow-238585",
				"type": "WEBLINK"
			}
		},
		{
			"info": {
				"id": "59287",
				"name": "Domino's Pizza",
				"cloudinaryImageId": "kdlkjzwsftm1sbxplfyp",
				"locality": "Gomti Nagar",
				"areaName": "Gomti Nagar",
				"costForTwo": "₹400 for two",
				"cuisines": [
					"Pizzas",
					"Italian",
					"Pastas",
					"Desserts"
				],
				"avgRating": 4.3,
				"feeDetails": {
					"restaurantId": "59287",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 1800
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 1800
				},
				"parentId": "2456",
				"avgRatingString": "4.3",
				"totalRatingsString": "5K+",
				"sla": {
					"deliveryTime": 31,
					"lastMileTravel": 2.1,
					"serviceability": "SERVICEABLE",
					"slaString": "31 mins",
					"lastMileTravelString": "2.1 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-09 00:59:00",
					"opened": true
				},
				"badges": {},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"aggregatedDiscountInfoV3": {
					"header": "₹150 OFF",
					"subHeader": "ABOVE ₹1499",
					"discountTag": "FLAT DEAL"
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/dominos-pizza-gomti-nagar-lucknow-59287",
				"type": "WEBLINK"
			}
		},
		{
			"info": {
				"id": "76685",
				"name": "La Pino'z Pizza",
				"cloudinaryImageId": "djvcuphs4igsdrxklwjk",
				"locality": "Gomti Nagar",
				"areaName": "Gomti Nagar",
				"costForTwo": "₹250 for two",
				"cuisines": [
					"Pizzas",
					"Pastas",
					"Italian",
					"Desserts",
					"Beverages"
				],
				"avgRating": 4,
				"feeDetails": {
					"restaurantId": "76685",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 1800
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 1800
				},
				"parentId": "4961",
				"avgRatingString": "4.0",
				"totalRatingsString": "10K+",
				"sla": {
					"deliveryTime": 24,
					"lastMileTravel": 2.1,
					"serviceability": "SERVICEABLE",
					"slaString": "24 mins",
					"lastMileTravelString": "2.1 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-09 04:00:00",
					"opened": true
				},
				"badges": {},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"aggregatedDiscountInfoV3": {
					"header": "₹125 OFF",
					"subHeader": "ABOVE ₹249",
					"discountTag": "FLAT DEAL"
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-gomti-nagar-lucknow-76685",
				"type": "WEBLINK"
			}
		},
		{
			"info": {
				"id": "148024",
				"name": "Pizza Hut",
				"cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
				"locality": "One Awadh Center Mall",
				"areaName": "Gomti Nagar",
				"costForTwo": "₹350 for two",
				"cuisines": [
					"Pizzas"
				],
				"avgRating": 3.8,
				"feeDetails": {
					"restaurantId": "148024",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 1800
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 1800
				},
				"parentId": "721",
				"avgRatingString": "3.8",
				"totalRatingsString": "1K+",
				"sla": {
					"deliveryTime": 25,
					"lastMileTravel": 2.7,
					"serviceability": "SERVICEABLE",
					"slaString": "25 mins",
					"lastMileTravelString": "2.7 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-09 00:00:00",
					"opened": true
				},
				"badges": {},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"aggregatedDiscountInfoV3": {
					"header": "50% OFF",
					"subHeader": "UPTO ₹100"
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/pizza-hut-one-awadh-center-mall-gomti-nagar-lucknow-148024",
				"type": "WEBLINK"
			}
		},
		{
			"info": {
				"id": "522647",
				"name": "The Hazelnut Factory",
				"cloudinaryImageId": "j6rkp4aclysemxtz6xha",
				"locality": "Summit Building",
				"areaName": "Gomti Nagar",
				"costForTwo": "₹400 for two",
				"cuisines": [
					"Bakery",
					"Desserts",
					"Sweets"
				],
				"avgRating": 4.5,
				"feeDetails": {
					"restaurantId": "522647",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 1800
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 1800
				},
				"parentId": "209462",
				"avgRatingString": "4.5",
				"totalRatingsString": "100+",
				"sla": {
					"deliveryTime": 21,
					"lastMileTravel": 2.4,
					"serviceability": "SERVICEABLE",
					"slaString": "21 mins",
					"lastMileTravelString": "2.4 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-08 23:30:00",
					"opened": true
				},
				"badges": {},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"aggregatedDiscountInfoV3": {
					"header": "20% OFF",
					"subHeader": "UPTO ₹50",
					"discountTag": "FOR YOU",
					"headerTypeV2": "HEADER_TYPE_V2_TOP_UP"
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/the-hazelnut-factory-summit-building-gomti-nagar-lucknow-522647",
				"type": "WEBLINK"
			}
		},
		{
			"info": {
				"id": "689752",
				"name": "Rominus Pizza And Burger",
				"cloudinaryImageId": "df3122a3d49482073a839f47d0ae4281",
				"locality": "Nagar Nigam Food Safety  Zone-14",
				"areaName": "Gomti Nagar",
				"costForTwo": "₹250 for two",
				"cuisines": [
					"Pizzas",
					"Italian-American",
					"Italian",
					"American",
					"Desserts",
					"Beverages",
					"Fast Food",
					"Snacks",
					"Continental",
					"Bakery"
				],
				"avgRating": 4.1,
				"feeDetails": {
					"restaurantId": "689752",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 1800
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 1800
				},
				"parentId": "8387",
				"avgRatingString": "4.1",
				"totalRatingsString": "1K+",
				"sla": {
					"deliveryTime": 28,
					"lastMileTravel": 1.7,
					"serviceability": "SERVICEABLE",
					"slaString": "28 mins",
					"lastMileTravelString": "1.7 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-09 04:00:00",
					"opened": true
				},
				"badges": {},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"aggregatedDiscountInfoV3": {
					"header": "₹125 OFF",
					"subHeader": "ABOVE ₹249",
					"discountTag": "FLAT DEAL"
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/rominus-pizza-and-burger-nagar-nigam-food-safety-zone-14-gomti-nagar-lucknow-689752",
				"type": "WEBLINK"
			}
		},
		{
			"info": {
				"id": "61689",
				"name": "Bikanervala",
				"cloudinaryImageId": "m4thufeyptbyg2qxcg8m",
				"locality": "Sector 5",
				"areaName": "Indira Nagar",
				"costForTwo": "₹200 for two",
				"cuisines": [
					"South Indian",
					"North Indian"
				],
				"avgRating": 4.3,
				"veg": true,
				"feeDetails": {
					"restaurantId": "61689",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 3300
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 3300
				},
				"parentId": "45936",
				"avgRatingString": "4.3",
				"totalRatingsString": "10K+",
				"sla": {
					"deliveryTime": 34,
					"lastMileTravel": 5.5,
					"serviceability": "SERVICEABLE",
					"slaString": "34 mins",
					"lastMileTravelString": "5.5 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-08 23:00:00",
					"opened": true
				},
				"badges": {
					"imageBadges": [
						{
							"imageId": "v1695133679/badges/Pure_Veg111.png",
							"description": "pureveg"
						}
					]
				},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {
							"badgeObject": [
								{
									"attributes": {
										"description": "pureveg",
										"imageId": "v1695133679/badges/Pure_Veg111.png"
									}
								}
							]
						},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"aggregatedDiscountInfoV3": {
					"header": "20% OFF",
					"subHeader": "UPTO ₹50"
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/bikanervala-sector-5-indira-nagar-lucknow-61689",
				"type": "WEBLINK"
			}
		},
		{
			"info": {
				"id": "133778",
				"name": "Cafe Coffee Day",
				"cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
				"locality": "A Block",
				"areaName": "Indira Nagar",
				"costForTwo": "₹400 for two",
				"cuisines": [
					"Beverages",
					"Cafe",
					"Snacks",
					"Desserts",
					"Burgers",
					"Ice Cream",
					"Bakery",
					"Fast Food"
				],
				"avgRating": 4,
				"feeDetails": {
					"restaurantId": "133778",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 3300
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 3300
				},
				"parentId": "1",
				"avgRatingString": "4.0",
				"totalRatingsString": "1K+",
				"sla": {
					"deliveryTime": 38,
					"lastMileTravel": 5.9,
					"serviceability": "SERVICEABLE",
					"slaString": "38 mins",
					"lastMileTravelString": "5.9 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-09 00:00:00",
					"opened": true
				},
				"badges": {},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"aggregatedDiscountInfoV3": {
					"header": "50% OFF",
					"subHeader": "UPTO ₹100"
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/cafe-coffee-day-a-block-indira-nagar-lucknow-133778",
				"type": "WEBLINK"
			}
		},
		{
			"info": {
				"id": "332197",
				"name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
				"cloudinaryImageId": "od1sechvzj5pz4nwfimm",
				"locality": "Kamla Nehru Nagar",
				"areaName": "Kamta",
				"costForTwo": "₹300 for two",
				"cuisines": [
					"Desserts",
					"Ice Cream",
					"Ice Cream Cakes"
				],
				"avgRating": 4.3,
				"veg": true,
				"feeDetails": {
					"restaurantId": "332197",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 2800
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 2800
				},
				"parentId": "582",
				"avgRatingString": "4.3",
				"totalRatingsString": "500+",
				"sla": {
					"deliveryTime": 26,
					"lastMileTravel": 4.7,
					"serviceability": "SERVICEABLE",
					"slaString": "26 mins",
					"lastMileTravelString": "4.7 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-08 23:45:00",
					"opened": true
				},
				"badges": {},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"aggregatedDiscountInfoV3": {
					"header": "40% OFF",
					"subHeader": "UPTO ₹80"
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-kamla-nehru-nagar-kamta-lucknow-332197",
				"type": "WEBLINK"
			}
		},
		{
			"info": {
				"id": "312150",
				"name": "Keventers - Milkshakes & Desserts",
				"cloudinaryImageId": "cb8abe073bdea37ce7a3b78fff2be73e",
				"locality": "Phoenix Market City Mall",
				"areaName": "Gomti Nagar",
				"costForTwo": "₹200 for two",
				"cuisines": [
					"Beverages",
					"Ice Cream",
					"Desserts",
					"Healthy Food"
				],
				"avgRating": 4,
				"veg": true,
				"feeDetails": {
					"restaurantId": "312150",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 2800
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 2800
				},
				"parentId": "268997",
				"avgRatingString": "4.0",
				"totalRatingsString": "100+",
				"sla": {
					"deliveryTime": 35,
					"lastMileTravel": 4.9,
					"serviceability": "SERVICEABLE",
					"slaString": "35 mins",
					"lastMileTravelString": "4.9 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-08 23:59:00",
					"opened": true
				},
				"badges": {},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"aggregatedDiscountInfoV3": {
					"header": "40% OFF",
					"subHeader": "UPTO ₹80"
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/keventers-milkshakes-and-desserts-phoenix-market-city-mall-gomti-nagar-lucknow-312150",
				"type": "WEBLINK"
			}
		},
		{
			"info": {
				"id": "59255",
				"name": "Madhurima Veg",
				"cloudinaryImageId": "y4cn67prvzexwqkoqasp",
				"locality": "Gomti Nagar",
				"areaName": "Gomti Nagar",
				"costForTwo": "₹200 for two",
				"cuisines": [
					"Indian",
					"South Indian",
					"Chinese",
					"Snacks"
				],
				"avgRating": 4.2,
				"veg": true,
				"feeDetails": {
					"restaurantId": "59255",
					"fees": [
						{
							"name": "BASE_DISTANCE",
							"fee": 2800
						},
						{
							"name": "BASE_TIME"
						},
						{
							"name": "ANCILLARY_SURGE_FEE"
						}
					],
					"totalFee": 2800
				},
				"parentId": "7799",
				"avgRatingString": "4.2",
				"totalRatingsString": "10K+",
				"sla": {
					"deliveryTime": 30,
					"lastMileTravel": 4.2,
					"serviceability": "SERVICEABLE",
					"slaString": "30 mins",
					"lastMileTravelString": "4.2 km",
					"iconType": "ICON_TYPE_EMPTY"
				},
				"availability": {
					"nextCloseTime": "2023-11-08 23:00:00",
					"opened": true
				},
				"badges": {},
				"isOpen": true,
				"type": "F",
				"badgesV2": {
					"entityBadges": {
						"imageBased": {},
						"textBased": {},
						"textExtendedBadges": {}
					}
				},
				"aggregatedDiscountInfoV3": {
					"header": "40% OFF",
					"subHeader": "UPTO ₹80"
				},
				"loyaltyDiscoverPresentationInfo": {
					"logoCtx": {
						"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
					},
					"freedelMessage": "FREE DELIVERY",
					"badgeType": "BADGE_TYPE_ONE_LITE"
				},
				"differentiatedUi": {
					"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
					"differentiatedUiMediaDetails": {
						"mediaType": "ADS_MEDIA_ENUM_IMAGE",
						"lottie": {},
						"video": {}
					}
				},
				"reviewsSummary": {},
				"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
				"restaurantOfferPresentationInfo": {}
			},
			"analytics": {},
			"cta": {
				"link": "https://www.swiggy.com/restaurants/madhurima-veg-gomti-nagar-lucknow-59255",
				"type": "WEBLINK"
			}
		}
	]
}

const Body = ()=>{
  return(
    <div className="body">
      <div className="search">
        <input type="text" name="" id="" placeholder="Search"/>
      </div>
      <div className="restro-container">
        {
          resObj.restaurants?.map((restaurantData)=><RestaurantCard key={restaurantData?.info?.id} restaurantInfo={restaurantData} />)
        }
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// root.render(<HeadingComponent></HeadingComponent>); //also componect call like this
// root.render(HeadingComponent()); //also componect call like this
