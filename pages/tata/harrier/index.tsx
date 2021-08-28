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
  const CompanyName = "Tata";
  const CarPrice = "₹ 14.39 Lakh";
  const TopPic =
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/32958/tata-harrier-right-front-three-quarter58.jpeg?q=85";
  const CarName = "Tata Harrier";
  const OnlyName = "Harrier";

  const KeySpecification = [
    "₹ 14.39 Lakh onwards",
    "14.63 to 16.35 kmpl",
    "1956 cc",
    "Manual & Automatic (Torque Converter)",
    "Diesel",
    "5 Seater",
    "4,598 mm L x 1,894 mm W x 1,706 mm H",
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

  const VarientPetrol = {};

  const VarientDiesel = {
    varient1: ["XE", "1956  cc, Manual, Diesel, 16.35 kmpl", "Rs.14.39 Lakh*"],
    varient2: ["XM", "1956  cc, Manual, Diesel, 16.35 kmpl", "Rs.15.78 Lakh*"],
    varient3: ["XT", "1956 cc, Manual, Diesel, 16.35 kmpl", "Rs.17.03 Lakh*"],
    varient4: [
      "XMA",
      "1956 cc, Automatic, Diesel, 14.63 kmpl",
      "Rs.17.05 Lakh*",
    ],
    varient5: [
      "XT Dark Edition",
      "1956  cc, Manual, Diesel, 16.35 kmpl",
      "Rs.17.08 Lakh*",
    ],
    varient6: [
      "XT Camo",
      "1956 cc, Manual, Diesel, 16.35 kmpl",
      "Rs.17.24 Lakh*",
    ],
    varient7: [
      "XT Plus",
      "1956 cc, Manual, Diesel, 16.35 kmpl",
      "Rs.17.84 Lakh*",
    ],
    varient8: [
      "XT plus Dark Edition",
      "1956 cc, Manual, Diesel, 16.35 kmpl",
      "Rs.17.88 Lakh*",
    ],
    varient9: [
      "XT Plus Camo",
      "1956 cc, Manual, Diesel, 16.35 kmpl",
      "Rs.18.04 Lakh*",
    ],
    varient10: [
      "XT Plus Dark Edition",
      "1956 cc, Manual, Diesel, 16.35 kmpl",
      "Rs.18.06 Lakh*",
    ],
    varient11: ["XZ", "1956 cc, Manual, Diesel, 16.35 kmpl", "Rs.18.33 Lakh*"],
    varient12: [
      "XZ Dark Edition",
      "1956 cc, Manual, Diesel, 16.35 kmpl",
      "Rs.18.37 Lakh*",
    ],
    varient13: [
      "XZ Dual Tone",
      "1956 cc, Manual, Diesel, 16.35 kmpl",
      "Rs.18.53 Lakh*",
    ],
    varient14: [
      "XZ Camo",
      "1956 cc, Manual, Diesel, 16.35 kmpl",
      "Rs.18.54 Lakh*",
    ],
    varient15: [
      "XZ Plus",
      "1956 cc, Manual, Diesel, 16.35 kmpl",
      "₹ 19.58 Lakh",
    ],
    varient16: [
      "XZA",
      "1956 cc, Automatic, Diesel, 14.63 kmpl",
      "₹ 19.60 Lakh",
    ],
    varient17: [
      "XZ Plus Dark Edition",
      "1956 cc, Manual, Diesel, 16.35 kmpl",
      "₹ 19.62 Lakh",
    ],
    varient18: [
      "XZA Dark Edition",
      "1956 cc, Automatic, Diesel, 14.63 kmpl",
      "₹ 19.62 Lakh",
    ],
    varient19: [
      "XZ Plus Dual Tone",
      "1956 cc, Manual, Diesel, 16.35 kmpl",
      "₹ 19.78 Lakh",
    ],
    varient20: [
      "XZ Plus Camo",
      "1956 cc, Manual, Diesel, 16.35 kmpl",
      "₹ 19.79 Lakh*",
    ],
    varient21: [
      "XZA Dual Tone",
      "1956 cc, Automatic, Diesel, 14.63 kmpl",
      "₹ 19.80 Lakh*",
    ],
    varient22: [
      "XZA Camo",
      "1956 cc, Automatic, Diesel, 14.63 kmpl",
      "₹ 19.81 Lakh",
    ],
    varient23: [
      "XZ Plus Dark Edition",
      "1956 cc, Manual, Diesel, 16.35 kmpl",
      "₹ 19.91 Lakh",
    ],
    varient24: [
      "XZA Plus",
      "1956 cc, Automatic, Diesel, 14.63 kmpl",
      "₹ 20.80 Lakh",
    ],
    varient25: [
      "XZA Plus Dark Edition",
      "1956 cc, Automatic, Diesel, 14.63 kmpl",
      "₹ 20.83 Lakh",
    ],
    varient26: [
      "XZA Plus Dual Tone",
      "1956 cc, Automatic, Diesel, 14.63 kmpl",
      "₹ 21.00 Lakh",
    ],
    varient27: [
      "XZA Plus Camo",
      "1956 cc, Automatic, Diesel, 14.63 kmpl",
      "₹ 21.01 Lakh",
    ],
    varient28: [
      "XZA 2021 Plus Dark Edition",
      "1956 cc, Automatic, Diesel, 14.63 kmpl",
      "₹ 21.11 Lakh",
    ],
  };

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Tata has updated the Harrier’s Dark Edition. Tata Harrier Price: The Harrier is priced from Rs 14.29 lakh to Rs 21.09 lakh (ex-showroom). Tata Harrier Variants: It is available in six trims: XE, XM, XT, XT+, XZ, and XZ+. Tata Harrier Seating Capacity: The Harrier is a 5-seater. Tata Harrier Powertrain: The SUV is equipped with a 2.0-litre diesel engine (170PS/350Nm), mated to a 6-speed MT or a 6-speed torque converter. Tata Harrier Features: The Harrier gets a panoramic sunroof, dual-tone alloy wheels, an 8.8-inch touchscreen infotainment system with Android Auto and Apple CarPlay, and rain-sensing wipers. Tata Harrier Safety: Standard features on offer include ABS with EBD, electronic stability program, and dual front airbags. Tata Harrier Rivals: It locks horns with the Hyundai Creta and Kia Seltos’s top-spec variants. These aside, it also rivals the low- and mid-spec variants of the Jeep Compass, Mahindra XUV500, Mahindra XUV700, and MG Hector.",
  ];

  const ProsCons = {
    pros: [
      "More power makes the Harrier's highway performance stronger.",
      "6-speed AT is smooth, and adds convenience.",
      "Cabin space is among the best. Proper 5-seater.",
    ],
    cons: [
      "No petrol engine available. No AWD variant either.",
      "New features limited to top-spec XZ+ variant only.",
      "Ergonomic issues: narrow footwell, non-sliding armrest remain.",
    ],
  };

  const Colorss = {
    color1: ["Camo Green", "bg-green-800"],
    color2: ["Telesto Grey", "bg-gray-400"],
    color3: ["Oberon Black With Deep Blue Undertone", "bg-gray-900"],
    color4: ["Calypso Red", "bg-red-600"],
    color5: ["Orcus White", "bg-white-800"],
    color6: ["Atlas Black", "bg-gray-900"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 16.30 Lakh Onwards",
      "14.2 to 20.4 kmpl",
      "1493 to 1999 cc",
      "Manual & Automatic (Torque Converter)",
      "Petrol & Diesel",
      "6 & 7 Seater",
      "4,500 mm L x 1,790 mm W x 1,675 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/46812/alcazar-exterior-right-front-three-quarter.jpeg?q=85",
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
      "What is the on road price of Harrier?",
      "The on-road price of Harrier in Delhi starts at ‎₹ 17.36 Lakh and goes upto ‎₹ 25.23 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance",
    ],
    question2: [
      "Which car is better between Harrier and Safari?",
      "Harrier price starts at ₹ 14.30 Lakh ex-showroom and It comes with 1956 cc engine. Whereas Safari price starts at ₹ 14.99 Lakh ex-showroom and It comes with 1956 cc engine",
    ],
    question3: [
      "What are the offers available on Tata Harrier for August?",
      "There are 2 Tata Harrier offers in Delhi for the month of August.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41645/tata-nexon-right-front-three-quarter3.jpeg?q=85",
      "Nexon",
      "₹ 7.20 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32597/tata-altroz-right-front-three-quarter20.jpeg?q=85",
      "Altroz",
      "₹ 5.80 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40027/safari-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Safari",
      "₹ 14.99 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32958/tata-harrier-right-front-three-quarter58.jpeg?q=85",
      "Harrier",
      "₹ 14.30 Lakh onwards",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39345/tiago-exterior-right-front-three-quarter-6.jpeg?q=85",
      "Tiago",
      "₹ 5.00 Lakh onwards",
    ],
    car6: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41160/tata-tigor-right-front-three-quarter3.jpeg?q=85",
      "Tigor",
      "₹ 5.60 Lakh onwards",
    ],
    car7: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/42611/tata-nexon-ev-right-front-three-quarter6.jpeg?q=85",
      "Nexon EV",
      "₹ 13.99 Lakh onwards",
    ],
    car8: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40451/tata-tigor-ev-exterior-1.jpeg?q=85",
      "Tigor EV",
      "₹ 10.58 Lakh onwards",
    ],
    car9: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/99113/tiago-nrg-bs6-exterior-right-front-three-quarter.jpeg?isig=0&q=85",
      "Tiago NRG",
      "₹ 6.57 Lakh onwards",
    ],
  };

  const UpcommingCarBrand = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/39015/Tata-H2X-Exterior-170093.jpg?wm=0&q=85",
      "HBX",
      "₹ 5.00 - 8.00 Lakh",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/40453/Tata-Tiago-EV-Exterior-169932.jpg?wm=0&q=85",
      "Tiago EV",
      "₹ 5.00 - 7.00 Lakh",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/46800/tata-altroz-ev-left-side-view5.jpeg?q=85",
      "Altroz EV",
      "₹ 12.00 - 15.00 Lakh",
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
  return OneCarAllSpecs("harrier").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
