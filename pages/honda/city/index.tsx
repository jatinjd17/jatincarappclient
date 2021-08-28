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
  const CarPrice = "₹ 11.19 Lakh";
  const TopPic =
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/40535/all-new-city-exterior-right-front-three-quarter.jpeg?q=85";
  const CarName = "Honda City";
  const OnlyName = "City";

  const KeySpecification = [
    "₹ 11.19 Lakh onwards",
    "17.8 to 24.1 kmpl",
    "1498 cc",
    "Manual & Automatic (CVT)",
    "Petrol & Diesel",
    "5 Seater",
    "4,549 mm L x 1,748 mm W x 1,489 mm H",
  ];

  const SafetyFeatures = [
    "Advanced Compatibility Engineering (ACE) Body Structure.",
    "6 Airbags (Driver, Passenger, 2 Curtain, Driver Side, Front Passenger Side)",
    "Dr & As Seat Pretensioner with Load Limiter.",
    "ISOFIX Child Seat Anchorage.",
    " ABS (antilock Brake System) with EBD (Electrical Brake Force Distribution)",
    "front ventilated disc brakes",
    "rear windshield with defogger",
    "Engine Immobilizer.",
  ];

  const VarientPetrol = {
    varient1: ["V MT", "1498 cc, Manual, Petrol, 17.8 kmpl", "Rs.6.32 Lakh*"],
    varient2: [
      "V CVT",
      "1498 cc, Automatic, Petrol, 18.4 kmpl",
      "Rs.7.10 Lakh*",
    ],
    varient3: [
      "VX MT",
      "1498 cc, Manual AMT, Petrol, 17.8 kmpl",
      "Rs.7.70 Lakh*",
    ],

    varient5: ["ZX MT", "1498 cc, Manual, Petrol, 17.8 kmpl", "Rs.8.18 Lakh*"],
    varient6: [
      "VX CVT",
      "1498 cc, Automatic, Petrol, 18.4 kmpl",
      "Rs.8.60 Lakh*",
    ],

    varient7: [
      "ZX CVT",
      "1498 cc, Automatic, Petrol, 18.4 kmpl",
      "Rs.9.01 Lakh*",
    ],
  };

  const VarientDiesel = {
    varient1: [
      "V MT Diesel",
      "1498 cc, Manual, Diesel, 24.1 kmpl",
      "Rs.8.00 Lakh*",
    ],

    varient2: [
      "VX MT Diesel",
      "1498 cc, Manual, Diesel, 24.1 kmpl",
      "Rs.8.66 Lakh*",
    ],

    varient3: [
      "ZX MT Diesel",
      "1498 cc, Manual, Diesel, 24.1 kmpl",
      "Rs.9.20 Lakh*",
    ],
  };

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "23.26 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Honda has hiked the prices of the City uniformly by Rs 17,000. Honda City Price: The fifth-gen City is priced between Rs 11.16 lakh and Rs 15.11 lakh (ex-showroom Delhi). Honda City Variants: It is sold in three variants: V, VX, and ZX. Honda City Engine and Transmission: Honda has equipped the sedan with a set of 1.5-litre petrol (121PS/145Nm) and diesel engines (100PS/200Nm). The petrol variant comes with both 6-speed MT and 7-step CVT, whereas the diesel variant comes with a 6-speed MT. Its claimed mileage figures stand at: Honda City Features: It gets 16-inch diamond-cut alloy wheels, an 8-inch touchscreen infotainment system with Android Auto, Apple CarPlay and Weblink support, and ambient lighting. The fifth-gen City also comes with Amazon Alexa remote control and connected car technology that, among other things, enables remote engine-start and door lock-unlock. Honda City Safety: Safety features on offer include up to six airbags, tyre pressure monitoring system, ABS with EBD, and ISOFIX child seat anchors. Honda City Rivals: It goes up against the Hyundai Verna, Maruti Suzuki Ciaz, Skoda Rapid, VW Vento, and the Toyota Yaris.",
  ];

  const ProsCons = {
    pros: [
      "Spacious cabin. Rear-seat kneeroom rivals cars from a segment above.",
      "Petrol motor + manual gearbox + playful chassis = FUN!",
      "Brilliant tuning for the CVT automatic makes driving effortless.",
    ],
    cons: [
      "Interior plastic quality could’ve been better.",
      "Needs more ‘wow’ features: ventilated seats, powered driver’s seat, branded stereo etc.",
      "No diesel automatic on offer. Cheaper Amaze offers it.",
    ],
  };

  const Colorss = {
    color1: ["PLATINUM WHITE PEARL", "bg-blue-600"],
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
      "What is the on road price of All New City?",
      "The on-road price of All New City in Delhi starts at ‎₹ 12.85 Lakh and goes upto ‎₹ 17.69 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between All New City and Verna?",
      "All New City price starts at ₹ 11.19 Lakh ex-showroom and It comes with 1498 cc engine. Whereas Verna price starts at ₹ 9.28 Lakh ex-showroom and It comes with 1497 cc engine.",
    ],
    question3: [
      "What is the mileage of Honda All New City?",
      "The Honda All New City mileage is 17.8 - 24.1 kmpl.",
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
  return OneCarAllSpecs("city").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
