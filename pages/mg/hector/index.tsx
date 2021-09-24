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
import { Hector } from "../../../CarPicsUrl/CarPics";
import { THector } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  HectorBasicInfoCard,
  HectorPlusBasicInfoCard,
  GlosterBasicInfoCard,
  ZSEVBasicInfoCard,
} from "../../../AllCarBasicInfo/mg";
import { HarrierBasicInfoCard } from "../../../AllCarBasicInfo/tata";
import { CretaBasicInfoCard } from "../../../AllCarBasicInfo/hyundai";

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
  // const CarPrice = "₹ 13.18 Lakh";
  // const TopPic = Hector;
  // const CarName = "MG Hector";
  // const OnlyName = "Hector";
  // const ThumPic = THector;

  // const KeySpecification = [
  //   "₹ 13.18 Lakh onwards",
  //   "13.96 to 17.41 kmpl",
  //   "1451 to 1956 cc",
  //   "Manual, Automatic (Dual Clutch) & Automatic (CVT)",
  //   "Petrol, Diesel & Hybrid (Electric + Petrol)",
  //   "5 Seater",
  //   "4655 mm in length, 1835 mm in width and 1760 mm in height",
  // ];

  // const SafetyFeatures = [
  //   " ISOFIX Child Seat Anchors.",
  //   "Usage of High Strength Steel in Body.",
  //   "Electronic Stability Program (ESP)",
  //   "Hot Stamped B Pillar.",
  //   "ABS + EBD + Brake Assist.",
  //   "3 Point Seatbelts for All Passengers.",
  //   "Thick Door Panels.",
  //   "Rear Parking Sensors.",
  // ];

  // const VarientPetrol = {
  //   varient1: [
  //     "Style MT",
  //     "1451 cc, Manual, Petrol, 14.16 kmpl",
  //     "Rs.29.98 Lakh*",
  //   ],
  //   varient2: [
  //     "Super MT",
  //     "1451 cc, Manual, Petrol, 14.16 kmpl",
  //     "Rs.32.38 Lakh*",
  //   ],
  //   varient3: [
  //     "Hybrid Super MT",
  //     "1451 cc, Manual, Petrol, 15.81 kmpl",
  //     "Rs.35.78 Lakh*",
  //   ],
  //   varient4: [
  //     "Hybrid Smart MT",
  //     "1451 cc, Manual, Petrol, 15.81 kmpl",
  //     "Rs.37.28 Lakh*",
  //   ],
  //   varient5: [
  //     "Smart CVT",
  //     "1451 cc, Automatic, Petrol, 13.96 kmpl",
  //     "Rs.37.28 Lakh*",
  //   ],
  //   varient6: [
  //     "Smart DCT",
  //     "1451 cc, Automatic, Petrol, 15.81 kmpl",
  //     "Rs.37.28 Lakh*",
  //   ],

  //   varient7: [
  //     "Hybrid Sharp MT",
  //     "1451 cc, Manual, Petrol, 15.81 kmpl",
  //     "Rs.37.28 Lakh*",
  //   ],
  //   varient8: [
  //     "Sharp CVT",
  //     "1451 cc, Automatic, Petrol, 13.96 kmpl",
  //     "Rs.37.28 Lakh*",
  //   ],
  //   varient9: [
  //     "Sharp DCT",
  //     "1451 cc, Automatic, Petrol, 15.81 kmpl",
  //     "Rs.37.28 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {
  //   varient1: [
  //     "Style Diesel MT",
  //     "1956 cc, Manual, Diesel, 17.41 kmpl",
  //     "Rs.35.78 Lakh*",
  //   ],

  //   varient2: [
  //     "Super Diesel MT",
  //     "1956 cc, Manual, Diesel, 17.41 kmpl",
  //     "Rs.37.28 Lakh*",
  //   ],

  //   varient3: [
  //     "Smart Diesel MT",
  //     "1956 cc, Manual, Diesel, 17.41 kmpl",
  //     "Rs.37.28 Lakh*",
  //   ],

  //   varient4: [
  //     "Sharp Diesel MT",
  //     "1956 cc, Manual, Diesel, 17.41 kmpl",
  //     "Rs.37.28 Lakh*",
  //   ],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Diesel (1998 cc)", "Automatic", "20.65 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "MG Hector Price: MG has priced the Hector from Rs 13.18 lakh to Rs 18.86 lakh (ex-showroom, except for Kerala). MG Hector Variants: The SUV is offered in four variants: Style, Super, Smart, and Sharp. MG Hector Seating Capacity: It comes in a 5-seater layout. MG Hector Powertrains: MG offers the Hector with both petrol and diesel engines. The 1.5-litre turbo-petrol unit (143PS/250Nm) comes mated to a standard 6-speed MT and an optional 6-speed DCT or the new 8-speed CVT gearbox. MG also offers the turbo-petrol engine with the option of a 48V mild-hybrid system, with only a 6-speed MT gearbox. The 2.0-litre diesel engine (170PS/350Nm) is coupled with a 6-speed manual gearbox. MG Hector Features: The facelifted Hector gets 18-inch dual-tone alloy wheels, ventilated front seats, wireless charger, Hinglish commands for connected car tech, and auto-dimming IRVM. Features that have been retained include the 10.4-inch infotainment system with Android Auto and Apple CarPlay, Infinity sound system, panoramic sunroof, cruise control, automatic climate control, powered driver’s seat, and ambient lighting. MG Hector Safety: Safety kit includes up to six airbags, front and rear parking sensors, ABS with EBD, electronic stability control, and a 360-degree camera. MG Hector Rivals: It goes up against the Jeep Compass, Tata Harrier, Mahindra XUV500, Mahindra XUV700, Hyundai Tucson, and the higher variants of the Hyundai Creta and Kia Seltos.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Bigger 18-inch wheels fill the arches better",
  //     "Additional features add convenience in the cabin",
  //     "Recognition of Hinglish voice commands is fantastic",
  //     "Petrol engine available with CVT and DCT automatic transmission options.",
  //   ],
  //   cons: [
  //     "Fuel efficiency is mediocre for the twin-turbo engine variant",
  //     "New dual-tone upholstery not available in all variants",
  //     "Exterior changes are very limited",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Burgundy Red Metallic", "bg-red-800"],
  //   color2: ["Starry Black", "bg-gray-900"],
  //   color3: ["Aurora Silver", "bg-gray-600"],
  //   color4: ["Candy White With Starry Black", "bg-white"],
  //   color5: ["Starry Sky Blue", "bg-white"],
  //   color6: ["Glaze Red", "bg-red-400"],
  //   color7: ["Candy White", "bg-red-400"],
  //   color8: ["Glaze Red With Starry Black", "bg-red-400"],
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
  //     "6 Airbags",
  //     "",
  //   ],
  // };

  // const faqs = {
  //   question1: [
  //     "What is the on road price of Hector?",
  //     "The on-road price of Hector in Delhi starts at ‎₹ 15.15 Lakh and goes upto ‎₹ 22.49 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Hector and Hector Plus?",
  //     "Hector price starts at ₹ 13.18 Lakh ex-showroom and It comes with 1451 cc engine. Whereas Hector Plus price starts at ₹ 13.63 Lakh ex-showroom and It comes with 1451 cc engine.",
  //   ],
  //   question3: [
  //     "What is the mileage of MG Hector?",
  //     "The MG Hector mileage is 13.96 - 17.41 kmpl.",
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
    car1: HarrierBasicInfoCard,
    car2: HectorPlusBasicInfoCard,
    car3: CretaBasicInfoCard,
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
        LinkCarName="hector"
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

          <div className="ml-24 sm:ml-1 sm:mr-1 mt-10">
            <KeySpecSafetyFeatures
              KeySpecification={KeySpecification}
              SafetyFeatures={SafetyFeatures}
              OnlyName={OnlyName}
            />

            <div>
              <div className="grid grid-cols-10 mt-6 md:grid-cols-5 sm:mr-1"></div>
            </div>
            <Link to="specifications" smooth={true}>
              <div className="text-3xl bg-red-500 w-96 md:w-auto text-white rounded-md text-center font-bold p-3 hover:bg-red-200 mt-10 sm:mr-1 cursor-pointer">
                Show All Specifications
              </div>
            </Link>

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
              {/* <SomeHighlightedFeatures
                OnlyName={OnlyName}
                HighlightedFeatures={HighlightedFeatures}
              /> */}
              <Faqs OnlyName={OnlyName} faqs={faqs} />
              {/* <LatestArticles OnlyName={OnlyName} articles={articles} /> */}
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
  return OneCarAllSpecs("hector").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
