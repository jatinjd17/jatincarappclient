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
import { Troc } from "../../../CarPicsUrl/CarPics";
import { TTroc } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";

function Homee({ joy }) {
  const CompanyName = "Volkswagen";
  const CarPrice = "₹ 21.35 Lakh";
  const TopPic = Troc;
  const CarName = "Volkswagen T-Roc";
  const OnlyName = "T-Roc";
  const ThumPic = TTroc;

  const KeySpecification = [
    "₹ ₹ 21.35 Lakh onwards",
    "17.85 kmpl",
    "1498 cc",
    "Automatic",
    "Petrol",
    "5 Seater",
    "4,234 mm L x 1,819 mm W x 1,573 mm H",
  ];

  const SafetyFeatures = [
    "6 Airbags",
    "Ventilated Front Disc Brakes",
    "Central Locking",
    "high mounted third Brake Light",
    "Height Adjustable Front head restraints",
    "Electronic anti-theft Immobiliser",
  ];

  const VarientPetrol = {
    varient1: [
      "1.5 TSI",
      "1498 cc, Automatic, Petrol, 17.85 kmpl",
      "₹ 21.35 Lakh",
    ],
  };

  const VarientDiesel = {};

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Volkswagen has started accepting bookings for the 2021 T-Roc. We took the SUV for a drive recently, and here’s what we think about it. Volkswagen T-Roc Price: The 2021 T-Roc is priced at Rs 21.35 lakh (ex-showroom). Volkswagen T-Roc Seating Capacity: It gets a 5-seater layout. Volkswagen T-Roc Powertrains: Volkswagen will continue to offer the SUV with the same 1.5-litre TSI petrol engine that puts out 150PS and 250Nm, mated to a 7-speed DSG unit. It comes with a front-wheel drivetrain. Volkswagen T-Roc Features: In terms of features, the SUV comes with an 8-inch touchscreen infotainment system with Android Auto and Apple CarPlay, a 6-speaker sound system, dual-zone climate control, heated front seats, and a panoramic sunroof. Volkswagen T-Roc Safety: Safety features include six airbags, ABS with EBD, and electronic stability control (ESC). Volkswagen T-Roc Rivals: It will continue to take on the Jeep Compass and Skoda Karoq. However, in terms of size, it also takes on the Kia Seltos and Hyundai Creta.",
  ];

  const ProsCons = {
    pros: [
      "Refined engine and smooth suspension setup",
      "Smart styling and strong build quality",
      "Touchscreen system feels premium and easy to use",
    ],
    cons: [
      "No diesel option",
      "Misses must-haves like cruise control and wireless charging",
      "immoderate usage of hard plastics inside the cabin",
    ],
  };

  const Colorss = {
    color1: ["Kurkuma Yellow", "bg-blue-600"],
    color2: ["Ravenna Blue", "bg-gray-400"],
    color3: ["Indium Grey", "bg-white"],
    color4: ["Flash Red", "bg-red-600"],
    color5: ["Pure white", "bg-gray-800"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 14.30 Lakh Onwards",
      "14.63 to 16.35 kmpl",
      "1956 cc",
      "Manual & Automatic (Torque Converter)",
      "Diesel",
      "5 Seater",
      "4,598 mm L x 1,894 mm W x 1,706 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32958/tata-harrier-right-front-three-quarter58.jpeg?q=85",
    ],
    comparisioncar2: [
      "₹ 13.63 Lakh onwards",
      "16.6 kmpl",
      "1451 to 1956 cc",
      "Manual & Automatic",
      "Petrol & Diesel",
      "6-7 Seater",
      "4,720 mm L x 1,835 mm W x 1,760 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45184/hector-plus-exterior-right-front-three-quarter-7.jpeg?q=85",
    ],
  };

  const HighlightedFeatures = {
    feature1: [
      "https://stimg.cardekho.com/images/carinteriorimages/930x620/Maruti/Baleno/6778/1615985207322/interior-image-209.jpg?imwidth=480",
      "Stylish Interiors",
      "",
    ],
    feature2: [
      "https://image.shutterstock.com/image-photo/car-door-lock-knob-children-260nw-1514746379.jpg",
      "Rear Door Child Lock",
      "",
    ],
    feature3: [
      "https://stimg.cardekho.com/images/carinteriorimages/630x420/Maruti/Alto-800/7075/1594805410865/airbags-94.jpg?tr=w-360",
      "2 Airbags",
      "",
    ],
  };

  const faqs = {
    question1: [
      "What is the on road price of T-Roc?",
      "The on-road price of T-Roc in Delhi is ₹ 24.93 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between T-Roc and Tiguan AllSpace?",
      "T-Roc price starts at ₹ 21.35 Lakh ex-showroom and It comes with 1498 cc engine. Whereas Tiguan AllSpace price starts at ₹ 34.19 Lakh ex-showroom and It comes with 1984 cc engine.",
    ],
    question3: [
      "What is the mileage of Volkswagen T-Roc?",
      "The Volkswagen T-Roc mileage is 17.85 kmpl.",
    ],
  };

  const articles = {
    article1: [
      "/kushaq.png",
      "Rath Yatra 2021: About 60 Skoda Kushaq SUVs To Be Delivered In Ahmedabad",
    ],
    article2: [
      "/kushaq.png",
      "Rath Yatra 2021: About 60 Skoda Kushaq SUVs To Be Delivered In Ahmedabad",
    ],
    article3: [
      "/kushaq.png",
      "Rath Yatra 2021: About 60 Skoda Kushaq SUVs To Be Delivered In Ahmedabad",
    ],
  };

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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Polo",
      "₹ 6.21 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/55747/t-roc-exterior-right-front-three-quarter-3.jpeg?q=85",
      "T-Roc",
      "₹ 21.35 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/26563/Volkswagen-Vento-Right-Front-Three-Quarter-169094.jpg?wm=0&q=85",
      "Vento",
      "₹ 10.00 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45290/volkswagen-tiguan-allspace-right-front-three-quarter54.jpeg?q=85",
      "Tiguan Allspace",
      "₹ 34.19 Lakh onwards",
    ],
  };

  const UpcommingCarBrand = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45057/taigun-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Taigun",
      "₹ 10.00 - 16.00 Lakh",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/53123/tiguan-exterior-right-front-three-quarter-4.jpeg?q=85",
      "Tiguan",
      "₹ 28.00 - 32.00 Lakh",
    ],
  };

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
        LinkCarName="t-roc"
      />
      <Nav />

      <MobileSideBar isToggleName={isToggleName} handleactive={handleactive} />

      <div className="grid grid-cols-10">
        <SideBar isToggleName={isToggleName} handleactive={handleactive} />

        <div className="col-span-10 sm:col-span-10 2xl:ml-40 md:ml-0">
          <StartingBox
            OnlyName="Troc"
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
  return OneCarAllSpecs("troc").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
