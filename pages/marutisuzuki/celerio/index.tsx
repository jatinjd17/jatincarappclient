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
import { Celerio } from "../../../CarPicsUrl/CarPics";
import { TCelerio } from "../../../CarPicsUrl/Thumbnails";
import Head from "next/head";
import Meta from "../../../Components/metaSEO";
import {
  SpressoBasicInfoCard,
  CelerioBasicInfoCard,
  WaganRBasicInfoCard,
  SwiftBasicInfoCard,
  BalenoBasicInfoCard,
  ErtigaBasicInfoCard,
  BrezzaBasicInfoCard,
  AltoBasicInfoCard,
  DzireBasicInfoCard,
  XL6BasicInfoCard,
  IgnisBasicInfoCard,
  EecoBasicInfoCard,
  CiazBasicInfoCard,
  ScrossBasicInfoCard,
  CelerioXBasicInfoCard,
} from "../../../AllCarBasicInfo/marutisuzuki";
import { KwidBasicInfoCard } from "../../../AllCarBasicInfo/renault";
import {
  NiosBasicInfoCard,
  SantroBasicInfoCard,
} from "../../../AllCarBasicInfo/hyundai";

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

  // const CompanyName = "MarutiSuzuki";
  // const CarPrice = "₹ 4.65 Lakh";
  // const TopPic = Celerio;
  // const CarName = "Maruti Celerio";
  // const OnlyName = "Celerio";
  // const ThumPic = TCelerio;

  // const KeySpecification = [
  //   "₹ 4.65 Lakh onwards",
  //   "21.63 to 30.47 km/kg",
  //   "998 cc",
  //   "Manual & AMT",
  //   "Petrol/CNG",
  //   "4 Seater",
  //   "3,695 mm L x 1,600 mm W x 1,560 mm H",
  // ];

  // const SafetyFeatures = [
  //   "Seat Belt Warning",
  //   "Anti-Lock Braking System",
  //   "2 Airbags",
  //   "EBD",
  //   "Speed Alert",
  // ];

  // const VarientPetrol = {
  //   varient1: ["LXi", "998 cc, Manual, Petrol, 21.63 kmpl", "Rs.4.65 Lakh*"],
  //   varient2: [
  //     "LXi (O)",
  //     "998 cc, Manual, Petrol, 21.63 kmpl",
  //     "Rs.3.05 Lakh*",
  //   ],
  //   varient3: ["VXI", "998 cc, Manual, Petrol, 21.63 kmpl", "Rs.4.71 Lakh*"],
  //   varient4: [
  //     "LXI (O)",
  //     "998 cc, Manual, Petrol, 21.63 kmpl",
  //     "Rs.5.04 Lakh*",
  //   ],
  //   varient5: [
  //     "VXI (O)",
  //     "998 cc, Manual, Petrol, 21.63 kmpl",
  //     "Rs.5.10 Lakh*",
  //   ],
  //   varient6: ["ZXI", "998 cc, Manual, Petrol, 21.63 kmpl", "Rs.5.28 Lakh*"],
  //   varient7: [
  //     "VXI AMT",
  //     "998 cc, Manual, Petrol, 21.63 kmpl",
  //     "Rs.5.54 Lakh*",
  //   ],
  //   varient8: [
  //     "VXI (O) AMT",
  //     "998 cc, Manual, Petrol, 21.63 kmpl",
  //     "Rs.5.60 Lakh*",
  //   ],
  //   varient9: [
  //     "ZXI(Opt)",
  //     "998 cc, Manual, Petrol, 21.63 kmpl",
  //     "Rs.5.70 Lakh*",
  //   ],
  //   varient10: [
  //     "ZXI AMT",
  //     "998 cc, Manual, Petrol, 21.63 kmpl",
  //     "Rs.5.78 Lakh*",
  //   ],
  //   varient11: [
  //     "ZXI (O) AMT",
  //     "998 cc, Manual, Petrol, 21.63 kmpl",
  //     "Rs.5.82 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {
  //   varient1: ["VXI CNG", "998 cc, Manual, CNG, 30.47 km/kg", "Rs.5.95 Lakh*"],
  //   varient2: [
  //     "VXI (O) CNG",
  //     "998 cc, Manual, CNG, 30.47 km/kg",
  //     "Rs.6.01 Lakh*",
  //   ],
  // };

  // const Mileage = {
  //   mileage1: ["Petrol (998 cc)", "Manual", "21.63 kmpl"],
  //   mileage2: ["CNG (998 cc)", "Manual", "30.47 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Maruti Celerio Price: The Celerio retails from Rs 4.65 lakh to Rs 5.90 lakh (ex-showroom Delhi). Maruti Celerio Variants: Maruti offers it in three trims: LXi, VXi, and ZXi. Maruti Celerio Engine and Transmission: It gets a 1.0-litre three-cylinder petrol engine (68PS/90Nm) but its output drops down to 60PS/78Nm when used on CNG. Maruti offers it with a 5-speed manual or AMT option. The carmaker claims a mileage of 21.63kmpl when driven on petrol (both MT and AMT) and 30.47km/kg on CNG. Maruti Celerio Features: The Celerio gets 14-inch alloy wheels, keyless entry, manual AC, and a height-adjustable driver seat. Maruti Celerio Safety: Standard safety features include driver’s airbag, ABS, and rear parking sensors. Maruti Celerio Rivals: It goes up against the Tata Tiago, Datsun GO, Maruti Wagon R and Ignis, and Hyundai Santro. Maruti Celerio 2021: The new-gen Celerio’s patent images have leaked online before its September 2021 expected launch.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Optional AMT across variants. Easy to drive in the congested city.",
  //     "Safety features such as ABS (Anti Lock Braking System) and Airbags available as an option across the range.",
  //     "Healthy in-cabin space despite the compact proportions.",
  //   ],
  //   cons: [
  //     "Build quality could have been better; doors shut with a clang - feel slightly flimsy.",
  //     "Jerky shifts on the AMT. Not as smooth as a conventional automatic.",
  //     "Petrol engine best suited to the city; feels underpowered on the highway.",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Torque Blue", "bg-blue-600"],
  //   color2: ["Silky Silver", "bg-gray-400"],
  //   color3: ["Arctic White", "bg-white"],
  //   color4: ["Blazing Red", "bg-red-600"],
  //   color5: ["Glistening Grey", "bg-gray-800"],
  //   color6: ["Tango Orange", "bg-orange-500"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 3.32 Lakh onwards",
  //     "25 kmpl",
  //     "799 to 1000 cc",
  //     "Manual, Automatic",
  //     "Petrol",
  //     "4 Seater",
  //     "3731mm-L 1579mm-W 1490mm-H mm 2422mm-WheelBase",
  //     "https://i.ibb.co/C63SXxn/Kwid.jpg",
  //   ],
  //   comparisioncar2: [
  //     "₹ 3.80 Lakh onwards",
  //     "22 kmpl",
  //     "799 to 999 cc",
  //     "Manual, Automatic",
  //     "Petrol",
  //     "4 Seater",
  //     "3435mm-L 1574mm-W 1546mm-H mm 2348mm-WB",
  //     "https://i.ibb.co/ZdN0MWM/Datsun-Redi-GO.jpg",
  //   ],
  // };

  // const HighlightedFeatures = {
  //   feature1: [
  //     "https://images.carandbike.com/car-images/gallery/large/maruti-suzuki/alto-800/interior/dashboard.webp?v=2020-10-24",
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
  //     "What is the mileage?",
  //     "As for the claimed fuel efficiency, the Maruti Suzuki Alto 800 base Petrol returns 24.70 Kmpl, whereas its base Petrol+CNG counterpart gives 31.39 Kmpl.",
  //   ],
  //   question2: [
  //     "What is the Seating capacity?",
  //     "Maruti Suzuki Alto 800 has a seating capacity of 5 people.",
  //   ],
  //   question3: [
  //     "What are the Top variants?",
  //     "Maruti Suzuki Alto 800 comes with total 8 variants. LXI, VXI, Standard are the most popular ones.",
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
    car1: KwidBasicInfoCard,
    car2: [
      "https://i.ibb.co/ZdN0MWM/Datsun-Redi-GO.jpg",
      "Datsun redi-go",
      "₹ 3.80 Lakh onwards0",
    ],
    car3: SpressoBasicInfoCard,
    car4: CelerioBasicInfoCard,
    car5: NiosBasicInfoCard,
    car6: SantroBasicInfoCard,
  };

  const ThatBrandCars = {
    car1: SpressoBasicInfoCard,
    car2: CelerioBasicInfoCard,
    car3: WaganRBasicInfoCard,
    car4: SwiftBasicInfoCard,
    car5: BalenoBasicInfoCard,
    car6: ErtigaBasicInfoCard,
    car7: BrezzaBasicInfoCard,
    car8: AltoBasicInfoCard,
    car9: DzireBasicInfoCard,
    car10: XL6BasicInfoCard,
    car11: IgnisBasicInfoCard,
    car12: EecoBasicInfoCard,
    car13: CiazBasicInfoCard,
    car14: ScrossBasicInfoCard,
    car15: CelerioXBasicInfoCard,
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Celerio-2021/8454/Maruti-Celerio-2021-/1623741753799/front-left-side-47.jpg?tr=w-456",
  //     "Celario 2021",
  //     "Rs.4.50 Lakh",
  //   ],
  //   car2: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Maruti-Solio/6317/1558342716659/front-left-side-47.jpg?imwidth=420&impolicy=resize",
  //     "Maruti Solio",
  //     "Rs.6.00 Lakh",
  //   ],
  //   car3: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Alto-2021/8020/1600235578537/front-left-side-47.jpg?tr=w-456",
  //     "Alto 2021",
  //     "Rs.3.00 Lakh",
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
        LinkCarName="celerio"
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
  return OneCarAllSpecs("celerio").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
