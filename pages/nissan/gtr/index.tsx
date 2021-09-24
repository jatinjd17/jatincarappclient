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
import { GTR } from "../../../CarPicsUrl/CarPics";
import { TGTR } from "../../../CarPicsUrl/Thumbnails";
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
  // const CarPrice = "₹ 2.12 Crore";
  // const TopPic = GTR;
  // const CarName = "Nissan GTR";
  // const OnlyName = "GTR";
  // const ThumPic = TGTR;

  // const KeySpecification = [
  //   "₹ 2.12 Crore",
  //   "9 km/l",
  //   "3799 cc",
  //   "Automatic (Dual Clutch)",
  //   "Petrol",
  //   "4 Seater",
  //   "4,710 mm L x 1,895 mm W x 1,370 mm H",
  // ];

  // const SafetyFeatures = [
  //   "Seat Belt Warning",
  //   "Anti-Lock Braking System",
  //   "6 Airbags",
  //   "EBD",
  //   "Speed Alert",
  //   "Door Ajar Warning.",
  //   "Traction Control",
  //   "Vehicle Stability Control System",
  // ];

  // const VarientPetrol = {
  //   varient1: [
  //     "GT-R Sport",
  //     "3799 cc, Automatic (Dual Clutch), Petrol, 9 km/l",
  //     "₹ 2.12 Crore",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (3799 cc)", "Automatic (Dual Clutch)", "9 km/l"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "The handcrafted Nissan GT-R supercar is priced at Rs 2.12 crore (ex-showroom Noida). The GT-R packs a 3.8-litre V6 twin-turbocharged petrol, which puts out 570PS of max power at 6800rpm and 637Nm of peak torque. The engine is mated to a 6-speed dual-clutch transmission in an all-wheel-drive setup. The 2+2 seater GT-R sprints from 0-100kmph in less than 3 seconds and can hit a top speed of 315kmph. In terms of features, the Nissan GT-R packs six airbags, 20-inch alloys, Bose audio system with 11 speakers and black, red, ivory or tan leather seats & interior, among others. ",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Jaw-dropping performance. 570PS, V6 engine propels the car from 0-100kmph in 3 seconds!",
  //     "Impeccably engineered. One of the best handling cars money can buy.",
  //     "Value-for-money. Offers performance that can match the abilities of cars that cost twice as much.",
  //   ],
  //   cons: [
  //     "Owners may find it too silent.",
  //     "Premium, high-octane fuel required like most supercars. Limits usability in countries like India.",
  //     "Interior is functional. No wow factor for a car this expensive.",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Katsura Orange", "bg-red-600"],
  //   color2: ["Pearl Black", "bg-gray-800"],
  //   color3: ["Gun Metallic", "bg-gray-700"],
  //   color4: ["Ultimate Silver", "bg-gray-300"],
  //   color5: ["Daytona Blue", "bg-blue-800"],
  //   color6: ["Vibrant Red", "bg-red-800"],
  //   color7: ["Storm White", "bg-white-800"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 2.17 Crore",
  //     "9.52 kmpl",
  //     "4395 cc",
  //     "Automatic",
  //     "Petrol",
  //     "5 Seater",
  //     "4867 mm in length, 1907 mm in width and 1362 mm in height",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/47278/bmw-m8-right-front-three-quarter16.jpeg?q=85",
  //   ],
  //   comparisioncar2: [
  //     "₹ 2.07 Crore",
  //     "8 kmpl",
  //     "3996 cc",
  //     "Automatic",
  //     "Petrol",
  //     "5 Seater",
  //     "5,012 mm L x 1,998 mm W x 1,694 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/49294/rs-q8-exterior-right-front-three-quarter-5.jpeg?q=85",
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
  //     "What is the on road price of GT-R?",
  //     "The on-road price of GT-R in Delhi is ₹ 2.45 Crore. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between GT-R and M8?",
  //     "GT-R price starts at ₹ 2.12 Crore ex-showroom and It comes with 3799 cc engine. Whereas M8 price starts at ₹ 2.17 Crore ex-showroom and It comes with 4395 cc engine. Compare the two models to identify the best car for you.",
  //   ],
  //   question3: [
  //     "What is price of GT-R top model?",
  //     "Top model of GT-R is Sport and the ex-showroom for GT-R Sport is ₹ 2.12 Crore.",
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
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3A%2F%2Fcdni.autocarindia.com%2FExtraImages%2F20200623123243_Audi-RS7_Sportback.jpg&h=795&w=1200&c=0",
      "Audi RS7",
      "Rs.1.94 Cr*",
    ],
    car2: [
      "https://imgd.aeplcdn.com/642x336/cw/ec/19431/Maserati-GranTurismo-Exterior-138060.jpg?wm=0&q=85",
      "Maserati GranTurismo",
      "Rs.2.25 - 2.51 Cr*",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/28188/Lexus-LX-Exterior-96258.jpg?v=201711021421&q=85",
      "Lexus LX",
      "Rs.2.32 Cr*",
    ],
    car4: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/AMG-GT/7842/1609141333284/front-left-side-47.jpg",
      "Mercedes-Benz AMG GT",
      "Rs.2.63 Cr*",
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
        LinkCarName="gtr"
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
  return OneCarAllSpecs("gtr").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
