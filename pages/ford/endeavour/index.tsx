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

function Homee({ joy }) {
  const CompanyName = "Ford";
  const CarPrice = "₹ 33.81 Lakh";
  const TopPic =
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/37640/endeavour-exterior-right-front-three-quarter-149473.jpeg?q=85";
  const CarName = "Ford Endeavour";
  const OnlyName = "Endeavour";

  const KeySpecification = [
    "₹ 33.81 Lakh onwards",
    "12.9 kmpl",
    "1996 cc",
    "Automatic",
    "Diesel",
    "7 Seater",
    "4903 mm L x 1869 mm W x 1837 mm H",
  ];

  const SafetyFeatures = [
    "6 Airbags.",
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
      "Titanium Plus 4X2 AT",
      "1996 cc, Automatic, Diesel, 13.9 kmpl",
      "Rs.33.81 Lakh*",
    ],
    varient2: [
      "Titanium Plus 4X4 AT",
      "1996 cc, Automatic, Diesel, 12.4 kmpl",
      "Rs.35.61 Lakh*",
    ],
    varient3: [
      "Sport Edition",
      "1996 cc, Automatic AMT, Diesel, 13.9 kmpl",
      "Rs.36.26 Lakh*",
    ],
  };

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "23.26 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: The prices of the Endeavour have been increased by up to Rs 80,000. Ford Endeavour Price: Ford retails the full-size SUV from Rs 29.99 lakh to Rs 36.25 lakh (ex-showroom Delhi). Ford Endeavour Variants: It is available in four variants: Titanium AT, Titanium+ AT 4x2, Titanium+ AT 4x4, and Sport AT. Ford Endeavour Seating Capacity: The Endeavour can seat up to seven occupants. Ford Endeavour Powertrain: Ford has equipped the Endeavour with a 2.0-litre turbo-diesel unit (170PS/420Nm), paired with a 10-speed AT (a first in India). There is no manual transmission on offer. It comes with both 2WD and 4WD drivetrains. Ford Endeavour Features: It gets FordPass connected car technology as standard, allowing users to perform remote vehicle operations, track its live location, and get an overview of the car’s telematics via the smartphone app. Other features that continue to be offered include active noise cancellation for the cabin, semi-autonomous parallel park assist, power-folding third-row seats, dual-zone climate control, and a panoramic sunroof. It also gets an 8-inch SYNC 3 touchscreen infotainment system with Apple CarPlay and Android Auto connectivity. Ford Endeavour Safety: Safety features on offer include seven airbags, tyre pressure monitoring, and hill launch assist. Ford Endeavour Rivals: The Endeavour fights it out with the MG Gloster, Mahindra Alturas G4, Volkswagen Tiguan Allspace, Toyota Fortuner, and the 2021 Skoda Kodiaq. Ford Endeavour 2022: The next-gen Endeavour has been spied testing and is expected to arrive in India by 2022.",
  ];

  const ProsCons = {
    pros: [
      "Refined and more efficient engine ",
      "Sophisticated transmission that can skip and lock gears",
      "Full off-road kit still available",
    ],
    cons: [
      "No major feature update",
      "Torque surge of the 3.2L is missing",
      "Only a tilt adjustable steering",
    ],
  };

  const Colorss = {
    color1: ["Diffused Silver", "bg-blue-600"],
    color2: ["Diamond White", "bg-gray-400"],
    color3: ["Absolute Black", "bg-white"],
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
      "What is the on road price of Endeavour?",
      "The on-road price of Endeavour in Delhi starts at ‎₹ 40.32 Lakh and goes upto ‎₹ 43.19 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Endeavour and Fortuner?",
      "Endeavour price starts at ₹ 33.81 Lakh ex-showroom and It comes with 1996 cc engine. Whereas Fortuner price starts at ₹ 30.36 Lakh ex-showroom and It comes with 2694 cc engine",
    ],
    question3: [
      "What is the mileage of Ford Endeavour?",
      "The Ford Endeavour mileage is 12.9 kmpl.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/33266/alturas-g4-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Alturas G4",
      "₹ 28.77 Lakhonwards",
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
  return OneCarAllSpecs("endeavour").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
