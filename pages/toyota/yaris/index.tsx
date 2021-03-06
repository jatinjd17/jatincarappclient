// import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dynamic from "next/dynamic";
import Footer from "../../../Components/footer";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

import Nav from "../../../Components/headforspecificcar";
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
import { Yaris } from "../../../CarPicsUrl/CarPics";
import { TYaris } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  InnovaBasicInfoCard,
  FortunerBasicInfoCard,
  UrbanCruiserBasicInfoCard,
  GlanzaBasicInfoCard,
  YarisBasicInfoCard,
  VellfireBasicInfoCard,
  CamryBasicInfoCard,
} from "../../../AllCarBasicInfo/toyota";
import { CityBasicInfoCard } from "../../../AllCarBasicInfo/honda";
import { VernaBasicInfoCard } from "../../../AllCarBasicInfo/hyundai";
import { VentoBasicInfoCard } from "../../../AllCarBasicInfo/volkswagen";

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

  // const CompanyName = "Toyota";
  // const CarPrice = "??? 9.17 Lakh";
  // const TopPic = Yaris;
  // const CarName = "Toyota Yaris";
  // const OnlyName = "Yaris";
  // const ThumPic = TYaris;

  // const KeySpecification = [
  //   "??? 9.17 Lakh onwards",
  //   "17.1 to 17.8 kmpl",
  //   "1496 cc",
  //   "Manual & Automatic (CVT)",
  //   "Petrol",
  //   "5 Seater",
  //   "4,425 mm L x 1,730 mm W x 1,495 mm H",
  // ];

  // const SafetyFeatures = [
  //   "ALL 4 DISC BRAKES.",
  //   "TYRE PRESSURE MONITORING SYSTEM.",
  //   "VEHICLE STABILITY CONTROL.",
  //   "STANDARDISED ABS, EBD & BA.",
  //   "HILL-START ASSIST CONTROL.",
  //   "REVERSE CAMERA.",
  //   "AUTO HEADLAMPS.",
  //   "FRONT AND REAR PARKING SENSORS.",
  // ];

  // const VarientPetrol = {
  //   varient1: [
  //     "J Optional",
  //     "1197 cc, Manual, Petrol, 10.01 kmpl - 21.01 kmpl",
  //     "Rs.7.34 Lakh*",
  //   ],
  //   varient2: [
  //     "J Optional CVT",
  //     "1197 cc, Manual, Petrol, 10.01 kmpl - 21.01 kmpl",
  //     "Rs.7.99 Lakh*",
  //   ],
  //   varient3: [
  //     "G Optional",
  //     "1197 cc, Manual, Petrol, 21.01 kmpl",
  //     "Rs.8.10 Lakh*",
  //   ],
  //   varient4: [
  //     "G Optional CVT",
  //     "1197 cc, Automatic, Petrol, 19.56 kmpl",
  //     "Rs.8.54 Lakh*",
  //   ],
  //   varient5: ["J", "1197 cc, Automatic, Petrol, 19.56 kmpl", "Rs.9.30 Lakh*"],
  //   varient6: ["G", "1197 cc, Automatic, Petrol, 19.56 kmpl", "Rs.9.30 Lakh*"],
  //   varient7: [
  //     "J CVT",
  //     "1197 cc, Automatic, Petrol, 19.56 kmpl",
  //     "Rs.9.30 Lakh*",
  //   ],
  //   varient8: [
  //     "V Optional",
  //     "1197 cc, Automatic, Petrol, 19.56 kmpl",
  //     "Rs.9.30 Lakh*",
  //   ],
  //   varient9: [
  //     "G CVT",
  //     "1197 cc, Automatic, Petrol, 19.56 kmpl",
  //     "Rs.9.30 Lakh*",
  //   ],
  //   varient10: [
  //     "V Optional CVT",
  //     "1197 cc, Automatic, Petrol, 19.56 kmpl",
  //     "Rs.9.30 Lakh*",
  //   ],
  //   varient11: [
  //     "VX CVT",
  //     "1197 cc, Automatic, Petrol, 19.56 kmpl",
  //     "Rs.9.30 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: Toyota has increased prices of the Yaris. Toyota Yaris Price: The sedan is priced between Rs 9.16 lakh and Rs 14.60 lakh (ex-showroom Delhi). Toyota Yaris Variants: It is sold in seven variants: J-Optional, G-Optional, J, G, V, V-Optional, and VX. Toyota Yaris Powertrains: Toyota provides the sedan with a 1.5-litre petrol engine (107PS/140Nm) paired to a 6-speed MT or 7-step CVT. The manual returns a mileage of 17.18kmpl, while the automatic has a claimed fuel efficiency of 18.10kmpl. Toyota Yaris Features: The Yaris comes with roof-mounted rear AC vents, 60:40 split-folding rear seats, acoustic and vibration control glass, solar energy-absorbing windshield (with infrared cut-off), and infotainment system with air-gesture control. Toyota Yaris Safety: Safety features include up to seven airbags, ABS with EBD, and brake assist. Toyota Yaris Rivals: It rivals the Honda City, Hyundai Verna, Maruti Suzuki Ciaz, Volkswagen Vento, and Skoda Rapid.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Easy to use and refined petrol engine. CVT available right from base variant.",
  //     "Class-leading ride comfort. Manages bad roads and high speed undulations brilliantly, even with a full passenger load.",
  //     "Standard safety includes 7 airbags, ABS with EBD, brake assist and ISOFIX. Higher variants add tyre pressure warning, hill-start assist, front parking sensors and more!",
  //     "Cavernous 476-litre boot with folding rear seats. Will easily accommodate the family???s luggage.",
  //   ],
  //   cons: [
  //     "No diesel engine available, period.",
  //     "Not a very wide car. Etios has a greater sense of space and can seat 3 in the back with more ease.",
  //     "Infotainment system looks aftermarket. Glares under harsh sunlight. Misses out on Android Auto and Apple CarPlay.",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Wildfire Red", "bg-gray-800"],
  //   color2: ["Phantom Brown", "bg-red-900"],
  //   color3: ["Wildfire Red With Attitude Black", "bg-gray-400"],
  //   color4: ["Pearl White", "bg-blue-800"],
  //   color5: ["Silver Metallic With Attitude Black", "bg-gray-100"],
  //   color6: ["Super Whithe With Attitude Black", "bg-gray-100"],
  //   color7: ["Super white", "bg-gray-100"],
  //   color8: ["Grey Metallic", "bg-gray-100"],
  //   color9: ["Silver Metallic", "bg-gray-100"],
  //   color10: ["Grey Metallic With Attitude Black", "bg-gray-100"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "??? 11.19 Lakh",
  //     "17.8 to 24.1 kmpl",
  //     "1498 cc",
  //     "Manual & Automatic (CVT)",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "4,549 mm L x 1,748 mm W x 1,489 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/40535/all-new-city-exterior-right-front-three-quarter.jpeg?q=85",
  //   ],
  //   comparisioncar2: [
  //     "??? 9.28 Lakh*",
  //     "17.7 to 25 kmpl",
  //     "998 to 1497 cc",
  //     "Manual, Automatic (CVT), Automatic (Torque Converter) & Automatic (Dual Clutch)",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "4,440 mm L x 1,729 mm W x 1,475 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/41197/hyundai-verna-right-front-three-quarter7.jpeg?q=85",
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
  //     "2 Airbags",
  //     "",
  //   ],
  // };

  // const faqs = {
  //   question1: [
  //     "What is the on road price of Yaris?",
  //     "The on-road price of Yaris in Delhi starts at ?????? 10.34 Lakh and goes upto ?????? 16.9 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Yaris and All New City?",
  //     "Yaris price starts at ??? 9.17 Lakh ex-showroom and It comes with 1496 cc engine. Whereas All New City price starts at ??? 11.19 Lakh ex-showroom and It comes with 1498 cc engine.",
  //   ],
  //   question3: [
  //     "What is the mileage of Toyota Yaris?",
  //     "The Toyota Yaris mileage is 17.1 - 17.8 kmpl.",
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
    car1: CityBasicInfoCard,
    car2: VernaBasicInfoCard,
    car3: VentoBasicInfoCard,
  };

  const ThatBrandCars = {
    car1: InnovaBasicInfoCard,
    car2: FortunerBasicInfoCard,
    car3: UrbanCruiserBasicInfoCard,
    car4: GlanzaBasicInfoCard,
    car5: YarisBasicInfoCard,
    car6: VellfireBasicInfoCard,
    car7: CamryBasicInfoCard,
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Hilux/8445/1622783707227/front-left-side-47.jpg?imwidth=420&impolicy=resize",
  //     "Hilux",
  //     "Rs.18.00 Lakh*",
  //   ],
  //   car2: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Land-Cruiser/8448/1623313668941/front-left-side-47.jpg?tr=w-456",
  //     "Land Cruiser",
  //     "Rs.1.50 Cr*",
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
        LinkCarName="yaris"
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

          <div className="ml-24 sm:ml-1 sm:mr-1 mt-10">
            <KeySpecSafetyFeatures
              KeySpecification={KeySpecification}
              SafetyFeatures={SafetyFeatures}
              OnlyName={OnlyName}
            />

            <div>
              <div className="grid grid-cols-10 mt-6 md:grid-cols-5 sm:mr-1"></div>
            </div>
            <Link to="specifications" smooth={true}>
              <div className="text-3xl bg-red-500 w-96 md:w-auto text-white rounded-md text-center font-bold p-3 hover:bg-red-200 mt-10 sm:mr-1 cursor-pointer">
                Show All Specifications
              </div>
            </Link>

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
              {/* <SomeHighlightedFeatures
                OnlyName={OnlyName}
                HighlightedFeatures={HighlightedFeatures}
              /> */}
              <Faqs OnlyName={OnlyName} faqs={faqs} />
              {/* <LatestArticles OnlyName={OnlyName} articles={articles} /> */}
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
  return OneCarAllSpecs("yaris").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
