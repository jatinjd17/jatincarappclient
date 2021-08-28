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
  const CompanyName = "Hyundai";
  const CarPrice = "₹ 4.77 Lakh";
  const TopPic =
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/32940/santro-exterior-right-front-three-quarter-138782.jpeg?q=85";
  const CarName = "Hyundai Santro";
  const OnlyName = "Santro";

  const KeySpecification = [
    "₹ 4.77 Lakh onwards",
    "20 to 30 km/kg",
    "1086 cc",
    "Manual & AMT",
    "Petrol & CNG",
    "5 Seater",
    "3,610 mm L x 1,645 mm W x 1,560 mm H",
  ];

  const SafetyFeatures = [
    "Impact Sensing Auto Door Unlock",
    "2 airbags",
    "ABS",
    "EBD",
    "Rear Parking Sensors.",
    "Rear parking sensors",
    "Rear Parking Camera.",
    "Rear Defogger.",
    "Front Seatbelt Pretensioners.",
  ];

  const VarientPetrol = {
    varient1: [
      "Era Executive",
      "1086 cc, Manual, Petrol, 20.3 kmpl",
      "Rs.4.76 Lakh*",
    ],
    varient2: ["Magna", "1086 cc, Manual, Petrol, 20.3 kmpl", "Rs.5.23 Lakh*"],
    varient3: ["Sportz", "1086 cc, Manual, Petrol, 20.3 kmpl", "Rs.5.56 Lakh*"],
    varient4: [
      "AMT Magna",
      "1086 cc, Automatic, Petrol, 20.3 kmpl",
      "Rs.5.72 Lakh*",
    ],
    varient5: ["Asta", "1086 cc, Manual, Petrol, 20.3 kmpl", "Rs.5.97 Lakh*"],

    varient6: [
      "Sportz AMT",
      "1086 cc, Automatic, Petrol, 26.2 kmpl",
      "Rs.5.99 Lakh*",
    ],

    varient7: [
      "Asta AMT",
      "1086 cc, Automatic, Petrol, 20.3 kmpl",
      "Rs.6.44 Lakh*",
    ],
  };

  const VarientDiesel = {};

  const VarientCNG = {
    varient1: [
      "Magna CNG",
      "1086 cc, Manual, CNG, 30.48 km/kg",
      "Rs.5.99 Lakh*",
    ],
    varient2: [
      "Sportz CNG",
      "1086 cc, Manual, CNG, 30.48 km/kg",
      "Rs.6.21 Lakh*",
    ],
  };

  const Mileage = {
    mileage1: ["Diesel (1956 cc)", "Automatic", "20.65 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Hyundai has hiked the prices of the Santro by up to Rs 15,000. Hyundai Santro Price: The Santro is now priced from Rs 4.76 lakh to Rs 6.45 lakh (ex-showroom Delhi). Hyundai Santro Variants: It is available in four trims: Era Executive, Magna, Sportz, and Asta. Hyundai Santro Engine and Powertrain: Hyundai has equipped it with a 1.1-litre four-cylinder petrol engine (69PS/99Nm), paired with either a 5-speed MT or AMT. A factory-fitted CNG kit is also available with the Magna and Sportz, but only with the manual transmission. Hyundai Santro Features: The Santro gets a 7-inch touchscreen infotainment system with MirrorLink, Apple CarPlay and Android Auto connectivity, a rear parking camera, and rear AC vents. Hyundai Santro Safety: Standard safety features include a driver airbag, ABS and EBD, and rear parking sensors. Hyundai Santro Rivals: It fights it out with the Datsun GO, Maruti Suzuki Wagon R and Celerio, and the Tata Tiago.",
  ];

  const ProsCons = {
    pros: [
      "Easy to drive nature",
      "Good interior fit and finish",
      "Spacious cabin",
    ],
    cons: [
      "Bouncy high speed ride quality",
      "Noisy engine",
      "No seat height or steering adjustment",
    ],
  };

  const Colorss = {
    color1: ["Star Dust", "bg-red-800"],
    color2: ["Diana Green", "bg-gray-900"],
    color3: ["Fiery Red", "bg-gray-600"],
    color4: ["Typhoon Silver", "bg-white"],
    color5: ["Mariana Blue", "bg-blue-800"],
    color6: ["Polar White", "bg-red-400"],
    color7: ["Imperial Beige", "bg-red-400"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 5.97 Lakh onwards",
      "21.01 kmpl",
      "1086 cc",
      "Manual, Automatic",
      "Petrol",
      "5 Seater",
      "3,995 mm L x 1,745 mm W x 1,510 mm H",
      "https://live.staticflickr.com/7840/45954179625_28f5d35cbf_b.jpg",
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
      "6 Airbags",
      "",
    ],
  };

  const faqs = {
    question1: [
      "What is the on road price of Santro?",
      "The on-road price of Santro in Delhi starts at ‎₹ 5.35 Lakh and goes upto ‎₹ 7.31 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Santro and Wagon R?",
      "Santro price starts at ₹ 4.77 Lakh ex-showroom and It comes with 1086 cc engine. Whereas Wagon R price starts at ₹ 4.79 Lakh ex-showroom and It comes with 998 cc engine",
    ],
    question3: [
      "What is the mileage of Hyundai Santro?",
      "The Hyundai Santro mileage is 20 - 30 km/kg.",
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
      "https://live.staticflickr.com/7840/45954179625_28f5d35cbf_b.jpg",
      "Baleno",
      " ₹ 5.97 Lakh onwards",
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

  const UpcommingCarBrand = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/100121/exterior-right-front-three-quarter.jpeg?isig=0&q=85",
      "i20 N Line",
      "₹ 11.00 - 13.00 Lakh",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/51891/ax1-micro-suv-exterior-left-front-three-quarter.jpeg?q=85",
      "AX1 micro-SUV",
      "₹ 4.00 - 7.00 Lakh",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/49892/new-kona-exterior-front-view.jpeg?q=85",
      "New Kona",
      "₹ 23.00 - 25.00 Lakh",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47331/hyundai-new-elantra-left-side-view0.jpeg?q=85",
      "New Elantra",
      "₹ 16.00 - 20.00 Lakh",
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
  return OneCarAllSpecs("santro").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
