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
import { Polo } from "../../../CarPicsUrl/CarPics";

function Homee({ joy }) {
  const CompanyName = "Volkswagen";
  const CarPrice = "₹ 6.21 Lakh";
  const TopPic = Polo;
  const CarName = "Volkswagen Polo";
  const OnlyName = "Polo";

  const KeySpecification = [
    "₹ ₹ 6.21 Lakh onwards",
    "16.47 to 17.99 kmpl",
    "999 cc",
    "Manual & Automatic (Torque Converter)",
    "Petrol",
    "5 Seater",
    "3,971 mm L x 1,682 mm W x 1,469 mm H",
  ];

  const SafetyFeatures = [
    "Dual Front Airbags for Driver and Front Passenger",
    "Ventilated Front Disc Brakes",
    "Central Locking",
    "high mounted third Brake Light",
    "Height Adjustable Front head restraints",
    "Electronic anti-theft Immobiliser",
  ];

  const VarientPetrol = {
    varient1: [
      "1.0 MPI Trendline",
      "999 cc, Manual, Petrol, 17.74 kmpl",
      "Rs.6.16 Lakh*",
    ],
    varient2: [
      "1.0 MPI Comfortline",
      "999 cc, Manual, Petrol, 17.74 kmpl",
      "Rs.7.11 Lakh*",
    ],
    varient3: [
      "Turbo Edition",
      "999 cc, Manual, Petrol, 18.24 kmpl",
      "Rs.7.41 Lakh*",
    ],
    varient4: [
      "1.0 TSI Highline Plus",
      "999 cc, Manual, Petrol, 18.24 kmpl",
      "Rs.8.49 Lakh*",
    ],
    varient5: [
      "1.0 TSI Comfortline AT",
      "999  cc, Automatic, Petrol, 16.47 kmpl",
      "Rs.8.51 Lakh*",
    ],
    varient6: [
      "1.0 Red And White Edition",
      "999 cc, Manual, Petrol, 18.24 kmpl",
      "Rs.9.19 Lakh*",
    ],
    varient7: [
      "1.0 TSI Highline Plus AT",
      "999 cc, Automatic, Petrol, 16.47 kmpl",
      "Rs.9.60 Lakh*",
    ],
    varient8: [
      "GT 1.0 TSI",
      "999 cc, Manual, Petrol, 18.24 kmpl",
      "Rs.9.99 Lakh*",
    ],
  };

  const VarientDiesel = {};

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Volkswagen has introduced an automatic gearbox in the second-to-base Comfortline variant. Volkswagen Polo Price: The premium hatchback is priced from Rs 6.16 lakh to Rs 9.99 lakh (ex-showroom). Volkswagen Polo Variants: It is sold in four variants: Trendline, Comfortline, Highline Plus, and GT. Volkswagen Polo Powertrains: It gets two engine options: a 1.0-litre naturally aspirated petrol (75PS/95Nm) and a 1.0-litre turbo-petrol (110PS/175Nm). While the former is mated to a 5-speed MT,  the latter can be paired with either a 6-speed MT or a 6-speed AT. The fuel efficiency figures of the Polo are as follows: 1.0-litre MPI: 17.57kmpl 1.0-litre TSI MT: 18.24kmpl 1.0-litre TSI AT: 16.47kmpl Volkswagen Polo Features: The Polo gets cruise control, auto AC with rear AC vents, rain-sensing wipers, and a 6.5-inch touchscreen infotainment system with Apple CarPlay and Android Auto. Volkswagen Polo Safety: Standard safety features on offer include rear parking sensors and dual front airbags. Volkswagen Polo Rivals: It takes on the Hyundai i20, Honda Jazz, Tata Altroz, and the Maruti Suzuki Baleno/Toyota Glanza.",
  ];

  const ProsCons = {
    pros: ["Punchy turbo engine", "Solid build quality", "Enthusiast handling"],
    cons: [
      "Missing features like a reverse camera",
      "Lack of rear seat space",
      "Lacks in Modern features",
    ],
  };

  const Colorss = {
    color1: ["Lapiz Blue", "bg-blue-600"],
    color2: ["Carbon Steel", "bg-gray-400"],
    color3: ["Sunset Red", "bg-white"],
    color4: ["Toffee Brown", "bg-red-600"],
    color5: ["Flash Red", "bg-gray-800"],
    color6: ["Reflex Silver", "bg-gray-800"],
    color7: ["Candy White", "bg-gray-800"],
    color8: ["Flash Red", "bg-gray-800"],
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
      "What is the on road price of Polo?",
      "The on-road price of Polo in Delhi starts at ‎₹ 7.03 Lakh and goes upto ‎₹ 11.27 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Polo and Figo?",
      "Polo price starts at ₹ 6.21 Lakh ex-showroom and It comes with 999 cc engine. Whereas Figo price starts at ₹ 5.82 Lakh ex-showroom and It comes with 1194 cc engine",
    ],
    question3: [
      "What is the mileage of Volkswagen Polo?",
      "The Volkswagen Polo mileage is 16.47 - 17.99 kmpl.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Polo",
      "₹ 6.21 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/55747/t-roc-exterior-right-front-three-quarter-3.jpeg?q=85",
      "T-Roc",
      "₹ 21.35 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/26563/Volkswagen-Vento-Right-Front-Three-Quarter-169094.jpg?wm=0&q=85",
      "Vento",
      "₹ 10.00 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45290/volkswagen-tiguan-allspace-right-front-three-quarter54.jpeg?q=85",
      "Tiguan Allspace",
      "₹ 34.19 Lakh onwards",
    ],
  };

  const UpcommingCarBrand = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45057/taigun-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Taigun",
      "₹ 10.00 - 16.00 Lakh",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/53123/tiguan-exterior-right-front-three-quarter-4.jpeg?q=85",
      "Tiguan",
      "₹ 28.00 - 32.00 Lakh",
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
  return OneCarAllSpecs("polo").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
