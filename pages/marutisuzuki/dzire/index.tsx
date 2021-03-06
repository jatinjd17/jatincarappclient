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
import { Dzire } from "../../../CarPicsUrl/CarPics";
import Head from "next/head";
import { TDzire } from "../../../CarPicsUrl/Thumbnails";
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
import { AmazeBasicInfoCard } from "../../../AllCarBasicInfo/honda";
import { AuraBasicInfoCard } from "../../../AllCarBasicInfo/hyundai";
import { VentoBasicInfoCard } from "../../../AllCarBasicInfo/volkswagen";
import { RapidBasicInfoCard } from "../../../AllCarBasicInfo/skoda";

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
  // const CarPrice = "??? 5.98 Lakh";
  // const TopPic = Dzire;
  // const CarName = "Maruti Dzire";
  // const OnlyName = "Dzire";
  // const ThumPic = TDzire;

  // const KeySpecification = [
  //   "??? 5.98 Lakh onwards",
  //   "23.26 to 24.12 kmpl",
  //   "1197 cc",
  //   "Manual & AMT",
  //   "Petrol",
  //   "5 Seater",
  //   "3,995 mm L x 1,735 mm W x 1,515 mm H",
  // ];

  // const SafetyFeatures = [
  //   "Seat Belt Warning",
  //   "Anti-Lock Braking System",
  //   "2 Airbags",
  //   "EBD",
  //   "Speed Alert",
  //   "Driver frontal airbag, Front passenger frontal airbag",
  //   "Door Ajar Warning.",
  // ];

  // const VarientPetrol = {
  //   varient1: ["LXI", "1197 cc, Manual, Petrol, 23.26 kmpl", "Rs.5.98 Lakh*"],
  //   varient2: ["VXI", "1197 cc, Manual, Petrol, 23.26 kmpl", "Rs.7.04 Lakh*"],
  //   varient3: [
  //     "VXI AGS",
  //     "1197 cc, Automatic AMT, Petrol, 24.12 kmpl",
  //     "Rs.7.54 Lakh*",
  //   ],
  //   varient4: ["ZXI", "1197 cc, Manual, Petrol, 23.26 kmpl", "Rs.7.73 Lakh*"],
  //   varient5: [
  //     "ZXI AGS",
  //     "1197 cc, Automatic AMT, Petrol, 24.12 kmpl",
  //     "Rs.8.23 Lakh*",
  //   ],
  //   varient6: [
  //     "ZXI Plus",
  //     "1197 cc, Manual, Petrol, 23.26 kmpl",
  //     "Rs.8.53 Lakh*",
  //   ],
  //   varient7: [
  //     "ZXI Plus AGS",
  //     "1197 cc, Automatic AMT, Petrol, 24.12 kmpl",
  //     "Rs.9.03 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "23.26 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: The Dzire is likely to get a CNG option soon. Maruti Dzire Price: Maruti retails the Dzire from Rs 5.98 lakh to Rs 9.02 lakh (ex-showroom Delhi). Maruti Dzire Variants: The sub-4m sedan is offered in four trims: LXi, VXi, ZXi, and ZXi+. Maruti Dzire Engine and Transmission: It comes with a 1.2-litre DualJet petrol engine (90PS/113Nm), mated to a 5-speed manual or AMT option. Its claimed fuel efficiency stands at 23.26kmpl with the MT and 24.12kmpl with the AMT. Maruti Dzire Features: Maruti offers the Dzire with cruise control, automatic LED headlamps, auto-folding ORVMs, push-button engine start-stop, and auto AC with rear AC vents. The facelifted Dzire also gets a 7.0-inch touchscreen infotainment system with Android Auto and Apple CarPlay connectivity as well as cloud-based services. Its 4.2-inch multi-colour MID shows plenty of useful driving information. Maruti Dzire Safety: The Dzire comes with dual front airbags, ISOFIX child seat anchors, and rear parking sensors as standard. Its AMT variants also get electronic stability control and hill hold assist with features such as a rearview camera and rear defogger offered in the higher-spec variants. Maruti Dzire Rivals: It goes up against the Honda Amaze, Hyundai Aura, Tata Tigor, and Ford Aspire.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Refined petrol engine",
  //     "High claimed efficiency",
  //     "Comfortable ride quality",
  //   ],
  //   cons: [
  //     "Interior quality could have been better",
  //     "Bouncy high speed ride quality",
  //     "No diesel engine option",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Oxford Blue", "bg-blue-600"],
  //   color2: ["Premium Silver", "bg-gray-400"],
  //   color3: ["Arctic White", "bg-white"],
  //   color4: ["Sherwood Brown", "bg-brown-600"],
  //   color5: ["Magma Grey", "bg-gray-800"],
  //   color6: ["Phoenix Red", "bg-red-800"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "??? 6.34 Lakh Onwards",
  //     "18.3 to 24.7 kmpl",
  //     "1199 to 1498 cc",
  //     "Manual & Automatic CVT",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "3,995 mm L x 1,695 mm W x 1,498-1,501 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/33276/amaze-exterior-right-front-three-quarter-2.jpeg?q=85",
  //   ],
  //   comparisioncar2: [
  //     "??? 6.00 Lakh onwards",
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
  //     "What is the on road price of Dzire?",
  //     "The on-road price of Dzire in Delhi starts at ?????? 6.6 Lakh and goes upto ?????? 10.13 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Dzire and Swift?",
  //     "Dzire price starts at ??? 5.98 Lakh ex-showroom and It comes with 1197 cc engine. Whereas Swift price starts at ??? 5.81 Lakh ex-showroom and It comes with 1197 cc engine. Compare the two models to identify the best car for you.",
  //   ],
  //   question3: [
  //     "What is price of Dzire top model?",
  //     "Top model of Dzire is ZXi Plus AGS and the ex-showroom for Dzire ZXi Plus AGS is ??? 9.03 Lakh.",
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
    car1: AmazeBasicInfoCard,
    car2: AuraBasicInfoCard,
    car3: VentoBasicInfoCard,
    car4: RapidBasicInfoCard,
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
        LinkCarName="dzire"
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
  return OneCarAllSpecs("dzire").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
