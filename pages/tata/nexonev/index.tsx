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
  const CarPrice = "₹ 13.99 Lakh";
  const TopPic =
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/42611/tata-nexon-ev-right-front-three-quarter6.jpeg?q=85";
  const CarName = "Tata Nexon EV";
  const OnlyName = "Nexon EV";

  const KeySpecification = [
    "₹ 13.99 Lakh onwards",
    "312 km/Fullcharge",
    "127bhp and 245Nm of torque",
    "Automatic",
    "Electric",
    "5 Seater",
    "3,993 mm L x 1,811 mm W x 1,606 mm H",
  ];

  const SafetyFeatures = [
    "Dual Airbags",
    "ABS With EBD & Corner Stability Control.",
    "Reinforced Body Structure.",
    "Liquid Cooled Battery Pack Rated IP67.",
    "ISOFIX.",
  ];

  const VarientPetrol = {
    varient1: [
      "XM",
      "127bhp and 245Nm of torque, Automatic, Electric, 312 km/Fullcharge",
      "Rs.13.99 Lakh*",
    ],
    varient2: [
      "XZ Plus",
      "127bhp and 245Nm of torque, Automatic, Electric, 312 km/Fullcharge",
      "Rs.15.56 Lakh*",
    ],
    varient3: [
      "XZ Plus Dark Edition",
      "127bhp and 245Nm of torque, Automatic, Electric, 312 km/Fullcharge",
      "Rs.15.99 Lakh*",
    ],
    varient4: [
      "XZ Plus LUX",
      "127bhp and 245Nm of torque, Automatic, Electric, 312 km/Fullcharge",
      "Rs.16.56 Lakh*",
    ],
    varient5: [
      "XZ Plus Lux Dark Edition",
      "127bhp and 245Nm of torque, Automatic, Electric, 312 km/Fullcharge",
      "Rs.16.85 Lakh*",
    ],
  };

  const VarientDiesel = {};

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Tata will launch the Nexon BS6 facelift on January 22. Variants and Prices: The Nexon is available in eight variants: XE, XM, XMA, XT, XT+, XZ, XZ+, and XZA+ with some combinations offering a dual-tone roof and automatic transmission. Tata Motors also offers the Nexon in the special edition KRAZ trim. However, the features on offer remain the same. Tata’s sub-4m SUV is priced between Rs 6.73 lakh and Rs 11.4 lakh (ex-showroom Delhi). Powertrain: It is offered with either a 1.2-litre turbocharged petrol engine or a 1.5-litre turbocharged diesel engine. While the petrol engine produces 110PS/170Nm, the output figures of the diesel engine stand at 110PS and 260Nm respectively. Tata offers both these engines with either a 6-speed manual transmission or a 6-speed AMT. Meanwhile, the Nexon EV will use Tata’s new Ziptron technology. It will get a 30.2kWh battery pack and will offer a claimed range of over 300km. The Nexon EV will support fast-charging and will be offered with an 8-year standard warranty. What’s more, it will come with an IP67 waterproof battery pack. Features: It gets a 6.5-inch touchscreen infotainment system by Harman-Kardon with an 8-speaker setup. Projector headlamps and LED DRLs are also a part of the kit. The Tata SUV also gets rear AC vents and multiple drive modes (Eco, City and Sport). Tata offers the Nexon with safety features such as dual front airbags, ISOFIX child seat mounts, ABS with EBD, and corner stability control. Rivals: The Nexon rivals the likes of Maruti Suzuki Vitara Brezza, Ford EcoSport, Ford Freestyle, Honda WR-V, Mahindra TUV300, and Mahindra XUV300. It will also take on the upcoming Renault HBC and the Kia QYI. ",
  ];

  const ProsCons = {
    pros: [
      "Silent and smooth to drive",
      "Sharp and handsome styling",
      "Well-loaded with features",
    ],
    cons: [
      "Limited range with heavy highway usage",
      "More expensive than petrol/diesel Nexon",
      "Fast charging network is unreliable",
    ],
  };

  const Colorss = {
    color1: ["Glacier White", "bg-white-800"],
    color2: ["Moonlight Silver", "bg-gray-700"],
    color3: ["Signature Bluesilver", "bg-blue-600"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 21.00 Lakh Onwards",
      "419 km/full charge",
      "140.8bhp@3500rpm",
      "Automatic",
      "Electric",
      "5 Seater",
      "4,314 mm L x 1,809 mm W x 1,620-1,644 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39348/zs-ev-exterior-right-front-three-quarter-2.jpeg?q=85",
    ],
    comparisioncar2: [
      "₹ 23.79 Lakh onwards",
      "415 km/FullCharge",
      "134.14bhp & 395 Nm Torque",
      "Automatic",
      "Electric",
      "5 Seater",
      "4180 mm L x 1800 mm W x 1,570 mm H",
      "https://imgd.aeplcdn.com/664x374/cw/ec/29580/Hyundai-Kona-Electric-Right-Front-Three-Quarter-162185.jpg?wm=0&q=85",
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
      "What is the on road price of Nexon EV?",
      "The on-road price of Nexon EV in Delhi starts at ‎₹ 14.89 Lakh and goes upto ‎₹ 17.93 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance ",
    ],
    question2: [
      "Which car is better between Nexon EV and ZS EV?",
      "Nexon EV price starts at ₹ 13.99 Lakh ex-showroom and It comes with cc engine. Whereas ZS EV price starts at ₹ 21.00 Lakh ex-showroom and It comes with cc engine",
    ],
    question3: [
      "What are the offers available on Tata Nexon EV for August?",
      "There are 1 Tata Nexon EV offer in Delhi for the month of August.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39348/zs-ev-exterior-right-front-three-quarter-2.jpeg?q=85",
      "ZS EV",
      "₹ 21.00 Lakh Onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/29580/Hyundai-Kona-Electric-Right-Front-Three-Quarter-162185.jpg?wm=0&q=85",
      "Kona Electric",
      "₹ 23.79 Lakh onwards0",
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
  return OneCarAllSpecs("nexonev").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
