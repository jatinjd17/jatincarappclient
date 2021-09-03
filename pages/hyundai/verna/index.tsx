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
import { Verna } from "../../../CarPicsUrl/CarPics";
import { TVerna } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  CretaBasicInfoCard,
  VenueBasicInfoCard,
  i20BasicInfoCard,
  NiosBasicInfoCard,
  VernaBasicInfoCard,
  AuraBasicInfoCard,
  SantroBasicInfoCard,
  AlcazarBasicInfoCard,
  ElantraBasicInfoCard,
  KonaBasicInfoCard,
  TucsonBasicInfoCard,
} from "../../../AllCarBasicInfo/hyundai";

function Homee({ joy }) {
  const CompanyName = joy.CarInfo.CompanyName;
  const CarPrice = joy.CarInfo.Price[0];
  const TopPic = joy.CarInfo.TopPic[0];
  const CarName = joy.CarInfo.CarName;
  const OnlyName = joy.CarInfo.OnlyName[0];
  const ThumPic = joy.CarInfo.ThumPic;

  const KeySpecification = joy.KeySpecification;

  const SafetyFeatures = joy.SafetyFeatures;

  const VarientPetrol = joy.VarientPetrol;

  const VarientDiesel = joy.VarientDiesel;

  const VarientCNG = joy.VarientCNG;

  const Mileage = joy.Mileage;

  const LatestUpdate = joy.LatestUpdate;

  const ProsCons = joy.ProsCons;

  const Colorss = joy.Colorss;

  const ComparisionCar = joy.ComparisionCar;

  const HighlightedFeatures = joy.HighlightedFeatures;

  const faqs = joy.faqs;

  const articles = joy.articles;

  const UpcommingCarBrand = joy.UpcommingCarBrand;

  // const CompanyName = "Hyundai";
  // const CarPrice = "₹ 9.28 Lakh";
  // const TopPic = Verna;
  // const CarName = "Hyundai Verna";
  // const OnlyName = "Verna";
  // const ThumPic = TVerna;

  // const KeySpecification = [
  //   "₹ 9.28 Lakh onwards",
  //   "17.7 to 25 kmpl",
  //   "998 to 1497 cc",
  //   "Manual, Automatic (CVT), Automatic (Torque Converter) & Automatic (Dual Clutch)",
  //   "Petrol & Diesel",
  //   "5 Seater",
  //   "4,440 mm L x 1,729 mm W x 1,475 mm H",
  // ];

  // const SafetyFeatures = [
  //   "Impact Sensing Auto Door Unlock",
  //   "6 airbags",
  //   "ABS",
  //   "EBD",
  //   "Central Locking",
  //   "Emergency Stop Signal",
  //   "Driver & Passenger SeatBelt Reminder",
  //   "Speed Sensing Auto Door Lock",
  //   "Headlamp Escort Function",
  //   "ISOFIX",
  //   "Speed Alert System",
  //   "Driver & Passenger Side Seat Belt Pretensioners & Load Limiters",
  // ];

  // const VarientPetrol = {
  //   varient1: ["E", "1497 cc, Manual, Petrol, 17.7 kmpl", "Rs.6.99 Lakh*"],
  //   varient2: ["S Plus", "1497 cc, Manual, Petrol, 17.7 kmpl", "Rs.7.77 Lakh*"],

  //   varient3: ["SX", "1497 cc, Manual, Petrol, 17.7 kmpl", "Rs.9.10 Lakh*"],

  //   varient4: [
  //     "SX IVT",
  //     "1497 cc, Manual, Petrol, 18.45 kmpl",
  //     "Rs.9.99 Lakh*",
  //   ],
  //   varient5: [
  //     "SX Opt",
  //     "1497 cc, Manual, Petrol, 17.7 kmpl",
  //     "Rs.10.01 Lakh*",
  //   ],

  //   varient6: [
  //     "SX IVT Opt",
  //     "1497 cc, Manual, Petrol, 18.45 kmpl",
  //     "Rs.10.37 Lakh*",
  //   ],
  //   varient7: [
  //     "SX Opt Turbo",
  //     "998 cc, Manual, Petrol, 19.2 kmpl",
  //     "Rs.10.40 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {
  //   varient1: [
  //     "S Plus Diesel",
  //     "1493 cc, Manual, Diesel, 25.0 kmpl",
  //     "Rs.8.64 Lakh*",
  //   ],

  //   varient2: [
  //     "SX Diesel",
  //     "1493 cc, Manual, Diesel, 25.0 kmpl",
  //     "Rs.9.52 Lakh*",
  //   ],

  //   varient3: [
  //     "SX AT Diesel",
  //     "1493 cc, Manual, Diesel, 21.3 kmpl",
  //     "Rs.10.07 Lakh*",
  //   ],
  //   varient4: [
  //     "SX Opt Diesel",
  //     "1493 cc, Manual, Diesel, 25.0 kmpl",
  //     "Rs.10.07 Lakh*",
  //   ],

  //   varient5: [
  //     "SX Opt AT Diesel",
  //     "1493 cc, Manual, Diesel, 21.3 kmpl",
  //     "Rs.11.04 Lakh*",
  //   ],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Diesel (1956 cc)", "Automatic", "20.65 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: Select variants of the Verna now get wireless Android Auto and Apple CarPlay. Hyundai Verna Price: Hyundai retails the sedan from Rs 9.19 lakh to Rs 15.25 lakh (ex-showroom Delhi). Hyundai Verna Variants: It is offered in four trims: E, S+, SX, and SX(O). Hyundai Verna Powertrains: The Verna is equipped with a 1.5-litre petrol (115PS/144Nm), a 1.5-litre diesel (115PS/250Nm), and a 1.0-litre turbo-petrol engine (120PS/172Nm). The 1.5-litre petrol comes with either a 6-speed MT or CVT, the 1.5-litre diesel gets a 6-speed MT or a 6-speed AT, whereas the turbo-petrol engine gets only a 7-speed DCT. Hyundai Verna Features: Hyundai offers it with BlueLink connected car technology, a semi-digital instrument cluster, ventilated front seats, and wireless charging. Hyundai also offers hands-free boot opening, a sunroof, a tyre pressure monitoring system, and front parking sensors.  Hyundai Verna Safety: Standard safety features include ABS with EBD, rear parking sensors, and speed alert. Hyundai Verna Rivals: Hyundai’s compact sedan rivals the Maruti Suzuki Ciaz, Honda City, Skoda Rapid, VW Vento, and the Toyota Yaris.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Looks aggressive and sporty",
  //     "Super refined 1.5-litre petrol CVT powertrain",
  //     "Ride comfort is brilliant for Indian road conditions",
  //   ],
  //   cons: [
  //     "Lacks rear seat space",
  //     "Wireless charger tray is too short",
  //     "Brakes feel spongy",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Fiery Red", "bg-red-800"],
  //   color2: ["Typhoon Silver", "bg-gray-900"],
  //   color3: ["Phantom Black", "bg-gray-600"],
  //   color4: ["Starry Night", "bg-white"],
  //   color5: ["Polar White", "bg-blue-800"],
  //   color6: ["Titan Grey", "bg-red-400"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 11.19 Lakh",
  //     "17.8 to 24.1 kmpl",
  //     "1498 cc",
  //     "Manual & Automatic (CVT)",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "4,549 mm L x 1,748 mm W x 1,489 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/40535/all-new-city-exterior-right-front-three-quarter.jpeg?q=85",
  //   ],
  //   comparisioncar2: [
  //     "₹ 7.80 Lakh",
  //     "16.24 to 18.97 kmpl",
  //     "999 cc",
  //     "Manual & Automatic",
  //     "Petrol",
  //     "5 Seater",
  //     "4,413 mm L x 1,699 mm W x 1,466 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/47562/skoda-rapid-tsi-right-front-three-quarter0.jpeg?q=85",
  //   ],
  // };

  // const HighlightedFeatures = {
  //   feature1: [
  //     "https://stimg.cardekho.com/images/carinteriorimages/930x620/Maruti/Baleno/6778/1615985207322/interior-image-209.jpg?imwidth=480",
  //     "Stylish Interiors",
  //     "",
  //   ],
  //   feature2: [
  //     "https://image.shutterstock.com/image-photo/car-door-lock-knob-children-260nw-1514746379.jpg",
  //     "Rear Door Child Lock",
  //     "",
  //   ],
  //   feature3: [
  //     "https://stimg.cardekho.com/images/carinteriorimages/630x420/Maruti/Alto-800/7075/1594805410865/airbags-94.jpg?tr=w-360",
  //     "6 Airbags",
  //     "",
  //   ],
  // };

  // const faqs = {
  //   question1: [
  //     "What is the on road price of Verna?",
  //     "The on-road price of Verna in Delhi starts at ‎₹ 10.47 Lakh and goes upto ‎₹ 18.13 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Verna and All New City?",
  //     "Verna price starts at ₹ 15.32 Lakh ex-showroom and It comes with 1497 cc engine. Whereas All New City price starts at ₹ 11.19 Lakh ex-showroom and It comes with 1498 cc engine.",
  //   ],
  //   question3: [
  //     "What is the mileage of Hyundai Verna?",
  //     "The Hyundai Verna mileage is 17.7 - 25 kmpl.",
  //   ],
  // };

  // const articles = {
  //   article1: [
  //     "/kushaq.png",
  //     "Rath Yatra 2021: About 60 Skoda Kushaq SUVs To Be Delivered In Ahmedabad",
  //   ],
  //   article2: [
  //     "/kushaq.png",
  //     "Rath Yatra 2021: About 60 Skoda Kushaq SUVs To Be Delivered In Ahmedabad",
  //   ],
  //   article3: [
  //     "/kushaq.png",
  //     "Rath Yatra 2021: About 60 Skoda Kushaq SUVs To Be Delivered In Ahmedabad",
  //   ],
  // };

  const SimilarCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40535/all-new-city-exterior-right-front-three-quarter.jpeg?q=85",
      "City",
      "Rs.31.99 Lakh Onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47562/skoda-rapid-tsi-right-front-three-quarter0.jpeg?q=85",
      "Rapid",
      "₹ 7.80 Lakh*",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/26563/Volkswagen-Vento-Right-Front-Three-Quarter-169094.jpg?wm=0&q=85",
      "Vento",
      "₹ 10.00 Lakh*",
    ],
  };

  const ThatBrandCars = {
    car1: CretaBasicInfoCard,
    car2: VenueBasicInfoCard,
    car3: i20BasicInfoCard,
    car4: NiosBasicInfoCard,
    car5: VernaBasicInfoCard,
    car6: AuraBasicInfoCard,
    car7: SantroBasicInfoCard,
    car8: AlcazarBasicInfoCard,
    car9: ElantraBasicInfoCard,
    car10: KonaBasicInfoCard,
    car11: TucsonBasicInfoCard,
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/100121/exterior-right-front-three-quarter.jpeg?isig=0&q=85",
  //     "i20 N Line",
  //     "₹ 11.00 - 13.00 Lakh",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/51891/ax1-micro-suv-exterior-left-front-three-quarter.jpeg?q=85",
  //     "AX1 micro-SUV",
  //     "₹ 4.00 - 7.00 Lakh",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/49892/new-kona-exterior-front-view.jpeg?q=85",
  //     "New Kona",
  //     "₹ 23.00 - 25.00 Lakh",
  //   ],
  //   car4: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/47331/hyundai-new-elantra-left-side-view0.jpeg?q=85",
  //     "New Elantra",
  //     "₹ 16.00 - 20.00 Lakh",
  //   ],
  // };

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
        LinkCarName="verna"
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
  return OneCarAllSpecs("verna").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
