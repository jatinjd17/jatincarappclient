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
import { Innova } from "../../../CarPicsUrl/CarPics";

function Homee({ joy }) {
  const CompanyName = "Toyota";
  const CarPrice = "₹ 16.82 Lakh";
  const TopPic = Innova;
  const CarName = "Toyota Innova";
  const OnlyName = "Innova";

  const KeySpecification = [
    "₹ 16.82 Lakh onwards",
    "10.01 to 14.22 kmpl",
    "2393 to 2694 cc",
    "Manual & Automatic (Torque Converter)",
    "Petrol & Diesel",
    "7-8 Seater",
    "4,735 mm L x 1,830 mm W x 1,795 mm H",
  ];

  const SafetyFeatures = [
    "7 airbags",
    "ABS with EBD and CSC",
    "reverse parking sensors",
    "ISOFIX",
    "driver and co-driver seatbelt reminder",
    "high-speed alert system",
    "impact sensing auto door unlock.",
  ];

  const VarientPetrol = {
    varient1: [
      "2.7 GX 7 STR",
      "2694 cc, Manual, Petrol, 11 kmpl",
      "Rs.16.82 Lakh*",
    ],
    varient2: [
      "2.7 GX 8 STR",
      "2694 cc, Manual, Petrol, 11 kmpl",
      "Rs.16.87 Lakh*",
    ],

    varient3: [
      "2.7 GX 7 STR AT",
      "2694 cc, Automatic, Petrol, 11 kmpl",
      "Rs.18.18 Lakh*",
    ],
    varient4: [
      "2.7 GX 8 STR AT",
      "2694 cc, Automatic, Petrol, 11 kmpl",
      "Rs.18.23 Lakh*",
    ],

    varient5: [
      "2.7 VX 7 STR",
      "2694 cc, Manual, Petrol, 11 kmpl",
      "Rs.20.26 Lakh*",
    ],

    varient6: [
      "2.7 ZX 7 STR AT",
      "2694 cc, Automatic, Petrol, 11 kmpl",
      "Rs.23.14 Lakh*",
    ],
  };

  const VarientDiesel = {
    varient1: [
      "2.4 G 7 STR",
      "2755 cc, Manual, Diesel, 11 kmpl",
      "Rs.17.58 Lakh*",
    ],
    varient2: [
      "2.4 G 8 STR",
      "2755 cc, Manual, Diesel, 11 kmpl",
      "Rs.17.63 Lakh*",
    ],
    varient3: [
      "2.4 G Plus 7 STR",
      "2755 cc, Manual, Diesel, 11 kmpl",
      "Rs.18.51 Lakh*",
    ],
    varient4: [
      "2.4 G Plus 8 STR",
      "2755 cc, Manual, Diesel, 11 kmpl",
      "Rs.18.56 Lakh*",
    ],
    varient5: [
      "2.4 GX 7 STR",
      "2755 cc, Manual, Diesel, 11 kmpl",
      "Rs.18.63 Lakh*",
    ],
    varient6: [
      "2.4 GX 8 STR",
      "2755 cc, Manual, Diesel, 11 kmpl",
      "Rs.18.68 Lakh*",
    ],
    varient7: [
      "2.4 GX 7 STR AT",
      "2755 cc, Automatic, Diesel, 11 kmpl",
      "Rs.19.94 Lakh*",
    ],
    varient8: [
      "2.4 GX 8 STR AT",
      "2755 cc, Automatic, Diesel, 11 kmpl",
      "Rs.19.99 Lakh*",
    ],
    varient9: [
      "2.4 VX 7 STR",
      "2755 cc, Manual, Diesel, 11 kmpl",
      "Rs.22.15 Lakh*",
    ],
    varient10: [
      "2.4 VX 8 STR",
      "2755 cc, Manual, Diesel, 11 kmpl",
      "Rs.22.20 Lakh*",
    ],
    varient11: [
      "2.4 ZX 7 STR",
      "2755 cc, Manual, Diesel, 11 kmpl",
      "Rs.23.79 Lakh*",
    ],
    varient12: [
      "2.4 ZX 7 STR AT",
      "2755 cc, Automatic, Diesel, 11 kmpl",
      "Rs.24.99 Lakh*",
    ],
  };

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Toyota has hiked the prices of the Innova Crysta by up to Rs 68,000. Toyota Innova Crysta Price: The facelifted Innova Crysta is now priced from Rs 16.82 lakh to Rs 24.99 lakh (ex-showroom Delhi). Toyota Innova Crysta Variants: Toyota offers the MPV in five trims: G, G+, GX, VX, and ZX. Toyota Innova Crysta Seating Capacity: It comes in both 7- and 8-seater layouts. Toyota Innova Crysta Engine and Transmission: The Innova Crysta gets a 2.7-litre petrol (166PS/245Nm) and a 2.4-litre diesel engine (150PS/360Nm). Both are mated to a 5-speed manual transmission and offer a 6-speed torque converter unit as an option. Toyota Innova Crysta Features: It comes with an 8-inch touchscreen infotainment system with Android Auto and Apple CarPlay, powered driver’s seat, ambient lighting, auto LED headlamps, and cruise control. Toyota Innova Crysta Safety: Safety kit includes front and rear parking sensors, up to seven airbags, and vehicle stability control. Toyota Innova Crysta Rivals: It rivals the MG Hector Plus, Tata Safari, and the upcoming Hexa BS6.",
  ];

  const ProsCons = {
    pros: [
      "Spacious and practical cabin",
      "Toyota’s renowned reliability factor",
      "Great resale value",
    ],
    cons: [
      "Is slightly expensive for what it offers ",
      "Bootspace with third row up is negligible ",
      "Low-speed ride could have been better ",
    ],
  };

  const Colorss = {
    color1: ["Sparkling Black Crystal Shine", "bg-gray-800"],
    color2: ["Garnet Red", "bg-red-900"],
    color3: ["White Pearl Crystal Shine", "bg-white-900"],
    color4: ["Avant Garde Bronze", "bg-gray-100"],
    color5: ["Silver", "bg-gray-900"],
    color6: ["Grey", "bg-gray-600"],
    color7: ["Super White", "bg-gray-100"],
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
      "₹ 13.18 Lakh onwards",
      "13.96 to 17.41 kmpl",
      "1451 to 1956 cc",
      "Manual & Automatic",
      "Petrol & Diesel",
      "5 Seater",
      "4655 mm in length, 1835 mm in width and 1760 mm in height",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/52565/hector-exterior-right-front-three-quarter-3.jpeg?q=85",
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
      "2 Airbags",
      "",
    ],
  };

  const faqs = {
    question1: [
      "What is the on road price of Innova Crysta?",
      "The on-road price of Innova Crysta in Delhi starts at ‎₹ 19.82 Lakh and goes upto ‎₹ 29.83 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance",
    ],
    question2: [
      "Which car is better between Innova Crysta and Carnival?",
      "Innova Crysta price starts at ₹ 16.82 Lakh ex-showroom and It comes with 2694 cc engine. Whereas Carnival price starts at ₹ 24.95 Lakh ex-showroom and It comes with 2199 cc",
    ],
    question3: [
      "What is price of Innova Crysta top model?",
      "Top model of Innova Crysta is 2.4 ZX AT 7 STR and the ex-showroom for Innova Crysta 2.4 ZX AT 7 STR is ₹ 24.98 Lakh.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/52565/hector-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Hector",
      "₹ 13.18 Lakh onwards0",
    ],
    car3: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/6775/1584360708758/front-left-side-47.jpg?tr=w-456",
      "Creta",
      "Rs.10.16 Lakh onwards",
    ],
  };

  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Innova",
      "₹ 16.82 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg?q=85",
      "Fortuner",
      "₹ 30.36 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47016/urban-cruiser-exterior-right-front-three-quarter.jpeg?q=85",
      "Urban Cruiser",
      "₹ 8.63 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39545/glanza-exterior-right-front-three-quarter-159523.jpeg?q=85",
      "Glanza",
      "₹ 7.34 Lakh onwards",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32943/yaris-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Yaris",
      "₹ 9.17 Lakh onwards",
    ],
    car6: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41217/toyota-vellfire-right-front-three-quarter5.jpeg?q=85",
      "Vellfire",
      "₹ 89.89 Lakh onwards",
    ],
    car7: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/37561/Toyota-Camry-Right-Front-Three-Quarter-146683.jpg?wm=0&q=85",
      "Camry",
      "₹ 40.61 Lakh onwards",
    ],
  };

  const UpcommingCarBrand = {
    car1: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Hilux/8445/1622783707227/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      "Hilux",
      "Rs.18.00 Lakh*",
    ],
    car2: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Land-Cruiser/8448/1623313668941/front-left-side-47.jpg?tr=w-456",
      "Land Cruiser",
      "Rs.1.50 Cr*",
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
  return OneCarAllSpecs("innova").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
