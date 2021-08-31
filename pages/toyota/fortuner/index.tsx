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
import { Fortuner } from "../../../CarPicsUrl/CarPics";

function Homee({ joy }) {
  const CompanyName = "Toyota";
  const CarPrice = "₹ 30.36 Lakh";
  const TopPic = Fortuner;
  const CarName = "Toyota Fortuner";
  const OnlyName = "Fortuner";

  const KeySpecification = [
    "₹ 30.36 Lakh onwards",
    "10.01 to 14.22 kmpl",
    "2694 to 2755 cc",
    "Manual & Automatic (Torque Converter)",
    "Petrol & Diesel",
    "7 Seater",
    "4,795 mm L x 1,855 mm W x 1,835 mm H",
  ];

  const SafetyFeatures = [
    "6 airbags",
    "ABS with EBD and CSC",
    "reverse parking sensors",
    "ISOFIX",
    "driver and co-driver seatbelt reminder",
    "high-speed alert system",
    "impact sensing auto door unlock.",
  ];

  const VarientPetrol = {
    varient1: [
      "4X2",
      "2694 cc, Manual, Petrol, 10.01 kmpl - 10.26 kmpl",
      "Rs.30.34 Lakh*",
    ],
    varient2: [
      "4X2 AT",
      "2694 cc, Automatic, Petrol, 10.01 kmpl - 10.26 kmpl",
      "Rs.31.93 Lakh*",
    ],
  };

  const VarientDiesel = {
    varient1: [
      "4X2 Diesel",
      "2755 cc, Manual, Diesel, 14.22 kmpl",
      "Rs.32.84 Lakh*",
    ],
    varient2: [
      "4X2 Diesel AT",
      "2755 cc, Automatic, Diesel, 14.22 kmpl",
      "Rs.35.20 Lakh*",
    ],
    varient3: [
      "4X4 Diesel",
      "2755 cc, Manual, Diesel, 14.22 kmpl",
      "Rs.35.50 Lakh*",
    ],
    varient4: [
      "4X4 Diesel AT",
      "2755 cc, Automatic, Diesel, 14.22 kmpl",
      "Rs.37.79 Lakh*",
    ],
    varient5: [
      "Legender",
      "2755 cc, Automatic, Diesel, 14.22 kmpl",
      "Rs.38.30 Lakh*",
    ],
  };

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Toyota Fortuner Price: Toyota retails the Fortuner from Rs 30.34 lakh and Rs 38.30 lakh (ex-showroom Delhi). Toyota Fortuner Seating Capacity: The SUV comes in a 7-seater layout. Toyota Fortuner Powertrains: It is offered with both petrol and diesel engines. While the 2.7-litre petrol unit (166PS/245Nm) is offered in the same state of tune as before, the upgraded 2.8-litre turbo-diesel motor (204PS/500Nm) has also been introduced. The facelifted Fortuner is offered with both 6-speed manual and automatic transmission options as well as rear-wheel-drive and four-wheel-drive systems. Toyota Fortuner Features: The facelifted Fortuner is available in two versions: the standard Fortuner and the Legender. Both get an updated front end, new LED headlamps, bumper design, and an updated layout for the rear LED tail lamps. Both cars feature new designs for the alloy wheels, 18-inch units for the base model, and dual-tone 20-inch wheels for the Legender variant. Toyota offers a larger touchscreen infotainment system (9-inch unit for the Legender and 8-inch unit for the base version) with Apple CarPlay and T-Connect for connected car features. Other feature updates for the Legender variant include a 360-degree parking camera, wireless charging pad, ambient lighting, and a tweaked instrument cluster. It also gets a kick-to-open feature for the powered tailgate. Toyota Fortuner Safety: Toyota has equipped the SUV with up to seven airbags, vehicle stability control, hill assist, and ABS with EBD. Toyota Fortuner Rivals: It goes up against the Ford Endeavour, Mahindra Alturas G4, MG Gloster, VW Tiguan Allspace, and the 2021 Skoda Kodiaq.",
  ];

  const ProsCons = {
    pros: [
      "More powerful diesel engine",
      "2021 facelift looks sportier than before",
      "Legender looks different and more stylish than the regular Fortuner",
    ],
    cons: [
      "Still does not get a sunroof",
      "Fortuner has become costlier by up to Rs 3 lakh",
      "Legender does not get the 11-speaker music system",
    ],
  };

  const Colorss = {
    color1: ["Phantom Brown", "bg-brown-800"],
    color2: ["Sparkling Black Crystal Shine", "bg-gray-900"],
    color3: ["Avant garde bronze", "bg-yellow-900"],
    color4: ["Super white", "bg-gray-100"],
    color5: ["Attitude Black", "bg-gray-900"],
    color6: ["Grey Metallic", "bg-gray-600"],
    color7: ["White Pearl Crystal Shine Metallic", "bg-gray-100"],
    color8: ["White Pearl Crystal Shine with Attitude Black", "bg-gray-900"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 33.81 Lakh Onwards",
      "12.9 kmpl",
      "1996 cc",
      "Automatic",
      "Diesel",
      "7 Seater",
      "4903 mm in length, 1869 mm in width and 1837 mm in height",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/37640/endeavour-exterior-right-front-three-quarter-149473.jpeg?q=85",
    ],
    comparisioncar2: [
      "₹ 29.98 Lakh",
      "12.35 kmpl",
      "1996 cc",
      "Automatic (Torque Converter)",
      "Diesel",
      "6 & 7 Seater",
      "4,985 mm L x 1,926 mm W x 1,867 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/43485/gloster-exterior-right-front-three-quarter-3.jpeg?q=85",
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
      "What is the on road price of Fortuner?",
      "The on-road price of Fortuner in Delhi starts at ‎₹ 35.33 Lakh and goes upto ‎₹ 45.82 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance",
    ],
    question2: [
      "Which car is better between Fortuner and Endeavour?",
      "Fortuner price starts at ₹ 30.36 Lakh ex-showroom and It comes with 2694 cc engine. Whereas Endeavour price starts at ₹ 33.81 Lakh ex-showroom and It comes with 2198 cc",
    ],
    question3: [
      "What is the mileage of Toyota Fortuner?",
      "The Toyota Fortuner mileage is 10.01 - 14.22 kmpl.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/37640/endeavour-exterior-right-front-three-quarter-149473.jpeg?q=85",
      "Endavour",
      "₹ 33.81 Lakh Onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/33266/alturas-g4-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Alturas G4",
      "₹ 28.77 Lakhonwards",
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
  return OneCarAllSpecs("fortuner").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
