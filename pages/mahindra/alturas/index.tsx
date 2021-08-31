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
import { Alturas } from "../../../CarPicsUrl/CarPics";

function Homee({ joy }) {
  const CompanyName = "Mahindra";
  const CarPrice = "₹ 28.77 Lakh";
  const TopPic = Alturas;
  const CarName = "Mahindra Alturas G4";
  const OnlyName = "Alturas G4";

  const KeySpecification = [
    "₹ 28.77 Lakh onwards",
    "12.03 kmpl",
    "2157 cc",
    "Automatic (Torque Converter)",
    "Diesel",
    "7 Seater",
    "4,850 mm L x 1,960 mm W x 1,845 mm H",
  ];

  const SafetyFeatures = [
    "9 Airbags.",
    "Rear Parking Camera and Sensors.",
    "ABS with EBD.",
    "Driver and Passenger Seatbelt Reminder.",
    "High-Speed Sensing Alert System.",
    "Side and Curtain Airbags.",
    "Door Ajar Warning.",
    "Perimeter Alarm.",
  ];

  const VarientPetrol = {};

  const VarientDiesel = {
    varient1: [
      "4X2 AT",
      "2157 cc, Automatic, Diesel, 12.35 kmpl",
      "Rs.28.77 Lakh*",
    ],
    varient2: [
      "4X4 AT",
      "2157 cc, Automatic, Diesel, 12.05 kmpl",
      "Rs.31.77 Lakh*",
    ],
  };

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "23.26 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: The Alturas G4 has become costlier by Rs 4,000. Mahindra Alturas G4 Price: Mahindra has priced the SUV from Rs 28.77 lakh to Rs 31.77 lakh (ex-showroom Delhi). Mahindra Alturas G4 Variants: It is available in two variants: 2WD and 4WD. Mahindra Alturas G4 Seating Capacity: The Alturas G4 comes in a 7-seater configuration. Mahindra Alturas G4 Powertrain: Mahindra has provided the SUV with a 2.2-litre four-cylinder diesel engine (180PS/420Nm) paired with a 7-speed AT gearbox. Mahindra Alturas G4 Features: It gets a sunroof, cruise control, dual-zone climate control, and an 8-way adjustable driver seat.  Mahindra Alturas G4 Safety: Standard safety features include ABS with EBD, ISOFIX child anchorages, and dual front airbags. Mahindra Alturas G4 Rivals: The Alturas G4 goes up against the Toyota Fortuner, MG Gloster Volkswagen Tiguan Allspace, Ford Endeavour, and 2021 Skoda Kodiaq.",
  ];

  const ProsCons = {
    pros: [
      "Size: Large and imposing looks make it stand out.",
      "Loaded: Ventilated seats, Nappa leather upholstery, sunroof, dual-zone AC - you name it.",
      "Low-speed ride quality: Simply glides over and flattens out bumps. Deliciously smooth!",
    ],
    cons: [
      "Low-set third row best left for kids. Uncomfortable for adults even on short journeys.",
      "Feels bouncy at higher speeds, more so in the second and third rows.",
      "Touchscreen graphics and response could’ve been better.",
    ],
  };

  const Colorss = {
    color1: ["Regal Blue", "bg-blue-600"],
    color2: ["Lake Side Brown", "bg-gray-400"],
    color3: ["Pearl White", "bg-white"],
    color4: ["Napoli Black", "bg-white"],
    color5: ["Dsat Silver", "bg-white"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 29.98 Lakh Onwards",
      "12.35 kmpl",
      "1996 cc",
      "Automatic",
      "Diesel",
      "7 Seater",
      "4,985 mm L x 1,926 mm W x 1,867 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/43485/gloster-exterior-right-front-three-quarter-3.jpeg?q=85",
    ],
    comparisioncar2: [
      "₹ 30.36 Lakh onwards",
      "10.01 to 14.22 kmpl",
      "2694 to 2755 cc",
      "Manual & Automatic",
      "Petrol & Diesel",
      "7 Seater",
      "4,795 mm L x 1,855 mm W x 1,835 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg?q=85",
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
      "What is the on road price of Alturas G4?",
      "The on-road price of Alturas G4 in Delhi starts at ‎₹ 33.87 Lakh and goes upto ‎₹ 37.35 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Alturas G4 and Gloster?",
      "Alturas G4 price starts at ₹ 28.77 Lakh ex-showroom and It comes with 2157 cc engine. Whereas Gloster price starts at ₹ 29.98 Lakh ex-showroom and It comes with 1996 cc engine.",
    ],
    question3: [
      "What is the mileage of Mahindra Alturas G4?",
      "The Mahindra Alturas G4 mileage is 12.03 kmpl.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/43485/gloster-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Gloster",
      "₹ 29.98 Lakh Onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg?q=85",
      "Fortuner",
      "₹ 30.36 Lakh onwards0",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/37640/endeavour-exterior-right-front-three-quarter-149473.jpeg?q=85",
      "Endeavour",
      "₹ 33.81 Lakh onwards",
    ],
  };

  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/31883/scorpio-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Scorpio",
      "₹ 12.66 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/34024/xuv500-exterior-right-front-three-quarter-3.jpeg?q=85",
      "XUV 500",
      "₹ 14.27 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45933/mahindra-bolero-right-front-three-quarter1.jpeg?q=85",
      "Bolero",
      "₹ 8.64 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/33266/alturas-g4-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Alturas G4",
      "₹ 28.77 Lakh onwards",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/21497/kuv100-nxt-exterior-right-front-three-quarter-64047.jpeg?q=85",
      "Kuv 100",
      "₹ 6.10 Lakh onwards",
    ],
    car6: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/49114/marazzo-exterior-right-front-three-quarter-4.jpeg?q=85",
      "Marazzo",
      "₹ 12.30 Lakh onwards",
    ],
    car7: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/thar-exterior-right-front-three-quarter-11.jpeg?q=85",
      "Thar",
      "₹ 12.78 Lakh onwards",
    ],
    car8: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/26918/xuv300-exterior-right-front-three-quarter-148706.jpeg?q=85",
      "Xuv 300",
      "₹ 7.96 Lakh onwards",
    ],
    car9: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/97853/bolero-neo-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Bolero Neo",
      "₹ 8.48 Lakh onwards",
    ],
  };

  const UpcommingCarBrand = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-left-front-three-quarter.jpeg?isig=0&q=85",
      "XUV 700",
      "₹ 13.00 - 20.00 Lakh",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/41157/Mahindra-TUV300-Plus-Facelift-Exterior-163347.jpg?wm=0&q=85",
      "TUV 300 Plus",
      "₹ 10.00 - 12.00 Lakh",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/33297/Mahindra-e20-NXT-Exterior-120569.jpg?wm=0&q=85",
      "e20 NXT",
      "₹ 6.00 - 8.00 Lakh",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/42453/Mahindra-S204-Exterior-171413.jpg?wm=0&q=85",
      "Mahindra S204",
      "₹ 11.00 - 15.00 Lakh",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45278/mahindra-exuv300-left-side-view0.jpeg?q=85",
      "eXUV300",
      "₹ 14.00 - 16.00 Lakh",
    ],
    car6: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/40432/Mahindra-New-Scorpio-Exterior-159617.jpg?wm=0&q=85",
      "New Scorpio",
      "₹ 10.00 - 14.00 Lakh",
    ],
    car7: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/33261/Mahindra-eKUV100-Exterior-170053.jpg?wm=0&q=85",
      "eKUV100",
      "₹ 8.00 - 9.00 Lakh",
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
  return OneCarAllSpecs("alturas").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
