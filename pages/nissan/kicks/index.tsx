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
import { Kicks } from "../../../CarPicsUrl/CarPics";
import { TKicks } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  MagniteBasicInfoCard,
  KicksBasicInfoCard,
  GTRBasicInfoCard,
} from "../../../AllCarBasicInfo/nissan";

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

  // const CompanyName = "Nissan";
  // const CarPrice = "₹ 9.50 Lakh";
  // const TopPic = Kicks;
  // const CarName = "Nissan Kicks";
  // const OnlyName = "Kicks";
  // const ThumPic = TKicks;

  // const KeySpecification = [
  //   "₹ 9.50 Lakh onwards",
  //   "13.9 to 15.8 kmpl",
  //   "1330 to 1498 cc",
  //   "Manual & Automatic (CVT)",
  //   "Petrol",
  //   "4 Seater",
  //   "4,384 mm L x 1,813 mm W x 1,669 mm H",
  // ];

  // const SafetyFeatures = [
  //   "Automatic Emergency Braking with Pedestrian Detection. Kicks looks out for what's ahead and for people crossing in front of you.",
  //   "Rear Automatic Braking. Save your bumper.",
  //   "Rear Cross Traffic Alert.",
  //   "Blind Spot Warning.",
  //   "Lane Departure Warning.",
  //   "High Beam Assist.",
  // ];

  // const VarientPetrol = {
  //   varient1: [
  //     "1.5 XL",
  //     "1498 cc, Manual, Petrol, 14.23 kmpl",
  //     "Rs.9.49 Lakh*",
  //   ],
  //   varient2: [
  //     "1.5 XV",
  //     "1498 cc, Manual, Petrol, 14.23 kmpl",
  //     "Rs.9.99 Lakh*",
  //   ],
  //   varient3: [
  //     "1.3 Turbo XV",
  //     "3799 cc, Manual, Petrol, 14.23 kmpl",
  //     "Rs.12.09 Lakh*",
  //   ],
  //   varient4: [
  //     "1.3 Turbo XV Pre",
  //     "3799 cc, Manual, Petrol, 14.23 kmpl",
  //     "Rs.12.99 Lakh*",
  //   ],
  //   varient5: [
  //     "1.3 Turbo XV CVT",
  //     "3799 cc, Automatic, Petrol, 14.23 kmpl",
  //     "Rs.13.94 Lakh*",
  //   ],
  //   varient6: [
  //     "1.3 Turbo XV Pre Option",
  //     "3799 cc, Manual, Petrol, 14.23 kmpl",
  //     "Rs.13.99 Lakh*",
  //   ],
  //   varient7: [
  //     "1.3 Turbo XV Pre Option DT",
  //     "3799 cc, Manual, Petrol, 14.23 kmpl",
  //     "Rs.14.19 Lakh*",
  //   ],
  //   varient8: [
  //     "1.3 Turbo XV Pre CVT",
  //     "3799 cc, Automatic, Petrol, 14.23 kmpl",
  //     "Rs.14.64 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (3799 cc)", "Automatic (Dual Clutch)", "14.23 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Nissan Kicks Price: Nissan has priced the Kicks from Rs 9.49 lakh to Rs 14.14 lakh (ex-showroom). Nissan Kicks Variants: The Kicks is available in three broad variants: XL, XV, and XV Premium. Nissan Kicks Seating Capacity: It comes in a 5-seater layout. Nissan Kicks Powertrains: Nissan offers the Kicks with two petrol engines: a 1.5-litre naturally aspirated unit (106PS/142Nm) mated to a 5-speed MT or a 1.3-litre turbo-petrol engine (156PS/254Nm) paired to either a 6-speed MT or CVT. Nissan Kicks Features: The Kicks is equipped with cruise control, auto AC, an 8-inch touchscreen with Apple CarPlay and Android Auto, and push-button start/stop. Nissan Kicks Safety: Safety features on offer include up to four airbags, ABS with EBD, and electronic stability control. Nissan Kicks Rivals: It locks horns with the Hyundai Creta, Kia Seltos, Renault Duster, Maruti Suzuki S-Cross, Skoda Kushaq and Volkswagen Taigun. If you are looking for a more rugged SUV, you can check out the Mahindra Scorpio.",
  // ];

  // const ProsCons = {
  //   pros: ["Quirky styling", "Loaded with features", "Pliant ride quality"],
  //   cons: [
  //     "Scarce dealer network.",
  //     "Lacks smart storage options.",
  //     "Slightly heavier clutch.",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Pearl White", "bg-white-600"],
  //   color2: ["Blade Silver", "bg-gray-800"],
  //   color3: ["Bronze Grey", "bg-gray-700"],
  //   color4: ["Deep Blue Pearl", "bg-blue-300"],
  //   color5: ["Night Shade", "bg-black-800"],
  //   color6: ["Fire Red", "bg-red-800"],
  //   color7: ["SPearl White/Onyx Black", "bg-white-800"],
  //   color8: ["Bronze Grey/Amber Orange", "bg-red-200"],
  //   color9: ["Fire Red/Onyx Black", "bg-red-800"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 14.30 Lakh Onwards",
  //     "14.63 to 16.35 kmpl",
  //     "1956 cc",
  //     "Manual & Automatic (Torque Converter)",
  //     "Diesel",
  //     "5 Seater",
  //     "4,598 mm L x 1,894 mm W x 1,706 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/32958/tata-harrier-right-front-three-quarter58.jpeg?q=85",
  //   ],
  //   comparisioncar2: [
  //     "₹ 13.63 Lakh onwards",
  //     "16.6 kmpl",
  //     "1451 to 1956 cc",
  //     "Manual & Automatic",
  //     "Petrol & Diesel",
  //     "6-7 Seater",
  //     "4,720 mm L x 1,835 mm W x 1,760 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/45184/hector-plus-exterior-right-front-three-quarter-7.jpeg?q=85",
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
  //     "What is the on road price of Kicks?",
  //     "The on-road price of Kicks in Delhi starts at ‎₹ 10.65 Lakh and goes upto ‎₹ 16.84 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Kicks and Duster?",
  //     "Kicks price starts at ₹ 9.50 Lakh ex-showroom and It comes with 1498 cc engine. Whereas Duster price starts at ₹ 9.84 Lakh ex-showroom and It comes with 1498 cc engine. Compare the two models to identify the best car for you.",
  //   ],
  //   question3: [
  //     "What is the mileage of Nissan Kicks?",
  //     "The Nissan Kicks mileage is 13.9 - 15.8 kmpl.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45184/hector-plus-exterior-right-front-three-quarter-7.jpeg?q=85",
      "Hector Plus",
      "₹ 13.63 Lakh onwards0",
    ],
    car3: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/6775/1584360708758/front-left-side-47.jpg?tr=w-456",
      "Creta",
      "Rs.10.16 Lakh onwards",
    ],
  };

  const ThatBrandCars = {
    car1: MagniteBasicInfoCard,
    car2: KicksBasicInfoCard,
    car3: GTRBasicInfoCard,
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Nissan/Nissan-X-Trail/3718/1568357284267/front-left-side-47.jpg?tr=w-456",
  //     "Nissan X-Trail",
  //     "Rs.22.60 Lakh*",
  //   ],
  //   car2: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Nissan/Nissan-Sunny-2020/6887/1555329555708/front-left-side-47.jpg?tr=w-456",
  //     "Nissan Sunny 2021",
  //     "Rs.8.50 Lakh*",
  //   ],
  //   car3: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Nissan/Nissan-Leaf/1351/1550722575097/front-left-side-47.jpg?tr=w-456",
  //     "Nissan Leaf",
  //     "Rs.30.00 Lakh",
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
        LinkCarName="kicks"
      />
      <Nav />

      <MobileSideBar isToggleName={isToggleName} handleactive={handleactive} />

      <div className="grid grid-cols-10">
        <SideBar isToggleName={isToggleName} handleactive={handleactive} />

        <div className="col-span-10 sm:col-span-10 2xl:ml-40 md:ml-0">
          <StartingBox
            CarName={CarName}
            TopPic={TopPic}
            OnlyName={OnlyName}
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
  return OneCarAllSpecs("kicks").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
