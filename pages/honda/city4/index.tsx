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

function Homee({ joy }) {
  const CompanyName = "Honda";
  const CarPrice = "₹ 9.33 Lakh";
  const TopPic =
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/26755/city-4th-generation-exterior-right-front-three-quarter.jpeg?q=85";
  const CarName = "Honda City 4th Gen";
  const OnlyName = "City 4th Gen";

  const KeySpecification = [
    "₹ 9.33 Lakh onwards",
    "17.4 kmpl",
    "1497 cc",
    "Manual",
    "Petrol",
    "5 Seater",
    "4,440 mm L x 1,695 mm W x 1,495 mm H",
  ];

  const SafetyFeatures = [
    "dual front airbags",
    "ABS with EBD",
    "rear parking sensors.",
    " ABS (antilock Brake System) with EBD (Electrical Brake Force Distribution)",
    "front ventilated disc brakes",
    "rear windshield with defogger",
    "Engine Immobilizer.",
  ];

  const VarientPetrol = {
    varient1: [
      "SV Petrol",
      "1497 cc, Manual, Petrol, 17.4 kmpl",
      "₹ 9.33 Lakh",
    ],
    varient2: [
      "V Petrol",
      "1497 cc, Manual, Petrol, 17.4 kmpl",
      "₹ 10.03 Lakh",
    ],
  };

  const VarientDiesel = {};

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "23.26 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Honda has rejigged the variant lineup of the fourth-gen City and has slashed its prices. Honda City Variants: The sedan is now available in only two variants: SV and V. Honda City Price: These two variants are priced at Rs 9.30 lakh and Rs 10 lakh respectively (ex-showroom, Delhi). Honda City Powertrain: The City is only available with the 1.5-litre petrol engine (119PS/145Nm) mated to a 5-speed manual now. Honda is no longer offering the older generation model with the CVT automatic option. The claimed fuel efficiency figure of the petrol-manual variants stands at 17.4kmpl. Honda City Features: Honda is offering the fourth-gen City with auto AC, touchscreen infotainment system, height-adjustable driver’s seat and power-folding ORVMs. With the loss of the higher-spec variants, the older City will no longer feature a sunroof, leather interior, and LED headlamps. Honda City Safety: Standard safety features include dual front airbags, ABS with EBD, and rear parking sensors. Honda City Rivals: The fourth-gen City goes up against the Maruti Suzuki Ciaz, Skoda Rapid, Volkswagen Vento, Toyota Yaris and Hyundai Verna.",
  ];

  const ProsCons = {
    pros: [
      "The City’s interior space and build quality is good. In fact, it is comparable with even some D-segment sedans",
      "At 510 litres, the City’s boot is among the most spacious in the segment. It’s also the same as the Ciaz’s.",
      "Good resale value",
    ],
    cons: [
      "Noisy diesel engine ",
      "Expensive as compared to competition",
      "Stiff low speed ride quality",
    ],
  };

  const Colorss = {
    color1: ["White Orchid Pearl", "bg-blue-600"],
    color2: ["Lunar Silver Metallic", "bg-gray-400"],
    color3: ["Modern Steel Metallic", "bg-white"],
    color4: ["Golden Brown Metallic", "bg-brown-600"],
    color5: ["Radiant Red Metallic", "bg-gray-800"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "Rs.9.28 Lakh Onwards",
      "17.7 - 25.0 kmpl",
      "998 cc - 1497 cc",
      "Manual & Automatic",
      "Petrol & Diesel",
      "5 Seater",
      "4,440 mm L x 1,729 mm W x 1,475 mm H",
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Verna/7729/1616055133475/front-left-side-47.jpg?tr=w-456",
    ],
    comparisioncar2: [
      "₹ 10.00 Lakh onwards",
      "16.35 to 17.69 kmpl",
      "999 cc",
      "Manual & Automatic (Torque Converter)",
      "Petrol",
      "5 Seater",
      "4,390 mm L x 1,699 mm W x 1,467 mm H",
      "https://imgd.aeplcdn.com/664x374/cw/ec/26563/Volkswagen-Vento-Right-Front-Three-Quarter-169094.jpg?wm=0&q=85",
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
      "What is the on road price of City?",
      "The on-road price of City in Delhi starts at ‎₹ 10.37 Lakh and goes upto ‎₹ 11.13 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between City and All New City?",
      "City price starts at ₹ 9.33 Lakh ex-showroom and It comes with 1497 cc engine. Whereas All New City price starts at ₹ 11.19 Lakh ex-showroom and It comes with 1498 cc engine.",
    ],
    question3: [
      "What is the mileage of Honda City?",
      "The Honda City mileage is 17.4 kmpl.",
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
      "https://imgd.aeplcdn.com/664x374/cw/ec/26563/Volkswagen-Vento-Right-Front-Three-Quarter-169094.jpg?wm=0&q=85",
      "Vento",
      "₹ 10.00 Lakh Onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41197/hyundai-verna-right-front-three-quarter7.jpeg?q=85",
      "Verna",
      "₹ 9.28 Lakh*",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47562/skoda-rapid-tsi-right-front-three-quarter0.jpeg?q=85",
      "Rapid",
      "₹ 7.80 Lakh*",
    ],
  };

  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/33276/amaze-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Amaze",
      "₹ 6.34 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40535/all-new-city-exterior-right-front-three-quarter.jpeg?q=85",
      "City",
      "₹ 11.19 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45732/wr-v-exterior-right-front-three-quarter.jpeg?q=85",
      "WRV",
      "₹ 8.90 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/46891/jazz-exterior-right-front-three-quarter.jpeg?q=85",
      "Jazz",
      "₹ 7.75 Lakh onwards",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/26755/city-4th-generation-exterior-right-front-three-quarter.jpeg?q=85",
      "City 4th Gen",
      "₹ 9.33 Lakh onwards",
    ],
  };

  const UpcommingCarBrand = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45951/amaze-facelift-exterior-front-view-2.jpeg?isig=0&q=85",
      "Amaze Facelift 2021",
      "₹ 6.35 - 10.10 Lakh",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/43195/Honda-New-Jazz-Exterior-176189.jpg?wm=1&q=85",
      "New Gen Jazz",
      "₹ 8.00 - 12.00 Lakh",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/43195/Honda-New-Jazz-Exterior-176189.jpg?wm=1&q=85",
      "New Gen Jazz",
      "₹ 8.00 - 12.00 Lakh",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/39751/Honda-HRV-Exterior-169828.jpg?wm=0&q=85",
      "HRV",
      "₹ 12.00 - 16.00 Lakh",
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
  return OneCarAllSpecs("city4").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
