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
import { Gloster } from "../../../CarPicsUrl/CarPics";
import { TGloster } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";

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

  // const CompanyName = "MG";
  // const CarPrice = "₹ 29.98 Lakh";
  // const TopPic = Gloster;
  // const CarName = "MG Gloster";
  // const OnlyName = "Gloster";
  // const ThumPic = TGloster;

  // const KeySpecification = [
  //   "₹ 29.98 Lakh onwards",
  //   "12.35 kmpl",
  //   "1996 cc",
  //   "Automatic (Torque Converter)",
  //   "Diesel",
  //   "6 & 7 Seater",
  //   "4,985 mm L x 1,926 mm W x 1,867 mm H",
  // ];

  // const SafetyFeatures = [
  //   "2+2+2 (with 2nd row captain seats)",
  //   "12-Way Power-Adjustable Driver Seat.",
  //   "360 Degree Around View Camera.",
  //   "Automatic Emergency Braking (AEB)",
  //   "Blind Spot Detection (BSD)",
  //   "Driver Seat Heating.",
  //   "Co-Driver Seat Heating.",
  //   "Driver Fatigue Reminder System.",
  // ];

  // const VarientPetrol = {};

  // const VarientDiesel = {
  //   varient1: [
  //     "Super 7-Str",
  //     "1996 cc, Automatic, Diesel, 14.5 kmpl",
  //     "Rs.29.98 Lakh*",
  //   ],
  //   varient2: [
  //     "Smart 6-Str",
  //     "1996 cc, Automatic, Diesel, 14.5 kmpl",
  //     "Rs.32.38 Lakh*",
  //   ],
  //   varient3: [
  //     "Sharp 7-Str",
  //     "1996 cc, Automatic, Diesel, 12.4 kmpl",
  //     "Rs.35.78 Lakh*",
  //   ],
  //   varient4: [
  //     "Sharp 6-Str",
  //     "1996 cc, Automatic, Diesel, 12.4 kmpl",
  //     "Rs.35.78 Lakh*",
  //   ],
  //   varient5: [
  //     "Savvy 6-Str",
  //     "1996 cc, Automatic, Diesel, 12.4 kmpl",
  //     "Rs.37.28 Lakh*",
  //   ],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Diesel (1998 cc)", "Automatic", "20.65 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: MG has increased the prices of the Gloster by up to Rs 80,000. MG Gloster Price: The full-size SUV is priced from Rs 29.98 lakh to Rs 36.88 lakh (ex-showroom). MG Gloster Variants and Seating Capacity: MG offers the 6-seater version in three variants: Smart, Sharp and Savvy. The 7-seater layout is available in two variants: Super and Sharp. MG Gloster Powertrains: The Gloster gets two diesel engines: 2.0-litre turbo diesel (163PS/375Nm) and 2.0-litre twin-turbo diesel (218PS/480Nm). Both come mated to an 8-speed automatic transmission. While the 2.0-litre turbo-diesel engine is offered with a rear-wheel-drive setup, the 2.0-litre twin-turbo diesel motor gets four-wheel drive. MG Gloster Features: It comes with a 12.3-inch touchscreen infotainment system with Android Auto and Apple CarPlay, three-zone climate control with PM 2.5 filter, panoramic sunroof, and a 12-way adjustable driver seat with memory function. MG Gloster Safety: Safety features include adaptive cruise control, semi-parallel park assist, autonomous emergency braking, and lane keep assist. MG Gloster Rivals: The Gloster locks horns with the Toyota Fortuner, Mahindra Alturas G4, Ford Endeavour, Volkswagen Tiguan Allspace, and the Skoda Kodiaq.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Powerful twin-turbo diesel engine option",
  //     "Class-leading safety features including Autonomous Level 1 features",
  //     "Packed with comfort features",
  //     "Sets new segment benchmark in term of interior quality",
  //     "Comfortable third-row seating",
  //   ],
  //   cons: [
  //     "Fuel efficiency is mediocre for the twin-turbo engine variant",
  //     "Low-speed ride is a bit bumpy",
  //     "Fortuner and Endeavour diehards make this a very hard segment to crack",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Agate Red", "bg-red-800"],
  //   color2: ["Metal Black", "bg-gray-900"],
  //   color3: ["Metal Ash", "bg-gray-600"],
  //   color4: ["Warm White", "bg-white"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 33.81 Lakh Onwards",
  //     "12.9 kmpl",
  //     "1996 cc",
  //     "Automatic",
  //     "Diesel",
  //     "7 Seater",
  //     "4903 mm in length, 1869 mm in width and 1837 mm in height",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/37640/endeavour-exterior-right-front-three-quarter-149473.jpeg?q=85",
  //   ],
  //   comparisioncar2: [
  //     "₹ 30.36 Lakh onwards",
  //     "10.01 to 14.22 kmpl",
  //     "2694 to 2755 cc",
  //     "Manual & Automatic",
  //     "Petrol & Diesel",
  //     "7 Seater",
  //     "4,795 mm L x 1,855 mm W x 1,835 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg?q=85",
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
  //     "What is the on road price of Gloster?",
  //     "The on-road price of Gloster in Delhi starts at ‎₹ 35.12 Lakh and goes upto ‎₹ 43.11 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Gloster and Endeavour?",
  //     "Gloster price starts at ₹ 29.98 Lakh ex-showroom and It comes with 1996 cc engine. Whereas Endeavour price starts at ₹ 33.81 Lakh ex-showroom and It comes with 2198 cc engine. Compare the two models to identify the best car for you.",
  //   ],
  //   question3: [
  //     "What is price of Gloster top model?",
  //     "Top model of Gloster is Savvy 6 STR 2.0 Twin Turbo 4WD and the ex-showroom for Gloster Savvy 6 STR 2.0 Twin Turbo 4WD is ₹ 36.88 Lakh.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/37640/endeavour-exterior-right-front-three-quarter-149473.jpeg?q=85",
      "Endavour",
      "₹ 33.81 Lakh Onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg?q=85",
      "Fortuner",
      "₹ 30.36 Lakh onwards0",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/33266/alturas-g4-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Alturas G4",
      "₹ 28.77 Lakhonwards",
    ],
  };

  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/52565/hector-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Hector",
      "₹ 13.18 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45184/hector-plus-exterior-right-front-three-quarter-7.jpeg?q=85",
      "Hector Plus",
      "₹ 13.63 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39348/zs-ev-exterior-right-front-three-quarter-2.jpeg?q=85",
      "ZS EV",
      "₹ 21.00 Lakh onwards",
    ],
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/51940/zs-petrol-exterior-left-front-three-quarter.jpeg?q=85",
  //     "ZS Petrol",
  //     "₹ 10.00 - 17.00 Lakh",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/47333/mg-baojun-510-right-front-three-quarter0.jpeg?q=85",
  //     "MG Baojun 510",
  //     "₹ 11.00 - 15.00 Lakh",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/45347/mg-g10-left-side-view0.jpeg?q=85",
  //     "G10",
  //     "₹ 24.00 - 30.00 Lakh",
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
        LinkCarName="gloster"
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
  return OneCarAllSpecs("gloster").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
