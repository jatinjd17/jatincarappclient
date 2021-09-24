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
import { Eeco } from "../../../CarPicsUrl/CarPics";
import Head from "next/head";
import { TEeco } from "../../../CarPicsUrl/Thumbnails";
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
import { TriberBasicInfoCard } from "../../../AllCarBasicInfo/renault";
import { GlanzaBasicInfoCard } from "../../../AllCarBasicInfo/toyota";
import {
  i20BasicInfoCard,
  NiosBasicInfoCard,
  SantroBasicInfoCard,
} from "../../../AllCarBasicInfo/hyundai";
import { AltrozBasicInfoCard } from "../../../AllCarBasicInfo/tata";

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
  // const CarPrice = "₹ 4.08 Lakh";
  // const TopPic = Eeco;
  // const CarName = "Maruti Eeco";
  // const OnlyName = "Eeco";
  // const ThumPic = TEeco;

  // const KeySpecification = [
  //   "₹ 4.08 Lakh onwards",
  //   "16.11 to 30.47 km/kg",
  //   "1197 cc",
  //   "Manual",
  //   "Petrol",
  //   "5-7 Seater",
  //   "3,675 mm L x 1,475 mm W x 1,800-1,825 mm H",
  // ];

  // const SafetyFeatures = ["Driver Airbag", "Seat Belts", "Speed Alert"];

  // const VarientPetrol = {
  //   varient1: ["5 STR", "1196 cc, Manual, Petrol, 16.11 kmpl", "Rs.5.97 Lakh*"],
  //   varient2: ["7 STR", "1196 cc, Manual, Petrol, 16.11 kmpl", "Rs.6.69 Lakh*"],
  //   varient3: [
  //     "5 STR WITH A/C+HTR",
  //     "1196 cc, Manual, Petrol, 16.11 kmpl",
  //     "Rs.7.32 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {
  //   varient1: [
  //     "7 STR WITH A/C+HTR CNG",
  //     "1196 cc, Manual, CNG, 30.47 km/kg",
  //     "Rs.7.57 Lakh*",
  //   ],
  // };

  // const Mileage = {
  //   mileage1: ["Petrol (1196 cc)", "Manual", "16.11 kmpl"],
  //   mileage2: ["CNG (1196 cc)", "Manual", "30.47 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: Maruti has hiked the prices of the Eeco uniformly by Rs 11,000. Maruti Eeco Price: The MPV is priced between Rs 4.08 lakh and Rs 5.29 lakh (ex-showroom Delhi). Maruti Eeco Variants: The Eeco is available in four variants: 5-seater standard, 5-seater AC, 5-seater AC CNG, and 7-seater standard. Maruti Eeco Seating Capacity: The Eeco can seat up to seven people. Maruti Eeco Powertrain: It is available with a 1.2-litre naturally aspirated petrol engine (73PS/98Nm), paired to a 5-speed MT. The same engine with a CNG kit produces 63PS/85Nm. The petrol version has a fuel efficiency figure of 16.11kmpl, whereas the CNG variant offers 20.88km/kg. Maruti Eeco Features: Feature highlights include manual AC. Maruti Eeco Safety: It gets a driver airbag, ABS with EBD, front seatbelt reminder, speed alert, and rear parking sensors as standard. Maruti Eeco Rivals: The Eeco doesn’t have any real competitors in the Indian market. The Datsun GO+ is the only vehicle, in a similar price bracket, with the same seating capacity.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Sliding rear doors make ingress/egress easier for rear row passengers.",
  //     "Reliable 1.2-litre petrol engine. Available with a factory-fit CNG kit as well.",
  //     "Accommodating 540-litre boot.",
  //   ],
  //   cons: [
  //     "74PS/101Nm power/torque output is low for a people-mover. Engine feels strained with a full passenger load.",
  //     "Basic safety features like ABS or airbags aren’t available even as an option.",
  //     "Lacks in Modern features",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Cerulean Blue", "bg-blue-600"],
  //   color2: ["Metallic Silky Silver", "bg-gray-400"],
  //   color3: ["Solid White", "bg-white"],
  //   color4: ["Metallic Glistening Grey", "bg-gray-600"],
  //   color5: ["Pearl Midnight Black", "bg-gray-800"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 5.50 Lakh onwards",
  //     "18.2 - 20.0 kmpl",
  //     "999 cc",
  //     "Manual, Automatic",
  //     "Petrol",
  //     "7 Seater",
  //     "3,990 mm L x 1,739 mm W x 1,643 mm H",
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Triber/7418/1580113966019/front-left-side-47.jpg?tr=w-456",
  //   ],
  //   comparisioncar2: [
  //     "₹ 7.34 Lakh onwards",
  //     "21.96 kmpl",
  //     "1197 cc",
  //     "Manual, Automatic",
  //     "Petrol",
  //     "5 Seater",
  //     "3,995 mm L x 1,745 mm W x 1,510 mm H",
  //     "https://images.financialexpress.com/2019/06/19-1.jpg",
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
  //     "1 Airbags",
  //     "",
  //   ],
  // };

  // const faqs = {
  //   question1: [
  //     "What is the on road price of Eeco?",
  //     "The on-road price of Eeco in Delhi starts at ‎₹ 4.61 Lakh and goes upto ‎₹ 6.04 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Eeco and Alto?",
  //     "Eeco price starts at ₹ 4.08 Lakh ex-showroom and It comes with 1196 cc engine. Whereas Alto price starts at ₹ 3.00 Lakh ex-showroom and It comes with 796 cc engine. Compare the two models to identify the best car for you.",
  //   ],
  //   question3: [
  //     "What is the mileage of Maruti Suzuki Eeco?",
  //     "The Maruti Suzuki Eeco mileage is 16.11 - 30.47 km/kg.",
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
    car1: TriberBasicInfoCard,
    car2: GlanzaBasicInfoCard,
    car3: i20BasicInfoCard,
    car4: AltrozBasicInfoCard,
    car5: NiosBasicInfoCard,
    car6: SantroBasicInfoCard,
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
        LinkCarName="eeco"
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
  return OneCarAllSpecs("eeco").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
