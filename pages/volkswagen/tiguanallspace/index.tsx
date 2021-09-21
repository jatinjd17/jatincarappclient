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
import { Tiguan } from "../../../CarPicsUrl/CarPics";
import { TTiguan } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  PoloBasicInfoCard,
  TrocBasicInfoCard,
  VentoBasicInfoCard,
  TiguanBasicInfoCard,
} from "../../../AllCarBasicInfo/volkswagen";

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

  // const CompanyName = "Volkswagen";
  // const CarPrice = "₹ 34.19 Lakh";
  // const TopPic = Tiguan;
  // const CarName = "Volkswagen Tiguan";
  // const OnlyName = "Tiguan";
  // const ThumPic = TTiguan;

  // const KeySpecification = [
  //   "₹ ₹ 34.19 Lakh onwards",
  //   "10.87 kmpl",
  //   "1984 cc",
  //   "Automatic (Dual Clutch)",
  //   "Petrol",
  //   "7 Seater",
  //   "4701 mm L x 1839 mm W x 1674 mm H",
  // ];

  // const SafetyFeatures = [
  //   "7 Airbags",
  //   "Ventilated Front Disc Brakes",
  //   "Central Locking",
  //   "high mounted third Brake Light",
  //   "Height Adjustable Front head restraints",
  //   "Electronic anti-theft Immobiliser",
  // ];

  // const VarientPetrol = {
  //   varient1: [
  //     "2.0 TSI",
  //     "1984 cc, Automatic, Petrol, 10.87 kmpl",
  //     "₹ 34.19 Lakh",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: Volkswagen has increased the price of the Tiguan Allspace SUV. Volkswagen Tiguan Allspace Variant and Price: It is available only in a single fully-loaded variant priced at Rs 33.24 lakh (ex-showroom India). Volkswagen Tiguan Allspace Seating Capacity: Volkswagen offers the SUV in a 7-seater layout. Volkswagen Tiguan Allspace Powertrain: The 7-seater Tiguan comes with a 2.0-litre turbo-petrol engine that develops 190PS and 320Nm. This unit comes paired to a 7-speed DSG transmission option. Volkswagen offers the Tiguan Allspace with all-wheel drive (AWD). Volkswagen Tiguan Allspace Features: Features on offer include a digital driver’s display, connected car tech, a panoramic sunroof, three-zone climate control, and powered front seats. Volkswagen Tiguan Allspace Safety: The Tiguan Allspace gets seven airbags, electronic stability control (ESC), and hill descent control. Volkswagen Tiguan Allspace Rivals: It goes up against the likes of the Ford Endeavour, Toyota Fortuner, Mahindra Alturas G4, Isuzu MU-X and the upcoming Skoda Kodiaq Petrol.",
  // ];

  // const ProsCons = {
  //   pros: ["Build quality", "Driving pleasure", "Loaded with features"],
  //   cons: [
  //     "Expensive",
  //     "Third-row isn’t roomy",
  //     "Fantastic 2.0L diesel not offered ",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Pyrite Silver", "bg-blue-600"],
  //   color2: ["Pure White", "bg-gray-400"],
  //   color3: ["Ruby Red Metallic", "bg-white"],
  //   color4: ["Deep Black Pearl", "bg-red-600"],
  //   color5: ["Petroleum Blue", "bg-gray-800"],
  //   color6: ["Platinum Grey Metallic", "bg-gray-800"],
  //   color7: ["Habanero Orange Metallic", "bg-gray-800"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 33.00 Lakh onwards",
  //     "16.25 kmpl",
  //     "1968 cc",
  //     "Automatic",
  //     "Diesel",
  //     "5 Seater",
  //     "length of 4700, width of 1882 and a height of 1680",
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/24294/Skoda-Kodiaq-Right-Front-Three-Quarter-108846.jpg?v=201711021421&q=85",
  //   ],
  //   comparisioncar2: [
  //     "₹ 21.35 Lakh onwards",
  //     "17.85 kmpl",
  //     "1498 cc",
  //     "Automatic",
  //     "Petrol",
  //     "5 Seater",
  //     "4,234 mm L x 1,819 mm W x 1,573 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/55747/t-roc-exterior-right-front-three-quarter-3.jpeg?q=85",
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
  //     "What is the on road price of Tiguan AllSpace?",
  //     "The on-road price of Tiguan AllSpace in Delhi is ₹ 39.9 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Tiguan AllSpace and T-Roc?",
  //     "Tiguan AllSpace price starts at ₹ 34.19 Lakh ex-showroom and It comes with 1984 cc engine. Whereas T-Roc price starts at ₹ 21.35 Lakh ex-showroom and It comes with 1498 cc engine.",
  //   ],
  //   question3: [
  //     "What is the mileage of Volkswagen Tiguan AllSpace?",
  //     "The Volkswagen Tiguan AllSpace mileage is 10.87 kmpl.",
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
      "https://imgd.aeplcdn.com/664x374/cw/ec/24294/Skoda-Kodiaq-Right-Front-Three-Quarter-108846.jpg?v=201711021421&q=85",
      "Kodiaq",
      "₹ 33.00 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/55747/t-roc-exterior-right-front-three-quarter-3.jpeg?q=85",
      "T-Roc",
      "₹ 21.35 Lakh onwards0",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/37640/endeavour-exterior-right-front-three-quarter-149473.jpeg?q=85",
      "Endavour",
      "₹ 33.81 Lakh Onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/33266/alturas-g4-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Alturas G4",
      "₹ 28.77 Lakhonwards",
    ],
  };

  const ThatBrandCars = {
    car1: PoloBasicInfoCard,
    car2: TrocBasicInfoCard,
    car3: VentoBasicInfoCard,
    car4: TiguanBasicInfoCard,
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/45057/taigun-exterior-right-front-three-quarter-2.jpeg?q=85",
  //     "Taigun",
  //     "₹ 10.00 - 16.00 Lakh",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/53123/tiguan-exterior-right-front-three-quarter-4.jpeg?q=85",
  //     "Tiguan",
  //     "₹ 28.00 - 32.00 Lakh",
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
        LinkCarName="tiguanallspace"
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
  return OneCarAllSpecs("tiguan").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
