// import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dynamic from "next/dynamic";
import Footer from "../../../Components/footer";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

import Nav from "../../../Components/head";
import SpecificSpecs from "../../../Components/specificspec";
import StartingBox from "../../../Components/SpecificCar/StartingBox";
import KeySpecSafetyFeatures from "../../../Components/SpecificCar/KeySpecSafetyFeatures";
import Varients from "../../../Components/SpecificCar/Varients";
import CarMileage from "../../../Components/SpecificCar/Mileage";
import ProsACons from "../../../Components/SpecificCar/ProsCons";
import ColorCar from "../../../Components/SpecificCar/ColorCar";
import AllSPecifications from "../../../Components/SpecificCar/AllSPecifications";
import AlternativeCarComparision from "../../../Components/SpecificCar/AlternativeCarComparision";
import SomeHighlightedFeatures from "../../../Components/SpecificCar/SomeHighlightedFeatures";
import Faqs from "../../../Components/SpecificCar/Faqs";
import LatestArticles from "../../../Components/SpecificCar/LatestArticles";
import SimilarCarss from "../../../Components/SpecificCar/SimilarCars";
import MoreCars from "../../../Components/SpecificCar/MoreCars";
import UpcommingCars from "../../../Components/SpecificCar/UpcommingCars";
import SideBar from "../../../Components/SideBar";
import MobileSideBar from "../../../Components/MobileSideBar";
import { OneCarAllSpecs } from "../../../actions/allspecsspecificcar";
import { UrbanCruiser } from "../../../CarPicsUrl/CarPics";
import { TUrbanCruiser } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";

