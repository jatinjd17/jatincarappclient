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
import { Kiger } from "../../../CarPicsUrl/CarPics";
import { TKiger } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  KwidBasicInfoCard,
  TriberBasicInfoCard,
  KigerBasicInfoCard,
  DusterBasicInfoCard,
} from "../../../AllCarBasicInfo/renault";

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

  // const CompanyName = "Renault";
  // const CarPrice = "₹ 5.64 Lakh";
  // const TopPic = Kiger;
  // const CarName = "Renault Kiger";
  // const OnlyName = "Kiger";
  // const ThumPic = TKiger;

  // const KeySpecification = [
  //   "₹ 5.64 Lakh onwards",
  //   "20 kmpl",
  //   "999 cc",
  //   "Manual, AMT & Automatic (CVT)",
  //   "Petrol",
  //   "4 Seater",
  //   "3,991 mm L x 1,750 mm W x 1,605 mm H",
  // ];

  // const SafetyFeatures = [
  //   "ABS (Anti-Lock Braking System)",
  //   "EBD (Electronic BrakeForce Distribution)",
  //   "brake assist",
  // ];

  // const VarientPetrol = {
  //   varient1: ["RXE", "999 cc, Manual, Petrol, 18.48 kmpl", "Rs.5.64 Lakh*"],
  //   varient2: ["RXE DT", "999 cc, Manual, Petrol, 18.48 kmpl", "Rs.5.84 Lakh*"],
  //   varient3: ["RXL", "999 cc, Manual, Petrol, 18.48 kmpl", "Rs.6.54 Lakh*"],
  //   varient4: ["RXL DT", "999 cc, Manual, Petrol, 18.48 kmpl", "Rs.6.74 Lakh*"],
  //   varient5: ["RXT", "999 cc, Manual, Petrol, 18.48 kmpl", "Rs.7.02 Lakh*"],
  //   varient6: [
  //     "RXL AMT",
  //     "999 cc, Automatic, Petrol, 19.03 kmpl",
  //     "Rs.7.04 Lakh*",
  //   ],
  //   varient7: [
  //     "RXT DT",
  //     "999 cc, Automatic, Petrol, 18.48 kmpl",
  //     "Rs.7.22 Lakh*",
  //   ],
  //   varient8: [
  //     "RXL AMT DT",
  //     "999 cc, Automatic, Petrol, 19.03 kmpl",
  //     "Rs.7.24 Lakh*",
  //   ],
  //   varient9: [
  //     "RXT Opt",
  //     "999 cc, Automatic, Petrol, 18.48 kmpl",
  //     "Rs.7.37 Lakh*",
  //   ],
  //   varient10: [
  //     "RXT AMT",
  //     "999 cc, Automatic, Petrol, 19.03 kmpl",
  //     "Rs.7.52 Lakh*",
  //   ],
  //   varient11: [
  //     "RXL Turbo",
  //     "999 cc, Automatic, Petrol, 18.24 kmpl",
  //     "Rs.7.64 Lakh*",
  //   ],
  //   varient12: [
  //     "RXT AMT DT",
  //     "999 cc, Automatic, Petrol, 19.03 kmpl",
  //     "Rs.7.72 Lakh*",
  //   ],

  //   varient13: [
  //     "RXL Turbo DT",
  //     "999 cc, Automatic, Petrol, 18.24 kmpl",
  //     "Rs.7.84 Lakh*",
  //   ],
  //   varient14: [
  //     "RXT AMT Opt",
  //     "999 cc, Automatic, Petrol, 19.03 kmpl",
  //     "Rs.7.87 Lakh*",
  //   ],
  //   varient15: [
  //     "RXZ",
  //     "999 cc, Automatic, Petrol, 18.48 kmpl",
  //     "Rs.7.91 Lakh*",
  //   ],
  //   varient16: [
  //     "RXZ DT",
  //     "999 cc, Automatic, Petrol, 18.48 kmpl",
  //     "Rs.8.11 Lakh*",
  //   ],
  //   varient17: [
  //     "RXT Turbo",
  //     "999 cc, Automatic, Petrol, 18.24 kmpl",
  //     "Rs.8.12 Lakh*",
  //   ],
  //   varient18: [
  //     "RXT Turbo DT",
  //     "999 cc, Automatic, Petrol, 18.24 kmpl",
  //     "Rs.8.32 Lakh*",
  //   ],
  //   varient19: [
  //     "RXZ AMT",
  //     "999 cc, Automatic, Petrol, 19.03 kmpl",
  //     "Rs.8.41 Lakh*",
  //   ],
  //   varient20: [
  //     "RXZ AMT DT",
  //     "999 cc, Automatic, Petrol, 19.03 kmpl",
  //     "Rs.8.61 Lakh*",
  //   ],
  //   varient21: [
  //     "RXT Turbo CVT",
  //     "999 cc, Automatic, Petrol, 20.0 kmpl",
  //     "Rs.9.00 Lakh*",
  //   ],
  //   varient22: [
  //     "RXZ Turbo",
  //     "999 cc, Automatic, Petrol, 18.24 kmpl",
  //     "Rs.9.01 Lakh*",
  //   ],
  //   varient23: [
  //     "RXT Turbo CVT DT",
  //     "999 cc, Automatic, Petrol, 20.0 kmpl",
  //     "Rs.9.20 Lakh*",
  //   ],
  //   varient24: [
  //     "RXZ Turbo DT",
  //     "999 cc, Automatic, Petrol, 18.24 kmpl",
  //     "Rs.9.21 Lakh*",
  //   ],
  //   varient25: [
  //     "RXZ Turbo CVT",
  //     "999 cc, Automatic, Petrol, 20.0 kmpl",
  //     "Rs.9.89 Lakh*",
  //   ],
  //   varient26: [
  //     "RXZ Turbo CVT DT",
  //     "999 cc, Automatic, Petrol, 20.0 kmpl",
  //     "Rs.10.09 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (999 cc)", "Automatic (Dual Clutch)", "16.42 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: Renault has launched a new RXT (O) trim in the Kiger’s lineup. Renault Kiger Price: The Kiger is priced from Rs 5.64 lakh to Rs 10.09 lakh (ex-showroom Delhi). Renault Kiger Variants: It is available in five trims: RXE, RXL, RXT, RXT (O), and RXZ. Renault Kiger Seating Capacity: The Kiger is a 5-seater. Renault Kiger Engine and Transmission: It is a petrol-only offering like its cousin, the Nissan Magnite. It comes with two engine options: 1.0-litre naturally aspirated (72PS/96Nm) and 1.0-litre turbo-petrol (100PS/160Nm) units. The former is mated to either a 5-speed MT or an AMT, while the latter gets a 5-speed MT and an optional 5-speed CVT. Renault Kiger Features: It comes with push-button start/stop, LED headlamps, an 8-inch touchscreen system with wireless Android Auto and Apple CarPlay, wireless charging, auto climate control, and a PM 2.5 air filter. Renault Kiger Safety: Passenger safety is covered by up to four airbags, ABS with EBD, and rear parking sensors. Renault Kiger Rivals: The SUV rivals the Kia Sonet, Toyota Urban Cruiser, Ford EcoSport, Maruti Suzuki Vitara Brezza, Hyundai Venue, Mahindra XUV300, Nissan Magnite, and Tata Nexon.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Quirky design stands out. Especially in loud colours like red and blue.",
  //     "Super spacious cabin makes it a genuine family car.",
  //     "405-litre boot is the largest in its class.",
  //   ],
  //   cons: [
  //     "Interior design looks plain and the cabin could do with livelier colours.",
  //     "Feel good features are reserved just for the top RxZ trim",
  //     "Cabin insulation could be better",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Caspian Blue", "bg-blue-600"],
  //   color2: ["Ice Cool White", "bg-white-800"],
  //   color3: ["Moonlight Silver", "bg-gray-700"],
  //   color4: ["Planet Grey", "bg-gray-300"],
  //   color5: ["Mahogany Brown", "bg-brown-800"],
  //   color6: ["Caspian Blue with Black roof", "bg-blue-800"],
  //   color7: ["PRadiant Red with Black roof", "bg-red-800"],
  //   color8: ["Ice Cool White with Black roof", "bg-white-800"],
  //   color9: ["Moonlight Silver with Black roof", "bg-gray-800"],
  //   color10: ["Planet Grey with Black roof", "bg-gray-800"],
  //   color11: ["Mahogany Brown with Black roof", "bg-brown-800"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 6.92 Lakh Onwards",
  //     "17.52 to 23.4 kmpl",
  //     "998 to 1493 cc",
  //     "Clutchless Manual & Automatic (Dual Clutch)",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "3,995 mm L x 1,770 mm W x 1,590 mm H",
  //     "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/7931/1626089251600/front-left-side-47.jpg",
  //   ],
  //   comparisioncar2: [
  //     "₹7.20 Lakh onwards",
  //     "16 to 22.4 kmpl",
  //     "1199 to 1497 cc",
  //     "Manual & AMT",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "3993 mm L x 1811 mm W x 1606 mm H, 2498mm WB",
  //     "https://img.etimg.com/thumb/msid-77905386,width-640,resizemode-4,imgsize-480363/electric-sunroof.jpg",
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
  //     "What is the on road price of Kiger?",
  //     "The on-road price of Kiger in Delhi starts at ‎₹ 6.25 Lakh and goes upto ‎₹ 11.79 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Kiger and Magnite?",
  //     "Kiger price starts at ₹ 5.64 Lakh ex-showroom and It comes with 999 cc engine. Whereas Magnite price starts at ₹ 5.59 Lakh ex-showroom and It comes with 999 cc engine. Compare the two models to identify the best car for you.",
  //   ],
  //   question3: [
  //     "What is price of Kiger top model?",
  //     "Top model of Kiger is RXZ Turbo CVT Dual Tone and the ex-showroom for Kiger RXZ Turbo CVT Dual Tone is ₹ 10.09 Lakh.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/26918/xuv300-exterior-right-front-three-quarter-148706.jpeg?q=85",
      "XUV300",
      "₹ 7.96 Lakh onwards",
    ],
  };

  const ThatBrandCars = {
    car1: KwidBasicInfoCard,
    car2: TriberBasicInfoCard,
    car3: KigerBasicInfoCard,
    car4: DusterBasicInfoCard,
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Zoe/6278/1581400662093/front-left-side-47.jpg?tr=w-456",
  //     "Renault Zoe",
  //     "Rs.8.00 Lakh*",
  //   ],
  //   car2: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Renault-Kwid-EV/6214/1555414583232/front-left-side-47.jpg?tr=w-456",
  //     "Renault K-ZE",
  //     "Rs.10.00 Lakh*",
  //   ],
  //   car3: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Renault-Arkana/6573/front-left-side-47.jpg?tr=w-456",
  //     "Renault Arkana",
  //     "Rs.10.00 Lakh",
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
        LinkCarName="kiger"
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
  return OneCarAllSpecs("kiger").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
