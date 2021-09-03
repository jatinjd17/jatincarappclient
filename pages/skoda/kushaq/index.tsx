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
import { Kushaq } from "../../../CarPicsUrl/CarPics";
import { TKushaq } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";

function Homee({ joy }) {
  const CompanyName = joy.CarInfo.CompanyName;
  const CarPrice = joy.CarInfo.Price[0];
  const TopPic = joy.CarInfo.TopPic[0];
  const CarName = joy.CarInfo.CarName;
  const OnlyName = joy.CarInfo.OnlyName[0];
  const ThumPic = joy.CarInfo.ThumPic;

  const KeySpecification = joy.KeySpecification;

  const SafetyFeatures = joy.SafetyFeatures;

  const VarientPetrol = joy.VarientPetrol;

  const VarientDiesel = joy.VarientDiesel;

  const VarientCNG = joy.VarientCNG;

  const Mileage = joy.Mileage;

  const LatestUpdate = joy.LatestUpdate;

  const ProsCons = joy.ProsCons;

  const Colorss = joy.Colorss;

  const ComparisionCar = joy.ComparisionCar;

  const HighlightedFeatures = joy.HighlightedFeatures;

  const faqs = joy.faqs;

  const articles = joy.articles;

  const UpcommingCarBrand = joy.UpcommingCarBrand;

  // const CompanyName = "Skoda";
  // const CarPrice = "₹ 10.51 Lakh";
  // const TopPic = Kushaq;
  // const CarName = "Skoda Kushaq";
  // const OnlyName = "Kushaq";
  // const ThumPic = TKushaq;

  // const KeySpecification = [
  //   "₹ 10.51 Lakh onwards",
  //   "15.78 to 17.88 kmpl",
  //   "999 to 1498 cc",
  //   "Manual, Automatic (Torque Converter) & Automatic (Dual Clutch)",
  //   "Petrol",
  //   "5 Seater",
  //   "4,225 mm L x 1,760 mm W x 1,612 mm H",
  // ];

  // const SafetyFeatures = [
  //   "dual front airbags",
  //   "electronic stability control",
  //   "ABS",
  //   "EBD",
  //   "multi-collision braking",
  //   "electronic differential lock system",
  //   "anti-slip regulation",
  //   " motor slip regulation",
  //   "rollover protection",
  //   "brake disc wiping",
  //   "reverse parking sensors",
  // ];

  // const VarientPetrol = {
  //   varient1: [
  //     "1.0 TSI Active",
  //     "999 cc, Manual, Petrol, 17.88 kmpl",
  //     "Rs.10.49 Lakh*",
  //   ],
  //   varient2: [
  //     "1.0 TSI Ambition",
  //     "999 cc, Manual, Petrol, 17.88 kmpl",
  //     "Rs.12.79 Lakh*",
  //   ],
  //   varient3: [
  //     "1.0 TSI Ambition AT",
  //     "999 cc, Automatic, Petrol, 15.78 kmpl",
  //     "Rs.14.19 Lakh*",
  //   ],
  //   varient4: [
  //     "1.0 TSI Style",
  //     "999 cc, Manual, Petrol, 17.88 kmpl",
  //     "Rs.14.59 Lakh*",
  //   ],
  //   varient5: [
  //     "1.0 TSI Style AT",
  //     "999 cc, Automatic, Petrol, 15.78 kmpl",
  //     "Rs.15.79 Lakh*",
  //   ],
  //   varient6: [
  //     "1.5 TSI Style",
  //     "1498 cc, Manual, Petrol, 16.42 kmpl",
  //     "Rs.16.19 Lakh*",
  //   ],
  //   varient7: [
  //     "1.5 TSI Style DSG",
  //     "1498 cc, Automatic, Petrol, 16.42 kmpl",
  //     "Rs.17.59 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1330 cc)", "Automatic (Dual Clutch)", "16.42 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: Skoda has garnered nearly 6,000 bookings for the Kushaq. Skoda Kushaq Price: The Kushaq is priced between Rs 10.50 lakh and Rs 17.60 lakh (ex-showroom pan-India). Skoda Kushaq Variants: It is offered in three broad trims: Active, Ambition, and Style. Skoda Kushaq Seating Capacity: The Kushaq is a five-seater. Skoda Kushaq Engine and Transmission: It gets two turbo-petrol engines: 1-litre (115PS/178Nm) and 1.5-litre (150PS/250Nm). While both engines get a 6-speed manual as standard, the 1-litre unit also comes with the option of a 6-speed torque converter while the other engine gets a 7-speed DSG (dual-clutch automatic). Skoda Kushaq Features: Skoda’s packed the compact SUV with features such as ventilated front seats, a 10.25-inch touchscreen system, wireless charging, a sunroof, connected car tech, and a 6-speaker sound system with a subwoofer. Skoda Kushaq Safety: Safety is covered by up to six airbags, electronic stability control (as standard), and rear parking sensors. Skoda Kushaq Rivals: Skoda’s Kushaq rivals the Maruti Suzuki S-Cross, Hyundai Creta, Kia Seltos, Renault Duster, Nissan Kicks, and the Volkswagen Taigun. If you want a more rugged compact SUV, you can check out the Mahindra Scorpio.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "SUV-like ride quality",
  //     "Impressive cabin design and build",
  //     "Excellent infotainment and sound experience",
  //   ],
  //   cons: [
  //     "Quality of materials in certain areas isn’t Skoda level",
  //     "Lack of premium features",
  //     "No diesel engine option",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Brilliant Silver", "bg-gray-600"],
  //   color2: ["Honey Orange", "bg-orange-800"],
  //   color3: ["Carbon Steel", "bg-gray-700"],
  //   color4: ["Toreador Red", "bg-red-300"],
  //   color5: ["Candy White", "bg-white-800"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 14.30 Lakh Onwards",
  //     "14.63 to 16.35 kmpl",
  //     "1956 cc",
  //     "Manual & Automatic (Torque Converter)",
  //     "Diesel",
  //     "5 Seater",
  //     "4,598 mm L x 1,894 mm W x 1,706 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/32958/tata-harrier-right-front-three-quarter58.jpeg?q=85",
  //   ],
  //   comparisioncar2: [
  //     "₹ 13.63 Lakh onwards",
  //     "16.6 kmpl",
  //     "1451 to 1956 cc",
  //     "Manual & Automatic",
  //     "Petrol & Diesel",
  //     "6-7 Seater",
  //     "4,720 mm L x 1,835 mm W x 1,760 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/45184/hector-plus-exterior-right-front-three-quarter-7.jpeg?q=85",
  //   ],
  // };

  // const HighlightedFeatures = {
  //   feature1: [
  //     "https://stimg.cardekho.com/images/carinteriorimages/930x620/Maruti/Baleno/6778/1615985207322/interior-image-209.jpg?imwidth=480",
  //     "Stylish Interiors",
  //     "",
  //   ],
  //   feature2: [
  //     "https://image.shutterstock.com/image-photo/car-door-lock-knob-children-260nw-1514746379.jpg",
  //     "Rear Door Child Lock",
  //     "",
  //   ],
  //   feature3: [
  //     "https://stimg.cardekho.com/images/carinteriorimages/630x420/Maruti/Alto-800/7075/1594805410865/airbags-94.jpg?tr=w-360",
  //     "2 Airbags",
  //     "",
  //   ],
  // };

  // const faqs = {
  //   question1: [
  //     "What is the on road price of Kushaq?",
  //     "The on-road price of Kushaq in Delhi starts at ‎₹ 12.11 Lakh and goes upto ‎₹ 20.26 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance",
  //   ],
  //   question2: [
  //     "Which car is better between Kushaq and Creta?",
  //     "Kushaq price starts at ₹ 10.51 Lakh ex-showroom and It comes with 999 cc engine. Whereas Creta price starts at ₹ 10.15 Lakh ex-showroom and It comes with 1497 cc engine. Compare the two models to identify the best car for you.",
  //   ],
  //   question3: [
  //     "What is the mileage of Skoda Kushaq?",
  //     "The Skoda Kushaq mileage is 15.78 - 17.88 kmpl.",
  //   ],
  // };

  // const articles = {
  //   article1: [
  //     "/kushaq.png",
  //     "Rath Yatra 2021: About 60 Skoda Kushaq SUVs To Be Delivered In Ahmedabad",
  //   ],
  //   article2: [
  //     "/kushaq.png",
  //     "Rath Yatra 2021: About 60 Skoda Kushaq SUVs To Be Delivered In Ahmedabad",
  //   ],
  //   article3: [
  //     "/kushaq.png",
  //     "Rath Yatra 2021: About 60 Skoda Kushaq SUVs To Be Delivered In Ahmedabad",
  //   ],
  // };

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
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/6775/1584360708758/front-left-side-47.jpg?tr=w-456",
      "Creta",
      "Rs.10.16 Lakh onwards",
    ],
  };

  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47562/skoda-rapid-tsi-right-front-three-quarter0.jpeg?q=85",
      "Rapid",
      "₹ 7.80 Lakh",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40371/octavia-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Octavia",
      "₹ 26.01 Lakh",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39039/superb-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Superb",
      "₹ 32.02 Lakh",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/44549/kushaq-exterior-right-front-three-quarter-52.jpeg?q=85",
      "Kushaq",
      "₹ 10.51 Lakh",
    ],
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/41784/Skoda-Kamiq-Exterior-170110.jpg?wm=0&q=85",
  //     "Skoda Kamiq",
  //     "₹ 15.00 - 20.00 Lakh",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/49051/kodiaq-petrol-bs6-exterior-left-front-three-quarter.jpeg?q=85",
  //     "Skoda Kodiaq Petrol BS6",
  //     "₹ 33.00 - 36.00 Lakh",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/44088/skoda-new-rapid-exterior-0.jpeg?q=85",
  //     "Skoda New Rapid",
  //     "₹ 9.00 - 12.00 Lakh",
  //   ],
  // };

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
        LinkCarName="kushaq"
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
  return OneCarAllSpecs("kushaq").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