function Homee({ joy }) {
  const CompanyName = "Toyota";
  const CarPrice = "₹ 8.63 Lakh";
  const TopPic = UrbanCruiser;
  const CarName = "Toyota Urban Cruiser";
  const OnlyName = "Urban Cruiser";
  const ThumPic = TUrbanCruiser;

  const KeySpecification = [
    "₹ 8.63 Lakh onwards",
    "17.03 to 18.76 kmpl",
    "1462 cc",
    "Manual & Automatic (Torque Converter)",
    "Petrol",
    "5 Seater",
    "3,995 mm L x 1,790 mm W x 1,640 mm H",
  ];

  const SafetyFeatures = [
    "Seat Belt Warning",
    "Anti-Lock Braking System",
    "2 Airbags",
    "EBD",
    "Speed Alert",
    "Driver frontal airbag, Front passenger frontal airbag",
    "Door Ajar Warning.",
  ];

  const VarientPetrol = {
    varient1: ["Mid", "1462 cc, Manual, Petrol, 17.03 kmpl", "Rs.8.62 Lakh*"],
    varient2: ["High", "1462 cc, Manual, Petrol, 17.03 kmpl", "Rs.9.37 Lakh*"],
    varient3: [
      "Premium",
      "1462 cc, Manual, Petrol, 17.03 kmpl",
      "Rs.9.90 Lakh*",
    ],
    varient4: [
      "Mid AT",
      "1462 cc, Manual, Petrol, 18.76 kmpl",
      "Rs.9.92 Lakh*",
    ],
    varient5: [
      "High AT",
      "1462 cc, Automatic, Petrol, 18.76 kmpl",
      "Rs.10.77 Lakh*",
    ],
    varient6: [
      "Premium AT",
      "1462 cc, Automatic, Petrol, 18.76 kmpl",
      "Rs.11.40 Lakh*",
    ],
  };

  const VarientDiesel = {};

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Prices of the Urban Cruiser have been increased by up to Rs 13,000. Toyota Urban Cruiser Price: The Toyota SUV is priced between Rs 8.62 lakh and Rs 11.40 lakh (ex-showroom Delhi). Toyota Urban Cruiser Variants: The Urban Cruiser is available in six variants: Mid, Mid AT, High, High AT, Premium, and Premium AT. Toyota Urban Cruiser Seating Capacity: The SUV has a 5-seater layout. Toyota Urban Cruiser Powertrain: It gets a 1.5-litre petrol engine (paired with either a 5-speed manual or a 4-speed torque converter) that produces 105PS and 138Nm. It is the same engine that powers the Maruti Suzuki Vitara Brezza. The torque converter gearbox is optional across all variants and comes with the mild-hybrid system. Toyota Urban Cruiser Features: The Urban Cruiser packs rain-sensing wipers, auto AC, a 7-inch touchscreen infotainment system with Android Auto and Apple CarPlay, 16-inch dual-tone alloy wheels, push-button start/stop, and LED headlamps and tail lamps. Toyota Urban Cruiser Safety: Safety features on offer include dual front airbags, ABS with EBD, hill hold control, and ISOFIX child seat anchors. Toyota Urban Cruiser Rivals: It goes up against the Hyundai Venue, Nissan Magnite, Maruti Suzuki Vitara Brezza, Kia Sonet, Mahindra XUV300, Ford EcoSport, Tata Nexon, and Renault Kiger.",
  ];

  const ProsCons = {
    pros: [
      "Toyota’s after-sales and service reliability ",
      "Decently spacious and well-built cabin",
      "Light and easy driving dynamics",
    ],
    cons: [
      "Subtle looking compared to the competition",
      "No diesel powertrain ",
      "Not as feature-loaded as rivals",
    ],
  };

  const Colorss = {
    color1: ["Suave Silver", "bg-gray-800"],
    color2: ["Groovy Orange", "bg-red-900"],
    color3: ["Iconic Grey", "bg-white-900"],
    color4: ["Spunky Blue", "bg-gray-100"],
    color5: ["Sunny White", "bg-gray-900"],
    color6: ["Groovy Orange with Sunny White Roof", "bg-gray-600"],
    color7: ["Spunky Blue with Sizzling Black Roof", "bg-gray-600"],
    color8: ["Rustic Brown with Sizzling Black Roof", "bg-gray-100"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 6.92 Lakh Onwards",
      "17.52 to 23.4 kmpl",
      "998 to 1493 cc",
      "Clutchless Manual & Automatic (Dual Clutch)",
      "Petrol & Diesel",
      "5 Seater",
      "3,995 mm L x 1,770 mm W x 1,590 mm H",
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/7931/1626089251600/front-left-side-47.jpg",
    ],
    comparisioncar2: [
      "₹7.20 Lakh onwards",
      "16 to 22.4 kmpl",
      "1199 to 1497 cc",
      "Manual & AMT",
      "Petrol & Diesel",
      "5 Seater",
      "3993 mm L x 1811 mm W x 1606 mm H, 2498mm WB",
      "https://img.etimg.com/thumb/msid-77905386,width-640,resizemode-4,imgsize-480363/electric-sunroof.jpg",
    ],
  };

  const HighlightedFeatures = {
    feature1: [
      "https://stimg.cardekho.com/images/carinteriorimages/930x620/Maruti/Baleno/6778/1615985207322/interior-image-209.jpg?imwidth=480",
      "Stylish Interiors",
      "",
    ],
    feature2: [
      "https://image.shutterstock.com/image-photo/car-door-lock-knob-children-260nw-1514746379.jpg",
      "Rear Door Child Lock",
      "",
    ],
    feature3: [
      "https://stimg.cardekho.com/images/carinteriorimages/630x420/Maruti/Alto-800/7075/1594805410865/airbags-94.jpg?tr=w-360",
      "2 Airbags",
      "",
    ],
  };

  const faqs = {
    question1: [
      "What is the on road price of Urban Cruiser?",
      "The on-road price of Urban Cruiser in Delhi starts at ‎₹ 9.68 Lakh and goes upto ‎₹ 13.19 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Urban Cruiser and Vitara Brezza?",
      "Urban Cruiser price starts at ₹ 8.63 Lakh ex-showroom and It comes with 1462 cc engine. Whereas Vitara Brezza price starts at ₹ 7.51 Lakh ex-showroom and It comes with 1462 cc engine. Compare the two models to identify the best car for you.",
    ],
    question3: [
      "What is the mileage of Toyota Urban Cruiser?",
      "The Toyota Urban Cruiser mileage is 17.03 - 18.76 kmpl.",
    ],
  };

  const articles = {
    article1: [
      "/kushaq.png",
      "Rath Yatra 2021: About 60 Skoda Kushaq SUVs To Be Delivered In Ahmedabad",
    ],
    article2: [
      "/kushaq.png",
      "Rath Yatra 2021: About 60 Skoda Kushaq SUVs To Be Delivered In Ahmedabad",
    ],
    article3: [
      "/kushaq.png",
      "Rath Yatra 2021: About 60 Skoda Kushaq SUVs To Be Delivered In Ahmedabad",
    ],
  };

  const SimilarCars = {
    car1: [
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/7931/1626089251600/front-left-side-47.jpg",
      "Venue",
      "₹ 6.92 Lakh Onwards",
    ],
    car2: [
      "https://img.etimg.com/thumb/msid-77905386,width-640,resizemode-4,imgsize-480363/electric-sunroof.jpg",
      "Nexon",
      "₹ 7.20 Lakh onwards0",
    ],
    car3: [
      "https://media.zigcdn.com/media/model/2020/Feb/front-1-4-left-190291530_600x400.jpg",
      "Brezza",
      "₹ 7.51 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41523/sonet-exterior-right-front-three-quarter-110.jpeg?q=85",
      "Sonet",
      "₹ 6.79 Lakh onwards",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/26918/xuv300-exterior-right-front-three-quarter-148706.jpeg?q=85",
      "XUV300",
      "₹ 7.96 Lakh onwards",
    ],
    car6: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45795/magnite-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Magnite",
      "₹ 5.59 Lakh onwards",
    ],
  };

  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Innova",
      "₹ 16.82 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg?q=85",
      "Fortuner",
      "₹ 30.36 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47016/urban-cruiser-exterior-right-front-three-quarter.jpeg?q=85",
      "Urban Cruiser",
      "₹ 8.63 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39545/glanza-exterior-right-front-three-quarter-159523.jpeg?q=85",
      "Glanza",
      "₹ 7.34 Lakh onwards",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32943/yaris-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Yaris",
      "₹ 9.17 Lakh onwards",
    ],
    car6: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41217/toyota-vellfire-right-front-three-quarter5.jpeg?q=85",
      "Vellfire",
      "₹ 89.89 Lakh onwards",
    ],
    car7: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/37561/Toyota-Camry-Right-Front-Three-Quarter-146683.jpg?wm=0&q=85",
      "Camry",
      "₹ 40.61 Lakh onwards",
    ],
  };

  const UpcommingCarBrand = {
    car1: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Hilux/8445/1622783707227/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      "Hilux",
      "Rs.18.00 Lakh*",
    ],
    car2: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Land-Cruiser/8448/1623313668941/front-left-side-47.jpg?tr=w-456",
      "Land Cruiser",
      "Rs.1.50 Cr*",
    ],
  };

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 600) : text}
        <span onClick={toggleReadMore} className="read-or-hide font-bold">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };
  const [name1, setName1] = useState([]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleactive = (name) => {
    const all = [...name1];
    const checkedNumber = name1.indexOf(name);

    if (checkedNumber === -1) {
      all.splice(0, 1);
      all.push(name);
    } else {
      // all.splice(checkedNumber, 1);
      // all.push(name);
    }
    setName1(all);
  };

  const isToggleName = (naaame) => {
    if (name1.includes(naaame)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <Meta
        CompanyName={CompanyName}
        OnlyName={OnlyName}
        LatestUpdate={LatestUpdate[0]}
        ImageUrl={ThumPic}
        LinkCarName="urbancruiser"
      />
      <Nav />

      <MobileSideBar isToggleName={isToggleName} handleactive={handleactive} />

      <div className="grid grid-cols-10">
        <SideBar isToggleName={isToggleName} handleactive={handleactive} />

        <div className="col-span-10 sm:col-span-10 2xl:ml-40 md:ml-0">
          <StartingBox
            OnlyName={OnlyName}
            CarName={CarName}
            TopPic={TopPic}
            CarPrice={CarPrice}
          />

          <div id="specifications" className="ml-24 sm:ml-1 sm:mr-1 mt-10">
            <KeySpecSafetyFeatures
              KeySpecification={KeySpecification}
              SafetyFeatures={SafetyFeatures}
              OnlyName={OnlyName}
            />

            <div>
              <div className="grid grid-cols-10 mt-6 md:grid-cols-5 sm:mr-1"></div>
            </div>
            <div className="text-3xl bg-red-500 w-96 md:w-auto text-white rounded-md text-center font-bold p-3 hover:bg-red-200 mt-10 sm:mr-1">
              Show All Specifications
            </div>

            <Varients
              SpecificationsFeatures={joy}
              VarientPetrol={VarientPetrol}
              VarientDiesel={VarientDiesel}
              VarientCNG={VarientCNG}
            />

            <CarMileage OnlyName={OnlyName} Mileage={Mileage} />

            <div className="text-2xl font-bold mt-10 mb-6">
              Latest Update on {OnlyName}
            </div>
            <div className="mr-24 md:mr-2 sm:mr-1">
              <ReadMore>{LatestUpdate[0]}</ReadMore>
            </div>
            <div>
              <ProsACons ProsCons={ProsCons} />

              <ColorCar OnlyName={OnlyName} Colorss={Colorss} />
              <AllSPecifications SpecificationsFeatures={joy} />

              <AlternativeCarComparision
                TopPic={TopPic}
                KeySpecification={KeySpecification}
                ComparisionCar={ComparisionCar}
              />

              <SomeHighlightedFeatures
                OnlyName={OnlyName}
                HighlightedFeatures={HighlightedFeatures}
              />

              <Faqs OnlyName={OnlyName} faqs={faqs} />

              <LatestArticles OnlyName={OnlyName} articles={articles} />
            </div>
            <div className="text-3xl font-bold mt-12">Similar Cars</div>
          </div>
        </div>
      </div>

      <SimilarCarss SimilarCars={SimilarCars} />

      <MoreCars CompanyName={CompanyName} ThatBrandCars={ThatBrandCars} />

      <UpcommingCars
        CompanyName={CompanyName}
        UpcommingCarBrand={UpcommingCarBrand}
      />
      <Footer />
    </div>
  );
}

Homee.getInitialProps = () => {
  return OneCarAllSpecs("urbancruiser").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
