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
import { Seltos } from "../../../CarPicsUrl/CarPics";

function Homee({ joy }) {
  const CompanyName = "Kia";
  const CarPrice = "₹ 9.96 Lakh";
  const TopPic = Seltos;
  const CarName = "Kia Seltos";
  const OnlyName = "Seltos";

  const KeySpecification = [
    "₹ 9.96 Lakh onwards",
    "16.1 to 20.86 kmpl",
    "1353 to 1497 cc",
    "Manual, Clutchless Manual, Automatic (Torque Converter), Automatic (CVT) & Automatic (Dual Clutch)",
    "Petrol & Diesel",
    "5 Seater",
    "4,315 mm L x 1,800 mm W x 1,620-1,630 mm H",
  ];

  const SafetyFeatures = [
    "Impact Sensing Auto Door Unlock",
    "6 airbags",
    "ABS",
    "EBD",
    "Central Locking",
    "Emergency Stop Signal",
    "Driver & Passenger SeatBelt Reminder",
    "Speed Sensing Auto Door Lock",
    "Headlamp Escort Function",
    "ISOFIX",
    "Speed Alert System",
    "Driver & Passenger Side Seat Belt Pretensioners & Load Limiters",
  ];

  const VarientPetrol = {
    varient1: ["HTE G", "1497 cc, Manual, Petrol, 16.8 kmpl", "Rs.9.95 Lakh*"],

    varient2: ["HTK G", "1497 cc, Manual, Petrol, 16.8 kmpl", "Rs.10.74 Lakh*"],
    varient3: [
      "HTK Plus G",
      "1497 cc, Manual, Petrol, 16.8 kmpl",
      "Rs.11.79 Lakh*",
    ],
    varient4: [
      "HTK Plus iMT",
      "1497 cc, Manual, Petrol, 16.8 kmpl",
      "Rs.12.19 Lakh*",
    ],
    varient5: ["HTX G", "1497 cc, Manual, Petrol, 16.8 kmpl", "Rs.13.65 Lakh*"],

    varient6: [
      "HTX IVT G",
      "1497 cc, Manual, Petrol, 16.8 kmpl",
      "Rs.14.65 Lakh*",
    ],
    varient7: [
      "GTX Option",
      "1353 cc, Manual, Petrol, 16.1 kmpl",
      "Rs.15.35 Lakh*",
    ],
    varient8: [
      "GTX Plus",
      "1353 cc, Manual, Petrol, 16.1 kmpl",
      "Rs.16.65 Lakh*",
    ],
    varient9: [
      "GTX Plus DCT",
      "1353 cc, Automatic, Petrol, 16.8 kmpl",
      "Rs.17.44 Lakh*",
    ],
  };

  const VarientDiesel = {
    varient1: ["HTE D", "1493 cc, Manual, Diesel, 20.8 kmpl", "Rs.10.45 Lakh*"],
    varient2: ["HTK D", "1493 cc, Manual, Diesel, 20.8 kmpl", "Rs.11.79 Lakh*"],

    varient3: [
      "HTK Plus D",
      "1493 cc, Manual, Diesel, 20.8 kmpl",
      "Rs.12.99 Lakh*",
    ],

    varient4: [
      "HTK Plus AT D",
      "1493 cc, Automatic, Diesel, 17.8 kmpl",
      "Rs.13.95 Lakh*",
    ],

    varient5: ["HTX D", "1493 cc, Manual, Diesel, 20.8 kmpl", "Rs.14.75 Lakh*"],

    varient6: [
      "HTX Plus D",
      "1493 cc, Manual, Diesel, 20.8 kmpl",
      "Rs.15.79 Lakh*",
    ],

    varient7: [
      "GTX Plus AT D",
      "1493 cc, Automatic, Diesel, 17.8 kmpl",
      "Rs.17.65 Lakh*",
    ],
  };

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Diesel (1956 cc)", "Automatic", "20.65 kmpl"],
    mileage2: ["CNG (796 cc)", "Automatic", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Kia has launched the updated Seltos. Kia Seltos Price: The 2021 Seltos is priced between Rs 9.95 lakh and Rs 17.85 lakh (ex-showroom). Kia Seltos Variants: It is offered in two trims: Tech (HT) Line and GT Line. While the former has five variants (HTE, HTK, HTK+, HTX, and HTX+), the latter has only two [GTX(O) and GTX+]. Kia Seltos Seating Capacity: The Seltos can seat up to five people. Kia Seltos Powertrains: It comes with three engine options: 1.5-litre petrol (115PS/144Nm), 1.4-litre turbocharged petrol (140PS/242Nm), and 1.5-litre diesel (115PS/250Nm). A 6-speed manual gearbox is offered as standard with all three engines. It also gets optional automatic transmissions: a 7-speed DCT (1.4-litre turbo-petrol), a CVT (1.5-litre petrol), and a 6-speed torque converter unit (1.5-litre diesel). The 1.5-litre petrol engine also gets a 6-speed iMT (clutchless manual) gearbox. Kia claims a fuel efficiency of 16.5kmpl for the petrol-manual and 16.8kmpl for the petrol-CVT variants. The diesel-manual’s claimed fuel efficiency figure stands at 21kmpl, while the 6-speed AT’s stands at 18kmpl. The 1.4-litre turbo-petrol, paired with the DCT, offers a claimed mileage of 16.5kmpl, while the manual returns 16.1kmpl. Kia Seltos Features: The Seltos packs a 10.25-inch touchscreen infotainment system along with Kia's UVO connected car technology, an air purifier, ambient lighting, and an 8-inch head-up display. It also gets ventilated front seats, a power-adjustable driver’s seat, a 7-inch multi-information display, an 8-speaker Bose sound system, and a sunroof. It comes with smartwatch connectivity, smart-key remote engine start, and a 'Hello Kia' wake up command as well. Kia Seltos Safety: It gets up to six airbags, ABS with EBD, brake assist, emergency stop signal, vehicle stability management (VSM), electronic stability control (ESC), and hill assist control (HAC). Kia Seltos Rivals: Kia’s compact SUV competes with the Hyundai Creta, Renault Duster, Nissan Kicks, Maruti Suzuki S-Cross, Skoda Kushaq, and Volkswagen Taigun. If you wish to buy a more rugged SUV, you can check out the Mahindra Scorpio.",
  ];

  const ProsCons = {
    pros: [
      "Cabin build and quality",
      "Lots to choose from",
      "Automatics with all three engines",
    ],
    cons: [
      "Underthigh support",
      "No 6 airbag option with diesel variants",
      "Poor Build Quality",
    ],
  };

  const Colorss = {
    color1: ["Intense Red", "bg-red-800"],
    color2: ["Punchy Orange", "bg-gray-900"],
    color3: ["Glacier White Pearl", "bg-gray-600"],
    color4: ["Punchy Orange With Clear White", "bg-gray-600"],
    color5: ["Steel Silver", "bg-gray-600"],
    color6: ["Aurora Black Pearl", "bg-gray-600"],
    color7: ["Glacier White Pearl With Punchy Orange", "bg-gray-600"],
    color8: ["Intelligence Blue", "bg-gray-600"],
    color9: ["Steel Silver With Punchy Orange", "bg-gray-600"],
    color10: ["Glacier White Pearl With Aurora Black Pearl", "bg-gray-600"],
    color11: ["Gravity Gray", "bg-gray-600"],
    color12: ["Intense Red With Aurora Black Pearl", "bg-gray-600"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 14.30 Lakh Onwards",
      "14.63 to 16.35 kmpl",
      "1956 cc",
      "Manual & Automatic (Torque Converter)",
      "Diesel",
      "5 Seater",
      "4,598 mm L x 1,894 mm W x 1,706 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32958/tata-harrier-right-front-three-quarter58.jpeg?q=85",
    ],
    comparisioncar2: [
      "₹ 13.63 Lakh onwards",
      "16.6 kmpl",
      "1451 to 1956 cc",
      "Manual & Automatic",
      "Petrol & Diesel",
      "6-7 Seater",
      "4,720 mm L x 1,835 mm W x 1,760 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45184/hector-plus-exterior-right-front-three-quarter-7.jpeg?q=85",
    ],
  };

  const HighlightedFeatures = {
    feature1: [
      "https://stimg.cardekho.com/images/carinteriorimages/930x620/Maruti/Baleno/6778/1615985207322/interior-image-209.jpg?imwidth=480",
      "Stylish Interiors",
      "",
    ],
    feature2: [
      "https://image.shutterstock.com/image-photo/car-door-lock-knob-children-260nw-1514746379.jpg",
      "Rear Door Child Lock",
      "",
    ],
    feature3: [
      "https://stimg.cardekho.com/images/carinteriorimages/630x420/Maruti/Alto-800/7075/1594805410865/airbags-94.jpg?tr=w-360",
      "6 Airbags",
      "",
    ],
  };

  const faqs = {
    question1: [
      "What is the on road price of Seltos?",
      "The on-road price of Seltos in Delhi starts at ‎₹ 11.13 Lakh and goes upto ‎₹ 20.98 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Seltos and Creta?",
      "Seltos price starts at ₹ 9.96 Lakh ex-showroom and It comes with 1497 cc engine. Whereas Creta price starts at ₹ 10.15 Lakh ex-showroom and It comes with 1497 cc engine.",
    ],
    question3: [
      "What is the mileage of Kia Seltos?",
      "The Kia Seltos mileage is 16.1 - 20.86 kmpl.",
    ],
  };

  const articles = {
    article1: [
      "/kushaq.png",
      "Rath Yatra 2021: About 60 Skoda Kushaq SUVs To Be Delivered In Ahmedabad",
    ],
    article2: [
      "/kushaq.png",
      "Rath Yatra 2021: About 60 Skoda Kushaq SUVs To Be Delivered In Ahmedabad",
    ],
    article3: [
      "/kushaq.png",
      "Rath Yatra 2021: About 60 Skoda Kushaq SUVs To Be Delivered In Ahmedabad",
    ],
  };

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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41523/sonet-exterior-right-front-three-quarter-110.jpeg?q=85",
      "Sonet",
      "₹ 6.79 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/33372/seltos-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Seltos",
      "₹ 9.96 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41205/kia-carnival-right-front-three-quarter8.jpeg?q=85",
      "Carnival",
      "₹ 24.95 Lakh onwards",
    ],
  };

  const UpcommingCarBrand = {
    car1: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos-7-Seater/8424/1619518563355/front-left-side-47.jpg?tr=w-456",
      "Kia Seltos 7-Seater",
      "₹ 12.00 Lakh",
    ],
    car2: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Carnival-2021/7886/1614601829878/front-left-side-47.jpg?tr=w-456",
      "Carnival 2022",
      "Rs.26.00 Lakh*",
    ],
    car3: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Sportage/5860/1623155125464/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      "Sportage",
      "Rs.25.00 Lakh*",
    ],
    car4: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Kia-Ceed/6220/1558590662958/front-left-side-47.jpg?tr=w-456",
      "Ceed",
      "Rs.9.00 Lakh*",
    ],
  };

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
  return OneCarAllSpecs("seltos").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
