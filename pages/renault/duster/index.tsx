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
import { Duster } from "../../../CarPicsUrl/CarPics";
import { TDuster } from "../../../CarPicsUrl/Thumbnails";
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

  // const CompanyName = "Renault";
  // const CarPrice = "₹ 9.84 Lakh";
  // const TopPic = Duster;
  // const CarName = "Renault Duster";
  // const OnlyName = "Duster";
  // const ThumPic = TDuster;

  // const KeySpecification = [
  //   "₹ 9.84 Lakh onwards",
  //   "14.19 to 16.5 kmpl",
  //   "1330 to 1498 cc",
  //   "Manual & Automatic (CVT)",
  //   "Petrol",
  //   "4 Seater",
  //   "4,384 mm L x 1,813 mm W x 1,669 mm H",
  // ];

  // const SafetyFeatures = [
  //   "ABS (Anti-Lock Braking System)",
  //   "EBD (Electronic BrakeForce Distribution)",
  //   "brake assist",
  // ];

  // const VarientPetrol = {
  //   varient1: ["RXS", "1330 cc, Manual, Petrol, 16.42 kmpl", "Rs.9.86 Lakh*"],
  //   varient2: ["RXZ", "1330 cc, Manual, Petrol, 16.42 kmpl", "Rs.10.46 Lakh*"],
  //   varient3: [
  //     "RXE Turbo",
  //     "1330 cc, Manual, Petrol, 16.42 kmpl",
  //     "Rs.11.27 Lakh*",
  //   ],
  //   varient4: [
  //     "RXS Turbo",
  //     "1330 cc, Manual, Petrol, 16.42 kmpl",
  //     "Rs.12.05 Lakh*",
  //   ],
  //   varient5: [
  //     "RXZ Turbo",
  //     "1330 cc, Manual, Petrol, 16.42 kmpl",
  //     "Rs.12.65 Lakh*",
  //   ],
  //   varient6: [
  //     "RXS Turbo CVT",
  //     "1330 cc, Automatic, Petrol, 16.42 kmpl",
  //     "Rs.13.65 Lakh*",
  //   ],
  //   varient7: [
  //     "RXZ Turbo CVT",
  //     "1330 cc, Automatic, Petrol, 16.42 kmpl",
  //     "Rs.14.25 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1330 cc)", "Automatic (Dual Clutch)", "16.42 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: The Duster is carrying discounts of up to Rs 65,000 this July. Renault Duster Price: The compact SUV retails between Rs 9.86 lakh and Rs 14.25 lakh (ex-showroom Delhi). Renault Duster Variants: While the standard Duster is sold in two variants (RXS and RXZ), the Duster Turbo is available in three (RXE, RXS, and RXZ). Renault Duster Seating Capacity: The Renault Duster can accommodate up to five people. Renault Duster Powertrains: The Duster gets two engine options: a 1.5-litre petrol unit (106PS/142Nm), mated to a 5-speed MT and a 1.3-litre turbo-petrol motor (156PS/254Nm), paired with a 6-speed MT and an optional 7-step CVT. Renault Duster Features: The Duster is equipped with a 7-inch touchscreen infotainment system with Android Auto and Apple CarPlay, a 6-speaker Arkamys sound system, and auto climate control with rear AC vents. It also comes with projector headlamps with DRLs, engine idle-stop/start, and cabin pre-cooling (with the key fob). Renault Duster Safety: Standard safety features include dual front airbags, ABS with EBD, rear parking sensors, and front seat belt reminders. ESP and hill start assist are available in the higher variants. Renault Duster Rivals: The Duster competes with the Skoda Kushaq, Hyundai Creta, Kia Seltos, Nissan Kicks, Maruti Suzuki S-Cross, and Volkswagen Taigun. If you are looking for a similarly priced alternative, you can also consider the Mahindra Scorpio.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Most powerful SUV in the segment",
  //     "Convenience of a CVT automatic.available as an option",
  //     "Gets new convenience features along with the engine upgrade",
  //   ],
  //   cons: [
  //     "New turbo-petrol engine costs up to Rs 2 lakh more over the regular Duster",
  //     "Cabin quality is not on par with the competition",
  //     "Ergonomic issues start to spoil the experience over time.",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Caspian Blue", "bg-blue-600"],
  //   color2: ["Mahogany Brown", "bg-brown-800"],
  //   color3: ["Cayenne Orange", "bg-red-700"],
  //   color4: ["Moonlight Silver", "bg-gray-300"],
  //   color5: ["Slate Grey", "bg-gray-800"],
  //   color6: ["Outback Bronze", "bg-gray-800"],
  //   color7: ["Pearl White", "bg-white-800"],
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
  //     "What is the on road price of Duster?",
  //     "The on-road price of Duster in Delhi starts at ‎₹ 11.08 Lakh and goes upto ‎₹ 16.58 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Duster and Kicks?",
  //     "Duster price starts at ₹ 9.84 Lakh ex-showroom and It comes with 1498 cc engine. Whereas Kicks price starts at ₹ 9.50 Lakh ex-showroom and It comes with 1498 cc engine. Compare the two models to identify the best car for you.",
  //   ],
  //   question3: [
  //     "What is price of Duster top model?",
  //     "Top model of Duster is RXZ 1.3 Turbo Petrol CVT and the ex-showroom for Duster RXZ 1.3 Turbo Petrol CVT is ₹ 14.25 Lakh.",
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
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/48543/kwid-exterior-right-front-three-quarter-17.jpeg?q=85",
      "Kwid",
      "₹ 3.31 Lakh",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39276/triber-exterior-right-front-three-quarter-168563.jpeg?q=85",
      "Triber",
      "₹ 5.49 Lakh",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/44407/kiger-exterior-right-front-three-quarter-12.jpeg?q=85",
      "Kiger",
      "₹ 5.64 Lakh",
    ],
    car4: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Duster/7704/1598257607089/front-left-side-47.jpg?tr=w-456",
      "Duster",
      "₹ 9.84 Lakh",
    ],
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Zoe/6278/1581400662093/front-left-side-47.jpg?tr=w-456",
  //     "Renault Zoe",
  //     "Rs.8.00 Lakh*",
  //   ],
  //   car2: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Renault-Kwid-EV/6214/1555414583232/front-left-side-47.jpg?tr=w-456",
  //     "Renault K-ZE",
  //     "Rs.10.00 Lakh*",
  //   ],
  //   car3: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Renault-Arkana/6573/front-left-side-47.jpg?tr=w-456",
  //     "Renault Arkana",
  //     "Rs.10.00 Lakh",
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
        LinkCarName="duster"
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
  return OneCarAllSpecs("duster").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
