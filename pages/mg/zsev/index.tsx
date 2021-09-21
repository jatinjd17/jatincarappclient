// import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dynamic from "next/dynamic";
import Footer from "../../../Components/footer";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

import Nav from "../../../Components/headforspecificcar";
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
import { ZSEV } from "../../../CarPicsUrl/CarPics";
import { TZSEV } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  HectorBasicInfoCard,
  HectorPlusBasicInfoCard,
  GlosterBasicInfoCard,
  ZSEVBasicInfoCard,
} from "../../../AllCarBasicInfo/mg";

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

  // const CompanyName = "MG";
  // const CarPrice = "₹ 21.00 Lakh";
  // const TopPic = ZSEV;
  // const CarName = "MG ZS EV";
  // const OnlyName = "ZS EV";
  // const ThumPic = TZSEV;

  // const KeySpecification = [
  //   "₹ 21.00 Lakh onwards",
  //   "419 km/full charge",
  //   "140.8bhp@3500rpm",
  //   "Automatic",
  //   "Electric",
  //   "5 Seater",
  //   "4,314 mm L x 1,809 mm W x 1,620-1,644 mm H",
  // ];

  // const SafetyFeatures = [
  //   "FRONT AND REAR SEATBELT REMINDER ALERT",
  //   "ELECTRIC PARKING BRAKE",
  //   "HEATED ORVMS",
  //   "THREE POINT SEAT BELT",
  //   "TYRE PRESSURE MONITORING SYSTEM",
  //   "REVERSE PARKING CAMERA WITH DYNAMIC LINES",
  //   "REAR DISC BRAKE",
  //   "ABS + EBD",
  //   "6 AIRBAGS",
  // ];

  // const VarientPetrol = {
  //   varient1: [
  //     "Excite",
  //     "140.8bhp@3500rpm, Automatic, Electric, 419 km/full charge",
  //     "Rs.20.99 Lakh*",
  //   ],
  //   varient2: [
  //     "Exclusive",
  //     "140.8bhp@3500rpm, Automatic, Electric, 419 km/full charge",
  //     "Rs.24.18 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Electric", "Automatic", "419 km/full charge"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: MG has launched an updated version of the ZS EV. MG ZS EV Price: The electric SUV is priced between Rs 20.99 lakh and Rs 24.18 lakh (ex-showroom). MG ZS EV Variants: It is offered in two variants: Excite and Exclusive. MG ZS EV Seating Capacity: MG offers the ZS EV in a 5-seater layout. MG ZS EV Powertrains: The ZS EV’s 143PS and 353Nm electric motor is powered by a 44.5kWh lithium-ion battery. Its updated battery pack has a claimed range of 419km. MG ZS EV Charging Time: MG is providing a 7.4kW charger (can be installed at your home or office) that will charge from 0 to 100 percent in six to eight hours. The EV itself comes with a portable charger that can be plugged into a regular 15A power socket. This takes around 18-19 hours to fully charge the car. MG has also installed 50kW DC fast chargers at some of its dealerships. These can charge from 0 to 80 percent in less than 50 minutes. MG ZS EV Features: These include an 8-inch infotainment system with Android Auto and Apple CarPlay, a panoramic sunroof, inbuilt air purifier, cruise control, auto AC, projector headlamps, and connected car tech. MG ZS EV Safety: The ZS EV is offered with six airbags, ABS with EBD, brake assist, electronic stability control (ESC), and hill descent control. MG ZS EV Rivals: It takes on the Hyundai Kona Electric. The Tata Nexon EV, although in a segment lower than the ZS EV, is also an indirect competitor.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Good enough range for daily and weekend trips.",
  //     "Many charging options.",
  //     "Peppy drivetrain.",
  //     "Ride quality is well suited to Indian roads",
  //   ],
  //   cons: [
  //     "Could have had more premium interiors",
  //     "No rear air-con vents.",
  //     "Looks very conventional.",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Currant Red", "bg-red-800"],
  //   color2: ["Ferris White", "bg-gray-100"],
  //   color3: ["Copenhagen Blue", "bg-blue-600"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 13.99 Lakh Onwards",
  //     "312 km/FullCharge",
  //     "129 PS and 245 Nm",
  //     "Automatic",
  //     "Electric",
  //     "5 Seater",
  //     "3,993 mm L x 1,811 mm W x 1,606 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/42611/tata-nexon-ev-right-front-three-quarter6.jpeg?q=85",
  //   ],
  //   comparisioncar2: [
  //     "Rs.9.58 - 9.90 Lakh",
  //     "213 km/FullCharge",
  //     "40.23bhp@4500rpm",
  //     "Automatic",
  //     "Electric",
  //     "5 Seater",
  //     "3,993 mm L x 1,677 mm W x 1,537 mm H",
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tigor-EV/7199/1592632314945/front-left-side-47.jpg?tr=w-456",
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
  //     "6 Airbags",
  //     "",
  //   ],
  // };

  // const faqs = {
  //   question1: [
  //     "What is the on road price of ZS EV?",
  //     "The on-road price of ZS EV in Delhi starts at ‎₹ 22.34 Lakh and goes upto ‎₹ 25.67 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between ZS EV and Kona Electric?",
  //     "ZS EV price starts at ₹ 21.00 Lakh ex-showroom and It comes with cc engine. Whereas Kona Electric price starts at ₹ 23.79 Lakh ex-showroom and It comes with cc engine. Compare the two models to identify the best car for you.",
  //   ],
  //   question3: [
  //     "What is the charging time required to fully charge the MG ZS EV?",
  //     "It takes 16 Hrs to fully charge the MG ZS EV.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/42611/tata-nexon-ev-right-front-three-quarter6.jpeg?q=85",
      "Nexon EV",
      "₹ 13.99 Lakh Onwards",
    ],
    car2: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tigor-EV/7199/1592632314945/front-left-side-47.jpg?tr=w-456",
      "Tigor EV",
      "₹ 9.58 Lakh onwards0",
    ],
    car3: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/E-Verito/3526/1603712637421/front-left-side-47.jpg?tr=w-456",
      "Verito EV",
      "Rs.10.15 Lakh onwards",
    ],
  };

  const ThatBrandCars = {
    car1: HectorBasicInfoCard,
    car2: HectorPlusBasicInfoCard,
    car3: GlosterBasicInfoCard,
    car4: ZSEVBasicInfoCard,
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/51940/zs-petrol-exterior-left-front-three-quarter.jpeg?q=85",
  //     "ZS Petrol",
  //     "₹ 10.00 - 17.00 Lakh",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/47333/mg-baojun-510-right-front-three-quarter0.jpeg?q=85",
  //     "MG Baojun 510",
  //     "₹ 11.00 - 15.00 Lakh",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/45347/mg-g10-left-side-view0.jpeg?q=85",
  //     "G10",
  //     "₹ 24.00 - 30.00 Lakh",
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
        LinkCarName="zsev"
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
  return OneCarAllSpecs("zsev").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
