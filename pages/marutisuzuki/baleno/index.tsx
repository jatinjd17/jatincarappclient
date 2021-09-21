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
import { Baleno } from "../../../CarPicsUrl/CarPics";
import { TBaleno } from "../../../CarPicsUrl/Thumbnails";
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
  // const CarPrice = "₹ 5.97 Lakh";
  // const TopPic = Baleno;
  // const CarName = "Maruti Baleno";
  // const OnlyName = "Baleno";
  // const ThumPic = TBaleno;

  // const KeySpecification = [
  //   "₹ ₹ 5.97 Lakh onwards",
  //   "21.01 kmpl",
  //   "1197 cc",
  //   "Manual",
  //   "Petrol",
  //   "5 Seater",
  //   "3,995 mm L x 1,745 mm W x 1,510 mm H",
  // ];

  // const SafetyFeatures = [
  //   "Seat Belt Warning",
  //   "Anti-Lock Braking System",
  //   "2 Airbags",
  //   "EBD",
  //   "Speed Alert",
  // ];

  // const VarientPetrol = {
  //   varient1: [
  //     "Sigma",
  //     "1197  cc, Manual, Petrol, 21.01 kmpl",
  //     "Rs.5.97 Lakh*",
  //   ],
  //   varient2: [
  //     "Delta",
  //     "1197  cc, Manual, Petrol, 21.01 kmpl",
  //     "Rs.6.69 Lakh*",
  //   ],
  //   varient3: ["Zeta", "1197 cc, Manual, Petrol, 21.01 kmpl", "Rs.7.32 Lakh*"],
  //   varient4: [
  //     "Delta Dualjet",
  //     "1197 cc, Manual, Petrol, 21.01 kmpl",
  //     "Rs.7.57 Lakh*",
  //   ],
  //   varient5: [
  //     "Delta Automatic",
  //     "1197  cc, Manual, Petrol, 21.01 kmpl",
  //     "Rs.7.89 Lakh*",
  //   ],
  //   varient6: ["Alpha", "1197 cc, Manual, Petrol, 21.01 kmpl", "Rs.8.06 Lakh*"],
  //   varient7: [
  //     "Zeta Dualjet",
  //     "1197 cc, Manual, Petrol, 21.01 kmpl",
  //     "Rs.8.20 Lakh*",
  //   ],
  //   varient8: [
  //     "Zeta Automatic",
  //     "1197 cc, Manual, Petrol, 21.01 kmpl",
  //     "Rs.8.51 Lakh*",
  //   ],
  //   varient9: [
  //     "Alpha Automatic",
  //     "1197 cc, Manual, Petrol, 21.01 kmpl",
  //     "Rs.9.27 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: The Baleno carries savings of up to Rs 40,000 this July Maruti Baleno Price: Maruti has priced the premium hatchback between Rs 5.98 lakh and Rs 9.30 lakh (ex-showroom Delhi). Maruti Baleno Variants: It is offered in four trims: Sigma, Delta, Zeta, and Alpha. Maruti Baleno Engine and Transmission: It comes equipped with a 1.2-litre petrol engine (83PS/113Nm), mated to either a 5-speed MT or a CVT. The hatchback also gets a 1.2-litre Dualjet petrol engine with mild-hybrid tech (90PS/113Nm), paired with a 5-speed MT. Maruti claims a mileage of 21.01kmpl for the petrol-manual variants, while those with the CVT return 19.56kmpl. On the other hand, the mild-hybrid powertrain offers a claimed fuel efficiency of 23.87kmpl. Maruti Baleno Features: The Baleno is equipped with LED projector headlamps, a rearview camera, 16-inch alloy wheels, a 7-inch touchscreen infotainment system with Apple CarPlay and Android Auto, auto climate control, push-button stop/start, and keyless entry. Maruti Baleno Safety: Standard safety features include rear parking sensors, ABS with EBD, ISOFIX child seat anchors, and dual front airbags across all variants. Maruti Baleno Rivals: It rivals the Toyota Glanza, Volkswagen Polo, Honda Jazz, Hyundai i20, and Tata Altroz. Its petrol-hybrid variant has no direct rival.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "LED projector headlamps from Delta variant onwards. LEDs usually offer better visibility than halogens or bi-xenon units.",
  //     "Automatic climate control from Delta variant onwards. unlike a manual AC, automatic climate control allows the user to maintain a set temperature inside the cabin as per their needs.",
  //     "ISOFIX child seat anchors are standard across the range. This lets you attach a child seat on the back seat of the hatchback to offer kids below the age of 10 better safety.",
  //   ],
  //   cons: [
  //     "Could have been more rear passenger-centric: Misses out on side and curtain airbags, rear AC vents and rear armrest.",
  //     "Ride and Handling could have been better",
  //     "Lacks in Modern features",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Nexa Blue", "bg-blue-600"],
  //   color2: ["Premium Silver Metallic", "bg-gray-400"],
  //   color3: ["Pearl Artic White", "bg-white"],
  //   color4: ["Pearl Phoenix Red", "bg-red-600"],
  //   color5: ["Magma Grey Metallic", "bg-gray-800"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 5.81 Lakh onwards",
  //     "23.2 kmpl",
  //     "1197 cc",
  //     "Manual, Automatic",
  //     "Petrol",
  //     "5 Seater",
  //     "length of 3845, width of 1735 and a wheelbase of 2450",
  //     "https://imgd.aeplcdn.com/600x600/n/cw/ec/26742/swift-exterior-right-front-three-quarter-2.jpeg?q=85",
  //   ],
  //   comparisioncar2: [
  //     "₹ 7.34 Lakh onwards",
  //     "21.96 kmpl",
  //     "1197 cc",
  //     "Manual, Automatic",
  //     "Petrol",
  //     "5 Seater",
  //     "3,995 mm L x 1,745 mm W x 1,510 mm H",
  //     "https://images.financialexpress.com/2019/06/19-1.jpg",
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
  //     "What is the on road price of Baleno?",
  //     "The on-road price of Baleno in Delhi starts at ‎₹ 6.58 Lakh and goes upto ‎₹ 10.4 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount..",
  //   ],
  //   question2: [
  //     "Which car is better between Baleno and Swift?",
  //     "Baleno price starts at ₹ 6.69 Lakh ex-showroom and It comes with 1197 cc engine. Whereas Swift price starts at ₹ 5.81 Lakh ex-showroom and It comes with 1197 cc engine. Compare the two models to identify the best car for you.",
  //   ],
  //   question3: [
  //     "What is price of Baleno top model?",
  //     "Top model of Baleno is Alpha Automatic and the ex-showroom for Baleno Alpha Automatic is ₹ 9.27 Lakh.",
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
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/8378/1614747593719/front-left-side-47.jpg",
      "Swift",
      " ₹ 5.81 Lakh onwards",
    ],
    car2: [
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3A%2F%2Fcdni.autocarindia.com%2FExtraImages%2F20190606121831_Toyota-Glanza-silver.jpg&h=795&w=1200&c=0",
      "Toyota Glanza",
      "₹ 7.34 Lakh onwards0",
    ],
    car3: [
      "https://imgd.aeplcdn.com/1200x900/n/cw/ec/40530/i20-exterior-right-front-three-quarter-5.jpeg?q=85",
      "Hyundai i20",
      "₹ 6.91 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/0x0/n/cw/ec/32597/tata-altroz-right-front-three-quarter20.jpeg",
      "Altroz",
      "₹5.80 Lakhs onwards",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/35465/grand-i10-nios-exterior-right-front-three-quarter-2.jpeg?q=85",
      "i10 Nios",
      "₹5.24 lakhs onwards",
    ],
    car6: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Santro/7460/1596180579378/front-left-side-47.jpg",
      "Santro",
      "₹ 4.74 Lakh onwards",
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
        LinkCarName="baleno"
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
  return OneCarAllSpecs("baleno").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
