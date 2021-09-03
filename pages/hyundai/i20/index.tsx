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
import { i20 } from "../../../CarPicsUrl/CarPics";
import { Ti20 } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";

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

  // const CompanyName = "Hyundai";
  // const CarPrice = "₹ 6.91 Lakh";
  // const TopPic = i20;
  // const CarName = "Hyundai i20";
  // const OnlyName = "i20";
  // const ThumPic = Ti20;

  // const KeySpecification = [
  //   "₹ 6.91 Lakh onwards",
  //   "19.65 to 25.2 kmpl",
  //   "998 to 1493 cc",
  //   "Manual, Automatic (CVT), Clutchless Manual & Automatic (Dual Clutch)",
  //   "Petrol & Diesel",
  //   "5 Seater",
  //   "3,995 mm L x 1,775 mm W x 1,505 mm H",
  // ];

  // const SafetyFeatures = [
  //   "Impact Sensing Auto Door Unlock",
  //   "6 airbags",
  //   "ABS",
  //   "EBD",
  //   "Central Locking",
  //   "Emergency Stop Signal",
  //   "Driver & Passenger SeatBelt Reminder",
  //   "Speed Sensing Auto Door Lock",
  //   "Headlamp Escort Function",
  //   "ISOFIX",
  //   "Speed Alert System",
  //   "Driver & Passenger Side Seat Belt Pretensioners & Load Limiters",
  // ];

  // const VarientPetrol = {
  //   varient1: ["Magna", "1197 cc, Manual, Petrol, 20.35 kmpl", "Rs.6.91 Lakh*"],
  //   varient2: [
  //     "Sportz",
  //     "1197 cc, Manual, Petrol, 20.35 kmpl",
  //     "Rs.7.75 Lakh*",
  //   ],
  //   varient3: [
  //     "Sportz DT",
  //     "1197 cc, Manual, Petrol, 20.35 kmpl",
  //     "Rs.7.90 Lakh*",
  //   ],
  //   varient4: [
  //     "Sportz IVT",
  //     "1197 cc, Automatic, Petrol, 19.65 kmpl",
  //     "Rs.8.77 Lakh*",
  //   ],
  //   varient5: [
  //     "Sportz Turbo iMT",
  //     "998 cc, Manual, Petrol, 20.35 kmpl",
  //     "Rs.8.81 Lakh*",
  //   ],
  //   varient6: ["Asta", "1197 cc, Manual, Petrol, 20.35 kmpl", "Rs.8.86 Lakh*"],
  //   varient7: [
  //     "Sportz IVT DT",
  //     "1197 cc, Automatic, Petrol, 19.65 kmpl",
  //     "Rs.8.92 Lakh*",
  //   ],
  //   varient8: [
  //     "Sportz Turbo iMT DT",
  //     "998 cc, Manual, Petrol, 20.35 kmpl",
  //     "Rs.8.96 Lakh*",
  //   ],
  //   varient9: [
  //     "Asta DT",
  //     "1197 cc, Manual, Petrol, 20.35 kmpl",
  //     "Rs.9.01 Lakh*",
  //   ],
  //   varient10: [
  //     "Asta Opt",
  //     "1197 cc, Manual, Petrol, 20.35 kmpl",
  //     "Rs.9.41 Lakh*",
  //   ],
  //   varient11: [
  //     "Asta Opt DT",
  //     "1197 cc, Manual, Petrol, 20.35 kmpl",
  //     "Rs.9.56 Lakh*",
  //   ],
  //   varient12: [
  //     "Asta IVT",
  //     "1197 cc, Automatic, Petrol, 19.65 kmpl",
  //     "Rs.9.88 Lakh*",
  //   ],
  //   varient13: [
  //     "Asta Turbo iMT",
  //     "998 cc, Manual, Petrol, 20.35 kmpl",
  //     "Rs.9.91 Lakh*",
  //   ],
  //   varient14: [
  //     "Asta IVT DT",
  //     "1197 cc, Automatic, Petrol, 19.65 kmpl",
  //     "Rs.10.03 Lakh*",
  //   ],
  //   varient15: [
  //     "Asta Turbo iMT DT",
  //     "1197 cc, Manual, Petrol, 20.35 kmpl",
  //     "Rs.10.06 Lakh*",
  //   ],
  //   varient16: [
  //     "Asta Turbo DCT",
  //     "998 cc, Automatic, Petrol, 20.28 kmpl",
  //     "Rs.10.74 Lakh*",
  //   ],
  //   varient17: [
  //     "Asta Turbo DCT DT",
  //     "998 cc, Automatic, Petrol, 20.28 kmpl",
  //     "Rs.10.89 Lakh*",
  //   ],
  //   varient18: [
  //     "Asta Opt Turbo DCT",
  //     "998 cc, Automatic, Petrol, 20.28 kmpl",
  //     "Rs.11.25 Lakh*",
  //   ],
  //   varient19: [
  //     "Asta Opt Turbo DCT DT",
  //     "998 cc, Automatic, Petrol, 20.28 kmpl",
  //     "Rs.11.40 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {
  //   varient1: [
  //     "Magna Diesel",
  //     "1493 cc, Manual, Diesel, 25.2 kmpl",
  //     "Rs.8.21 Lakh*",
  //   ],

  //   varient2: [
  //     "Sportz Diesel",
  //     "1493 cc, Manual, Diesel, 25.2 kmpl",
  //     "Rs.9.01 Lakh*",
  //   ],

  //   varient3: [
  //     "Sportz Diesel DT",
  //     "1493 cc, Manual, Diesel, 25.2 kmpl",
  //     "Rs.9.16 Lakh*",
  //   ],

  //   varient4: [
  //     "Asta Opt Diesel",
  //     "1493 cc, Manual, Diesel, 25.2 kmpl",
  //     "Rs.10.61 Lakh*",
  //   ],

  //   varient5: [
  //     "Asta Opt Diesel DT",
  //     "1493 cc, Manual, Diesel, 25.2 kmpl",
  //     "Rs.10.76 Lakh*",
  //   ],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Diesel (1956 cc)", "Automatic", "20.65 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: The i20 has received a price hike of up to Rs 8,000. Hyundai i20 Price: It is priced between Rs 6.91 lakh and Rs 11.40 lakh (ex-showroom Delhi). Hyundai i20 Variants: The i20 is sold in four trims: Magna, Sportz, Asta, and Asta (O). Hyundai i20 Engine and Transmission: It gets the same three engines as the Venue: two petrol and a diesel. The first petrol is a 1.2-litre naturally aspirated engine (83PS/114Nm) and the other is a 1-litre turbo-petrol (120PS/172Nm). The diesel is a 1.5-litre engine (100PS/240Nm). While the 1.2-litre petrol engine is mated to either a 5-speed MT or CVT, the 1-litre turbo-petrol unit gets either a 6-speed iMT (clutchless manual) or a 7-speed DCT, like the Venue. The diesel engine, on the other hand, is paired with a 6-speed MT only. Hyundai i20 Features: The i20 gets LED headlamps, a 10.25-inch touchscreen infotainment system with Apple CarPlay and Android Auto, an air purifier, BlueLink connected car tech, and a sunroof. Hyundai i20 Safety: Safety features include six airbags, rear parking sensors, and electronic stability control. Hyundai i20 Rivals: Hyundai’s premium hatchback competes with the Honda Jazz, Tata Altroz, Volkswagen Polo, Maruti Baleno, and Toyota Glanza.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Looks edgy and aggressive",
  //     "Powertrain options for every need",
  //     "Loaded with good quality features",
  //   ],
  //   cons: [
  //     "Turbo-petrol variants priced at a premium",
  //     "Brakes feel spongy",
  //     "Suspension should have been better damped",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Fiery Red", "bg-red-800"],
  //   color2: ["Typhoon Silver", "bg-gray-900"],
  //   color3: ["Metallic Copper", "bg-gray-600"],
  //   color4: ["Fiery Red Turbo", "bg-white"],
  //   color5: ["Starry Night", "bg-blue-800"],
  //   color6: ["Polar White", "bg-red-400"],
  //   color7: ["Polar White with Black Roof", "bg-red-400"],
  //   color8: ["Titan Grey", "bg-red-400"],
  //   color9: ["Fiery Red with Black Roof", "bg-red-400"],
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
  //     "6 Airbags",
  //     "",
  //   ],
  // };

  // const faqs = {
  //   question1: [
  //     "What is the on road price of i20?",
  //     "The on-road price of i20 in Delhi starts at ‎₹ 7.86 Lakh and goes upto ‎₹ 13.21 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between i20 and Altroz?",
  //     "i20 price starts at ₹ 6.91 Lakh ex-showroom and It comes with 1197 cc engine. Whereas Altroz price starts at ₹ 5.84 Lakh ex-showroom and It comes with 1199 cc engine",
  //   ],
  //   question3: [
  //     "What is the mileage of Hyundai i20?",
  //     "The Hyundai i20 mileage is 19.65 - 25.2 kmpl.",
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
      "https://live.staticflickr.com/7840/45954179625_28f5d35cbf_b.jpg",
      "Baleno",
      " ₹ 5.97 Lakh onwards",
    ],
    car2: [
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3A%2F%2Fcdni.autocarindia.com%2FExtraImages%2F20190606121831_Toyota-Glanza-silver.jpg&h=795&w=1200&c=0",
      "Toyota Glanza",
      "₹ 7.34 Lakh onwards0",
    ],
    car3: [
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/8378/1614747593719/front-left-side-47.jpg",
      "Swift",
      " ₹ 5.81 Lakh onwards",
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
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41564/hyundai-creta-right-front-three-quarter9.jpeg?q=85",
      "Creta",
      "₹ 10.15 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/35455/venue-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Venue",
      "₹ 6.99 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40530/i20-exterior-right-front-three-quarter-5.jpeg?q=85",
      "i20",
      "₹ 6.91 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/35465/grand-i10-nios-exterior-right-front-three-quarter-2.jpeg?q=85",
      "i10 Nios",
      "₹ 5.28 Lakh onwards",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41197/hyundai-verna-right-front-three-quarter7.jpeg?q=85",
      "Verna",
      "₹ 9.28 Lakh onwards",
    ],
    car6: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40530/i20-exterior-right-front-three-quarter-5.jpeg?q=85",
      "i20",
      "₹ 6.91 Lakh onwards",
    ],
    car7: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=85",
      "Aura",
      "₹ 6.00 Lakh onwards",
    ],
    car8: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32940/santro-exterior-right-front-three-quarter-138782.jpeg?q=85",
      "Santro",
      "₹ 4.77 Lakh onwards",
    ],
    car9: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/46812/alcazar-exterior-right-front-three-quarter.jpeg?q=85",
      "Alcazar",
      "₹ 16.30 Lakh onwards",
    ],
    car10: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41138/elantra-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Elantra",
      "₹ 17.86 Lakh onwards",
    ],
    car11: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/29580/Hyundai-Kona-Electric-Right-Front-Three-Quarter-162185.jpg?wm=0&q=85",
      "Kona Electric",
      "₹ 23.79 Lakh onwards",
    ],
    car12: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39082/tucson-exterior-right-front-three-quarter.jpeg?q=85",
      "Tucson",
      "₹ 22.69 Lakh onwards",
    ],
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/100121/exterior-right-front-three-quarter.jpeg?isig=0&q=85",
  //     "i20 N Line",
  //     "₹ 11.00 - 13.00 Lakh",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/51891/ax1-micro-suv-exterior-left-front-three-quarter.jpeg?q=85",
  //     "AX1 micro-SUV",
  //     "₹ 4.00 - 7.00 Lakh",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/49892/new-kona-exterior-front-view.jpeg?q=85",
  //     "New Kona",
  //     "₹ 23.00 - 25.00 Lakh",
  //   ],
  //   car4: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/47331/hyundai-new-elantra-left-side-view0.jpeg?q=85",
  //     "New Elantra",
  //     "₹ 16.00 - 20.00 Lakh",
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
        LinkCarName="i20"
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
  return OneCarAllSpecs("i20").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
