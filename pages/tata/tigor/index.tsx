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
import { Tigor } from "../../../CarPicsUrl/CarPics";
import { TTigor } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  NexonBasicInfoCard,
  AltrozBasicInfoCard,
  SafariBasicInfoCard,
  HarrierBasicInfoCard,
  TiagoBasicInfoCard,
  TigorBasicInfoCard,
  NexonEVBasicInfoCard,
  TigorEVBasicInfoCard,
  TiagoNRGBasicInfoCard,
} from "../../../AllCarBasicInfo/tata";

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

  // const CompanyName = "Tata";
  // const CarPrice = "₹ 5.65 Lakh";
  // const TopPic = Tigor;
  // const CarName = "Tata Tigor";
  // const OnlyName = "Tigor";
  // const ThumPic = TTigor;

  // const KeySpecification = [
  //   "₹ 5.65 Lakh onwards",
  //   "20.3 kmpl",
  //   "1199 cc",
  //   "Manual & AMT",
  //   "Petrol",
  //   "4 Seater",
  //   "3993 mm in length, 1677 mm in width and 1532 mm in height",
  // ];

  // const SafetyFeatures = [
  //   "dual front airbags",
  //   "Antilock Braking System (ABS)",
  //   "Electronic Brake Distribution (EBD)",
  //   "Corner Stability Control (CSC)",
  //   "rear parking sensors",
  //   "Seat Belt Warning",
  //   "4 Star (Global NCAP)",
  // ];

  // const VarientPetrol = {
  //   varient1: ["XE", "1199  cc, Manual, Petrol, 20.3 kmpl", "Rs.5.64 Lakh*"],
  //   varient2: ["XM", "1199  cc, Manual, Petrol, 20.3 kmpl", "Rs.6.24 Lakh*"],
  //   varient3: ["XZ", "1199 cc, Manual, Petrol, 20.3 kmpl", "Rs.6.65 Lakh*"],
  //   varient4: [
  //     "XMA AMT",
  //     "1199 cc, Automatic, Petrol, 20.3 kmpl",
  //     "Rs.6.79 Lakh*",
  //   ],
  //   varient5: [
  //     "XZ Plus",
  //     "1199  cc, Manual, Petrol, 20.3 kmpl",
  //     "Rs.7.26 Lakh*",
  //   ],
  //   varient6: [
  //     "XZA Plus AMT",
  //     "1199 cc, Automatic, Petrol, 20.3 kmpl",
  //     "Rs.7.81 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: The prices of the Tigor have shot up uniformly by Rs 10,400. Tata Tigor Price: Tata retails the sub-4m sedan between Rs 5.59 lakh and Rs 7.73 lakh (ex-showroom Delhi). Tata Tigor Variants: It comes in a total of six variants: XE, XM, XZ, XZ+, XMA, and XZA+. Tata Tigor Powertrain: Tata has equipped the Tigor with a 1.2-litre 3-cylinder petrol engine (86PS/113Nm), mated to a 5-speed manual or AMT gearbox. Tata Tigor Features: It gets push button start/stop, keyless entry, auto AC, 7-inch touchscreen infotainment system with Android Auto and Apple CarPlay, and a digital instrument cluster. Tata Tigor Safety: Standard safety features include dual front airbags, ABS with EBD, and rear parking sensors. Tata Tigor Rivals: The Tigor rivals the Maruti Suzuki Dzire, Hyundai Aura, Ford Aspire, and Honda Amaze.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Probably the best looking sub-4m sedan",
  //     "Most affordable sedan of the lot",
  //     "Loaded with convenience features",
  //   ],
  //   cons: [
  //     "Engine refinement not on par with rivals",
  //     "Cabin space is less when compared to rivals",
  //     "No diesel engine option",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Deep Red", "bg-red-600"],
  //   color2: ["Pearlescent White", "bg-white-400"],
  //   color3: ["Pure Silver", "bg-gray-500"],
  //   color4: ["Arizona Blue", "bg-blue-600"],
  //   color5: ["Daytona Grey", "bg-gray-800"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 6.34 Lakh Onwards",
  //     "18.3 to 24.7 kmpl",
  //     "1199 to 1498 cc",
  //     "Manual & Automatic CVT",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "3,995 mm L x 1,695 mm W x 1,498-1,501 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/33276/amaze-exterior-right-front-three-quarter-2.jpeg?q=85",
  //   ],
  //   comparisioncar2: [
  //     "₹ 6.00 Lakh onwards",
  //     "20 to 28 kmpl",
  //     "998 to 1197 cc",
  //     "Manual & Automatic AMT",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "3,995 mm L x 1,680 mm W x 1,520 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=85",
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
  //     "What is the on road price of Tigor?",
  //     "The on-road price of Tigor in Delhi starts at ‎₹ 6.32 Lakh and goes upto ‎₹ 8.81 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Tigor and Aura?",
  //     "Tigor price starts at ₹ 5.65 Lakh ex-showroom and It comes with 1199 cc engine. Whereas Aura price starts at ₹ 6.00 Lakh ex-showroom and It comes with 1197 cc engine.",
  //   ],
  //   question3: [
  //     "What is the mileage of Tata Tigor?",
  //     "The Tata Tigor mileage is 20.3 - 20.3 kmpl.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/33276/amaze-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Amaze",
      "₹ 9.28 Lakh Onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=85",
      "Aura",
      "₹ 6.00 Lakh onwards0",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/26563/Volkswagen-Vento-Right-Front-Three-Quarter-169094.jpg?wm=0&q=85",
      "Vento",
      "10.00 Lakh onwards",
    ],
    car4: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Rapid/7920/1608614333184/front-left-side-47.jpg?tr=w-456",
      "Rapid",
      "₹ 7.79 Lakh onwards",
    ],
  };

  const ThatBrandCars = {
    car1: NexonBasicInfoCard,
    car2: AltrozBasicInfoCard,
    car3: SafariBasicInfoCard,
    car4: HarrierBasicInfoCard,
    car5: TiagoBasicInfoCard,
    car6: TigorBasicInfoCard,
    car7: NexonEVBasicInfoCard,
    car8: TigorEVBasicInfoCard,
    car9: TiagoNRGBasicInfoCard,
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/39015/Tata-H2X-Exterior-170093.jpg?wm=0&q=85",
  //     "HBX",
  //     "₹ 5.00 - 8.00 Lakh",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/40453/Tata-Tiago-EV-Exterior-169932.jpg?wm=0&q=85",
  //     "Tiago EV",
  //     "₹ 5.00 - 7.00 Lakh",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/46800/tata-altroz-ev-left-side-view5.jpeg?q=85",
  //     "Altroz EV",
  //     "₹ 12.00 - 15.00 Lakh",
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
        LinkCarName="tigor"
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
  return OneCarAllSpecs("tigor").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
