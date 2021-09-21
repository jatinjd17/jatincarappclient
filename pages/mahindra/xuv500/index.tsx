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
import { Xuv500 } from "../../../CarPicsUrl/CarPics";
import { TXUV500 } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  ScorpioBasicInfoCard,
  Xuv500BasicInfoCard,
  BoleroBasicInfoCard,
  AlturasBasicInfoCard,
  Kuv100BasicInfoCard,
  MarazzoBasicInfoCard,
  TharBasicInfoCard,
  Xuv300BasicInfoCard,
  BoleroNeoBasicInfoCard,
} from "../../../AllCarBasicInfo/mahindra";

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

  // const CompanyName = "Mahindra";
  // const CarPrice = "₹ 14.27 Lakh";
  // const TopPic = Xuv500;
  // const CarName = "Mahindra XUV 500";
  // const OnlyName = "XUV 500";
  // const ThumPic = TXUV500;

  // const KeySpecification = [
  //   "₹ 14.27 Lakh onwards",
  //   "15.1 kmpl",
  //   "2179 cc",
  //   "Manual & Automatic",
  //   "Diesel",
  //   "7 Seater",
  //   "4,585 mm L x 1,890 mm W x 1,785 mm H",
  // ];

  // const SafetyFeatures = [
  //   "Up to six airbags",
  //   "Anti-lock Braking System (ABS) with Electronic Brakeforce Distribution (EBD)",
  //   "Electronic Stability Program (ESP) with Rollover mitigation",
  //   "hill hold and hill descent control",
  //   "disc brakes on all wheels",
  // ];

  // const VarientPetrol = {};

  // const VarientDiesel = {
  //   varient1: ["W7", "2179 cc, Manual, Diesel, 15.1 kmpl", "Rs.15.56 Lakh*"],
  //   varient2: [
  //     "W7 AT",
  //     "2179 cc, Automatic, Diesel, 15.1 kmpl",
  //     "Rs.16.76 Lakh*",
  //   ],
  //   varient3: ["W9", "2179 cc, Manual, Diesel, 15.1 kmpl", "Rs.17.30 Lakh*"],
  //   varient4: [
  //     "W9 AT",
  //     "2179 cc, Automatic, Diesel, 15.1 kmpl",
  //     "Rs.18.51 Lakh*",
  //   ],
  //   varient5: [
  //     "W11 Option",
  //     "2179 cc, Manual, Diesel, 15.1 kmpl",
  //     "Rs.18.84 Lakh*",
  //   ],
  //   varient6: [
  //     "W11 Option AT",
  //     "2179 cc, Automatic, Diesel, 15.1 kmpl",
  //     "Rs.20.07 Lakh*",
  //   ],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "23.26 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: Mahindra has increased the prices of the XUV500 by up to Rs 4,000. Mahindra XUV500 Price: The XUV500 is now priced from Rs 15.56 lakh to Rs 20.07 lakh (ex-showroom Delhi). Mahindra XUV500 Variants: It is sold in three trims: W7, W9, and W11. Mahindra XUV500 Seating Capacity: Mahindra’s mid-size SUV can carry up to seven people. Mahindra XUV500 Engine and Transmission: It gets a 2.2-litre diesel engine (155PS/360Nm), coupled with a 6-speed manual or torque converter gearbox. Mahindra XUV500 Features: The XUV500 is equipped with a 7-inch touchscreen infotainment system with Android Auto and Apple CarPlay, a 6-way adjustable driver seat, a sunroof, and cruise control. Mahindra XUV500 Safety: Standard safety features include dual front airbags, ABS with EBD, and rear parking sensors. Mahindra XUV500 Rivals: The XUV500 locks horns with the Jeep Compass, Hyundai Tucson, Toyota Innova Crysta, MG Hector, and the Hyundai Alcazar. Mahindra XUV700: Mahindra is expected to launch the XUV700, XUV500’s spiritual successor, in August 2021.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "4WD option offered with both manual and automatic transmissions",
  //     "The XUV500 is the only SUV in its class to offer an automatic transmission with every variant except the base",
  //     "The XUV500 has a lot of road presence thanks to its large dimensions and muscular design",
  //   ],
  //   cons: [
  //     "Petrol derivative available only with an automatic transmission",
  //     "Quality of some of the switches and the AC vents aren’t up to the mark, especially when you consider the price of the higher-spec variants",
  //     "The 4WD variant is exclusive to the top-spec W11(O) variant, which puts it out of reach for many buyers",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Lake Side Brown", "bg-blue-600"],
  //   color2: ["Pearl White", "bg-gray-400"],
  //   color3: ["Mystic Copper", "bg-gray-400"],
  //   color4: ["Moondust Silver", "bg-gray-400"],
  //   color5: ["Crimson Red", "bg-gray-400"],
  //   color6: ["Volcano Black", "bg-gray-400"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 16.30 Lakh Onwards",
  //     "14.2 to 20.4 kmpl",
  //     "1493 to 1999 cc",
  //     "Manual & Automatic (Torque Converter)",
  //     "Petrol & Diesel",
  //     "6 & 7 Seater",
  //     "4,500 mm L x 1,790 mm W x 1,675 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/46812/alcazar-exterior-right-front-three-quarter.jpeg?q=85",
  //   ],
  //   comparisioncar2: [
  //     "₹ 13.18 Lakh onwards",
  //     "13.96 to 17.41 kmpl",
  //     "1451 to 1956 cc",
  //     "Manual & Automatic",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "4655 mm in length, 1835 mm in width and 1760 mm in height",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/52565/hector-exterior-right-front-three-quarter-3.jpeg?q=85",
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
  //     "What is the on road price of XUV500?",
  //     "The on-road price of XUV500 in Delhi starts at ‎₹ 17 Lakh and goes upto ‎₹ 23.77 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between XUV500 and Safari?",
  //     "XUV500 price starts at ₹ 14.27 Lakh ex-showroom and It comes with 2179 cc engine. Whereas Safari price starts at ₹ 14.99 Lakh ex-showroom and It comes with 1956 cc engine.",
  //   ],
  //   question3: [
  //     "What is the mileage of Mahindra XUV500?",
  //     "The Mahindra XUV500 mileage is 15.1 - 15.1 kmpl.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32958/tata-harrier-right-front-three-quarter58.jpeg?q=85",
      "Harrier",
      "₹ 14.30 Lakh Onwards",
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
    car1: ScorpioBasicInfoCard,
    car2: Xuv500BasicInfoCard,
    car3: BoleroBasicInfoCard,
    car4: AlturasBasicInfoCard,
    car5: Kuv100BasicInfoCard,
    car6: MarazzoBasicInfoCard,
    car7: TharBasicInfoCard,
    car8: Xuv300BasicInfoCard,
    car9: BoleroNeoBasicInfoCard,
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-left-front-three-quarter.jpeg?isig=0&q=85",
  //     "XUV 700",
  //     "₹ 13.00 - 20.00 Lakh",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/41157/Mahindra-TUV300-Plus-Facelift-Exterior-163347.jpg?wm=0&q=85",
  //     "TUV 300 Plus",
  //     "₹ 10.00 - 12.00 Lakh",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/33297/Mahindra-e20-NXT-Exterior-120569.jpg?wm=0&q=85",
  //     "e20 NXT",
  //     "₹ 6.00 - 8.00 Lakh",
  //   ],
  //   car4: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/42453/Mahindra-S204-Exterior-171413.jpg?wm=0&q=85",
  //     "Mahindra S204",
  //     "₹ 11.00 - 15.00 Lakh",
  //   ],
  //   car5: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/45278/mahindra-exuv300-left-side-view0.jpeg?q=85",
  //     "eXUV300",
  //     "₹ 14.00 - 16.00 Lakh",
  //   ],
  //   car6: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/40432/Mahindra-New-Scorpio-Exterior-159617.jpg?wm=0&q=85",
  //     "New Scorpio",
  //     "₹ 10.00 - 14.00 Lakh",
  //   ],
  //   car7: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/33261/Mahindra-eKUV100-Exterior-170053.jpg?wm=0&q=85",
  //     "eKUV100",
  //     "₹ 8.00 - 9.00 Lakh",
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
        LinkCarName="xuv500"
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
  return OneCarAllSpecs("xuv500").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
