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
import { Ciaz } from "../../../CarPicsUrl/CarPics";
import Head from "next/head";
import { TCiaz } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  SpressoBasicInfoCard,
  CelerioBasicInfoCard,
  WaganRBasicInfoCard,
  SwiftBasicInfoCard,
  BalenoBasicInfoCard,
  ErtigaBasicInfoCard,
  BrezzaBasicInfoCard,
  AltoBasicInfoCard,
  DzireBasicInfoCard,
  XL6BasicInfoCard,
  IgnisBasicInfoCard,
  EecoBasicInfoCard,
  CiazBasicInfoCard,
  ScrossBasicInfoCard,
  CelerioXBasicInfoCard,
} from "../../../AllCarBasicInfo/marutisuzuki";

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

  // const CompanyName = "MarutiSuzuki";
  // const CarPrice = "₹ 8.51 Lakh";
  // const TopPic = Ciaz;
  // const CarName = "Maruti Ciaz";
  // const OnlyName = "Ciaz";
  // const ThumPic = TCiaz;

  // const KeySpecification = [
  //   "₹ 8.51 Lakh onwards",
  //   "20.04 to 20.65 kmpl",
  //   "1462 cc",
  //   "Manual",
  //   "Petrol",
  //   "5 Seater",
  //   "4,490 mm L x 1,730 mm W x 1,485 mm H",
  // ];

  // const SafetyFeatures = [
  //   "Seat Belt Warning",
  //   "Anti-Lock Braking System",
  //   "2 Airbags",
  //   "EBD",
  //   "Speed Alert",
  //   "Driver frontal airbag, Front passenger frontal airbag",
  //   "Door Ajar Warning.",
  // ];

  // const VarientPetrol = {
  //   varient1: ["Sigma", "1462 cc, Manual, Petrol, 20.65 kmpl", "Rs.7.51 Lakh*"],
  //   varient2: ["Delta", "1462 cc, Manual, Petrol, 20.65 kmpl", "Rs.8.57 Lakh*"],
  //   varient3: ["Zeta", "1462 cc, Manual, Petrol, 20.65 kmpl", "Rs.9.32 Lakh*"],
  //   varient4: [
  //     "Alpha 1.5",
  //     "1462 cc, Manual, Petrol, 20.65 kmpl",
  //     "Rs.9.86 Lakh*",
  //   ],
  //   varient5: [
  //     "Delta 1.5 AT",
  //     "1462 cc, Atomatic (Torque Converter), Petrol, 20.65 kmpl",
  //     "Rs.9.88 Lakh*",
  //   ],
  //   varient6: [
  //     "S 1.5 MT",
  //     "1462 cc, Manual, Petrol, 20.65 kmpl",
  //     "Rs.10.00 Lakh*",
  //   ],
  //   varient7: [
  //     "Zeta 1.5 AT",
  //     "1462 cc, Atomatic (Torque Converter), Petrol, 20.65 kmpl",
  //     "Rs.10.63 Lakh*",
  //   ],
  //   varient8: [
  //     "Alpha 1.5 AT",
  //     "1462 cc, Atomatic (Torque Converter), Petrol, 20.65 kmpl",
  //     "Rs.11.26 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1462 cc)", "Manual", "20.65 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: The Ciaz’s prices have been increased by up to Rs 17,000. Maruti Ciaz Price: Maruti retails the sedan from Rs 8.52 lakh to Rs 11.50 lakh (ex-showroom Delhi). Maruti Ciaz Variants: It is offered in four trims: Sigma, Delta, Zeta, and Alpha. Maruti Ciaz Powertrain: The Ciaz is powered by a 1.5-litre petrol mild-hybrid powertrain (105PS/138Nm), coupled with a 5-speed manual or a 4-speed torque converter. Maruti Ciaz Features: The Ciaz comes with auto LED headlamps, a 7-inch touchscreen infotainment system with Apple CarPlay and Android Auto, auto climate control, passive keyless entry system with push-button, leather upholstery, and cruise control. Maruti Ciaz Safety: It gets dual front airbags, ABS with EBD, ISOFIX child seat anchors, and rear parking sensors as standard. Maruti Ciaz Rivals: Maruti’s compact sedan fights it out with the Honda City, Hyundai Verna, Toyota Yaris, Skoda Rapid, and Volkswagen Vento.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Very spacious cabin",
  //     "Price undercuts competition ",
  //     "Fuel efficient engines",
  //   ],
  //   cons: [
  //     "Slow shifting 4-speed auto box",
  //     "Bouncy high speed ride quality",
  //     "Engine could do with more pep",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Nexa Blue", "bg-blue-600"],
  //   color2: ["Premium Silver Metallic", "bg-gray-400"],
  //   color3: ["Pearl Snow White", "bg-white"],
  //   color4: ["Pearl Metallic Dignity Brown", "bg-brown-600"],
  //   color5: ["Magma Grey", "bg-gray-800"],
  //   color6: ["Pearl Midnight Black", "bg-black-800"],
  //   color7: ["Pearl Sanria Red", "bg-red-800"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "Rs.9.28 Lakh Onwards",
  //     "17.7 - 25.0 kmpl",
  //     "998 cc - 1497 cc",
  //     "Manual & Automatic",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "4,440 mm L x 1,729 mm W x 1,475 mm H",
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Verna/7729/1616055133475/front-left-side-47.jpg?tr=w-456",
  //   ],
  //   comparisioncar2: [
  //     "₹11.16 Lakh onwards",
  //     "17.8 - 24.1 kmpl",
  //     "1498 cc",
  //     "Manual & Automatic",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "4,549 mm L x 1,748 mm W x 1,489 mm H",
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Honda/City/7899/1594802649685/front-left-side-47.jpg?imwidth=420&impolicy=resize",
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
  //     "What is the on road price of Ciaz?",
  //     "The on-road price of Ciaz in Delhi starts at ‎₹ 9.52 Lakh and goes upto ‎₹ 13.25 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Ciaz and City?",
  //     "Ciaz price starts at ₹ 8.51 Lakh ex-showroom and It comes with 1462 cc engine. Whereas City price starts at ₹ 9.33 Lakh ex-showroom and It comes with 1497 cc engine. Compare the two models to identify the best car for you.",
  //   ],
  //   question3: [
  //     "What is price of Ciaz top model?",
  //     "Top model of Ciaz is Alpha 1.5 AT and the ex-showroom for Ciaz Alpha 1.5 AT is ₹ 11.49 Lakh.",
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
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Verna/7729/1616055133475/front-left-side-47.jpg?tr=w-456",
      "Verna",
      "₹ 9.28 Lakh Onwards",
    ],
    car2: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Honda/City/7899/1594802649685/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      "City",
      "₹ 11.16 Lakh onwards0",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/26563/Volkswagen-Vento-Right-Front-Three-Quarter-169094.jpg?wm=0&q=85",
      "Vento",
      "10.00 Lakh onwards",
    ],
    car4: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Rapid/7920/1608614333184/front-left-side-47.jpg?tr=w-456",
      "Rapid",
      "₹ 7.79 Lakh onwards",
    ],
  };

  const ThatBrandCars = {
    car1: SpressoBasicInfoCard,
    car2: CelerioBasicInfoCard,
    car3: WaganRBasicInfoCard,
    car4: SwiftBasicInfoCard,
    car5: BalenoBasicInfoCard,
    car6: ErtigaBasicInfoCard,
    car7: BrezzaBasicInfoCard,
    car8: AltoBasicInfoCard,
    car9: DzireBasicInfoCard,
    car10: XL6BasicInfoCard,
    car11: IgnisBasicInfoCard,
    car12: EecoBasicInfoCard,
    car13: CiazBasicInfoCard,
    car14: ScrossBasicInfoCard,
    car15: CelerioXBasicInfoCard,
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Celerio-2021/8454/Maruti-Celerio-2021-/1623741753799/front-left-side-47.jpg?tr=w-456",
  //     "Celario 2021",
  //     "Rs.4.50 Lakh",
  //   ],
  //   car2: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Maruti-Solio/6317/1558342716659/front-left-side-47.jpg?imwidth=420&impolicy=resize",
  //     "Maruti Solio",
  //     "Rs.6.00 Lakh",
  //   ],
  //   car3: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Alto-2021/8020/1600235578537/front-left-side-47.jpg?tr=w-456",
  //     "Alto 2021",
  //     "Rs.3.00 Lakh",
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
        LinkCarName="ciaz"
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
  return OneCarAllSpecs("ciaz").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
