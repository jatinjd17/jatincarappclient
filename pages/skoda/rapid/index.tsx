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
import { Rapid } from "../../../CarPicsUrl/CarPics";
import { TRapid } from "../../../CarPicsUrl/Thumbnails";
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
  // const CarPrice = "₹ 7.80 Lakh";
  // const TopPic = Rapid;
  // const CarName = "Skoda Rapid";
  // const OnlyName = "Rapid";
  // const ThumPic = TRapid;

  // const KeySpecification = [
  //   "₹ 7.80 Lakh",
  //   "16.24 to 18.97 kmpl",
  //   "999 cc",
  //   "Manual & Automatic",
  //   "Petrol",
  //   "5 Seater",
  //   "4,413 mm L x 1,699 mm W x 1,466 mm H",
  // ];

  // const SafetyFeatures = [
  //   "dual front airbags",
  //   "electronic stability control",
  //   "ABS",
  //   "EBD",
  // ];

  // const VarientPetrol = {
  //   varient1: [
  //     "New 1.0 TSI Rider",
  //     "999 cc, Manual, Petrol, 18.97 kmpl",
  //     "Rs.7.79 Lakh*",
  //   ],
  //   varient2: [
  //     "New 1.0 TSI Rider Plus",
  //     "999 cc, Manual, Petrol, 18.97 kmpl",
  //     "Rs.8.19 Lakh*",
  //   ],
  //   varient3: [
  //     "New 1.0 TSI Rider Plus AT",
  //     "999 cc, Automatic, Petrol, 16.24 kmpl",
  //     "Rs.9.69 Lakh*",
  //   ],
  //   varient4: [
  //     "New 1.0 TSI Ambition",
  //     "999 cc, Manual, Petrol, 18.97 kmpl",
  //     "Rs.9.99 Lakh*",
  //   ],
  //   varient5: [
  //     "New 1.0 TSI Onyx",
  //     "999 cc, Manual, Petrol, 18.97 kmpl",
  //     "Rs.10.19 Lakh*",
  //   ],
  //   varient6: [
  //     "New 1.0 TSI Ambition AT",
  //     "999 cc, Automatic, Petrol, 16.24 kmpl",
  //     "Rs.11.49 Lakh*",
  //   ],
  //   varient7: [
  //     "New 1.0 TSI Onyx AT",
  //     "999 cc, Automatic, Petrol, 16.24 kmpl",
  //     "Rs.11.69 Lakh*",
  //   ],
  //   varient8: [
  //     "New 1.0 TSI Style",
  //     "999 cc, Manual, Petrol, 18.97 kmpl",
  //     "Rs.11.69 Lakh*",
  //   ],
  //   varient9: [
  //     "New 1.0 TSI Monte Carlo",
  //     "999 cc, Manual, Petrol, 18.97 kmpl",
  //     "Rs.11.99 Lakh*",
  //   ],
  //   varient10: [
  //     "New 1.0 TSI Style AT",
  //     "999 cc, Automatic, Petrol, 16.24 kmpl",
  //     "Rs.12.99 Lakh*",
  //   ],
  //   varient11: [
  //     "New 1.0 TSI Monte Carlo AT",
  //     "999 cc, Automatic, Petrol, 16.24 kmpl",
  //     "Rs.13.29 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1330 cc)", "Automatic (Dual Clutch)", "16.42 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Skoda Rapid Price: The Rapid is priced from Rs 7.79 lakh to Rs 13.29 lakh (ex-showroom pan-India). Skoda Rapid Variants: It is available in six trims: Rider, Rider Plus, Ambition, Onyx, Style, and Monte Carlo. Skoda Rapid Engine and Transmission: The compact sedan is powered by a single 1-litre turbo-petrol engine (110PS/175Nm), mated to either a 6-speed MT or a torque converter automatic unit. Skoda Rapid Features: Skoda offers the Rapid with automatic climate control, cruise control, height-adjustable driver seat, and a 6.5-inch touchscreen infotainment system with Apple CarPlay, Android Auto, and MirrorLink. The top-spec variants get a new 8-inch touchscreen unit. Skoda Rapid Safety: Its safety features include up to four airbags, ABS, and rear parking sensors. Skoda Rapid Rivals: The Rapid goes up against the Maruti Suzuki Ciaz, Honda City, Hyundai Verna, Toyota Yaris, and Volkswagen Vento.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Classy mature styling.",
  //     "Fit and finish of the interiors.",
  //     "Great new service and warranty packages.",
  //   ],
  //   cons: [
  //     "More features expected ",
  //     "No diesel option.",
  //     "Short feature list.",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Brilliant Silver", "bg-gray-600"],
  //   color2: ["Lapiz Blue", "bg-blue-800"],
  //   color3: ["Carbon Steel", "bg-gray-700"],
  //   color4: ["Toffee Brown", "bg-brown-300"],
  //   color5: ["Flash Red", "bg-red-900"],
  //   color6: ["Candy White", "bg-white-900"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 11.19 Lakh",
  //     "17.8 to 24.1 kmpl",
  //     "1498 cc",
  //     "Manual & Automatic (CVT)",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "4,549 mm L x 1,748 mm W x 1,489 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/40535/all-new-city-exterior-right-front-three-quarter.jpeg?q=85",
  //   ],
  //   comparisioncar2: [
  //     "₹ 9.28 Lakh*",
  //     "17.7 to 25 kmpl",
  //     "998 to 1497 cc",
  //     "Manual, Automatic (CVT), Automatic (Torque Converter) & Automatic (Dual Clutch)",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "4,440 mm L x 1,729 mm W x 1,475 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/41197/hyundai-verna-right-front-three-quarter7.jpeg?q=85",
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
  //     "What is the on road price of Rapid TSI?",
  //     "The on-road price of Rapid TSI in Delhi starts at ‎₹ 8.72 Lakh and goes upto ‎₹ 15.29 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance",
  //   ],
  //   question2: [
  //     "Which car is better between Rapid TSI and Vento?",
  //     "Rapid TSI price starts at ₹ 7.80 Lakh ex-showroom and It comes with 999 cc engine. Whereas Vento price starts at ₹ 10.00 Lakh ex-showroom and It comes with 1598 cc engine. Compare the two models to identify the best car for you.",
  //   ],
  //   question3: [
  //     "What are the offers available on Skoda Rapid TSI for August?",
  //     "There are 1 Skoda Rapid TSI offer in Delhi for the month of August.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40535/all-new-city-exterior-right-front-three-quarter.jpeg?q=85",
      "City",
      "Rs.31.99 Lakh Onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41197/hyundai-verna-right-front-three-quarter7.jpeg?q=85",
      "Verna",
      "₹ 9.28 Lakh*",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/26563/Volkswagen-Vento-Right-Front-Three-Quarter-169094.jpg?wm=0&q=85",
      "Vento",
      "₹ 10.00 Lakh*",
    ],
  };

  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47562/skoda-rapid-tsi-right-front-three-quarter0.jpeg?q=85",
      "Rapid",
      "₹ 11.19 Lakh",
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
        LinkCarName="rapid"
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
  return OneCarAllSpecs("rapid").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
