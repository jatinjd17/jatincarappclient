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
import { Ertiga } from "../../../CarPicsUrl/CarPics";
import Head from "next/head";
import { TErtiga } from "../../../CarPicsUrl/Thumbnails";
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
import {
  i20BasicInfoCard,
  NiosBasicInfoCard,
  SantroBasicInfoCard,
} from "../../../AllCarBasicInfo/hyundai";
import { TriberBasicInfoCard } from "../../../AllCarBasicInfo/renault";
import { AltrozBasicInfoCard } from "../../../AllCarBasicInfo/tata";
import { GlanzaBasicInfoCard } from "../../../AllCarBasicInfo/toyota";

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
  // const CarPrice = "₹ 7.78 Lakh onwards";
  // const TopPic = Ertiga;
  // const CarName = "Maruti Ertiga";
  // const OnlyName = "Ertiga";
  // const ThumPic = TErtiga;

  // const KeySpecification = [
  //   "₹ 7.78 Lakh onwards",
  //   "17.99 to 26.2 km/kg",
  //   "1462 cc",
  //   "Manual and Automatic",
  //   "Petrol & CNG",
  //   "5-7 Seater",
  //   "4,395 mm L x 1,735 mm W x 1,690 mm H",
  // ];

  // const SafetyFeatures = ["Driver Airbag", "Seat Belts", "Speed Alert"];

  // const VarientPetrol = {
  //   varient1: ["LXI", "1462 cc, Manual, Petrol, 19.01 kmpl", "Rs.7.78 Lakh*"],
  //   varient2: ["VXI", "1462 cc, Manual, Petrol, 19.01 kmpl", "Rs.8.53 Lakh*"],
  //   varient3: ["ZXI", "1462 cc, Manual, Petrol, 19.01 kmpl", "Rs.9.36 Lakh*"],
  //   varient5: [
  //     "VXI AT",
  //     "1462 cc, Automatic Torque Converter, Petrol, 19.01 kmpl",
  //     "Rs.9.73 Lakh*",
  //   ],

  //   varient6: [
  //     "ZXI Plus",
  //     "1462 cc, Manual, Petrol, 19.01 kmpl",
  //     "Rs.9.88 Lakh*",
  //   ],
  //   varient7: [
  //     "ZXI AT",
  //     "1462 cc, Automatic Torque Converter, Petrol, 19.01 kmpl",
  //     "Rs.10.56 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {
  //   varient1: ["VXI CNG", "1462 cc, Manual, CNG, 26.2 km/kg", "Rs.9.47 Lakh*"],
  // };

  // const Mileage = {
  //   mileage1: ["Petrol (1462 cc)", "Manual", "19.01 kmpl"],
  //   mileage2: ["CNG (1462 cc)", "Manual", "26.2 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Maruti Ertiga Price: The Maruti Ertiga is priced between Rs 7.81 lakh and Rs 10.59 lakh (ex-showroom Delhi). Maruti Ertiga Variants: It is available in four trims: LXi, VXi, ZXi, and ZXi+. Maruti Ertiga Seating Capacity: The Ertiga comes in a seven-seater layout. Maruti Ertiga Powertrain: Maruti has equipped the Ertiga with a 1.5-litre petrol engine (105PS/138Nm), mated to a 5-speed manual or a 4-speed torque converter. The CNG-petrol variant uses the same 1.5-litre petrol engine but without the mild-hybrid tech. It has a claimed efficiency of 26.08km/kg but the performance drops to 92PS and 122Nm. The petrol engine with the MT and AT options has a claimed efficiency of 19.01kmpl and 17.99kmpl respectively. Maruti Ertiga Features: It gets projector headlamps, fog lamps, LED tail lamps, 15-inch wheels, a seven-inch infotainment system with Android Auto and CarPlay, and push-button start-stop. The Ertiga also comes with ventilated front cup holders, auto climate control with rear AC vents, and a reverse parking camera.  Maruti Ertiga Safety: Safety is covered by dual front airbags, ABS with EBD, ISOFIX child seat anchors, and reverse parking sensors. Maruti has also equipped it with ESP and hill hold for safety, but these features are limited to the automatic variant. Maruti Ertiga Rivals: The Ertiga goes up against the Toyota Innova Crysta and Mahindra Marazzo.",
  // ];

  // const ProsCons = {
  //   pros: ["Value for money", "Easy to drive", "Good interior space."],
  //   cons: [
  //     "Petrol motor gets noisy post 2,500rpm",
  //     "Bumpy low speed ride",
  //     "Interior plastic quality",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Pearl Metallic Oxford Blue", "bg-blue-600"],
  //   color2: ["Metallic Silky Silver", "bg-gray-400"],
  //   color3: ["Pearl Arctic White", "bg-white"],
  //   color4: ["Metallic Magma Grey", "bg-gray-600"],
  //   color5: ["Pearl Metallic Auburn Red", "bg-black-800"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 5.50 Lakh onwards",
  //     "18.2 - 20.0 kmpl",
  //     "999 cc",
  //     "Manual, Automatic",
  //     "Petrol",
  //     "7 Seater",
  //     "3,990 mm L x 1,739 mm W x 1,643 mm H",
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Triber/7418/1580113966019/front-left-side-47.jpg?tr=w-456",
  //   ],
  //   comparisioncar2: [
  //     "₹ 9.94 Lakh onwards",
  //     "19.01 kmpl",
  //     "1462 cc",
  //     "Manual, Automatic",
  //     "Petrol",
  //     "6-7 Seater",
  //     "4,445 mm L x 1,775 mm W x 1,700 mm H",
  //     "https://www.v3cars.com/media/23261/maruti-xl6.jpg",
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
  //     "1 Airbags",
  //     "",
  //   ],
  // };

  // const faqs = {
  //   question1: [
  //     "What is the on road price of Ertiga?",
  //     "The on-road price of Ertiga in Delhi starts at ‎₹ 8.79 Lakh and goes upto ‎₹ 12.27 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Ertiga and XL6?",
  //     "Ertiga price starts at ₹ 7.78 Lakh ex-showroom and It comes with 1462 cc engine. Whereas XL6 price starts at ₹ 9.92 Lakh ex-showroom and It comes with 1462 cc engine. Compare the two models to identify the best car for you.",
  //   ],
  //   question3: [
  //     "What is price of Ertiga top model?",
  //     "Top model of Ertiga is ZXi AT and the ex-showroom for Ertiga ZXi AT is ₹ 10.56 Lakh.",
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
    car1: TriberBasicInfoCard,
    car2: GlanzaBasicInfoCard,
    car3: i20BasicInfoCard,
    car4: AltrozBasicInfoCard,
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
        LinkCarName="ertiga"
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
  return OneCarAllSpecs("ertiga").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
