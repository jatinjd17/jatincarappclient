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
import { Creta } from "../../../CarPicsUrl/CarPics";
import { TCreta } from "../../../CarPicsUrl/Thumbnails";
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
  // const CarPrice = "₹ 10.15 Lakh";
  // const TopPic = Creta;
  // const CarName = "Hyundai Creta";
  // const OnlyName = "Creta";
  // const ThumPic = TCreta;

  // const KeySpecification = [
  //   "₹ 10.15 Lakh onwards",
  //   "17 to 21 kmpl",
  //   "1353 to 1497 cc",
  //   "Manual, Automatic (CVT), Automatic (Torque Converter) & Automatic (Dual Clutch)",
  //   "Petrol & Diesel",
  //   "5 Seater",
  //   "4,300 mm L x 1,790 mm W x 1,620-1,635 mm H",
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
  //   varient1: ["E", "1497 cc, Manual, Petrol, 16.8 kmpl", "Rs.10.16 Lakh*"],

  //   varient2: ["EX", "1497 cc, Automatic, Petrol, 16.8 kmpl", "Rs.11.12 Lakh*"],

  //   varient3: ["S", "1497 cc, Manual, Petrol, 16.8 kmpl", "Rs.12.35 Lakh*"],

  //   varient4: [
  //     "SX Executive",
  //     "1497 cc, Manual, Petrol, 16.8 kmpl",
  //     "Rs.13.34 Lakh*",
  //   ],
  //   varient5: ["SX", "1497 cc, Automatic, Petrol, 16.8 kmpl", "Rs.14.13 Lakh*"],

  //   varient6: [
  //     "SX IVT",
  //     "1497 cc, Manual, Petrol, 16.9 kmpl",
  //     "Rs.15.61 Lakh*",
  //   ],

  //   varient7: [
  //     "SX Opt IVT",
  //     "1197 cc, Automatic, Petrol, 16.9 kmpl",
  //     "Rs.16.82 Lakh*",
  //   ],
  //   varient8: [
  //     "SX Turbo",
  //     "1353 cc, Automatic, Petrol, 16.8 kmpl",
  //     "Rs.16.83 Lakh*",
  //   ],
  //   varient9: [
  //     "SX Turbo Dualtone",
  //     "1353 cc, Automatic, Petrol, 16.8 kmpl",
  //     "Rs.16.83 Lakh*",
  //   ],

  //   varient10: [
  //     "SX Opt Turbo",
  //     "1353 cc, Automatic, Petrol, 16.8 kmpl",
  //     "Rs.17.87 Lakh*",
  //   ],
  //   varient11: [
  //     "SX Opt Turbo Dualtone",
  //     "1353 cc, Automatic, Petrol, 16.8 kmpl",
  //     "Rs.17.87 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {
  //   varient1: [
  //     "E Diesel",
  //     "1493 cc, Manual, Diesel, 21.4 kmpl",
  //     "Rs.10.63 Lakh*",
  //   ],
  //   varient2: [
  //     "EX Diesel",
  //     "1493 cc, Manual, Diesel, 21.4 kmpl",
  //     "Rs.12.03 Lakh*",
  //   ],
  //   varient3: [
  //     "S Diesel",
  //     "1493 cc, Manual, Diesel, 21.4 kmpl",
  //     "Rs.13.31 Lakh*",
  //   ],

  //   varient4: [
  //     "SX Executive Diesel",
  //     "1493 cc, Automatic, Diesel, 21.4 kmpl",
  //     "Rs.14.30 Lakh*",
  //   ],
  //   varient5: [
  //     "SX Diesel",
  //     "1493 cc, Manual, Diesel, 21.4 kmpl",
  //     "Rs.15.09 Lakh*",
  //   ],
  //   varient6: [
  //     "SX Opt Diesel",
  //     "1493 cc, Automatic, Diesel, 21.4 kmpl",
  //     "Rs.16.37 Lakh*",
  //   ],
  //   varient7: [
  //     "SX Diesel AT",
  //     "1493 cc, Automatic, Diesel, 18.5 kmpl",
  //     "Rs.16.57 Lakh*",
  //   ],

  //   varient8: [
  //     "SX Opt Diesel AT",
  //     "1493 cc, Automatic, Diesel, 18.5 kmpl",
  //     "Rs.17.78 Lakh*",
  //   ],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Diesel (1956 cc)", "Automatic", "20.65 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: Hyundai has axed the Creta’s SX MT petrol and diesel variants. Hyundai Creta Price: The Creta retails between Rs 9.99 lakh and Rs 17.70 lakh (ex-showroom Delhi). Hyundai Creta Variants: It now comes in six trims: E, EX, S, SX Executive, SX, and SX(O). Hyundai Creta Seating Capacity: The compact SUV can seat up to five occupants. Hyundai Creta Engine and Transmission: The Creta is offered with the same engines as the Kia Seltos: a 1.5-litre naturally aspirated petrol (115PS/144Nm), a 1.5-litre diesel (115PS/250Nm), and a 1.4-litre turbo-petrol (140PS/242Nm). A 6-speed manual transmission comes standard with the 1.5-litre petrol and diesel engines. While the petrol motor gets a choice of a CVT, the diesel engine is offered with an optional 6-speed torque converter. The 1.4-litre turbo-petrol comes with a 7-speed DCT (dual-clutch automatic) only. Hyundai Creta Features: It comes with LED headlamps and tail lamps, a panoramic sunroof, wireless charging, a power-adjustable driver’s seat, ventilated front seats, a 7-inch semi-digital instrument cluster, and a 10.25-inch touchscreen infotainment system with connected car tech. Hyundai Creta Safety: Safety features include up to six airbags, ABS with EBD, and electronic stability control (ESC). Hyundai Creta Rivals: The Creta takes on the Maruti Suzuki S-Cross, Kia Seltos, Renault Duster, Nissan Kicks, Volkswagen Taigun, and Skoda Kushaq. With its premium pricing, its top variants face competition from the Tata Harrier and MG Hector. If you are looking for a more rugged SUV, you can check out the Mahindra Scorpio. Hyundai Creta 7-seater (Alcazar): Hyundai has launched the 7-seater Creta, called the Alcazar, in India.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "One of the most feature-loaded compact SUVs, even in entry-level variants.",
  //     "Multiple engine and transmission combos.",
  //     "Offers an expansive suite of connected features.",
  //   ],
  //   cons: [
  //     "Automatic transmission limited to the top two variants.",
  //     "Feature misses like 360-degree camera & front parking sensors.",
  //     "Looks may not be to everyone's liking",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Typhoon Silver", "bg-red-800"],
  //   color2: ["Red Mulberry", "bg-gray-900"],
  //   color3: ["Phantom Black", "bg-gray-600"],
  //   color4: ["Galaxy Blue", "bg-white"],
  //   color5: ["Lava Orange Dual Tone", "bg-blue-800"],
  //   color6: ["Polar White Dual Tone", "bg-red-400"],
  //   color7: ["Deep Forest", "bg-red-400"],
  //   color8: ["Polar White", "bg-red-400"],
  //   color9: ["Titan Grey", "bg-red-400"],
  //   color10: ["Lava Orange", "bg-red-400"],
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
  //     "₹ 13.63 Lakh onwards",
  //     "16.6 kmpl",
  //     "1451 to 1956 cc",
  //     "Manual & Automatic",
  //     "Petrol & Diesel",
  //     "6-7 Seater",
  //     "4,720 mm L x 1,835 mm W x 1,760 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/45184/hector-plus-exterior-right-front-three-quarter-7.jpeg?q=85",
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
  //     "What is the on road price of Creta?",
  //     "The on-road price of Creta in Delhi starts at ‎₹ 11.86 Lakh and goes upto ‎₹ 20.99 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Creta and Seltos?",
  //     "Creta price starts at ₹ 10.15 Lakh ex-showroom and It comes with 1497 cc engine. Whereas Seltos price starts at ₹ 9.96 Lakh ex-showroom and It comes with 1497 cc engine ",
  //   ],
  //   question3: [
  //     "What is the mileage of Hyundai Creta?",
  //     "The Hyundai Creta mileage is 17 - 21 kmpl.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32958/tata-harrier-right-front-three-quarter58.jpeg?q=85",
      "Harrier",
      "₹ 14.30 Lakh Onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45184/hector-plus-exterior-right-front-three-quarter-7.jpeg?q=85",
      "Hector Plus",
      "₹ 13.63 Lakh onwards0",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/52565/hector-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Hector",
      "Rs.13.18 Lakh onwards",
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
        LinkCarName="creta"
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
  return OneCarAllSpecs("creta").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
