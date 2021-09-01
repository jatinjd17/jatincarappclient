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
import { Freestyle } from "../../../CarPicsUrl/CarPics";
import { TFreestyle } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";

function Homee({ joy }) {
  const CompanyName = "Ford";
  const CarPrice = "₹ 7.28 Lakh";
  const TopPic = Freestyle;
  const CarName = "Ford Freestyle";
  const OnlyName = "Freestyle";
  const ThumPic = TFreestyle;

  const KeySpecification = [
    "₹ 7.28 Lakh onwards",
    "18.5 to 23.8 kmpl",
    "1194 to 1499 cc",
    "Manual",
    "Petrol & Diesel",
    "5 Seater",
    "3,954 mm L x 1,737 mm W x 1,570 mm H",
  ];

  const SafetyFeatures = [
    "Driver and Passenger Airbags.",
    "Rear Parking Camera and Sensors.",
    "ABS with EBD.",
    "Driver and Passenger Seatbelt Reminder.",
    "High-Speed Sensing Alert System.",
    "Side and Curtain Airbags.",
    "Door Ajar Warning.",
    "Perimeter Alarm.",
  ];

  const VarientPetrol = {
    varient1: [
      "Titanium",
      "1194 cc, Manual, Petrol, 18.5 kmpl",
      "Rs.7.28 Lakh*",
    ],
    varient2: [
      "Titanium Plus",
      "1194 cc, Manual, Petrol, 18.5 kmpl",
      "Rs.7.63 Lakh*",
    ],
    varient3: [
      "Flair Edition",
      "1194 cc, Manual AMT, Petrol, 18.5 kmpl",
      "Rs.7.93 Lakh*",
    ],
  };

  const VarientDiesel = {
    varient1: [
      "Titanium Diesel",
      "1499 cc, Manual, Diesel, 23.8 kmpl",
      "Rs.8.38 Lakh*",
    ],
    varient2: [
      "Titanium Plus Diesel",
      "1499 cc, Manual, Diesel, 23.8 kmpl",
      "Rs.8.73 Lakh*",
    ],
    varient3: [
      "Flair Edition Diesel",
      "1499 cc, Manual, Diesel, 23.8 kmpl",
      "Rs.9.03 Lakh*",
    ],
  };

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "23.26 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Ford has hiked prices of the Freestyle uniformly by Rs 18,000. Ford Freestyle Price: The Freestyle is priced between Rs 7.27 lakh and Rs 9.02 lakh (ex-showroom Delhi). Ford Freestyle Variants: It is available in three variants: Titanium, Titanium+, and Flair. Ford Freestyle Powertrains: Ford offers the Freestyle with a 1.2-litre petrol (96PS/119Nm) and a 1.5-litre diesel (100PS/215Nm) engine. Both get a 5-speed manual transmission but miss out on an automatic option. Claimed fuel efficiency figures are 18.5kmpl and 23.8kmpl for the petrol and diesel variants, respectively.  Ford Freestyle Features: It gets auto headlamps, auto-dimming IRVM, rain-sensing wipers, Ford Pass connected car tech, and push-button start/stop, among other features. Ford Freestyle Safety: Safety features include up to six airbags, active rollover protection, and ABS with EBD. Ford Freestyle Rivals: The Freestyle doesn't have any direct rival. However, it competes with the Renault Triber, Maruti Swift, Hyundai Grand i10 Nios, and Ford Figo.",
  ];

  const ProsCons = {
    pros: [
      "190mm of ground clearance is adequate for both on and off road conditions",
      "The diesel version gets the tried-and-tested 1.5-litre TDCI engine that also powers the Figo, Aspire and the EcoSport",
      "Mature ride quality; the Freestyle practically absorbs the undulations better than the Figo/Aspire with improved damping",
    ],
    cons: [
      "Absence of projector headlamps, daytime running lamps and LED tail lamps in the Ford Freestyle may be a turn off for some",
      "Figo-related issues - limited cabin space, sub-par material quality, non-adjustable rear headrests, lack of reach adjustment for the steering wheel and driver’s armrest.",
      "The Ford Freestyle doesn’t offer an automatic variant, unlike the Figo and the Aspire",
    ],
  };

  const Colorss = {
    color1: ["Diamond White", "bg-blue-600"],
    color2: ["Rube Redr", "bg-gray-400"],
    color3: ["Moondust Silver", "bg-white"],
    color4: ["White Gold", "bg-brown-600"],
    color5: ["Smoke Grey", "bg-gray-800"],
    color6: ["Canyon-Ridge", "bg-gray-800"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 4.95 Lakh onwards",
      "20.8kmpl",
      "1197 cc",
      "Manual, Automatic",
      "Petrol",
      "5 Seater",
      "3700mm x 1690mm x 1595mm (Length x Width x Height).",
      "https://static.autox.com/uploads/2020/08/maruti-suzuki-ignis-bs6-500x261.jpg",
    ],
    comparisioncar2: [
      "₹ 7.34 Lakh onwards",
      "21.96 kmpl",
      "1197 cc",
      "Manual, Automatic",
      "Petrol",
      "5 Seater",
      "3,995 mm L x 1,745 mm W x 1,510 mm H",
      "https://images.financialexpress.com/2019/06/19-1.jpg",
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
      "What is the on road price of Freestyle?",
      "The on-road price of Freestyle in Delhi starts at ‎₹ 8.22 Lakh and goes upto ‎₹ 10.42 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Freestyle and Figo?",
      "Freestyle price starts at ₹ 7.28 Lakh ex-showroom and It comes with 1194 cc engine. Whereas Figo price starts at ₹ 5.82 Lakh ex-showroom and It comes with 1194 cc engine.",
    ],
    question3: [
      "What is the mileage of Ford Freestyle?",
      "The Ford Freestyle mileage is 18.5 - 23.8 kmpl.",
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
    car1: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/40369/Ford-EcoSport-Right-Front-Three-Quarter-159249.jpg?wm=0&q=85",
      "EcoSport",
      "₹ 8.19 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/37640/endeavour-exterior-right-front-three-quarter-149473.jpeg?q=85",
      "Endeavour",
      "₹ 33.81 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/35463/figo-exterior-right-front-three-quarter-151689.jpeg?q=85",
      "Figo",
      "₹ 5.82 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32698/freestyle-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Freestyle",
      "₹ 7.28 Lakh onwards",
    ],
  };

  const UpcommingCarBrand = {
    car1: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ford/Mustang-2021/7939/1595910236308/front-left-side-47.jpg?tr=w-456",
      "Mustang 2021",
      "Rs.75.00 Lakh*",
    ],
    car2: [
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3A%2F%2Fcdni.autocarindia.com%2FExtraImages%2F20210705015326_Ford_ecosport.jpg&h=795&w=1200&c=1",
      "EcoSport 2021 Facelift",
      "Rs.8.49 Lakh",
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
      <Meta
        CompanyName={CompanyName}
        OnlyName={OnlyName}
        LatestUpdate={LatestUpdate[0]}
        ImageUrl={ThumPic}
        LinkCarName="freestyle"
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
  return OneCarAllSpecs("freestyle").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
