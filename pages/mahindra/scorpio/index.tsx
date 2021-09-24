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
import { Scorpio } from "../../../CarPicsUrl/CarPics";
import { TScorpio } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  ScorpioBasicInfoCard,
  Xuv500BasicInfoCard,
  BoleroBasicInfoCard,
  AlturasBasicInfoCard,
  Kuv100BasicInfoCard,
  MarazzoBasicInfoCard,
  TharBasicInfoCard,
  Xuv300BasicInfoCard,
  BoleroNeoBasicInfoCard,
} from "../../../AllCarBasicInfo/mahindra";
import { CretaBasicInfoCard } from "../../../AllCarBasicInfo/hyundai";
import { HectorBasicInfoCard } from "../../../AllCarBasicInfo/mg";
import { HarrierBasicInfoCard } from "../../../AllCarBasicInfo/tata";

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

  // const CompanyName = "Mahindra";
  // const CarPrice = "₹ 12.66 Lakh";
  // const TopPic = Scorpio;
  // const CarName = "Mahindra Scorpio";
  // const OnlyName = "Scorpio";
  // const ThumPic = TScorpio;

  // const KeySpecification = [
  //   "₹ 12.66 Lakh onwards",
  //   "15 kmpl",
  //   "2179 cc",
  //   "Manual",
  //   "Diesel",
  //   "7 Seater",
  //   "4,456 mm L x 1,820 mm W x 1,995 mm H",
  // ];

  // const SafetyFeatures = [
  //   "Dual airbags",

  //   "Rear parking sensors",

  //   "Seatbelt reminders for the driver and front passenger",

  //   "A speed warning system (at 80kmph and 120kmph)",

  //   "A manual override for the central locking system",
  // ];

  // const VarientPetrol = {};

  // const VarientDiesel = {
  //   varient1: [
  //     "S3 Plus",
  //     "2179 cc, Manual, Diesel, 15.0 kmpl",
  //     "Rs.12.59 Lakh*",
  //   ],
  //   varient2: [
  //     "S3 Plus 9 Seater",
  //     "2179 cc, Manual, Diesel, 15.0 kmpl",
  //     "Rs.12.59 Lakh*",
  //   ],
  //   varient3: ["S5", "2179 cc, Manual, Diesel, 15.0 kmpl", "Rs.13.30 Lakh*"],
  //   varient4: ["S7", "2179 cc, Manual, Diesel, 15.0 kmpl", "Rs.15.52 Lakh*"],
  //   varient5: ["S9", "2179 cc, Manual, Diesel, 15.0 kmpl", "Rs.16.14 Lakh*"],
  //   varient6: ["S11", "2179 cc, Manual, Diesel, 15.0 kmpl", "Rs.17.39 Lakh*"],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "23.26 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: Mahindra has increased the prices of the Scorpio by up to Rs 37,000. Mahindra Scorpio Price: The Scorpio is priced from Rs 12.59 lakh to Rs 17.39 lakh (ex-showroom Delhi). Mahindra Scorpio Variants: Mahindra sells the SUV in five trims: S3+, S5, S7, S9, and S11. Mahindra Scorpio Seating Capacity: It can seat up to nine occupants. Mahindra Scorpio Engine and Transmission: The SUV is powered by a 2.2-litre diesel engine available in two states of tune: 120PS/280Nm and 140PS/319Nm. Mahindra offers the former in the new base-spec S3+ variant, whereas the higher tuned engine comes with the other variants. While the S3+ variant gets a 5-speed MT, the remaining variants come mated to a 6-speed manual gearbox. Mahindra Scorpio Features: The Scorpio gets cruise control, auto AC, a 7-inch touchscreen infotainment system with Bluetooth and AUX connectivity, and auto headlamps with LED DRLs. Mahindra Scorpio Safety: Standard safety features on offer include dual front airbags, rear parking sensors, ABS, and speed alert. Mahindra Scorpio Rivals: While the Scorpio uses a ladder-frame chassis and has no direct rivals as such, you can check out other similarly priced compact SUVs, such as the Hyundai Creta, Renault Duster, Skoda Kushaq, Nissan Kicks, Kia Seltos and Volkswagen Taigun that use a monocoque chassis. Mahindra Scorpio 2022: Mahindra is expected to launch the new-gen Scorpio by January 2022.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "The Mahindra Scorpio commands loads of road presence, aggressive styling and an abuse-friendly structure.",
  //     "With a starting price of Rs 9.99 lakh (ex-showroom Delhi), the Scorpio is on of the most affordable 7-seater SUVs in the country",
  //     "Unlike many of its rivals, the Scorpio comes with proper shift on fly 4WD system.",
  //   ],
  //   cons: ["Noisy cabin", "Utilitarian layout", "Bare bone features"],
  // };

  // const Colorss = {
  //   color1: ["Pearl White", "bg-blue-600"],
  //   color2: ["Molten Red Rage", "bg-gray-400"],
  //   color3: ["Napoli Black", "bg-gray-400"],
  //   color4: ["Dsat Silver", "bg-gray-400"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 14.30 Lakh Onwards",
  //     "14.63 to 16.35 kmpl",
  //     "1956 cc",
  //     "Manual & Automatic (Torque Converter)",
  //     "Diesel",
  //     "5 Seater",
  //     "4,598 mm L x 1,894 mm W x 1,706 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/32958/tata-harrier-right-front-three-quarter58.jpeg?q=85",
  //   ],
  //   comparisioncar2: [
  //     "₹ 13.18 Lakh onwards",
  //     "13.96 to 17.41 kmpl",
  //     "1451 to 1956 cc",
  //     "Manual & Automatic",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "4655 mm in length, 1835 mm in width and 1760 mm in height",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/52565/hector-exterior-right-front-three-quarter-3.jpeg?q=85",
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
  //     "What is the on road price of Scorpio?",
  //     "The on-road price of Scorpio in Delhi starts at ‎₹ 15.22 Lakh and goes upto ‎₹ 20.66 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Scorpio and XUV500?",
  //     "Scorpio price starts at ₹ 12.66 Lakh ex-showroom and It comes with 2179 cc engine. Whereas XUV500 price starts at ₹ 14.27 Lakh ex-showroom and It comes with 2179 cc engine.",
  //   ],
  //   question3: [
  //     "What is the mileage of Mahindra Scorpio?",
  //     "The Mahindra Scorpio mileage is 15 kmpl.",
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
    car1: HarrierBasicInfoCard,
    car2: HectorBasicInfoCard,
    car3: CretaBasicInfoCard,
  };

  const ThatBrandCars = {
    car1: ScorpioBasicInfoCard,
    car2: Xuv500BasicInfoCard,
    car3: BoleroBasicInfoCard,
    car4: AlturasBasicInfoCard,
    car5: Kuv100BasicInfoCard,
    car6: MarazzoBasicInfoCard,
    car7: TharBasicInfoCard,
    car8: Xuv300BasicInfoCard,
    car9: BoleroNeoBasicInfoCard,
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-left-front-three-quarter.jpeg?isig=0&q=85",
  //     "XUV 700",
  //     "₹ 13.00 - 20.00 Lakh",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/41157/Mahindra-TUV300-Plus-Facelift-Exterior-163347.jpg?wm=0&q=85",
  //     "TUV 300 Plus",
  //     "₹ 10.00 - 12.00 Lakh",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/33297/Mahindra-e20-NXT-Exterior-120569.jpg?wm=0&q=85",
  //     "e20 NXT",
  //     "₹ 6.00 - 8.00 Lakh",
  //   ],
  //   car4: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/42453/Mahindra-S204-Exterior-171413.jpg?wm=0&q=85",
  //     "Mahindra S204",
  //     "₹ 11.00 - 15.00 Lakh",
  //   ],
  //   car5: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/45278/mahindra-exuv300-left-side-view0.jpeg?q=85",
  //     "eXUV300",
  //     "₹ 14.00 - 16.00 Lakh",
  //   ],
  //   car6: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/40432/Mahindra-New-Scorpio-Exterior-159617.jpg?wm=0&q=85",
  //     "New Scorpio",
  //     "₹ 10.00 - 14.00 Lakh",
  //   ],
  //   car7: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/33261/Mahindra-eKUV100-Exterior-170053.jpg?wm=0&q=85",
  //     "eKUV100",
  //     "₹ 8.00 - 9.00 Lakh",
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
        LinkCarName="scorpio"
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
  return OneCarAllSpecs("scorpio").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
