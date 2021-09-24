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
  // const CarPrice = "Rs.8.09 - 8.35 Lakh*";
  // const TopPic =
  //   "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Bolero-Pik-Up/7230/1573280100232/front-left-side-47.jpg?imwidth=420&impolicy=resize";
  // const CarName = "Mahindra Bolero Pickup";
  // const OnlyName = "Bolero Pickup";

  // const KeySpecification = [
  //   "Rs.8.09 - 8.35 Lakh*",
  //   "13 kmpl",
  //   "2523 cc",
  //   "Manual",
  //   "Diesel",
  //   "2 Seater",
  //   "5215 mm i x 1700 mm x 1865 mm h",
  // ];

  // const SafetyFeatures = [
  //   "A driver’s side airbag",

  //   "Rear parking sensors",

  //   "Seatbelt reminders for the driver and front passenger",

  //   "A speed warning system (at 80kmph and 120kmph)",

  //   "A manual override for the central locking system",
  // ];

  // const VarientPetrol = {};

  // const VarientDiesel = {
  //   varient1: [
  //     "CBC 1.7T",
  //     "2523 cc, Manual, Diesel, 13.0 kmpl",
  //     "Rs.8.09 Lakh*",
  //   ],
  //   varient2: [
  //     "FB 1.25T",
  //     "2523 cc, Manual, Diesel, 13.0 kmpl",
  //     "Rs.8.32 Lakh*",
  //   ],
  //   varient3: [
  //     "FB 1.7T",
  //     "2523 cc, Manual, Diesel, 13.0 kmpl",
  //     "Rs.8.35 Lakh*",
  //   ],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "23.26 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "The Mahindra Bolero Pik-Up is the most popular light commercial vehicle in India as well as the highest-selling model in this category. This single product has established Mahindra as a formidable player in the fast-growing last-mile delivery segment in India. This segment has been growing rapidly over the last several years due to the rising demand for goods and services in both urban and semi-urban areas. The Bolero Pik-Up has been designed and developed considering all sizes of shipments. It also offers enough power delivered by a modern engine, besides greater mileage and higher durability. M&M has expanded the Bolero Pik-Up range to cater to mass markets by targeting several applications and payload needs in last-mile transportation. Hence, it comes in several variants: Bolero Pik up Extralong 1.25T, Bolero Pik up Extralong 1.7T, Bolero Pik up Extrastrong 1.3T, Bolero Pik up Extrastrong 1.5T -- all of which feature a flatbed.  All the Mahindra Bolero Pik-Ups are powered by m2DiCR 4 cylinder, 2.5L TB, DI, Turbo charged, 2,523cc engine with 70hp@3200 rpm and 200Nm (20.39 kgm) @ 1400-2200 rpm, 63 hp @2200 rpm 195 Nm (19.38 kgm) @ 1400-2200 rpm. Growing in popularity among first-time buyers and transport entrepreneurs, Bolero Pik-Up comes with superior performance. It features higher payloads, longest cargo body, stronger aggregates including suspensions and tyres and modern contemporary cabin with high ergonomics and driver convenience.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Tough built quality. Hard to damage.",
  //     "Built to take punishment",
  //     "Ride quality soft to suit no road conditions",
  //   ],
  //   cons: ["Noisy cabin", "Utilitarian layout", "Bare bone features"],
  // };

  // const Colorss = {
  //   color1: ["White", "bg-blue-600"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "Rs.6.94 - 7.49 Lakh*",
  //     "14km/l",
  //     "2956 cc",
  //     "Manual",
  //     "Diesel",
  //     "2 Seater",
  //     "length of 2825mm, width of 1860mm and a wheelbase of 2825mm",
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Yodha-Pickup/7624/1609147376028/front-left-side-47.jpg?tr=w-456",
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
  //     "What is the on road price of Bolero Pickup?",
  //     "The on-road price of Bolero in Delhi starts at ‎₹ 9.9 Lakh and goes upto ‎₹ 10.6 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "What are the safety features of bolero pickup?",
  //     "A driver’s side airbag, rear parking sensor",
  //   ],
  //   question3: [
  //     "What is the mileage of Mahindra Bolero?",
  //     "The Mahindra Bolero mileage is 13.0 kmpl.",
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
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Yodha-Pickup/7624/1609147376028/front-left-side-47.jpg?tr=w-456",
      "Yodha",
      "Rs.6.94 - 7.49 Lakh*",
      "tata",
    ],
    car2: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Isuzu/D-Max/8430/1620644941293/front-left-side-47.jpg?tr=w-456",
      "D-Max",
      "Rs.16.98 - 24.49 Lakh*",
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
  return OneCarAllSpecs("boleropickup").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
