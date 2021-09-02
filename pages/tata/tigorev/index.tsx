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
import { TigorEV } from "../../../CarPicsUrl/CarPics";
import { TTigorEV } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";

function Homee({ joy }) {
  const CompanyName = "Tata";
  const CarPrice = "₹ 10.58 Lakh";
  const TopPic = TigorEV;
  const CarName = "Tata Tigor EV";
  const OnlyName = "Tigor EV";
  const ThumPic = TTigorEV;

  const KeySpecification = [
    "₹ 10.58 Lakh onwards",
    "142 Km/Full Charge",
    "40.23bhp@450rpm",
    "Automatic",
    "Electric",
    "4 Seater",
    "3,993 mm L x 1,677 mm W x 1,537 mm H",
  ];

  const SafetyFeatures = [
    "dual front airbags",
    "Antilock Braking System (ABS)",
    "Electronic Brake Distribution (EBD)",
    "Corner Stability Control (CSC)",
    "rear parking sensors",
    "Seat Belt Warning",
    "4 Star (Global NCAP)",
  ];

  const VarientPetrol = {
    varient1: [
      "XE Plus",
      "40.23bhp@450rpm, Automatic, Electric, 142 Km/Full Charge",
      "Rs.10.58 Lakh*",
    ],
    varient2: [
      "XM Plus",
      "40.23bhp@450rpm, Automatic, Electric, 142 Km/Full Charge",
      "Rs.10.75 Lakh*",
    ],
    varient3: [
      "XT Plus",
      "40.23bhp@450rpm, Automatic, Electric, 142 Km/Full Charge",
      "Rs.10.90 Lakh*",
    ],
  };

  const VarientDiesel = {};

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Tata Motors has launched an updated version of the Tigor EV in India, which can now also be bought by individuals. Read more about it here. Variants: Tata is offering the Tigor EV in three variants: XE+, XM+ and XT+. Price: The price of the Tata Tigor EV starts from Rs 9.44 lakh. This is for commercial buyers, after adjusting the government subsidy. For private buyers, the price starts from Rs 12.59 lakh and goes up to Rs 13.41 lakh depending upon where you stay. Powertrain: The Tigor EV now uses a 21.5kWh powertrain that drives a 72V 3-phase AC induction motor. The motor can make 41PS of max power and 105Nm of peak torque. Colours: The Tigor EV can be had in three colours only: Pearlescent White, Egyptian Blue and Roman Silver. Warranty: Tata Motors is offering a warranty package of 3 years / 1.25 lakh km on the Tigor EV.",
  ];

  const ProsCons = {
    pros: [
      "Harman Kardon infotainment system sounds crisp.",
      "Claimed range is more than enough for a daily commuter with overnight charging.",
      "Compact dimensions and space means it is the great first electric car for the family.",
    ],
    cons: [
      "Power to weight ratio dictates sluggish performance.",
      "Not enough range for intercity commutes without an additional charge.",
      "Steep price for a fairly basic sub-compact sedan.",
    ],
  };

  const Colorss = {
    color1: ["Roman Sliver", "bg-gray-600"],
    color2: ["Pearlescent White", "bg-white-400"],
    color3: ["Egyptian Blue", "bg-blue-500"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "Rs.10.15 - 10.49 Lakh",
      "110km",
      "41.5bhp@ 4000rpm",
      "Automatic",
      "Electric",
      "5 Seater",
      "4,247 mm L x 1,740 mm W x 1,540 mm H",
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/E-Verito/3526/1603712637421/front-left-side-47.jpg?imwidth=420&impolicy=resize",
    ],
    comparisioncar2: [
      "₹ 13.99 Lakh Onwards",
      "312 km/FullCharge",
      "129 PS and 245 Nm",
      "Automatic",
      "Electric",
      "5 Seater",
      "3,993 mm L x 1,811 mm W x 1,606 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/42611/tata-nexon-ev-right-front-three-quarter6.jpeg?q=85",
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
      "What is the on road price of Tigor EV?",
      "The on-road price of Tigor EV in Delhi starts at ‎₹ 10.13 Lakh and goes upto ‎₹ 10.45 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance ",
    ],
    question2: [
      "Which car is better between Tigor EV and Nexon EV?",
      "Tigor EV price starts at ₹ 10.58 Lakh ex-showroom and It comes with cc engine. Whereas Nexon EV price starts at ₹ 13.99 Lakh ex-showroom and It comes with cc engine. ",
    ],
    question3: [
      "What is the charging time required to fully charge the Tata Tigor EV?",
      "It takes 2 Hrs to fully charge the Tata Tigor EV.",
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
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/E-Verito/3526/1603712637421/front-left-side-47.jpg?tr=w-456",
      "Verito EV",
      "Rs.10.15 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39348/zs-ev-exterior-right-front-three-quarter-2.jpeg?q=85",
      "ZS EV",
      "₹ 21.00 Lakh Onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/29580/Hyundai-Kona-Electric-Right-Front-Three-Quarter-162185.jpg?wm=0&q=85",
      "Kona Electric",
      "₹ 23.79 Lakh onwards0",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/42611/tata-nexon-ev-right-front-three-quarter6.jpeg?q=85",
      "Nexon EV",
      "₹ 13.99 Lakh Onwards",
    ],
  };

  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41645/tata-nexon-right-front-three-quarter3.jpeg?q=85",
      "Nexon",
      "₹ 7.20 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32597/tata-altroz-right-front-three-quarter20.jpeg?q=85",
      "Altroz",
      "₹ 5.80 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40027/safari-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Safari",
      "₹ 14.99 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32958/tata-harrier-right-front-three-quarter58.jpeg?q=85",
      "Harrier",
      "₹ 14.30 Lakh onwards",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39345/tiago-exterior-right-front-three-quarter-6.jpeg?q=85",
      "Tiago",
      "₹ 5.00 Lakh onwards",
    ],
    car6: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41160/tata-tigor-right-front-three-quarter3.jpeg?q=85",
      "Tigor",
      "₹ 5.60 Lakh onwards",
    ],
    car7: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/42611/tata-nexon-ev-right-front-three-quarter6.jpeg?q=85",
      "Nexon EV",
      "₹ 13.99 Lakh onwards",
    ],
    car8: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40451/tata-tigor-ev-exterior-1.jpeg?q=85",
      "Tigor EV",
      "₹ 10.58 Lakh onwards",
    ],
    car9: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/99113/tiago-nrg-bs6-exterior-right-front-three-quarter.jpeg?isig=0&q=85",
      "Tiago NRG",
      "₹ 6.57 Lakh onwards",
    ],
  };

  const UpcommingCarBrand = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/39015/Tata-H2X-Exterior-170093.jpg?wm=0&q=85",
      "HBX",
      "₹ 5.00 - 8.00 Lakh",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/40453/Tata-Tiago-EV-Exterior-169932.jpg?wm=0&q=85",
      "Tiago EV",
      "₹ 5.00 - 7.00 Lakh",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/46800/tata-altroz-ev-left-side-view5.jpeg?q=85",
      "Altroz EV",
      "₹ 12.00 - 15.00 Lakh",
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
        LinkCarName="tigorev"
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
  return OneCarAllSpecs("tigorev").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
