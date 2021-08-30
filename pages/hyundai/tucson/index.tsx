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
  const CarPrice = "₹ 22.69 Lakh";
  const TopPic = "https://i.ibb.co/kBk5WDP/tucson.jpg";
  const CarName = "Hyundai Tucson";
  const OnlyName = "Tucson";

  const KeySpecification = [
    "₹ 22.69 Lakh onwards",
    "14.59 - 14.62 kmpl",
    "1995 to 1999 cc",
    "Automatic",
    "Petrol & Diesel",
    "5 Seater",
    "4,480 mm L x 1,850 mm W x 1,660 mm H",
  ];

  const SafetyFeatures = [
    "Impact Sensing Auto Door Unlock",
    "6 airbags",
    "ABS",
    "EBD",
    "Central Locking",
    "Emergency Stop Signal",
    "Driver & Passenger SeatBelt Reminder",
    "Speed Sensing Auto Door Lock",
    "Headlamp Escort Function",
    "ISOFIX",
    "Speed Alert System",
    "Driver & Passenger Side Seat Belt Pretensioners & Load Limiters",
  ];

  const VarientPetrol = {
    varient1: [
      "GL Opt AT",
      "1999 cc, Automatic, Petrol, 12.95 kmpl",
      "Rs.22.69 Lakh*",
    ],
    varient2: [
      "GLS AT",
      "1999 cc, Automatic, Petrol, 12.95 kmpl",
      "Rs.24.37 Lakh*",
    ],
  };

  const VarientDiesel = {
    varient1: [
      "GL Opt Diesel AT",
      "1995 cc, Automatic, Diesel, 15.38 kmpl",
      "Rs.24.74 Lakh*",
    ],
    varient2: [
      "GLS Diesel AT",
      "1995 cc, Automatic, Diesel, 15.38 kmpl",
      "Rs.26.08 Lakh*",
    ],
    varient3: [
      "GLS 4WD Diesel AT",
      "1995 cc, Automatic, Diesel, 15.38 kmpl",
      "Rs.27.47 Lakh*",
    ],
  };

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Diesel (1956 cc)", "Automatic", "20.65 kmpl"],
    mileage2: ["CNG (796 cc)", "Automatic", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: The Tucson has become costlier by up to Rs 34,000. Hyundai Tucson Prices: Hyundai has priced the SUV from Rs 22.57 lakh to Rs 27.35 lakh (ex-showroom Delhi). Hyundai Tucson Variants: It is offered in three variants: 2WD AT GL(O), 2WD AT GLS, and 4WD AT GLS. Hyundai Tucson Seating Capacity: Hyundai offers the facelifted Tucson in a 5-seater layout. Hyundai Tucson Powertrains: Under the hood, it is powered by 2.0-litre petrol and diesel engines. While the petrol engine continues to come mated to a 6-speed AT, the diesel unit gets a new 8-speed automatic transmission option, instead of the 6-speed AT in the previous model. The petrol engine produces 152PS and 192Nm, while the output of the diesel unit stands at 185PS and 400Nm. Hyundai Tucson Features: The Tucson gets an 8-inch touchscreen infotainment system with Android Auto and Apple CarPlay, wireless charging, panoramic sunroof, and electric parking brake. It now comes with rain-sensing wipers, 18-inch alloy wheels, LED headlamps and tail lamps, and Hyundai’s BlueLink connected car tech with the update. Hyundai Tucson Safety: Safety features on the facelifted Tucson include up to six airbags, electronic stability control (ESC), ABS with EBD, and hill start assist. Hyundai Tucson Rivals: It takes on the Skoda Karoq, MG Hector, Jeep Compass, Citroen C5 Aircross, and the upcoming VW Tiguan 2021.",
  ];

  const ProsCons = {
    pros: [
      "AT with both petrol and diesel",
      "Available in an AWD variant",
      "Cabin layout feels premium",
    ],
    cons: [
      "Looks are polarizing. Use of triangles on an otherwise curvy design feels a mismatch.",
      "Prices are kept at a premium",
      "Manual transmission variant would have made the Tucson a bit more affordable",
    ],
  };

  const Colorss = {
    color1: ["Typhoon Silver", "bg-red-800"],
    color2: ["Phantom Black", "bg-gray-900"],
    color3: ["Starry Night", "bg-gray-600"],
    color4: ["Polar White", "bg-white"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 14.30 Lakh Onwards",
      "14.63 to 16.35 kmpl",
      "1956 cc",
      "Manual & Automatic (Torque Converter)",
      "Diesel",
      "5 Seater",
      "4,598 mm L x 1,894 mm W x 1,706 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32958/tata-harrier-right-front-three-quarter58.jpeg?q=85",
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
      "6 Airbags",
      "",
    ],
  };

  const faqs = {
    question1: [
      "What is the on road price of Tucson?",
      "The on-road price of Tucson in Delhi starts at ‎₹ 26.56 Lakh and goes upto ‎₹ 32.74 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount",
    ],
    question2: [
      "Which car is better between Tucson and C5 Aircross?",
      "Tucson price starts at ₹ 22.69 Lakh ex-showroom and It comes with 1999 cc engine. Whereas C5 Aircross price starts at ₹ 30.30 Lakh ex-showroom and It comes with 1997 cc engine. ",
    ],
    question3: [
      "What is price of Tucson top model?",
      "Top model of Tucson is GLS 4WD AT Diesel and the ex-showroom for Tucson GLS 4WD AT Diesel is ₹ 27.47 Lakh.",
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
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Superb/6764/1592459454448/front-left-side-47.jpg",
      "Superb",
      "Rs.31.99 Lakh Onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40371/octavia-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Octavia",
      "Rs.26.01 Lakh*",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32958/tata-harrier-right-front-three-quarter58.jpeg?q=85",
      "Harrier",
      "₹ 14.30 Lakh Onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/52565/hector-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Hector",
      "₹ 13.18 Lakh onwards0",
    ],
    car5: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/6775/1584360708758/front-left-side-47.jpg?tr=w-456",
      "Creta",
      "Rs.10.16 Lakh onwards",
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
  return OneCarAllSpecs("tucson").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
