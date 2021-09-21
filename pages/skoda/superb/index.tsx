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
import { Superb } from "../../../CarPicsUrl/CarPics";
import { TSuperb } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  RapidBasicInfoCard,
  OctaviaBasicInfoCard,
  SuperbBasicInfoCard,
  KushaqBasicInfoCard,
} from "../../../AllCarBasicInfo/skoda";

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

  // const CompanyName = "Skoda";
  // const CarPrice = "₹ 32.02 Lakh";
  // const TopPic = Superb;
  // const CarName = "Skoda Superb";
  // const OnlyName = "Superb";
  // const ThumPic = TSuperb;

  // const KeySpecification = [
  //   "₹ 32.02 Lakh onwards",
  //   "15.81 kmpl",
  //   "1984 cc",
  //   "Automatic",
  //   "Petrol",
  //   "5 Seater",
  //   "4,869 mm L x 1,864 mm W x 1,469 mm H",
  // ];

  // const SafetyFeatures = [
  //   "dual front airbags",
  //   "electronic stability control",
  //   "ABS",
  //   "EBD",
  //   "multi-collision braking",
  //   "electronic differential lock system",
  //   "anti-slip regulation",
  //   " motor slip regulation",
  //   "rollover protection",
  //   "brake disc wiping",
  //   "reverse parking sensors",
  // ];

  // const VarientPetrol = {
  //   varient1: [
  //     "New Sportline",
  //     "1984 cc, Automatic, Petrol, 15.81 kmpl",
  //     "Rs.31.99 Lakh*",
  //   ],
  //   varient2: [
  //     "New Laurin & klement",
  //     "1984 cc, Automatic, Petrol, 15.81 kmpl",
  //     "Rs.34.99 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1330 cc)", "Automatic (Dual Clutch)", "16.42 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Skoda Superb Price: Skoda has priced the Superb between Rs 31.99 lakh and Rs 34.99 lakh (ex-showroom pan-India). Skoda Superb Variants: The Superb is sold in two variants: Sportline and Laurin & Klement. Skoda Superb Engine and Transmission: The Superb is powered by a 2-litre turbocharged petrol engine (190PS/320Nm), mated to a 7-speed DSG (dual-clutch automatic). Skoda Superb Features: It is equipped with a 360-degree camera, wireless Apple CarPlay and Android Auto, adaptive LED headlamps, and a wireless charger. Other features include three-zone climate control, a panoramic sunroof, and 12-way electrically adjustable and ventilated front seats. Skoda Superb Safety: Skoda has provided the Superb with eight airbags, front and rear parking sensors, electronic stability control (ESC), hill brake assist, hill hold control, and tyre pressure monitoring. Skoda Superb Rivals: The Toyota Camry Hybrid is the Superb’s only rival.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Edgy new styling is appealing",
  //     "Plenty of luxury and comfort features to keep all occupants pampered.",
  //     "Powerful petrol engine.",
  //   ],
  //   cons: [
  //     "No petrol manual option to give it a competitive starting price.",
  //     "Steep pricing ",
  //     "No diesel engine option",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Business Grey", "bg-gray-600"],
  //   color2: ["Moon White", "bg-white-800"],
  //   color3: ["Magnetic Brown", "bg-brown-700"],
  //   color4: ["Magic Black", "bg-gray-900"],
  //   color5: ["Lava Blue", "bg-blue-600"],
  //   color6: ["Steel Grey", "bg-gray-900"],
  //   color7: ["Race Blue", "bg-blue-900"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 26.01 Lakh",
  //     "15.81 kmpl",
  //     "1984 cc",
  //     "Automatic",
  //     "Petrol",
  //     "5 Seater",
  //     "4,689 mm L x 1,469 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/40371/octavia-exterior-right-front-three-quarter-2.jpeg?q=85",
  //   ],
  //   comparisioncar2: [
  //     "Rs.17.86 - 21.13 Lakh*",
  //     "14.59 - 14.62 kmpl",
  //     "1493 cc - 1999 cc",
  //     "Manual & Automatic",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "4,620 mm L x 1,800 mm W x 1,465 mm H",
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Elantra/7168/1595226914508/front-left-side-47.jpg?tr=w-456",
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
  //     "What is the on road price of Superb?",
  //     "The on-road price of Superb in Delhi starts at ‎₹ 36.96 Lakh and goes upto ‎₹ 40.38 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Superb and Octavia?",
  //     "Superb price starts at ₹ 32.02 Lakh ex-showroom and It comes with 1984 cc engine. Whereas Octavia price starts at ₹ 26.01 Lakh ex-showroom and It comes with 1984 cc engine. Compare the two models to identify the best car for you.",
  //   ],
  //   question3: [
  //     "What are the offers available on Skoda Superb for August?",
  //     "There are 3 Skoda Superb offers in Delhi for the month of August",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40371/octavia-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Octavia",
      "Rs.26.01 Lakh Onwards",
    ],
    car2: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Elantra/7168/1595226914508/front-left-side-47.jpg?tr=w-456",
      "Elantra",
      "Rs.17.86 - 21.13 Lakh*",
    ],
  };

  const ThatBrandCars = {
    car1: RapidBasicInfoCard,
    car2: OctaviaBasicInfoCard,
    car3: SuperbBasicInfoCard,
    car4: KushaqBasicInfoCard,
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/41784/Skoda-Kamiq-Exterior-170110.jpg?wm=0&q=85",
  //     "Skoda Kamiq",
  //     "₹ 15.00 - 20.00 Lakh",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/49051/kodiaq-petrol-bs6-exterior-left-front-three-quarter.jpeg?q=85",
  //     "Skoda Kodiaq Petrol BS6",
  //     "₹ 33.00 - 36.00 Lakh",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/44088/skoda-new-rapid-exterior-0.jpeg?q=85",
  //     "Skoda New Rapid",
  //     "₹ 9.00 - 12.00 Lakh",
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
        LinkCarName="superb"
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
  return OneCarAllSpecs("superb").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
