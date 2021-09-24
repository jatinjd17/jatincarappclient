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
import { Vellfire } from "../../../CarPicsUrl/CarPics";
import { TVellfire } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  InnovaBasicInfoCard,
  FortunerBasicInfoCard,
  UrbanCruiserBasicInfoCard,
  GlanzaBasicInfoCard,
  YarisBasicInfoCard,
  VellfireBasicInfoCard,
  CamryBasicInfoCard,
} from "../../../AllCarBasicInfo/toyota";
import { CarnivalBasicInfoCard } from "../../../AllCarBasicInfo/kia";

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

  // const CompanyName = "Toyota";
  // const CarPrice = "₹ 89.89 Lakh";
  // const TopPic = Vellfire;
  // const CarName = "Toyota Vellfire";
  // const OnlyName = "Vellfire";
  // const ThumPic = TVellfire;

  // const KeySpecification = [
  //   "₹ 89.89 Lakh onwards",
  //   "16.35 kmpl",
  //   "2494 cc",
  //   "Automatic (Dual Clutch)",
  //   "Hybrid (Electric + Petrol)",
  //   "7 Seater",
  //   "4,935 mm L x 1,850 mm W x 1,895 mm H",
  // ];

  // const SafetyFeatures = [
  //   " Pre-Collision System (PCS)",
  //   "Lane Tracing Assist (LTA)",
  //   "Dynamic Radar Cruise Control (DRCC) for All Speeds.",
  //   "Automatic High Beam (AHB)",
  //   "Electric Parking Brake (EPB) with Brake Hold.",
  //   "Blind Spot Monitor (BSM)",
  //   "Front and Rear Digital Video Recorder (DVR)",
  //   "Panoramic View Monitor (PVM)",
  // ];

  // const VarientPetrol = {
  //   varient1: [
  //     "Executive Lounge",
  //     "2494 cc, Automatic, Petrol, 16.35 kmpl",
  //     "Rs.89.90 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: Toyota has increased the price of the Vellfire. Toyota Vellfire Variant: The Vellfire is offered in a single fully-loaded Executive Lounge variant. Toyota Vellfire Price: It is priced at Rs 83.50 lakh (ex-showroom). Toyota Vellfire Powertrain: The luxury MPV is powered by a BS6-compliant 2.5-litre petrol-hybrid engine that puts out 180PS and 235Nm. It also features a 4WD system and comes paired to a CVT gearbox. Toyota Vellfire Features: Toyota offers the Vellfire with heated and ventilated memory seats with an Ottoman full-recline function, twin sunroof, sunshades, ambient lighting, and automatic climate control.  Toyota Vellfire Safety: It gets seven airbags, vehicle dynamic management, a panoramic view monitor, and front and rear parking sensors. Toyota Vellfire Rivals: The Toyota Vellfire goes up against the Mercedes-Benz V-Class.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Luxurious second row seats like no other",
  //     "Powered adjust for recline, foot rest and even footrest extension",
  //     "Enough space to seat even the tallest of individuals",
  //   ],
  //   cons: [
  //     "Costs nearly a crore",
  //     "No charging sockets or ports for the second and third row",
  //     "Ride quality will be a bit stiff",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Pearl White", "bg-brown-800"],
  //   color2: ["Graphite", "bg-gray-900"],
  //   color3: ["BURNING BLACK", "bg-yellow-900"],
  //   color4: ["Black", "bg-gray-100"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 71.10 Lakh Onwards",
  //     "16 kmpl",
  //     "1950 cc",
  //     "Automatic",
  //     "Diesel",
  //     "7 Seater",
  //     "5,140-5,370 mm L x 1,928 mm W x 1,901-1,909 mm H",
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/37616/MercedesBenz-VClass-Right-Front-Three-Quarter-147184.jpg?wm=0&q=85",
  //   ],
  //   comparisioncar2: [
  //     "₹ 24.95 Lakh",
  //     "14 kmpl",
  //     "2199 cc",
  //     "Automatic (Torque Converter)",
  //     "Diesel",
  //     "6 & 7 Seater",
  //     "5,115 mm L x 1,985 mm W x 1,740-1,755 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/41205/kia-carnival-right-front-three-quarter8.jpeg?q=85",
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
  //     "What is the on road price of Vellfire?",
  //     "The on-road price of Vellfire in Delhi is ₹ 1.03 Crore. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Vellfire and V-Class?",
  //     "Vellfire price starts at ₹ 89.89 Lakh ex-showroom and It comes with 2494 cc engine. Whereas V-Class price starts at ₹ 71.10 Lakh ex-showroom and It comes with 2143 cc engine.",
  //   ],
  //   question3: [
  //     "What is the mileage of Toyota Vellfire?",
  //     "The Toyota Vellfire mileage is 16.35 kmpl.",
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
      "https://imgd.aeplcdn.com/664x374/cw/ec/37616/MercedesBenz-VClass-Right-Front-Three-Quarter-147184.jpg?wm=0&q=85",
      "MercedesBenz VClass",
      "₹ 71.10 Lakh Onwards",
    ],
    car2: CarnivalBasicInfoCard,
  };

  const ThatBrandCars = {
    car1: InnovaBasicInfoCard,
    car2: FortunerBasicInfoCard,
    car3: UrbanCruiserBasicInfoCard,
    car4: GlanzaBasicInfoCard,
    car5: YarisBasicInfoCard,
    car6: VellfireBasicInfoCard,
    car7: CamryBasicInfoCard,
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Hilux/8445/1622783707227/front-left-side-47.jpg?imwidth=420&impolicy=resize",
  //     "Hilux",
  //     "Rs.18.00 Lakh*",
  //   ],
  //   car2: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Land-Cruiser/8448/1623313668941/front-left-side-47.jpg?tr=w-456",
  //     "Land Cruiser",
  //     "Rs.1.50 Cr*",
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
        LinkCarName="vellfire"
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
  return OneCarAllSpecs("vellfire").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
