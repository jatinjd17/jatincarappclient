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
import { Scross } from "../../../CarPicsUrl/CarPics";
import { TScross } from "../../../CarPicsUrl/Thumbnails";
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
  // const CarPrice = "₹ 8.39 Lakh onwards";
  // const TopPic = Scross;
  // const CarName = "Maruti Scross";
  // const OnlyName = "Scross";
  // const ThumPic = TScross;

  // const KeySpecification = [
  //   "₹ 8.39 Lakh onwards",
  //   "18.43 to 18.55 kmpl",
  //   "1462 cc",
  //   "Manual and Automatic",
  //   "Petrol & CNG",
  //   "5 Seater",
  //   "4,300 mm L x 1,785 mm W x 1,590-1,595 mm H",
  // ];

  // const SafetyFeatures = ["Driver Airbag", "Seat Belts", "Speed Alert"];

  // const VarientPetrol = {
  //   varient1: ["Sigma", "1462 cc, Manual, Petrol, 18.55 kmpl", "Rs.7.78 Lakh*"],
  //   varient2: ["Delta", "1462 cc, Manual, Petrol, 18.55 kmpl", "Rs.8.53 Lakh*"],
  //   varient3: ["Zeta", "1462 cc, Manual, Petrol, 18.55 kmpl", "Rs.9.36 Lakh*"],
  //   varient4: [
  //     "Delta AT",
  //     "1462 cc, Manual, Automatic Torque Converter, 18.55 kmpl",
  //     "Rs.9.47 Lakh*",
  //   ],
  //   varient5: ["Alpha", "1462 cc, Manual, Petrol, 18.55 kmpl", "Rs.9.73 Lakh*"],

  //   varient6: [
  //     "Zeta AT",
  //     "1462 cc, Automatic Torque Converter, Petrol, 18.55 kmpl",
  //     "Rs.9.88 Lakh*",
  //   ],
  //   varient7: [
  //     "Alpha AT",
  //     "1462 cc, Automatic Torque Converter, Petrol, 18.55 kmpl",
  //     "Rs.10.56 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1462 cc)", "Manual", "18.55 kmpl"],
  //   mileage2: ["CNG (1462 cc)", "Manual", "26.2 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Maruti S-Cross Price: Maruti retails the S-Cross between Rs 8.39 lakh and Rs 12.39 lakh (ex-showroom Delhi). Maruti S-Cross Variants: The S-Cross is sold in four trims: Sigma, Delta, Zeta, and Alpha. Maruti S-Cross Powertrain: The crossover is equipped with the 1.5-litre petrol engine (105PS and 138Nm) offered on the facelifted Vitara Brezza with mild-hybrid tech, paired to either a 5-speed manual or a 4-speed AT. Maruti is offering the mild-hybrid tech with both manual and automatic variants of the S-Cross. Maruti S-Cross Features: Its equipment list includes rain-sensing wipers, cruise control, LED projector headlamps and 16-inch alloy wheels. The only change is the introduction of Maruti’s latest 7-inch touchscreen infotainment system with Android Auto and Apple CarPlay. However, it continues to miss out on connected car tech, unlike the Hyundai Creta and Kia Seltos. Maruti S-Cross Safety: Standard safety features include dual front airbags, ABS with EBD, and rear parking sensors. Maruti S-Cross Rivals: It rivals the Kia Seltos, Hyundai Creta, Renault Duster, Nissan Kicks, Mahindra Scorpio, Skoda Kushaq, and Volkswagen Taigun.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Comfortable ride quality",
  //     "Spacious cabin",
  //     "Cheaper than competition",
  //   ],
  //   cons: [
  //     "Interior quality could have been better",
  //     "Competition offers more features",
  //     "Engine should have offered more punch",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Nexa Blue", "bg-blue-600"],
  //   color2: ["Premium Silver", "bg-gray-400"],
  //   color3: ["Pearl Arctic White", "bg-white"],
  //   color4: ["Granite Grey", "bg-gray-600"],
  //   color5: ["Caffeine Brown", "bg-black-800"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 10.15 Lakh Onwards",
  //     "17 to 21 kmpl",
  //     "1353 to 1497 cc",
  //     "Manual, Automatic",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "4,300 mm L x 1,790 mm W x 1,620-1,635 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/41564/hyundai-creta-right-front-three-quarter9.jpeg?q=85",
  //   ],
  //   comparisioncar2: [
  //     "₹ 10.51 Lakh Onwards",
  //     "15.78 to 17.88 kmpl",
  //     "999 to 1498 cc",
  //     "Manual, Automatic",
  //     "Petrol",
  //     "5 Seater",
  //     "4,225 mm L x 1,760 mm W x 1,612 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/44549/kushaq-exterior-right-front-three-quarter-52.jpeg?q=85",
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
  //     "What is the on road price of S-Cross?",
  //     "The on-road price of S-Cross in Delhi starts at ‎₹ 9.42 Lakh and goes upto ‎₹ 14.31 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between S-Cross and Vitara Brezza?",
  //     "S-Cross price starts at ₹ 8.39 Lakh ex-showroom and It comes with 1462 cc engine. Whereas Vitara Brezza price starts at ₹ 7.51 Lakh ex-showroom and It comes with 1462 cc engine.",
  //   ],
  //   question3: [
  //     "What is the mileage of Maruti Suzuki S-Cross?",
  //     "The Maruti Suzuki S-Cross mileage is 18.43 - 18.55 kmpl.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41564/hyundai-creta-right-front-three-quarter9.jpeg?q=85",
      "Creta",
      " ₹ 10.15 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/44549/kushaq-exterior-right-front-three-quarter-52.jpeg?q=85",
      "Kushaq",
      "₹ 10.51 Lakh onwards0",
    ],
    car3: [
      "https://www.v3cars.com/media/23261/maruti-xl6.jpg",
      "XL6",
      "₹ 9.94 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/33372/seltos-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Seltos",
      "₹ 9.96 Lakh onwards",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/thar-exterior-right-front-three-quarter-11.jpeg?q=85",
      "Thar",
      "₹ 12.78 Lakh onwards",
    ],
    car6: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32958/tata-harrier-right-front-three-quarter58.jpeg?q=85",
      "Harrier",
      "₹ 14.30 Lakh onwards",
    ],
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
        LinkCarName="scross"
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
  return OneCarAllSpecs("scross").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
