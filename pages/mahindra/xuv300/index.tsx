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
import { Xuv300 } from "../../../CarPicsUrl/CarPics";
import { TXUV300 } from "../../../CarPicsUrl/Thumbnails";
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
  // const CarPrice = "₹ 7.96 Lakh";
  // const TopPic = Xuv300;
  // const CarName = "Mahindra XUV 300";
  // const OnlyName = "XUV 300";
  // const ThumPic = TXUV300;

  // const KeySpecification = [
  //   "₹ 7.96 Lakh onwards",
  //   "17 to 20 kmpl",
  //   "1197 to 1497 cc",
  //   "Manual & AMT",
  //   "Petrol & Diesel",
  //   "5 Seater",
  //   "3,995 mm L x 1,821 mm W x 1,627 mm H",
  // ];

  // const SafetyFeatures = [
  //   "5 star rating in Global NCAP",
  //   "7 Airbags (Driver, Passenger, 2 Curtain, Driver Knee, Driver Side, Front Passenger Side)",

  //   "Rear parking sensors",

  //   "Seatbelt reminders for the driver and front passenger",

  //   "A speed warning system (at 80kmph and 120kmph)",

  //   "A manual override for the central locking system",
  //   "Tyre Pressure Monitoring System (TPMS)",
  // ];

  // const VarientPetrol = {
  //   varient1: ["W4", "1197 cc, Manual, Petrol, 17.0 kmpl", "Rs.7.95 Lakh*"],

  //   varient2: [
  //     "W6 Sunroof",
  //     "1197 cc, Manual, Petrol, 17.0 kmpl",
  //     "Rs.9.91 Lakh*",
  //   ],
  //   varient3: [
  //     "W6 AMT Sunroof",
  //     "1197 cc, Automatic, Petrol, 17.0 kmpl",
  //     "Rs.10.47 Lakh*",
  //   ],

  //   varient4: ["W8", "1197 cc, Manual, Petrol, 17.0 kmpl", "Rs.10.53 Lakh*"],

  //   varient5: [
  //     "W8 Option",
  //     "1197 cc, Manual, Petrol, 17.0 kmpl",
  //     "Rs.11.70 Lakh*",
  //   ],

  //   varient6: [
  //     "W8 Option Dual Tone",
  //     "1197 cc, Manual, Petrol, 17.0 kmpl",
  //     "Rs.11.85 Lakh*",
  //   ],
  //   varient7: [
  //     "Turbo Sportz",
  //     "1197 cc, Manual, Petrol, 17.0 kmpl",
  //     "Rs.12.34 Lakh*",
  //   ],
  //   varient8: [
  //     "W8 Option AMT",
  //     "1197 cc, Automatic, Petrol, 17.0 kmpl",
  //     "Rs.12.36 Lakh*",
  //   ],

  //   varient9: [
  //     "W8 Option AMT Dual Tone",
  //     "1197 cc, Automatic, Petrol, 17.0 kmpl",
  //     "Rs.12.51 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {
  //   varient1: [
  //     "W4 Diesel",
  //     "1497 cc, Manual, Diesel, 20.0 kmpl",
  //     "Rs.9.00 Lakh*",
  //   ],
  //   varient2: [
  //     "W6 Diesel Sunroof",
  //     "1497 cc, Manual, Diesel, 20.0 kmpl",
  //     "Rs.10.52 Lakh*",
  //   ],
  //   varient3: [
  //     "W6 AMT Diesel Sunroof",
  //     "1497 cc, Automatic, Diesel, 20.0 kmpl",
  //     "Rs.11.17 Lakh*",
  //   ],
  //   varient4: [
  //     "W8 Diesel Sunroof",
  //     "1497 cc, Manual, Diesel, 20.0 kmpl",
  //     "Rs.11.72 Lakh*",
  //   ],
  //   varient5: [
  //     "W8 Option Diesel",
  //     "1497 cc, Manual, Diesel, 20.0 kmpl",
  //     "Rs.12.51 Lakh*",
  //   ],
  //   varient6: [
  //     "W8 Option Dual Tone Diesel",
  //     "1497 cc, Manual, Diesel, 20.0 kmpl",
  //     "Rs.12.66 Lakh*",
  //   ],
  //   varient7: [
  //     "W8 AMT Optional Diesel",
  //     "1497 cc, Automatic, Diesel, 20.0 kmpl",
  //     "Rs.13.18 Lakh*",
  //   ],
  //   varient8: [
  //     "W8 AMT Option Diesel Dual Tone",
  //     "1497 cc, Automatic, Diesel, 20.0 kmpl",
  //     "Rs.13.33 Lakh*",
  //   ],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "23.26 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: Mahindra is offering benefits of up to Rs 44,000 on the XUV300 this July. Mahindra XUV300 Price: The XUV300 is priced between Rs 8 lakh and Rs 13.33 lakh (ex-showroom). Mahindra XUV300 Variants: Mahindra retails the sub-4m SUV in four trims: W4, W6, W8, and W8(O). Mahindra XUV300 Seating Capacity: It is offered in a five-seating layout. Mahindra XUV300 Engine and Transmission: It gets 1.2-litre turbo-petrol (110PS/200Nm) and 1.5-litre diesel engines (117PS/300Nm). Both can be paired with either a 6-speed MT or an AMT gearbox. Mahindra XUV300 Features: The SUV gets a sunroof, cruise control, a 7-inch touchscreen infotainment system with Android Auto and Apple CarPlay, rain-sensing wipers, auto AC, and connected car tech. Mahindra XUV300 Safety: Safety features include up to seven airbags, corner braking control, and front and rear parking sensors. Mahindra XUV300 Rivals: It takes on the Ford EcoSport, Hyundai Venue, Renault Kiger, Tata Nexon, Toyota Urban Cruiser, Nissan Magnite, Kia Sonet, and the Maruti Suzuki Vitara Brezza.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Comfortable even over bad roads.",
  //     "Feels premium because of class-leading safety and convenience features.",
  //     "Stable and fun to drive because of steering and good grip.",
  //   ],
  //   cons: [
  //     "Premium experience let down by quality issues like poorly fitting panels, mushy switches and flimsy stalks.",
  //     "Small boot will be a hassle if it’s the only car in the family.",
  //     "Cramped footwell, no space for dead pedal for driver",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Pearl White", "bg-blue-600"],
  //   color2: ["Aquamarine", "bg-gray-400"],
  //   color3: ["Dual-Tone Red Rage", "bg-gray-400"],
  //   color4: ["Dual-Tone Aquamarine", "bg-gray-400"],
  //   color5: ["Red Rage", "bg-gray-400"],
  //   color6: ["D'Sat Silver", "bg-gray-400"],
  //   color7: ["Napoli Black", "bg-gray-400"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 8.19 Lakh onwards",
  //     "14.7 to 21.7 kmpl",
  //     "1496 to 1498 cc",
  //     "Manual & Automatic (Torque Converter)",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "3,998 mm L x 1,765 mm W x 1,647 mm H",
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/40369/Ford-EcoSport-Right-Front-Three-Quarter-159249.jpg?wm=0&q=85",
  //   ],
  //   comparisioncar2: [
  //     "₹ 6.92 Lakh Onwards",
  //     "17.52 to 23.4 kmpl",
  //     "998 to 1493 cc",
  //     "Clutchless Manual & Automatic (Dual Clutch)",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "3,995 mm L x 1,770 mm W x 1,590 mm H",
  //     "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/7931/1626089251600/front-left-side-47.jpg",
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
  //     "What is the on road price of XUV300?",
  //     "The on-road price of XUV300 in Delhi starts at ‎₹ 8.97 Lakh and goes upto ‎₹ 15.91 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between XUV300 and Nexon?",
  //     "XUV300 price starts at ₹ 7.96 Lakh ex-showroom and It comes with 1197 cc engine. Whereas Nexon price starts at ₹ 7.29 Lakh ex-showroom and It comes with 1199 cc engine.",
  //   ],
  //   question3: [
  //     "What is the mileage of Mahindra XUV300?",
  //     "The Mahindra XUV300 mileage is 17 - 20 kmpl.",
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
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/7931/1626089251600/front-left-side-47.jpg",
      "Venue",
      "₹ 6.92 Lakh Onwards",
    ],
    car2: [
      "https://img.etimg.com/thumb/msid-77905386,width-640,resizemode-4,imgsize-480363/electric-sunroof.jpg",
      "Nexon",
      "₹ 7.20 Lakh onwards0",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47016/urban-cruiser-exterior-right-front-three-quarter.jpeg?q=85",
      "Urban Cruiser",
      "₹ 8.63 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41523/sonet-exterior-right-front-three-quarter-110.jpeg?q=85",
      "Sonet",
      "₹ 6.79 Lakh onwards",
    ],

    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45795/magnite-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Magnite",
      "₹ 5.59 Lakh onwards",
    ],
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
        LinkCarName="xuv300"
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
  return OneCarAllSpecs("xuv300").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
