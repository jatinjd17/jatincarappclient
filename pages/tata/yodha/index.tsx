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
import {
  AltrozBasicInfoCard,
  HarrierBasicInfoCard,
  NexonBasicInfoCard,
  NexonEVBasicInfoCard,
  SafariBasicInfoCard,
  TiagoBasicInfoCard,
  TiagoNRGBasicInfoCard,
  TigorBasicInfoCard,
  TigorEVBasicInfoCard,
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
  // const CarPrice = "Rs.6.94 - 7.49 Lakh*";
  // const TopPic =
  //   "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Yodha-Pickup/7624/1609147376028/front-left-side-47.jpg?tr=w-456";
  // const CarName = "Tata Yodha";
  // const OnlyName = "Yodha";

  // const KeySpecification = [
  //   "Rs.6.94 - 7.49 Lakh*",
  //   "14km/l",
  //   "2956 cc",
  //   "Manual",
  //   "Diesel",
  //   "2 Seater",
  //   "length of 2825mm, width of 1860mm and a wheelbase of 2825mm",
  // ];

  // const SafetyFeatures = [
  //   "dual front airbags",
  //   "Antilock Braking System (ABS)",
  //   "Fog lights, anti-roll bars",
  //   "3-layered body construction",
  //   "crumple zones",
  //   "retractable seat belts",
  //   "side intrusion beams",
  // ];

  // const VarientPetrol = {};

  // const VarientDiesel = {
  //   varient1: ["Eco", "2956, Manual, Diesel, 14km/l", "Rs.6.94 Lakh*"],
  //   varient2: ["Crew Cabin", "2956, Manual, Diesel, 14km/l", "Rs.7.09 Lakh*"],
  //   varient3: ["1500", "2956, Manual, Diesel, 14km/l", "Rs.7.10 Lakh*"],
  //   varient4: ["4x4", "2956, Manual, Diesel, 14km/l", "Rs.7.49 Lakh*"],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "The Yodha introduced in the middle of 2017 is a superior product than the prior generation Xenon. Yodha is designed and developed keeping in mind the rapidly evolving customer needs of modern transportation. Yodha offers higher payload than the Ace range of compact trucks, and customers looking to upgrade from Ace or some of them from even smaller vehicles, the Yodha pickup is the most suitable vehicle. Mahindra is the market leader in this segment with the popular Bolero Pickup. Tata Motors is a challenger brand trying to get a strong number 2 position. While the company has several products such as 207 and Xenon pickup in this segment offering a variety of loads options and applications to customers, Yodha is a next-generation product from Tata Motors. Yodha comes in single and crew cab options in 4x4 and 4x2 variants, with rated payload options of 1140, 1,250 kg &amp; 1500 kgs, for a wide range of commercial applications. The modern styling with SUV-type tough appearance and well-appointed, comfortable interiors makes Yodha a modern pickup. Yodha gets bigger 16-inch radial tyres, and a proven driveline consists of 4-cylinder 2956 cc engine with 85 HP of power @3000 rpm and 250 of torque @1000-2000 rpm across variants. For ease of driving Yodha comes with standards power-steering, the suspension offers comfort and flexibility with 6 semi-elliptical springs and 9 leaves leaf springs. Tata Motors has not only banking on the looks of Yodha but also promising lower operating costs-critical for a transporter, higher mileage and much less total cost of ownership ensuring the customer earns more per trip. In the just concluded Auto Expo 2020, Tata Motors has introduced the BSVI Yodha 1700 with additional features, a higher power engine and more loading space. Yodha competes with the market leader Mahindra Bolero Pikup range.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "It has Good Mileage",
  //     "Low Cost Pickup truck in Market",
  //     "Can carry Heavy Load",
  //     "available in 4x4",
  //   ],
  //   cons: [
  //     "Missing some features",
  //     "Safety features is not that good",
  //     "Many Costcutting has been seen",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["White", "bg-White-600"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "Rs.8.12 - 8.38 Lakh*",
  //     "13 Km/l",
  //     "2523 cc",
  //     "Manual",
  //     "Diesel",
  //     "2 Seater",
  //     "5215 mm L x 1700 mm W x 1,865 mm H",
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Bolero-Pik-Up/7230/1573280100232/front-left-side-47.jpg?tr=w-456",
  //   ],
  //   comparisioncar2: [
  //     "Rs.16.98 - 24.49 Lakh*",
  //     "	12.4 kmpl",
  //     "1898 cc",
  //     "Manual",
  //     "Diesel",
  //     "2 Seater",
  //     "5295 mm L x 1,860 mm W x 1,885 mm H",
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Isuzu/D-Max/8430/1620644941293/front-left-side-47.jpg?tr=w-456",
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
  //     "Which is best mileage give Tata yodha 1.7t vs Bolero pickup 1.7 ?",
  //     "Tata yodha having good mileage ",
  //   ],
  //   question2: [
  //     "What is the seating capacity of Tata Yodha?",
  //     "Tata Yodha Pickup is available in two and four seating layouts. While the Eco, 1500, and 4x4 variants get a 2-seating layout, the Crew Cabin variant can seat four.",
  //   ],
  //   question3: [
  //     "Are the cabin crew back seats comfortable?",
  //     "The Tata Yodha Pickup Crew Cabin comes with a seating capacity of 4-people. The Pickup offers a decent amount of space at the rear, however, the leg space could be an issue for taller passengers.",
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
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Bolero-Pik-Up/7230/1573280100232/front-left-side-47.jpg?tr=w-456",
      "Bolero PickUp",
      "Rs.8.12 - 8.38 Lakh*",
    ],
    car2: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Isuzu/D-Max/8430/1620644941293/front-left-side-47.jpg?tr=w-456",
      "ISUZU D-MAX",
      "Rs.16.98 - 24.49 Lakh*",
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
  return OneCarAllSpecs("yodha").then((data) => {
    return { joy: data.carspecs };
  });
};
export default Homee;
