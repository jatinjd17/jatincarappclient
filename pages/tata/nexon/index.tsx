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
import { Nexon } from "../../../CarPicsUrl/CarPics";
import { TNexon } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  NexonBasicInfoCard,
  AltrozBasicInfoCard,
  SafariBasicInfoCard,
  HarrierBasicInfoCard,
  TiagoBasicInfoCard,
  TigorBasicInfoCard,
  NexonEVBasicInfoCard,
  TigorEVBasicInfoCard,
  TiagoNRGBasicInfoCard,
} from "../../../AllCarBasicInfo/tata";

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

  // const CompanyName = "Tata";
  // const CarPrice = "₹ 7.28 Lakh";
  // const TopPic = Nexon;
  // const CarName = "Tata Nexon";
  // const OnlyName = "Nexon";
  // const ThumPic = TNexon;

  // const KeySpecification = [
  //   "₹ 7.28 Lakh onwards",
  //   "16 to 22.4 kmpl",
  //   "1199 to 1497 cc",
  //   "Manual & AMT",
  //   "Petrol & Diesel",
  //   "5 Seater",
  //   "3993 mm in length, 1811 mm in width and 1606 mm in height",
  // ];

  // const SafetyFeatures = [
  //   "2 airbags",
  //   "ABS with EBD and CSC",
  //   "reverse parking sensors",
  //   "ISOFIX",
  //   "driver and co-driver seatbelt reminder",
  //   "high-speed alert system",
  //   "impact sensing auto door unlock.",
  // ];

  // const VarientPetrol = {
  //   varient1: ["XE", "1199  cc, Manual, Petrol, 16.35 kmpl", "Rs.7.19 Lakh*"],
  //   varient2: ["XM", "1199  cc, Manual, Petrol, 16.35 kmpl", "Rs.8.15 Lakh*"],
  //   varient3: ["XM S", "1199 cc, Manual, Petrol, 16.35 kmpl", "Rs.8.67 Lakh*"],
  //   varient4: [
  //     "XMA AMT",
  //     "1199 cc, Automatic, Petrol, 14.63 kmpl",
  //     "Rs.8.75 Lakh*",
  //   ],
  //   varient5: ["XZ", "1199  cc, Manual, Petrol, 16.35 kmpl", "Rs.9.15 Lakh*"],
  //   varient6: [
  //     "XMA AMT S",
  //     "1199 cc, Automatic, Petrol, 16.35 kmpl",
  //     "Rs.9.27 Lakh*",
  //   ],

  //   varient7: [
  //     "XZ Plus",
  //     "1199 cc, Manual, Petrol, 16.35 kmpl",
  //     "Rs.9.95 Lakh*",
  //   ],

  //   varient8: [
  //     "XZ Plus DualTone Roof",
  //     "1199 cc, Manual, Petrol, 16.35 kmpl",
  //     "Rs.10.12 Lakh*",
  //   ],
  //   varient9: [
  //     "XZ Plus Dark Edition",
  //     "1199 cc, Manual, Petrol, 16.35 kmpl",
  //     "Rs.10.39 Lakh*",
  //   ],
  //   varient10: [
  //     "XZ Plus S",
  //     "1199 cc, Manual, Petrol, 16.35 kmpl",
  //     "Rs.10.55 Lakh*",
  //   ],
  //   varient11: [
  //     "XZA Plus AMT",
  //     "1199 cc, Automatic, Petrol, 16.35 kmpl",
  //     "Rs.10.55 Lakh*",
  //   ],

  //   varient12: [
  //     "XZ Plus DualTone Roof S",
  //     "1199 cc, Manual, Petrol, 16.35 kmpl",
  //     "Rs.10.72 Lakh*",
  //   ],
  //   varient13: [
  //     "XZA Plus DualTone Roof AMT",
  //     "1199 cc, Automatic, Petrol, 14.63 kmpl",
  //     "Rs.10.72 Lakh*",
  //   ],
  //   varient14: [
  //     "XZ Plus (O)",
  //     "1199 cc, Manual, Petrol, 16.35 kmpl",
  //     "Rs.10.85 Lakh*",
  //   ],
  //   varient15: [
  //     "XZA Plus Dark Edition",
  //     "1199 cc, Manual, Petrol, 14.63 kmpl",
  //     "Rs.10.99 Lakh*",
  //   ],
  //   varient16: [
  //     "XZ Plus DualTone Roof (O)",
  //     "1199 cc, Manual, Petrol, 16.35 kmpl",
  //     "Rs.11.02 Lakh*",
  //   ],
  //   varient17: [
  //     "XZA Plus AMT S",
  //     "1199 cc, Automatic, Petrol, 16.35 kmpl",
  //     "Rs.11.15 Lakh*",
  //   ],

  //   varient18: [
  //     "XZ Plus (O) Dark Edition",
  //     "1199 cc, Manual, Petrol, 14.63 kmpl",
  //     "Rs.11.29 Lakh*",
  //   ],
  //   varient19: [
  //     "XZA Plus DualTone Roof AMT S",
  //     "1199 cc, Automatic, Petrol, 16.35 kmpl",
  //     "Rs.11.32 Lakh*",
  //   ],

  //   varient20: [
  //     "XZA Plus (O) AMT",
  //     "1199 cc, Automatic, Petrol, 14.63 kmpl",
  //     "Rs.11.45 Lakh*",
  //   ],
  //   varient21: [
  //     "XZA Plus DT Roof (O) AMT",
  //     "1199 cc, Automatic, Petrol, 14.63 kmpl",
  //     "Rs.11.62 Lakh*",
  //   ],

  //   varient22: [
  //     "XZA Plus (O) Dark Edition",
  //     "1199 cc, Manual, Petrol, 14.63 kmpl",
  //     "Rs.11.89 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {
  //   varient1: [
  //     "XM Diesel",
  //     "1497 cc, Manual, Diesel, 16.35 kmpl",
  //     "Rs.9.48 Lakh*",
  //   ],
  //   varient2: [
  //     "XM Diesel S",
  //     "1497 cc, Manual, Diesel, 16.35 kmpl",
  //     "Rs.9.99 Lakh*",
  //   ],
  //   varient3: [
  //     "XMA AMT Diesel S",
  //     "1497 cc, Automatic, Diesel, 16.35 kmpl",
  //     "Rs.10.60 Lakh*",
  //   ],
  //   varient4: [
  //     "XZ Plus Diesel",
  //     "1497 cc, Manual, Diesel, 14.63 kmpl",
  //     "Rs.11.28 Lakh*",
  //   ],
  //   varient5: [
  //     "XZ Plus DualTone Roof Diesel",
  //     "1497 cc, Manual, Diesel, 14.63 kmpl",
  //     "Rs.11.45 Lakh*",
  //   ],
  //   varient6: [
  //     "XZ Plus Dark Edition Diesel",
  //     "1497 cc, Manual, Diesel, 14.63 kmpl",
  //     "Rs.11.73 Lakh*",
  //   ],
  //   varient7: [
  //     "XZ Plus Diesel S",
  //     "1497 cc, Manual, Diesel, 14.63 kmpl",
  //     "Rs.11.88 Lakh*",
  //   ],
  //   varient8: [
  //     "XZA Plus AMT Diesel",
  //     "1497 cc, Automatic, Diesel, 14.63 kmpl",
  //     "Rs.11.88 Lakh*",
  //   ],
  //   varient9: [
  //     "XZ Plus DualTone Roof Diesel S",
  //     "1497 cc, Manual, Diesel, 14.63 kmpl",
  //     "Rs.12.05 Lakh*",
  //   ],
  //   varient10: [
  //     "XZA Plus DT Roof AMT Diesel",
  //     "1497 cc, Automatic, Diesel, 14.63 kmpl",
  //     "Rs.12.05 Lakh*",
  //   ],
  //   varient11: [
  //     "XZ Plus (O) Diesel",
  //     "1497 cc, Manual, Diesel, 14.63 kmpl",
  //     "Rs.12.18 Lakh*",
  //   ],
  //   varient12: [
  //     "XZA Plus Dark Edition Diesel",
  //     "1497 cc, Manual, Diesel, 14.63 kmpl",
  //     "Rs.12.33 Lakh*",
  //   ],
  //   varient13: [
  //     "XZ Plus DualTone Roof (O) Diesel",
  //     "1497 cc, Manual, Diesel, 14.63 kmpl",
  //     "Rs.12.35 Lakh*",
  //   ],
  //   varient14: [
  //     "XZ Plus (O) Dark Edition Diesel",
  //     "1497 cc, Manual, Diesel, 14.63 kmpl",
  //     "Rs.12.63 Lakh*",
  //   ],
  //   varient15: [
  //     "XZA Plus (O) AMT Diesel",
  //     "1497 cc, Automatic, Diesel, 14.63 kmpl",
  //     "Rs.12.78 Lakh*",
  //   ],
  //   varient16: [
  //     "XZA Plus DT Roof (O) Diesel AMT",
  //     "1497 cc, Automatic, Diesel, 14.63 kmpl",
  //     "Rs.12.95 Lakh*",
  //   ],
  //   varient17: [
  //     "XZA Plus (O) Dark Edition Diesel",
  //     "1497 cc, Manual, Diesel, 14.63 kmpl",
  //     "Rs.13.23 Lakh*",
  //   ],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: The Nexon carries savings of Rs 15,000 this July. Tata Nexon Price: Tata retails the Nexon from Rs 7.19 lakh to Rs 13.23 lakh (ex-showroom). Tata Nexon Variants: It is sold in five trims: XE, XM, XZ, XZ+, and XZ+(O).  Tata Nexon Seating Capacity: The Nexon is a five-seater. Tata Nexon Engine and Transmission: Tata has provided the sub-4m SUV with two engine options: a 1.2-litre turbocharged petrol (120PS/170Nm) and a 1.5-litre turbocharged diesel (110PS/260Nm). Both can be paired with either a 6-speed MT or a 6-speed AMT. Tata Nexon Features: It gets auto AC with rear AC vents, rain-sensing wipers, a 7-inch touchscreen infotainment system with Android Auto and Apple CarPlay, cruise control, and a digital instrument cluster. Tata Nexon Safety: Standard safety features across variants include dual front airbags, rear parking sensors, ABS with EBD, electronic stability program (ESP), and ISOFIX child seat anchorages. Tata Nexon Rivals: It competes with the Toyota Urban Cruiser, Kia Sonet, Mahindra XUV300, Ford EcoSport, Renault Kiger, Maruti Suzuki Vitara",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "New sharper styling makes the new Nexon look upmarket",
  //     "5 Star G-NCAP safety rating",
  //     "BS6 compliant powertrain",
  //   ],
  //   cons: [
  //     "Interior quality could have been better",
  //     "Petrol engine lacks low-end grunt",
  //     "Infotainment screen not as good as rivals",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Foliage Green", "bg-green-800"],
  //   color2: ["Flame Red", "bg-Red-700"],
  //   color3: ["Pure Silver", "bg-gray-600"],
  //   color4: ["Daytona Grey", "bg-gray-700"],
  //   color5: ["Calgary White", "bg-white-800"],
  //   color6: ["Atlas Black", "bg-gray-900"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 6.92 Lakh Onwards",
  //     "17.52 to 23.4 kmpl",
  //     "998 to 1493 cc",
  //     "Clutchless Manual & Automatic (Dual Clutch)",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "3,995 mm L x 1,770 mm W x 1,590 mm H",
  //     "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/7931/1626089251600/front-left-side-47.jpg",
  //   ],
  //   comparisioncar2: [
  //     "₹ 7.51 Lakh onwards",
  //     "17.03 to 18.76 kmpl",
  //     "1462 cc",
  //     "Manual",
  //     "Petrol",
  //     "5 Seater",
  //     "3,995 mm L x 1,790 mm W x 1,640 mm H",
  //     "https://media.zigcdn.com/media/model/2020/Feb/front-1-4-left-190291530_600x400.jpg",
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
  //     "What is the on road price of Nexon?",
  //     "The on-road price of Nexon in Delhi starts at ‎₹ 8.23 Lakh and goes upto ‎₹ 15.78 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Nexon and XUV300?",
  //     "Nexon price starts at ₹ 7.28 Lakh ex-showroom and It comes with 1199 cc engine. Whereas XUV300 price starts at ₹ 7.96 Lakh ex-showroom and It comes with 1197 cc engine.",
  //   ],
  //   question3: [
  //     "What is price of Nexon top model?",
  //     "Top model of Nexon is XZA Plus (O) Diesel Dark Edition and the ex-showroom for Nexon XZA Plus (O) Diesel Dark Edition is ₹ 13.25 Lakh.",
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
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/7931/1626089251600/front-left-side-47.jpg",
      "Venue",
      "₹ 6.92 Lakh Onwards",
    ],
    car2: [
      "https://media.zigcdn.com/media/model/2020/Feb/front-1-4-left-190291530_600x400.jpg",
      "Brezza",
      "₹ 7.51 Lakh onwards0",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47016/urban-cruiser-exterior-right-front-three-quarter.jpeg?q=85",
      "Urban Cruiser",
      "₹ 8.63 Lakh onwards",
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
    car1: NexonBasicInfoCard,
    car2: AltrozBasicInfoCard,
    car3: SafariBasicInfoCard,
    car4: HarrierBasicInfoCard,
    car5: TiagoBasicInfoCard,
    car6: TigorBasicInfoCard,
    car7: NexonEVBasicInfoCard,
    car8: TigorEVBasicInfoCard,
    car9: TiagoNRGBasicInfoCard,
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/39015/Tata-H2X-Exterior-170093.jpg?wm=0&q=85",
  //     "HBX",
  //     "₹ 5.00 - 8.00 Lakh",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/40453/Tata-Tiago-EV-Exterior-169932.jpg?wm=0&q=85",
  //     "Tiago EV",
  //     "₹ 5.00 - 7.00 Lakh",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/46800/tata-altroz-ev-left-side-view5.jpeg?q=85",
  //     "Altroz EV",
  //     "₹ 12.00 - 15.00 Lakh",
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
        LinkCarName="nexon"
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
  return OneCarAllSpecs("nexon").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
