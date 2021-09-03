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
import { Jazz } from "../../../CarPicsUrl/CarPics";
import { TJazz } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  AmazeBasicInfoCard,
  City4BasicInfoCard,
  CityBasicInfoCard,
  JazzBasicInfoCard,
  WRVBasicInfoCard,
} from "../../../AllCarBasicInfo/honda";
import { SwiftBasicInfoCard } from "../../../AllCarBasicInfo/marutisuzuki";
import { GlanzaBasicInfoCard } from "../../../AllCarBasicInfo/toyota";
import {
  i20BasicInfoCard,
  NiosBasicInfoCard,
  SantroBasicInfoCard,
} from "../../../AllCarBasicInfo/hyundai";
import { AltrozBasicInfoCard } from "../../../AllCarBasicInfo/tata";

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

  const SimilarCars = {
    car1: SwiftBasicInfoCard,
    car2: GlanzaBasicInfoCard,
    car3: i20BasicInfoCard,
    car4: AltrozBasicInfoCard,
    car5: NiosBasicInfoCard,
    car6: SantroBasicInfoCard,
  };

  const ThatBrandCars = {
    car1: AmazeBasicInfoCard,
    car2: CityBasicInfoCard,
    car3: WRVBasicInfoCard,
    car4: JazzBasicInfoCard,
    car5: City4BasicInfoCard,
  };

  const UpcommingCarBrand = joy.UpcommingCarBrand;

  // const CompanyName = "Honda";
  // const CarPrice = "₹ 7.75 Lakh";
  // const TopPic = Jazz;
  // const CarName = "Honda Jazz";
  // const OnlyName = "Jazz";
  // const ThumPic = TJazz;

  // const KeySpecification = [
  //   "₹ 7.75 Lakh onwards",
  //   "16.6 to 17.1 kmpl",
  //   "1199 cc",
  //   "Manual & Automatic (CVT)",
  //   "Petrol",
  //   "5 Seater",
  //   "3989 mm L x 1694 mm W x 1544 mm H",
  // ];

  // const SafetyFeatures = [
  //   "ABS with EBD.",
  //   "Dual Front SRS Airbags (Driver and Passenger)",
  //   "Rear Parking Camera.",
  //   "ACETM Body Structure.",
  //   "Driver Side Window One Touch up/down with Pinch Guard.",
  //   "Immobilizer Anti-Theft System/Impact Mitigating Headrests.",
  //   "Rear Parking Sensors.",
  // ];

  // const VarientPetrol = {
  //   varient1: ["V", "1199 cc, Manual, Petrol, 16.6 kmpl", "Rs.7.65 Lakh*"],
  //   varient2: ["VX", "1199 cc, Manual, Petrol, 16.6 kmpl", "Rs.8.34 Lakh*"],
  //   varient3: [
  //     "V CVT",
  //     "1199 cc, Automatic AMT, Petrol, 17.1 kmpl",
  //     "Rs.8.74 Lakh*",
  //   ],
  //   varient4: ["ZX", "1199 cc, Manual, Petrol, 16.6 kmpl", "Rs.8.98 Lakh*"],
  //   varient5: [
  //     "VX CVT",
  //     "1199 cc, Automatic, Petrol, 17.1 kmpl",
  //     "Rs.9.34 Lakh*",
  //   ],
  //   varient6: [
  //     "ZX CVT",
  //     "1199 cc, Automatic, Petrol, 17.1 kmpl",
  //     "Rs.9.89 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "23.26 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: The prices of the Jazz have been increased by up to Rs 11,000. Honda Jazz Price: It is priced from Rs 7.65 lakh to Rs 9.89 lakh (ex-showroom Delhi). Honda Jazz Variants: Honda sells the Jazz in three trims: V, VX, and ZX. Honda Jazz Engine and Transmission: The Jazz gets a 1.2-litre petrol engine (90PS/110Nm), mated to either a 5-speed manual or a 7-step CVT gearbox. Their claimed fuel efficiency figures stand at 16.6kmpl and 17.1kmpl respectively. Honda Jazz Features: It gets a sunroof, cruise control, LED headlamps and fog lamps, and paddle shifters (CVT variants only). Honda has also equipped the Jazz with a 7-inch touchscreen infotainment system with Android Auto and Apple CarPlay, auto AC, and 15-inch alloy wheels. Honda Jazz Safety: Standard safety features on offer include dual front airbags, rear parking sensors, and ABS with EBD. Honda Jazz Rivals: It rivals the Tata Altroz, Hyundai i20, Maruti Suzuki Baleno, Toyota Glanza, and Volkswagen Polo.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Spacious and user-friendly cabin",
  //     "Easy to drive, with an optional petrol CVT",
  //     "Versatile and practical package",
  //   ],
  //   cons: [
  //     "No diesel option",
  //     "Lacks some equipment",
  //     "Expensive amongst rivals",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["PLATINUM WHITE PEARL", "bg-blue-600"],
  //   color2: ["Lunar Silver Metallic", "bg-gray-400"],
  //   color3: ["Modern Steel Metallic", "bg-white"],
  //   color4: ["Golden Brown Metallic", "bg-brown-600"],
  //   color5: ["Radiant Red Metallic", "bg-gray-800"],
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
  //     "What is the on road price of Jazz?",
  //     "The on-road price of Jazz in Delhi starts at ‎₹ 8.57 Lakh and goes upto ‎₹ 11.01 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Jazz and WR-V?",
  //     "Jazz price starts at ₹ 7.75 Lakh ex-showroom and It comes with 1199 cc engine. Whereas WR-V price starts at ₹ 8.90 Lakh ex-showroom and It comes with 1199 cc engine",
  //   ],
  //   question3: [
  //     "What is the mileage of Honda Jazz?",
  //     "The Honda Jazz mileage is 16.6 - 17.1 kmpl.",
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

  // const SimilarCars = {
  //   car1: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/8378/1614747593719/front-left-side-47.jpg",
  //     "Swift",
  //     " ₹ 5.81 Lakh onwards",
  //   ],
  //   car2: [
  //     "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3A%2F%2Fcdni.autocarindia.com%2FExtraImages%2F20190606121831_Toyota-Glanza-silver.jpg&h=795&w=1200&c=0",
  //     "Toyota Glanza",
  //     "₹ 7.34 Lakh onwards0",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/1200x900/n/cw/ec/40530/i20-exterior-right-front-three-quarter-5.jpeg?q=85",
  //     "Hyundai i20",
  //     "₹ 6.91 Lakh onwards",
  //   ],
  //   car4: [
  //     "https://imgd.aeplcdn.com/0x0/n/cw/ec/32597/tata-altroz-right-front-three-quarter20.jpeg",
  //     "Altroz",
  //     "₹5.80 Lakhs onwards",
  //   ],
  //   car5: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/35465/grand-i10-nios-exterior-right-front-three-quarter-2.jpeg?q=85",
  //     "i10 Nios",
  //     "₹5.24 lakhs onwards",
  //   ],
  //   car6: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Santro/7460/1596180579378/front-left-side-47.jpg",
  //     "Santro",
  //     "₹ 4.74 Lakh onwards",
  //   ],
  // };

  // const ThatBrandCars = {
  //   car1: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/33276/amaze-exterior-right-front-three-quarter-2.jpeg?q=85",
  //     "Amaze",
  //     "₹ 6.34 Lakh onwards",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/40535/all-new-city-exterior-right-front-three-quarter.jpeg?q=85",
  //     "City",
  //     "₹ 11.19 Lakh onwards",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/45732/wr-v-exterior-right-front-three-quarter.jpeg?q=85",
  //     "WRV",
  //     "₹ 8.90 Lakh onwards",
  //   ],
  //   car4: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/46891/jazz-exterior-right-front-three-quarter.jpeg?q=85",
  //     "Jazz",
  //     "₹ 7.75 Lakh onwards",
  //   ],
  //   car5: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/26755/city-4th-generation-exterior-right-front-three-quarter.jpeg?q=85",
  //     "City 4th Gen",
  //     "₹ 9.33 Lakh onwards",
  //   ],
  // };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/45951/amaze-facelift-exterior-front-view-2.jpeg?isig=0&q=85",
  //     "Amaze Facelift 2021",
  //     "₹ 6.35 - 10.10 Lakh",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/43195/Honda-New-Jazz-Exterior-176189.jpg?wm=1&q=85",
  //     "New Gen Jazz",
  //     "₹ 8.00 - 12.00 Lakh",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/43195/Honda-New-Jazz-Exterior-176189.jpg?wm=1&q=85",
  //     "New Gen Jazz",
  //     "₹ 8.00 - 12.00 Lakh",
  //   ],
  //   car4: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/39751/Honda-HRV-Exterior-169828.jpg?wm=0&q=85",
  //     "HRV",
  //     "₹ 12.00 - 16.00 Lakh",
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
        LinkCarName="jazz"
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
  return OneCarAllSpecs("jazz").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
