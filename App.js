import React from "react";
import ReactDOM from "react-dom/client";

// ------------------ React Component ------------------------------->
// Everything is a component in React
// - Functional Component - NEW
// - Class Based Component - OLD

// Functional Component is nothing but a JS Function
// it just returns some piece of JSX code or ReactElement

// --------------- React Fragment & Inline Styling In React ------------------------------->

// React.Fragment => a component exported by React
// JSX can only have One Parent!
// Suppose if i want two parents, then either i would have to add them inside a div
// or we can make use of a component provided by the React
// React.Fragment is like a empty tag
// But it looks ugly to use this big term again and again
// So, just use <> </> these empty tags . But, what are these ? A shorthand for React.Fragment
// We can't pass any attribute to the empty tag

// Object is not jsx, in fact it is JS
// We give styling using JS object
const styleObj = {
  border: "1px solid red",
};

// Inline Styling in React
const jsx = (
  <div style={styleObj}>
    <h1>JSX</h1>
    <h1>Second JSX</h1>
  </div>
);

// ------------------ Restaurant ------------------------------->

// Planning
/*
  Header
    - Logo(Title)
    - Nav Items 
    - Cart
  Body
    - Search Bar
    - RestaurantList
      - RestaurantCard
        - Image
        - Name
        - Rating 
        - Cuisines
  Footer
    - Links
    - Copyright


*/

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      alt="Food Villa"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Config Driven UI
// A very big design architecture
// const config = [
//   {
//     type: "carousel",
//     cards: [
//       {
//         offerName: "50% off"
//       },
//       {
//         offerName: "No Delivery Charge"
//       }
//     ]
//   },
//   {
//     type: "restaurants",
//     cards: [
//       {
//         name: "McDonald's",
//         image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rxyfrp6ybpyvexdk7uwm",
//         cuisines: ["Burgers", "American"],
//         rating: "4.3"
//       },
//       {
//         name: "KFC",
//         image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rxyfrp6ybpyvexdk7uwm",
//         cuisines: ["Burgers", "American"],
//         rating: "4.4"
//       }
//     ]
//   }
// ]
const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "20539",
      name: "Singla's Sweets, Bakery & Restaurant",
      uuid: "f1310d98-0c42-4650-8a5f-0e6aaf7c4b02",
      city: "4",
      area: "Tilak Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "vjpubmcvfa5612hhbszn",
      cuisines: [
        "Sweets",
        "North Indian",
        "Chinese",
        "South Indian",
        "Italian",
        "Bakery",
      ],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant: "singlas-north-indian-janakpuri",
        city: "delhi",
      },
      cityState: "4",
      address:
        "2 13 Mall Road Near Metro Tilak Nagar Station Tilak Nagar New Delhi",
      locality: "Metro Tilak Nagar Station",
      parentId: 2314,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "20539",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "254117",
      name: "McDonald's",
      uuid: "9041a17a-0d46-4cc2-a859-3fec63945c41",
      city: "4",
      area: "Ashok Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "rxyfrp6ybpyvexdk7uwm",
      cuisines: ["American"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 1.2999999523162842,
      slugs: {
        restaurant: "mcdonalds-delhi-tilak-nagar-tilak-nagar",
        city: "delhi",
      },
      cityState: "4",
      address:
        "Delhi Tilak Nagar, 30/4, 30/4A, Double Storey. Ashok Nagar, Tehar-II, New Delhi- 110018",
      locality: "Delhi Tilak Nagar",
      parentId: 630,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3700,
        message: "",
        title: "Delivery Charge",
        amount: "3700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "254117",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.2999999523162842,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "11598",
      name: "Apna Dhaba(Vikaspuri)",
      uuid: "88b11b2a-4f20-424e-9a36-046b8be7afb7",
      city: "4",
      area: "Block Gg1, Vikaspuri",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "rs0f5lm1dxfh7u3euxpa",
      cuisines: ["North Indian", "Thalis", "Indian"],
      tags: [],
      costForTwo: 22000,
      costForTwoString: "₹220 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 1.2999999523162842,
      slugs: {
        restaurant: "apna-dhaba-vikaspuri-janakpuri",
        city: "delhi",
      },
      cityState: "4",
      address: "GG 1, Shop no. 30-31,PVR Road, Vikaspuri",
      locality: "Vikaspuri",
      parentId: 34871,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "11598",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 1.2999999523162842,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "55273",
      name: "La Pino'z Pizza",
      uuid: "9d250d39-e82c-457c-93cc-4b8de2d57183",
      city: "4",
      area: "Vikaspuri",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "fvh1golmvpcwvrjgtgnd",
      cuisines: ["Italian", "Pizzas", "Mexican", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 1,
      slugs: {
        restaurant: "la-pinoz-pizza-pitampura-nsp",
        city: "delhi",
      },
      cityState: "4",
      address: "GG-1/1A, Vikaspuri, New Delhi-110018",
      locality: "Vikaspuri",
      parentId: 4961,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3700,
        message: "",
        title: "Delivery Charge",
        amount: "3700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "55273",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 1,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "54413",
      name: "Hira Sweets",
      uuid: "dfeebb3a-e406-4b38-bb4e-fcd1de672084",
      city: "4",
      area: "Janak puri Metro Station",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "ocrewrzptujvncpiyvmi",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Continental",
        "Bakery",
        "Street Food",
        "Sweets",
        "Desserts",
        "Beverages",
      ],
      tags: [],
      costForTwo: 60000,
      costForTwoString: "₹600 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 1.100000023841858,
      slugs: {
        restaurant: "hira-sweets-janakpuri-janakpuri",
        city: "delhi",
      },
      cityState: "4",
      address:
        "Ground Floor, Janak Puri East Metro Station, Janakpuri, New Delhi - 110058",
      locality: "Janak puri Metro Station",
      parentId: 5155,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "54413",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 1.100000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "20302",
      name: "Munch Nation",
      uuid: "ec5008b7-533c-4da6-bd88-2d0bfd5c4c71",
      city: "4",
      area: "Janakpuri",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "lva3yvpxdyqf8xe3czgw",
      cuisines: ["North Indian", "Chinese", "Snacks"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 1.7000000476837158,
      slugs: {
        restaurant: "munch-nation-janakpuri-janakpuri",
        city: "delhi",
      },
      cityState: "4",
      address:
        "CSC Shop No-20, Shiv Nagar, Jail Road, New Delhi-110058, RAJOURI GARDEN, West , Delhi-110058",
      locality: "Jail Road",
      parentId: 2893,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5701819~p=7~eid=00000185-9bfb-1d70-2283-15ed00250756",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "20302",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 1.7000000476837158,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "5252",
      name: "Om Sweets & Snacks",
      uuid: "7b2a7428-f755-4a09-9ae4-ac9bb04f021f",
      city: "4",
      area: "Jail Road",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "bsbkwruizgwqmv7cvoaf",
      cuisines: [
        "Sweets",
        "North Indian",
        "South Indian",
        "Chinese",
        "Snacks",
        "Desserts",
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 40,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 2.299999952316284,
      slugs: {
        restaurant: "om-sweets-snacks-jail-road-jail-road",
        city: "delhi",
      },
      cityState: "4",
      address: "Gl-23, Shaheed Bhagat Singh Marg (Jail Road), Hari Nagar",
      locality: "Hari Nagar",
      parentId: 676,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "5252",
        deliveryTime: 40,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        lastMileTravel: 2.299999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "138434",
      name: "Burger King",
      uuid: "fa2c77c2-42dd-435d-b3d2-45d37a1fd3f5",
      city: "4",
      area: "Ashok Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "vag3kgnwdttgrtmmwvk1",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 1.5,
      slugs: {
        restaurant: "burger-king-ashok-nagar-janakpuri",
        city: "delhi",
      },
      cityState: "4",
      address:
        "31/4 and 31/4A , GROUND FLOOR & FIRST FLOOR ,DOUBLE STOREY ,Opposite Gate No.3 ,Tilak Nagar Metro station, Tilak Nagar, NEW DELHI 110018",
      locality: "Tilak Nagar",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Get every item under 129",
        shortDescriptionList: [
          {
            meta: "Get every item under 129",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Get every item under 129",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Get every item under 129",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3700,
        message: "",
        title: "Delivery Charge",
        amount: "3700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "138434",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 1.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "112450",
      name: "Hum Sabki Rasoi",
      uuid: "d04e3f47-eb8f-4ace-ad1d-e8bc183c1913",
      city: "4",
      area: "Tilak Nagar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "qagnbi2a0r8ghyhajd9l",
      cuisines: ["North Indian"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 18,
      minDeliveryTime: 18,
      maxDeliveryTime: 18,
      slaString: "18 MINS",
      lastMileTravel: 0.30000001192092896,
      slugs: {
        restaurant: "hum-sabki-rasoi-delhi-india-rohini",
        city: "delhi",
      },
      cityState: "4",
      address: "S1/68 OLD MAHAVIR NAGAR PATEL NAGAR NEW DELHI - 110018",
      locality: "Delhi, India",
      parentId: 104010,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "112450",
        deliveryTime: 18,
        minDeliveryTime: 18,
        maxDeliveryTime: 18,
        lastMileTravel: 0.30000001192092896,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "112464",
      name: "Kake Da Hotel",
      uuid: "8f3975d9-5bf2-42e2-be8b-6171463cac83",
      city: "4",
      area: "Hari Nagar",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "uegk6jdav1kfal3qpqfi",
      cuisines: ["North Indian", "Mughlai", "Tandoor"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 2.5,
      slugs: {
        restaurant: "kake-da-hotel-na-karol-bagh",
        city: "delhi",
      },
      cityState: "4",
      address:
        "HL 3, L BLOCK, Jail Rd, L-Block, Anand Vihar, Hari Nagar, New Delhi, Delhi 110058",
      locality: "Jail Road",
      parentId: 113762,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "30% off",
        shortDescriptionList: [
          {
            meta: "30% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "30% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5672149~p=13~eid=00000185-a6eb-e205-2ef6-a6d300dc0d55",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "112464",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 2.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.1",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
];

// badass! thing => { restaurant } // destructuring
// instead of props
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt=""
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

// props => shorthand for properties
// passing some properties(data) into my components
// Here, Body is the parent component and
// when i need to pass some data from the parent component to the child component
// then i need to pass properties to the child component

// just a nomenclature, but end of the day it is just a normal function parameter
const Body = () => {
  return (
    <div className="restaurantList">
      {/* <RestaurantCard name={restaurantList[0].data.name} cuisines={restaurantList[0].data.cuisines} avgRating={restaurantList[0].data.avgRating} cloudinaryImageId={restaurantList[0].data.cloudinaryImageId} hello="world" />
      <RestaurantCard name={restaurantList[1].data.name} cuisines={restaurantList[1].data.cuisines} avgRating={restaurantList[1].data.avgRating} cloudinaryImageId={restaurantList[1].data.cloudinaryImageId} /> */}

      {/* for loop in jsx : - */}
      {/* {(() => {
        let restaurants = [];
        for (let i = 0; i < 6; i++) {
          restaurants.push(<RestaurantCard {...restaurantList[i].data} key={i}/>);
        }
        return restaurants;
      })()} */}
      {/* map in jsx : - */}
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
      {/* Using Spread Operator */}
      {/* <RestaurantCard {...restaurantList[0].data} hello="world" />
      <RestaurantCard {...restaurantList[1].data} />
      <RestaurantCard {...restaurantList[2].data} />
      <RestaurantCard {...restaurantList[3].data} />
      <RestaurantCard {...restaurantList[4].data} />
      <RestaurantCard {...restaurantList[5].data} /> */}
    </div>
  );
};

// Never use index as a key.
// valid but not recommended
// no key <<<<<<<<<<<< index key (use ONLY when you don't have anything else) <<<<<<<<<<<<<<<<<<< unique key (best practice)

/* function fn(params, param2) {  // parameters

}

fn("xyz", "tyx");  // arguments
*/

const Footer = () => {
  return <h4>Footer</h4>
};

const AppLayout = () => {
  return (
    <>
      {/* <><h1>Namaste</h1><h1>Dev</h1></> */}
      {/* We can use React.Fragment inside React.Fragment */}
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// ------------------ Rendering ------------------------------->
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
root.render(<AppLayout />);
// heading will only be rendered, all other things will be replaced/overwritten by this
