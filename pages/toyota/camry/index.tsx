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
import { Camry } from "../../../CarPicsUrl/CarPics";
import { TCamry } from "../../../CarPicsUrl/Thumbnails";
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
import { SuperbBasicInfoCard } from "../../../AllCarBasicInfo/skoda";

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
  // const CarPrice = "₹ 40.61 Lakh";
  // const TopPic = Camry;
  // const CarName = "Toyota Camry";
  // const OnlyName = "Camry";
  // const ThumPic = TCamry;

  // const KeySpecification = [
  //   "₹ 40.61 Lakh onwards",
  //   "19.16 kmpl",
  //   "2487 cc",
  //   "Automatic",
  //   "Hybrid (Electric + Petrol)",
  //   "5 Seater",
  //   "4,885 mm L x 1,840 mm W x 1,455 mm H",
  // ];

  // const SafetyFeatures = [
  //   "Pre-Collision System with Pedestrian Detection.",
  //   "Full-Speed Range Dynamic Radar Cruise Control.",
  //   "Lane Departure Alert with Steering Assist",
  // ];

  // const VarientPetrol = {
  //   varient1: [
  //     "Hybrid 2.5",
  //     "2487 cc, Automatic, Petrol, 19.16 kmpl",
  //     "Rs.40.59 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: The price of the Toyota Camry has shot up by Rs 1.18 lakh. Toyota Camry Price: It is now priced at Rs 40.59 lakh (ex-showroom Delhi). Toyota Camry Variant: Toyota offers the sedan in a single fully-loaded variant. Toyota Camry Powertrain: The sedan is offered with a BS6 2.5-litre petrol-hybrid engine and a single electric motor that drives the front wheels. It produces a combined output of 218PS with a CVT gearbox. Toyota Camry Features: It gets three-zone climate control, ventilated front seats, cruise control, wireless charger, and rain-sensing wipers. It also comes with a head-up display and a sunroof. Toyota Camry Safety: Safety features on offer include nine airbags, vehicle stability control, and ABS with EBD. Toyota Camry Rivals: It rivals the Skoda Superb and the upcoming VW Passat.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Efficiency. Petrol-Hybrid combo ensures your wallet remains fat.",
  //     "Interior quality. Soft-touch material on the dash, leather upholstery feel top class. ",
  //     "For the saahab! Powered recline for the rear seats, powered sunshade and audio controls on the rear central armrest. ",
  //   ],
  //   cons: [
  //     "Not for the enthusiast. e-CVT robs some fun. ",
  //     "Low seating position makes getting in and out slightly harder. ",
  //     "Expensive! At Rs 36.95 lakh (ex-showroom), it’s asking nearly Rs 5 lakh over the Skoda Superb",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["PLATINUM WHITE PEARL", "bg-white-800"],
  //   color2: ["Phantom Brown", "bg-brown-400"],
  //   color3: ["Graphite", "bg-gray-900"],
  //   color4: ["BURNING BLACK", "bg-gray-900"],
  //   color5: ["Attitude Black", "bg-gray-900"],
  //   color6: ["Silver Metallic", "bg-gray-600"],
  //   color7: ["Red Mica Metallic", "bg-red-700"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "Rs.31.99 - 34.99 Lakh*",
  //     "15.1 kmpl",
  //     "1984 cc",
  //     "Automatic",
  //     "Petrol",
  //     "5 Seater",
  //     "4,869 mm L x 1,864 mm W x 1,469 mm H",
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Superb/6764/1592459454448/front-left-side-47.jpg?tr=w-456",
  //   ],
  //   comparisioncar2: [
  //     "Rs.38.90 - 43.00 Lakh*",
  //     "14.82 - 19.62 kmpl",
  //     "1995 cc - 1998 cc",
  //     "Automatic",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "4,447 mm L x 1,821 mm W x 1,612 mm H",
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X1/7625/1583398555726/front-left-side-47.jpg?tr=w-456",
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
  //     "What is the on road price of Camry?",
  //     "The on-road price of Camry in Delhi is ₹ 47.23 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Camry and ES?",
  //     "Camry price starts at ₹ 40.61 Lakh ex-showroom and It comes with 2487 cc engine. Whereas ES price starts at ₹ 56.53 Lakh ex-showroom and It comes with 2487 cc engine",
  //   ],
  //   question3: [
  //     "What is the mileage of Toyota Camry?",
  //     "The Toyota Camry mileage is 19.16 kmpl.",
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
    car1: SuperbBasicInfoCard,
    car2: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X1/7625/1583398555726/front-left-side-47.jpg?tr=w-456",
      "BMW X1",
      "Rs.38.90 - 43.00 Lakh",
    ],
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
        LinkCarName="camry"
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
  return OneCarAllSpecs("camry").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
