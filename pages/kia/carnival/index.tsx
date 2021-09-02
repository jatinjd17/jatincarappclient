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
import { Carnival } from "../../../CarPicsUrl/CarPics";
import { TCarnival } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";

function Homee({ joy }) {
  const CompanyName = "Kia";
  const CarPrice = "₹ 24.95 Lakh ";
  const TopPic = Carnival;
  const CarName = "Kia Carnival";
  const OnlyName = "Carnival";
  const ThumPic = TCarnival;

  const KeySpecification = [
    "₹ 24.95 Lakh onwards",
    "13.9 kmpl",
    "2199 cc",
    "Automatic",
    "Diesel",
    "7-9 Seater",
    "5,115 mm L x 1,985 mm W x 1,740-1,755 mm H",
  ];

  const SafetyFeatures = [
    "Impact Sensing Auto Door Unlock",
    "6 airbags",
    "ABS",
    "EBD",
    "Central Locking",
    "Emergency Stop Signal",
    "Driver & Passenger SeatBelt Reminder",
    "Speed Sensing Auto Door Lock",
    "Headlamp Escort Function",
    "ISOFIX",
    "Speed Alert System",
    "Driver & Passenger Side Seat Belt Pretensioners & Load Limiters",
  ];

  const VarientPetrol = {};

  const VarientDiesel = {
    varient1: [
      "Premium",
      "1999 cc, Automatic, Diesel, 14.11 kmpl",
      "Rs.24.95 Lakh*",
    ],
    varient2: [
      "Premium 8 STR",
      "1999 cc, Automatic, Diesel, 14.11 kmpl",
      "Rs.25.15 Lakh*",
    ],
    varient3: [
      "Prestige",
      "1995 cc, Automatic, Diesel, 14.11 kmpl",
      "Rs.28.95 Lakh*",
    ],
    varient4: [
      "Prestige 9 STR",
      "1995 cc, Automatic, Diesel, 14.11 kmpl",
      "Rs.29.95 Lakh*",
    ],
    varient5: [
      "Limousine",
      "1995 cc, Automatic, Diesel, 14.11 kmpl",
      "Rs.33.95 Lakh*",
    ],
  };

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Diesel (1956 cc)", "Automatic", "20.65 kmpl"],
    mileage2: ["CNG (796 cc)", "Automatic", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Kia Carnival Price: Kia has priced the Carnival between Rs 24.95 lakh and Rs 33.95 lakh (ex-showroom). Kia Carnival Variants: The MPV is sold in three variants: Premium, Prestige, and Limousine. Kia Carnival Seating Capacity: It can seat up to nine people. Kia Carnival Engine and Transmission: Kia offers the Carnival with a 2.2-litre diesel engine (200PS/440Nm), coupled with an 8-speed automatic gearbox. Kia Carnival Features: It gets three-zone climate control, a dual-panel sunroof, an 8-inch touchscreen infotainment system, and a 10.1-inch touchscreen display for middle-row occupants. Like the Seltos, the Carnival too comes with Kia’s UVO connected car technology. Kia Carnival Safety: Safety features on board include electronic stability control (ESC), cornering brake control, and hill assist. Kia Carnival Rivals: It doesn’t have any direct rivals in India. It is positioned above the Toyota Innova Crysta but below the Toyota Vellfire and Mercedes-Benz V-Class. Kia Carnival 2022: Kia has revealed the fourth-gen Carnival that’s expected to go on sale in India by 2022.",
  ];

  const ProsCons = {
    pros: [
      "Most comfortable seats for the second and third row",
      "Loaded with luxury features like rear touchscreens, dual sunroof and VIP seats.",
      "Innovative boot space solutions",
    ],
    cons: [
      "Too big for regular parking lots. Longer than the Ford Endeavour",
      "Ground clearance could limit use to city and well paved roads",
      "9-Seater configuration is too tight for 9 adults",
    ],
  };

  const Colorss = {
    color1: ["Glacier White Pearl", "bg-red-800"],
    color2: ["Steel Silver", "bg-gray-900"],
    color3: ["Aurora Black Pearl", "bg-gray-600"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 16.82 Lakh onwards",
      "10.01 to 14.22 kmpl",
      "2393 to 2694 cc",
      "Manual & Automatic (Torque Converter)",
      "Petrol & Diesel",
      "7-8 Seater",
      "4,735 mm L x 1,830 mm W x 1,795 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-exterior-right-front-three-quarter-3.jpeg?q=85",
    ],
    comparisioncar2: [
      "₹ 13.18 Lakh onwards",
      "13.96 to 17.41 kmpl",
      "1451 to 1956 cc",
      "Manual & Automatic",
      "Petrol & Diesel",
      "5 Seater",
      "4655 mm in length, 1835 mm in width and 1760 mm in height",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/52565/hector-exterior-right-front-three-quarter-3.jpeg?q=85",
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
      "6 Airbags",
      "",
    ],
  };

  const faqs = {
    question1: [
      "What is the on road price of Carnival?",
      "The on-road price of Carnival in Delhi starts at ‎₹ 29.7 Lakh and goes upto ‎₹ 40.28 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Carnival and Innova Crysta?",
      "Carnival price starts at ₹ 24.95 Lakh ex-showroom and It comes with 2199 cc engine. Whereas Innova Crysta price starts at ₹ 16.82 Lakh ex-showroom and It comes with 2694 cc engine",
    ],
    question3: [
      "What is the mileage of Kia Carnival?",
      "The Kia Carnival mileage is 13.9 kmpl.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Innova Crysta",
      "₹ 16.82 Lakh Onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/52565/hector-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Hector",
      "₹ 13.18 Lakh onwards0",
    ],
    car3: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/6775/1584360708758/front-left-side-47.jpg?tr=w-456",
      "Creta",
      "Rs.10.16 Lakh onwards",
    ],
  };

  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41523/sonet-exterior-right-front-three-quarter-110.jpeg?q=85",
      "Sonet",
      "₹ 6.79 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/33372/seltos-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Seltos",
      "₹ 9.96 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41205/kia-carnival-right-front-three-quarter8.jpeg?q=85",
      "Carnival",
      "₹ 24.95 Lakh onwards",
    ],
  };

  const UpcommingCarBrand = {
    car1: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos-7-Seater/8424/1619518563355/front-left-side-47.jpg?tr=w-456",
      "Kia Seltos 7-Seater",
      "₹ 12.00 Lakh",
    ],
    car2: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Carnival-2021/7886/1614601829878/front-left-side-47.jpg?tr=w-456",
      "Carnival 2022",
      "Rs.26.00 Lakh*",
    ],
    car3: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Sportage/5860/1623155125464/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      "Sportage",
      "Rs.25.00 Lakh*",
    ],
    car4: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Kia-Ceed/6220/1558590662958/front-left-side-47.jpg?tr=w-456",
      "Ceed",
      "Rs.9.00 Lakh*",
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
        LinkCarName="carnival"
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
  return OneCarAllSpecs("carnival").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
