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
  const CompanyName = "Mahindra";
  const CarPrice = "₹ 8.64 Lakh";
  const TopPic = "https://i.ibb.co/mRnRdDg/mahindra-bolero.webp";
  const CarName = "Mahindra Bolero";
  const OnlyName = "Bolero";

  const KeySpecification = [
    "₹ 8.64 Lakh onwards",
    "16.7 kmpl",
    "1493 cc",
    "Manual",
    "Diesel",
    "7 Seater",
    "3,995 mm i x 1,745 mm x 1,880 mm h",
  ];

  const SafetyFeatures = [
    "A driver’s side airbag",

    "Rear parking sensors",

    "Seatbelt reminders for the driver and front passenger",

    "A speed warning system (at 80kmph and 120kmph)",

    "A manual override for the central locking system",
  ];

  const VarientPetrol = {};

  const VarientDiesel = {
    varient1: ["B4", "1498 cc, Manual, Diesel, 16.0 kmpl", "Rs.8.62 Lakh*"],
    varient2: ["B6", "1498 cc, Manual, Diesel, 16.0 kmpl", "Rs.9.36 Lakh*"],
    varient3: ["B6 Opt", "1498 cc, Manual, Diesel, 16.0 kmpl", "Rs.9.61 Lakh*"],
  };

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "23.26 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: The prices of the Bolero have been increased uniformly by Rs 22,000. Mahindra Bolero Price: Mahindra retails the SUV between Rs 8.62 lakh and Rs 9.61 lakh (ex-showroom Delhi).  Mahindra Bolero Variants: It is offered in two trims: B4 and B6. Mahindra Bolero Seating Capacity: The Bolero can carry up to seven occupants. Mahindra Bolero Powertrain: Mahindra has equipped the Bolero with a 1.5-litre diesel engine (75PS/210Nm), paired with a 5-speed MT.  Mahindra Bolero Features: It comes with keyless entry, digital instrument cluster, a Bluetooth-enabled music system with AUX and USB connectivity, AC, and power steering. Mahindra Bolero Safety: The Bolero is equipped with ABS, dual front airbags, rear parking sensors, and speed alert as standard. Mahindra Bolero Rivals: While the Bolero has no direct rival, you could consider other monocoque sub-4m SUVs such as the Maruti Suzuki Vitara Brezza, Nissan Magnite, Tata Nexon, Hyundai Venue, and Ford EcoSport. These offer more features in the same price range. You can also check out the Renault Triber that has a 7-seater layout at a similar price point. For those looking to buy an off-road-oriented SUV, check out the Mahindra Thar. Mahindra Bolero 2024: Mahindra is set to launch the new-gen Bolero by 2024.",
  ];

  const ProsCons = {
    pros: [
      "Tough built quality. Hard to damage.",
      "Built to take punishment",
      "Ride quality soft to suit no road conditions",
    ],
    cons: ["Noisy cabin", "Utilitarian layout", "Bare bone features"],
  };

  const Colorss = {
    color1: ["Diamond White", "bg-blue-600"],
    color2: ["Dsat Silver", "bg-gray-400"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 8.19 Lakh onwards",
      "14.7 to 21.7 kmpl",
      "1496 to 1498 cc",
      "Manual & Automatic (Torque Converter)",
      "Petrol & Diesel",
      "5 Seater",
      "3,998 mm L x 1,765 mm W x 1,647 mm H",
      "https://imgd.aeplcdn.com/664x374/cw/ec/40369/Ford-EcoSport-Right-Front-Three-Quarter-159249.jpg?wm=0&q=85",
    ],
    comparisioncar2: [
      "₹ 6.92 Lakh Onwards",
      "17.52 to 23.4 kmpl",
      "998 to 1493 cc",
      "Clutchless Manual & Automatic (Dual Clutch)",
      "Petrol & Diesel",
      "5 Seater",
      "3,995 mm L x 1,770 mm W x 1,590 mm H",
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/7931/1626089251600/front-left-side-47.jpg",
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
      "What is the on road price of Bolero?",
      "The on-road price of Bolero in Delhi starts at ‎₹ 9.9 Lakh and goes upto ‎₹ 11 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Bolero and Bolero Neo?",
      "Bolero price starts at ₹ 8.64 Lakh ex-showroom and It comes with 1493 cc engine. Whereas Bolero Neo price starts at ₹ 8.48 Lakh ex-showroom and It comes with 1493 cc engine.",
    ],
    question3: [
      "What is the mileage of Mahindra Bolero?",
      "The Mahindra Bolero mileage is 16.7 kmpl.",
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
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/7931/1626089251600/front-left-side-47.jpg",
      "Venue",
      "₹ 6.92 Lakh Onwards",
    ],
    car2: [
      "https://img.etimg.com/thumb/msid-77905386,width-640,resizemode-4,imgsize-480363/electric-sunroof.jpg",
      "Nexon",
      "₹ 7.20 Lakh onwards0",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47016/urban-cruiser-exterior-right-front-three-quarter.jpeg?q=85",
      "Urban Cruiser",
      "₹ 8.63 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41523/sonet-exterior-right-front-three-quarter-110.jpeg?q=85",
      "Sonet",
      "₹ 6.79 Lakh onwards",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/26918/xuv300-exterior-right-front-three-quarter-148706.jpeg?q=85",
      "XUV300",
      "₹ 7.96 Lakh onwards",
    ],
    car6: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45795/magnite-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Magnite",
      "₹ 5.59 Lakh onwards",
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
  return OneCarAllSpecs("bolero").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
