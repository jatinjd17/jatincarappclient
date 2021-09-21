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
import { HectorPlus } from "../../../CarPicsUrl/CarPics";
import { THectorPlus } from "../../../CarPicsUrl/Thumbnails";
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
  // const CarPrice = "₹ 13.63 Lakh";
  // const TopPic = HectorPlus;
  // const CarName = "MG Hector Plus";
  // const OnlyName = "Hector Plus";
  // const ThumPic = THectorPlus;

  // const KeySpecification = [
  //   "₹ 13.63 Lakh onwards",
  //   "16.6 kmpl",
  //   "1451 to 1956 cc",
  //   "Manual, Automatic (Dual Clutch)",
  //   "Petrol, Diesel & Hybrid (Electric + Petrol)",
  //   "6-7 Seater",
  //   "4,720 mm L x 1,835 mm W x 1,760 mm H",
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
  //     "Style MT 7 STR",
  //     "1451 cc, Manual, Petrol, 11.67 kmpl",
  //     "Rs.13.96 Lakh*",
  //   ],
  //   varient2: [
  //     "Super Hybrid MT 7 STR",
  //     "1451 cc, Manual, Petrol, 11.67 kmpl",
  //     "Rs.15.46 Lakh*",
  //   ],
  //   varient3: [
  //     "Smart CVT",
  //     "1451 cc, Manual, Petrol, 11.67 kmpl",
  //     "Rs.17.83 Lakh*",
  //   ],
  //   varient4: [
  //     "Smart AT",
  //     "1451 cc, Automatic, Petrol, 11.67 kmpl",
  //     "Rs.17.83 Lakh*",
  //   ],

  //   varient5: [
  //     "Sharp Hybrid MT",
  //     "1451 cc, Manual, Petrol, 14.02 kmpl",
  //     "Rs.18.46 Lakh*",
  //   ],
  //   varient6: [
  //     "Sharp CVT",
  //     "1451 cc, Automatic, Petrol, 11.67 kmpl",
  //     "Rs.19.49 Lakh*",
  //   ],
  //   varient7: [
  //     "Sharp AT",
  //     "1451 cc, Manual, Petrol, 11.67 kmpl",
  //     "Rs.19.49 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {
  //   varient1: [
  //     "Style Diesel MT 7 STR",
  //     "1956 cc, Manual, Diesel, 16.56 kmpl",
  //     "Rs.15.38 Lakh*",
  //   ],

  //   varient2: [
  //     "Super Diesel MT 7 STR",
  //     "1956 cc, Manual, Diesel, 16.56 kmpl",
  //     "Rs.16.48 Lakh*",
  //   ],
  //   varient3: [
  //     "Super Diesel MT",
  //     "1956 cc, Manual, Diesel, 16.56 kmpl",
  //     "Rs.16.72 Lakh*",
  //   ],

  //   varient4: [
  //     "Smart Diesel MT 7 STR",
  //     "1956 cc, Automatic, Diesel, 16.56 kmpl",
  //     "Rs.18.34 Lakh*",
  //   ],

  //   varient5: [
  //     "Smart Diesel MT",
  //     "1956 cc, Manual, Diesel, 16.56 kmpl",
  //     "Rs.18.44 Lakh*",
  //   ],

  //   varient6: [
  //     "Select Diesel MT 7 STR",
  //     "1956 cc, Automatic, Diesel, 16.56 kmpl",
  //     "Rs.19.20 Lakh*",
  //   ],

  //   varient7: [
  //     "Sharp Diesel MT",
  //     "1956 cc, Manual, Diesel, 16.56 kmpl",
  //     "Rs.19.94 Lakh*",
  //   ],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Diesel (1956 cc)", "Automatic", "20.65 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: MG has increased the prices of the Hector Plus by up to Rs 38,000. MG Hector Plus Price: The Hector Plus is priced from Rs 13.63 lakh to Rs 19.61 lakh (ex-showroom except for Kerala). MG Hector Plus Variants: While the 6-seater Hector Plus is available in three variants (Super, Smart, and Sharp), MG offers the 7-seater Hector Plus in four (Style, Super, Smart, and Select). MG Hector Plus Powertrains: MG has provided the SUV with both petrol and diesel engines. The 1.5-litre turbo-petrol unit, generating 143PS and 250Nm, gets the standard 6-speed MT and an optional 6-speed DCT or the new 8-speed CVT gearbox. The DCT and CVT options, however, are limited to the 6-seater variants. MG has also provided the turbo-petrol engine with the option of a 48V mild-hybrid system, with only a 6-speed MT. The 2.0-litre diesel engine, paired with a 6-speed manual gearbox, produces 170PS and 350Nm. MG Hector Plus Features: The Hector Plus now gets 18-inch dual-tone alloy wheels, a wireless phone charger, and ventilated front seats (from the 5-seater Hector). Features like the panoramic sunroof, rain-sensing wipers, powered tailgate, 8-colour ambient lighting, and 10.4-inch touchscreen infotainment system (with Android Auto and Apple CarPlay) have been retained. MG Hector Plus Safety: Standard safety features include electronic stability program (ESP), front and rear parking sensors, hill hold control, ISOFIX child seat anchors, ABS with EBD and brake assist, dual front airbags, and traction control. The top-spec variant gets up to six airbags. MG Hector Plus Rivals: It rivals the Toyota Innova Crysta, Mahindra XUV500, Tata Safari, Mahindra XUV700, and the Hyundai Alcazar.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Looks better than the Hector",
  //     "Second row captain seats are premium and comfortable.",
  //     "Brown upholstery helps make the cabin feel more upmarket",
  //     "Ride quality is well suited to Indian roads",
  //   ],
  //   cons: [
  //     "New Chitchat function is not finished well",
  //     "Boot space with third row up is small",
  //     "Access to the third row is a challenge",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Burgundy Red", "bg-red-800"],
  //   color2: ["Starry Black", "bg-gray-900"],
  //   color3: ["Aurora Silver", "bg-gray-600"],
  //   color4: ["Candy White With Starry Black", "bg-white"],
  //   color5: ["Starry Sky Blue", "bg-blue-800"],
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
  //     "₹ 13.18 Lakh onwards",
  //     "13.96 to 17.41 kmpl",
  //     "1451 to 1956 cc",
  //     "Manual & Automatic",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "4655 mm in length, 1835 mm in width and 1760 mm in height",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/52565/hector-exterior-right-front-three-quarter-3.jpeg?q=85",
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
  //     "What is the on road price of Hector Plus?",
  //     "The on-road price of Hector Plus in Delhi starts at ‎₹ 15.89 Lakh and goes upto ‎₹ 23.34 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Hector Plus and Alcazar?",
  //     "Hector Plus price starts at ₹ 13.63 Lakh ex-showroom and It comes with 1451 cc engine. Whereas Alcazar price starts at ₹ 16.30 Lakh ex-showroom and It comes with 1999 cc engine. Compare the two models to identify the best car for you.",
  //   ],
  //   question3: [
  //     "What is price of Hector Plus top model?",
  //     "Top model of Hector Plus is Sharp 2.0 Diesel Turbo MT 6-STR Dual Tone and the ex-showroom for Hector Plus Sharp 2.0 Diesel Turbo MT 6-STR Dual Tone is ₹ 19.81 Lakh.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/52565/hector-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Hector",
      "₹ 13.18 Lakh onwards0",
    ],
    car3: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/6775/1584360708758/front-left-side-47.jpg?tr=w-456",
      "Creta",
      "Rs.10.16 Lakh onwards",
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
        LinkCarName="hectorplus"
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
  return OneCarAllSpecs("hectorplus").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
