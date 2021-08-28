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
  const CompanyName = "Toyota";
  const CarPrice = "₹ 7.34 Lakh";
  const TopPic =
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/39545/glanza-exterior-right-front-three-quarter-159523.jpeg?q=85";
  const CarName = "Toyota Glanza";
  const OnlyName = "Glanza";

  const KeySpecification = [
    "₹ 7.34 Lakh onwards",
    "19.56 to 21.96 kmpl",
    "1197 cc",
    "Manual & Automatic (CVT)",
    "Petrol",
    "5 Seater",
    "3,995 mm L x 1,745 mm W x 1,510 mm H",
  ];

  const SafetyFeatures = [
    "dual front airbags",
    "ABS with EBD and BA",
    "ISOFIX, reverse parking camera",
    "reverse parking sensors",
    "front seat belts with pre-tensioners and force limiters",
    "high-speed warning alert",
    "electrochromic IRVM",
  ];

  const VarientPetrol = {
    varient1: [
      "G",
      "1197 cc, Manual, Petrol, 10.01 kmpl - 21.01 kmpl",
      "Rs.7.34 Lakh*",
    ],
    varient2: [
      "G Smart Hybrid",
      "1197 cc, Manual, Petrol, 10.01 kmpl - 21.01 kmpl",
      "Rs.7.99 Lakh*",
    ],
    varient3: ["V", "1197 cc, Manual, Petrol, 21.01 kmpl", "Rs.8.10 Lakh*"],
    varient4: [
      "G CVT",
      "1197 cc, Automatic, Petrol, 19.56 kmpl",
      "Rs.8.54 Lakh*",
    ],
    varient5: [
      "V CVT",
      "1197 cc, Automatic, Petrol, 19.56 kmpl",
      "Rs.9.30 Lakh*",
    ],
  };

  const VarientDiesel = {};

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Toyota has hiked prices of the Glanza by up to Rs 34,000. Toyota Glanza Price: It is currently priced from Rs 7.34 lakh to Rs 9.30 lakh (ex-showroom Delhi). Toyota Glanza Variants: The Glanza is sold in two trims: G and V. Toyota Glanza Powertrain: Toyota has provided the hatchback with a 1.2-litre DualJet mild-hybrid engine (90PS/113Nm) mated to a 5-speed MT and a 1.2-litre petrol engine (83PS/113Nm) paired with a 5-speed MT or CVT. Here are the fuel economy figures of the Toyota Glanza: 1.2-litre petrol MT- 21.01kmpl 1.2-litre petrol mild hybrid MT- 23.87kmpl 1.2-litre petrol CVT- 19.56kmpl Toyota Glanza Features: It gets auto-LED projector headlamps, a 7-inch touchscreen infotainment system with Apple CarPlay and Android Auto, and auto AC. Toyota Glanza Safety: Dual front airbags, ABS with EBD, ISOFIX child seat anchors, and rear parking sensors are available as standard. Toyota Glanza Rivals: The Glanza locks horns with the Maruti Baleno, Hyundai i20, Volkswagen Polo, Honda Jazz, and Tata Altroz.",
  ];

  const ProsCons = {
    pros: [
      "Apart from dual airbags, ABS with EBD, rear parking camera, the Glanza gets ISOFIX as standard across the range.",
      "Gets plenty of standard features like LED projector headlamps, 16-inch alloy wheels, 7-inch touchscreen and push button start/stop.",
      "Comes with a 3-year/1 lakh km standard warranty as well as a 5-year/2,20,000km extended warranty.",
    ],
    cons: [
      "No diesel option. All its rivals offer a diesel engine option as of now, including the donor car Baleno.",
      "Doesn’t take the Toyota baton forward by offering additional safety features like side and curtain airbags.",
      "Limited variants has resulted in higher entry point for buyers.",
    ],
  };

  const Colorss = {
    color1: ["GAMING GREY", "bg-gray-800"],
    color2: ["SPORTIN' RED", "bg-red-900"],
    color3: ["ENTICING SILVER", "bg-gray-400"],
    color4: ["INSTA BLUE", "bg-blue-800"],
    color5: ["Cafe White", "bg-gray-100"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 5.81 Lakh onwards",
      "23.2 kmpl",
      "1197 cc",
      "Manual, Automatic",
      "Petrol",
      "5 Seater",
      "length of 3845, width of 1735 and a wheelbase of 2450",
      "https://imgd.aeplcdn.com/600x600/n/cw/ec/26742/swift-exterior-right-front-three-quarter-2.jpeg?q=85",
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
      "What is the on road price of Glanza?",
      "The on-road price of Glanza in Delhi starts at ‎₹ 8.27 Lakh and goes upto ‎₹ 10.42 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Glanza and Baleno?",
      "Glanza price starts at ₹ 7.34 Lakh ex-showroom and It comes with 1197 cc engine. Whereas Baleno price starts at ₹ 5.97 Lakh ex-showroom and It comes with 1197 cc engine.",
    ],
    question3: [
      "What is the mileage of Toyota Glanza?",
      "The Toyota Glanza mileage is 19.56 - 21.96 kmpl.",
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
      "https://live.staticflickr.com/7840/45954179625_28f5d35cbf_b.jpg",
      "Baleno",
      "₹ 5.97 Lakh onwards",
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
  return OneCarAllSpecs("glanza").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
