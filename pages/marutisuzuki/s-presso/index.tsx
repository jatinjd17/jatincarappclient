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
  const CompanyName = "MarutiSuzuki";
  const CarPrice = "₹ 3.77 Lakh";
  const TopPic =
    "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Future-S/6166/1569405133474/front-left-side-47.jpg?tr=w-456";
  const CarName = "Maruti S-Presso";
  const OnlyName = "S-Presso";

  const KeySpecification = [
    "₹ 3.77 Lakh onwards",
    "21.53 to 31.2 km/kg",
    "998 cc",
    "Manual & AMT",
    "Petrol & CNG",
    "4 Seater",
    "3,565 mm L x 1,520 mm W x 1,549-1,564 mm H",
  ];

  const SafetyFeatures = [
    "Seat Belt Warning",
    "Anti-Lock Braking System",
    "2 Airbags",
    "EBD",
    "Speed Alert",
  ];

  const VarientPetrol = {
    varient1: ["STD", "998  cc, Manual, Petrol, 21.7 kmpl", "Rs.3.77 Lakh*"],
    varient2: [
      "STD (O)",
      "998  cc, Manual, Petrol, 21.7 kmpl",
      "Rs.3.83 Lakh*",
    ],
    varient3: ["LXI", "998  cc, Manual, Petrol, 21.7 kmpl", "Rs.4.15 Lakh*"],
    varient4: [
      "LXI (O)",
      "998  cc, Manual, Petrol, 21.7 kmpl",
      "Rs.4.21 Lakh*",
    ],
    varient5: ["VXI", "998  cc, Manual, Petrol, 21.7 kmpl", "Rs.4.39 Lakh*"],
    varient6: [
      "VXI (O)",
      "998  cc, Manual, Petrol, 21.7 kmpl",
      "Rs.4.45 Lakh*",
    ],
    varient7: [
      "VXI Plus",
      "998  cc, Manual, Petrol, 21.7 kmpl",
      "Rs.4.62 Lakh*",
    ],
    varient8: [
      "VXI AMT",
      "998  cc, Automatic, Petrol, 21.7 kmpl",
      "Rs.4.89 Lakh*",
    ],
    varient9: [
      "VXI (O) AMT",
      "998  cc, Automatic, Petrol, 21.7 kmpl",
      "Rs.4.95 Lakh*",
    ],
    varient10: [
      "VXI Plus AMT",
      "998  cc, Automatic, Petrol, 21.7 kmpl",
      "Rs.5.05 Lakh*",
    ],
  };
  const VarientDiesel = {};

  const VarientCNG = {
    varient1: ["LXI CNG", "998 cc, Manual, CNG, 31.59 km/kg", "Rs.4.66 Lakh*"],
    varient2: [
      "LXI(O) CNG",
      "998 cc, Manual, CNG, 31.2 km/kg",
      "Rs.4.71 Lakh*",
    ],
    varient3: [
      "VXI CNG",
      "998  cc, Manual, CNG, 31.2 km/kg kmpl",
      "Rs.5.30 Lakh*",
    ],
    varient4: [
      "VXI (O) CNG",
      "998  cc, Manual, CNG, 31.2 km/kg kmpl",
      "Rs.5.36 Lakh*",
    ],
  };

  const Mileage = {
    mileage1: ["Petrol (998 cc)", "Manual", "22.05 kmpl"],
    mileage2: ["CNG (998 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Maruti S-Presso Price: The Maruti S-Presso is priced from Rs 3.78 lakh to Rs 5.26 lakh (ex-showroom Delhi). Maruti S-Presso Variants: It comes in three trims: Std, LXi, and VXi. Maruti S-Presso Powertrain: The Maruti hatchback is provided with a 1.0-litre petrol engine (68PS/90Nm) paired with either a 5-speed manual or AMT. Maruti also offers select variants with a CNG kit with the 1.0-litre petrol engine (59PS/78Nm), mated to a 5-speed MT. This engine has a 55-litre (water equivalent) fuel tank.  The claimed mileage figures are as follows: Petrol MT- 21.4kmpl (Std, LXi)  Petrol MT/AMT- 21.7kmpl (VXi and VXi+) S-Presso CNG- 31.2km/kg Maruti S-Presso Features: It gets a digital instrument cluster, a 7-inch touchscreen infotainment system with Apple CarPlay and Android Auto, front power windows, and keyless entry. Maruti S-Presso Safety: Safety features like a driver-side airbag, rear parking sensors, ABS with EBD, speed alert, and front seatbelt reminder are offered as standard. While the top-spec variant comes with a front passenger airbag and front seatbelt pretensioners as standard, the other variants get these as options. Maruti S-Presso Rivals: The S-Presso directly rivals the Renault Kwid. But given its price, it also takes on the Datsun redi-GO and GO, Maruti Wagon R, and the Hyundai Santro.",
  ];

  const ProsCons = {
    pros: [
      "Space. Can seat four six-footers comfortably.",
      "Peppy engine for in-city driving.",
      "Spacious 270-litre boot.",
    ],
    cons: [
      "Barebones feature list. Many essentials missing.",
      "Floaty feeling at triple digit speeds.",
      "Overpriced considering what’s on offer.",
    ],
  };

  const Colorss = {
    color1: ["Pearl Starry Blue", "bg-blue-600"],
    color2: ["Metallic Silky Silver", "bg-gray-400"],
    color3: ["Solid White", "bg-white"],
    color4: ["Solid Fire Red", "bg-red-600"],
    color5: ["Metallic Granite Grey", "bg-gray-800"],
    color6: ["Solid Sizzle Orange", "bg-orange-500"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 3.32 Lakh onwards",
      "25 kmpl",
      "799 to 1000 cc",
      "Manual, Automatic",
      "Petrol",
      "4 Seater",
      "3731mm-L 1579mm-W 1490mm-H mm 2422mm-WheelBase",
      "https://i.ibb.co/C63SXxn/Kwid.jpg",
    ],
    comparisioncar2: [
      "₹ 3.80 Lakh onwards",
      "22 kmpl",
      "799 to 999 cc",
      "Manual, Automatic",
      "Petrol",
      "4 Seater",
      "3435mm-L 1574mm-W 1546mm-H mm 2348mm-WB",
      "https://i.ibb.co/ZdN0MWM/Datsun-Redi-GO.jpg",
    ],
  };

  const HighlightedFeatures = {
    feature1: [
      "https://images.carandbike.com/car-images/gallery/large/maruti-suzuki/alto-800/interior/dashboard.webp?v=2020-10-24",
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
      "What is the on road price of S-Presso?",
      "The on-road price of S-Presso in Delhi starts at ‎₹ 4.19 Lakh and goes upto ‎₹ 5.95 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between S-Presso and Alto?",
      "S-Presso price starts at ₹ 3.77 Lakh ex-showroom and It comes with 998 cc engine. Whereas Alto price starts at ₹ 3.00 Lakh ex-showroom and It comes with 796 cc engine. Compare the two models to identify the best car for you.",
    ],
    question3: [
      "What is price of S-Presso top model?",
      "Top model of S-Presso is Vxi (O) CNG and the ex-showroom for S-Presso Vxi (O) CNG is ₹ 5.36 Lakh.",
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
      "https://i.ibb.co/C63SXxn/Kwid.jpg",
      "Renault Kwid",
      "₹ 3.32 Lakh onwards",
    ],
    car2: [
      "https://i.ibb.co/ZdN0MWM/Datsun-Redi-GO.jpg",
      "Datsun redi-go",
      "₹ 3.80 Lakh onwards0",
    ],
    car3: [
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201911/0G6A5935_1.png?LkCz.7ZUenqnJF.SOBjEMulD..iElUYe&size=770:433",
      "S-presso",
      "₹ 3.77 Lakh onwards",
    ],
    car4: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbWFsSvTTFc7n__WfN3PJOWp9iBEqMvmFzg&usqp=CAU",
      "Celario",
      "₹4.66 Lakhs onwards",
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
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201911/0G6A5935_1.png?LkCz.7ZUenqnJF.SOBjEMulD..iElUYe&size=770:433",
      "S-presso",
      "₹ 3.77 Lakh onwards",
    ],
    car2: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbWFsSvTTFc7n__WfN3PJOWp9iBEqMvmFzg&usqp=CAU",
      "Celario",
      "₹4.66 Lakhs onwards",
    ],
    car3: [
      "https://www.shivamautozone.com/wp-content/uploads/2019/01/SUPERIOR-WHITE.png",
      "Wagon R",
      "₹ 4.79 Lakh onwards",
    ],
    car4: [
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/8378/1614747593719/front-left-side-47.jpg",
      "Swift",
      " ₹ 5.81 Lakh onwards",
    ],
  };

  const UpcommingCarBrand = {
    car1: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Celerio-2021/8454/Maruti-Celerio-2021-/1623741753799/front-left-side-47.jpg?tr=w-456",
      "Celario 2021",
      "Rs.4.50 Lakh",
    ],
    car2: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Maruti-Solio/6317/1558342716659/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      "Maruti Solio",
      "Rs.6.00 Lakh",
    ],
    car3: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Alto-2021/8020/1600235578537/front-left-side-47.jpg?tr=w-456",
      "Alto 2021",
      "Rs.3.00 Lakh",
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
  return OneCarAllSpecs("spresso").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
