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
import { Vento } from "../../../CarPicsUrl/CarPics";
import { TVento } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";

function Homee({ joy }) {
  const CompanyName = "Volkswagen";
  const CarPrice = "₹ 6.21 Lakh";
  const TopPic = Vento;
  const CarName = "Volkswagen Vento";
  const OnlyName = "Vento";
  const ThumPic = TVento;

  const KeySpecification = [
    "₹ 10.00 Lakh onwards",
    "16.35 to 17.69 kmpl",
    "999 cc",
    "Manual & Automatic (Torque Converter)",
    "Petrol",
    "5 Seater",
    "4,390 mm L x 1,699 mm W x 1,467 mm H",
  ];

  const SafetyFeatures = [
    "dual front airbags",
    "electronic stability control",
    "ABS",
    "EBD",
  ];

  const VarientPetrol = {
    varient1: [
      "1.0 TSI Comfortline",
      "999 cc, Manual, Petrol, 17.69 kmpl",
      "Rs.9.99 Lakh*",
    ],
    varient2: [
      "1.0 TSI Highline",
      "999 cc, Manual, Petrol, 17.69 kmpl",
      "Rs.9.99 Lakh*",
    ],
    varient3: [
      "1.0 TSI Highline AT",
      "999 cc, Automatic, Petrol, 16.35 kmpl",
      "Rs.12.49 Lakh*",
    ],
    varient4: [
      "1.0 TSI Highline Plus",
      "999 cc, Manual, Petrol, 17.69 kmpl",
      "Rs.12.52 Lakh*",
    ],
    varient5: [
      "1.0 TSI Highline Plus AT",
      "999  cc, Automatic, Petrol, 16.35 kmpl",
      "Rs.13.83 Lakh*",
    ],
  };

  const VarientDiesel = {};

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Volkswagen has launched the Turbo Edition of the Vento. Volkswagen Vento Price: The sedan is priced between Rs 8.69 lakh and Rs 13.68 lakh (ex-showroom). Volkswagen Vento Variants: It comes in four variants: Trendline, Comfortline, Highline, and Highline Plus. Volkswagen Vento Powertrains: Volkswagen provides the Vento with a 1.0-litre turbo-petrol engine that churns out 110PS and 175Nm. There is an option between a 6-speed manual and a 6-speed AT gearbox. Their claimed fuel efficiency figures are 17.69kmpl and 16.35kmpl respectively. Volkswagen Vento Features: It packs features like an auto AC with rear AC vents, auto-dimming IRVM, LED headlamps, reverse parking camera, and a 6.5-inch touchscreen infotainment system with Apple CarPlay and Android Auto. Volkswagen Vento Safety: Safety features on offer include up to four airbags, ABS with EBD, and rear parking sensors. Volkswagen Vento Rivals: The Vento goes up against the Honda City, Hyundai Verna, Maruti Suzuki Ciaz, Skoda Rapid, and the Toyota Yaris.",
  ];

  const ProsCons = {
    pros: [
      "Solid build quality",
      "Refined and powerful TSI powertrain",
      "Sporty handling",
    ],
    cons: [
      "Misses modern day features",
      "Doesn't look special anymore",
      "Just one USB charger in the cabin",
    ],
  };

  const Colorss = {
    color1: ["Lapiz Blue", "bg-blue-600"],
    color2: ["Carbon Steel", "bg-gray-400"],
    color3: ["Sunset Red", "bg-white"],
    color4: ["Toffee Brown", "bg-red-600"],
    color5: ["Reflex Silver", "bg-gray-800"],
    color6: ["Candy White", "bg-gray-800"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 11.19 Lakh",
      "17.8 to 24.1 kmpl",
      "1498 cc",
      "Manual & Automatic (CVT)",
      "Petrol & Diesel",
      "5 Seater",
      "4,549 mm L x 1,748 mm W x 1,489 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40535/all-new-city-exterior-right-front-three-quarter.jpeg?q=85",
    ],
    comparisioncar2: [
      "₹ 9.28 Lakh*",
      "17.7 to 25 kmpl",
      "998 to 1497 cc",
      "Manual, Automatic (CVT), Automatic (Torque Converter) & Automatic (Dual Clutch)",
      "Petrol & Diesel",
      "5 Seater",
      "4,440 mm L x 1,729 mm W x 1,475 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41197/hyundai-verna-right-front-three-quarter7.jpeg?q=85",
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
      "What is the on road price of Vento?",
      "The on-road price of Vento in Delhi starts at ‎₹ 11.29 Lakh and goes upto ‎₹ 16.06 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Vento and Rapid TSI?",
      "Vento price starts at ₹ 10.00 Lakh ex-showroom and It comes with 999 cc engine. Whereas Rapid TSI price starts at ₹ 7.80 Lakh ex-showroom and It comes with 999 cc engine",
    ],
    question3: [
      "What is the mileage of Volkswagen Vento?",
      "The Volkswagen Vento mileage is 16.35 - 17.69 kmpl.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40535/all-new-city-exterior-right-front-three-quarter.jpeg?q=85",
      "City",
      "Rs.31.99 Lakh Onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41197/hyundai-verna-right-front-three-quarter7.jpeg?q=85",
      "Verna",
      "₹ 9.28 Lakh*",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47562/skoda-rapid-tsi-right-front-three-quarter0.jpeg?q=85",
      "Rapid",
      "₹ 7.80 Lakh*",
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
        LinkCarName="vento"
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
  return OneCarAllSpecs("vento").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
