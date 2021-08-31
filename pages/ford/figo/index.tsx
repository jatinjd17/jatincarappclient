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
import { Figo } from "../../../CarPicsUrl/CarPics";

function Homee({ joy }) {
  const CompanyName = "Ford";
  const CarPrice = "₹ 5.82 Lakh";
  const TopPic = Figo;
  const CarName = "Ford Figo";
  const OnlyName = "Figo";

  const KeySpecification = [
    "₹ 5.82 Lakh onwards",
    "16 to 24.4 kmpl",
    "1194 to 1499 cc",
    "Manual & Automatic",
    "Petrol & Diesel",
    "5 Seater",
    "3,941 mm L x 1,704 mm W x 1,525 mm H",
  ];

  const SafetyFeatures = [
    "Driver and Passenger Airbags.",
    "Rear Parking Camera and Sensors.",
    "ABS with EBD.",
    "Driver and Passenger Seatbelt Reminder.",
    "High-Speed Sensing Alert System.",
    "Side and Curtain Airbags.",
    "Door Ajar Warning.",
    "Perimeter Alarm.",
  ];

  const VarientPetrol = {
    varient1: [
      "Ambiente",
      "1194 cc, Manual, Petrol, 18.5 kmpl",
      "Rs.5.82 Lakh*",
    ],
    varient2: [
      "Titanium",
      "1194 cc, Manual, Petrol, 18.5 kmpl",
      "Rs.6.82 Lakh*",
    ],
    varient3: [
      "Titanium Blu",
      "1194 cc, Manual AMT, Petrol, 18.5 kmpl",
      "Rs.7.27 Lakh*",
    ],
    varient4: [
      "Titanium AT",
      "1194 cc, Automatic, Petrol, 16.0 kmpl",
      "Rs.7.75 Lakh*",
    ],

    varient5: [
      "Titanium Plus AT",
      "1194 cc, Automatic, Petrol, 16.0 kmpl",
      "Rs.8.20 Lakh*",
    ],
  };

  const VarientDiesel = {
    varient1: [
      "Titanium Diesel",
      "1499 cc, Manual, Diesel, 24.4 kmpl",
      "Rs.7.92 Lakh*",
    ],

    varient2: [
      "Titanium Blu Diesel",
      "1499 cc, Manual, Diesel, 24.4 kmpl",
      "Rs.8.37 Lakh*",
    ],
  };

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "23.26 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Ford has reintroduced the automatic gearbox on the Figo. Ford Figo Price: The hatchback is priced from Rs 5.82 lakh to Rs 8.37 lakh (ex-showroom Delhi). Ford Figo Variants: It is available in four trims: Ambiente, Titanium, Titanium+, and Titanium Blu. Ford Figo Engine and Transmission: Ford offers the Figo with 1.2-litre petrol (96PS/119Nm) and 1.5-litre diesel (100PS/215Nm) engines. Both get a 5-speed manual transmission but only the petrol engine gets a 6-speed automatic transmission. The Figo’s mileage figures are 18.5kmpl for petrol and 24.4kmpl for diesel while the AT variants return 16kmpl. Ford Figo Features: It comes with FordPass connected car tech, auto headlamps, rain-sensing wipers, auto-dimming IRVM, and push-button start/stop. The top-spec Titanium Blue also gets a 7-inch touchscreen infotainment system and sporty cosmetics. Ford Figo Safety: The Figo’s safety kit includes up to six airbags, ABS with EBD, and rear parking sensors. Ford Figo Rivals: It goes up against the Maruti Suzuki Swift, Hyundai Grand i10 Nios, and Renault Triber.",
  ];

  const ProsCons = {
    pros: [
      "Punchy diesel engine is sure to put a smile on your face.",
      "Among the most fun to drive cars in the sub-10 lakh bracket.",
      "Efficient and powerful petrol engine with a sweet exhaust note.",
    ],
    cons: [
      "Missing feel-good features such as projector headlamps, daytime running lamps.",
      "Major miss: Apple CarPlay and Android Auto, features that all its arch rivals offer.",
      "Rear headroom continues to be an issue, especially for those around six feet tall.",
    ],
  };

  const Colorss = {
    color1: ["Diamond White", "bg-blue-600"],
    color2: ["Rube Redr", "bg-gray-400"],
    color3: ["Moondust Silver", "bg-white"],
    color4: ["White Gold", "bg-brown-600"],
    color5: ["Smoke Grey", "bg-gray-800"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 5.81 Lakh onwards",
      "23.2 kmpl",
      "1197 cc",
      "Manual, Automatic",
      "Petrol",
      "5 Seater",
      "length of 3845, width of 1735 and a wheelbase of 2450",
      "https://imgd.aeplcdn.com/600x600/n/cw/ec/26742/swift-exterior-right-front-three-quarter-2.jpeg?q=85",
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
      "2 Airbags",
      "",
    ],
  };

  const faqs = {
    question1: [
      "What is the on road price of Figo?",
      "The on-road price of Figo in Delhi starts at ‎₹ 6.49 Lakh and goes upto ‎₹ 9.6 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Figo and Freestyle?",
      "Figo price starts at ₹ 5.82 Lakh ex-showroom and It comes with 1194 cc engine. Whereas Freestyle price starts at ₹ 7.28 Lakh ex-showroom and It comes with 1194 cc engine.",
    ],
    question3: [
      "What is the mileage of Ford Figo?",
      "The Ford Figo mileage is 16 - 24.4 kmpl.",
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
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/8378/1614747593719/front-left-side-47.jpg",
      "Swift",
      " ₹ 5.81 Lakh onwards",
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
      "https://imgd.aeplcdn.com/664x374/cw/ec/40369/Ford-EcoSport-Right-Front-Three-Quarter-159249.jpg?wm=0&q=85",
      "EcoSport",
      "₹ 8.19 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/37640/endeavour-exterior-right-front-three-quarter-149473.jpeg?q=85",
      "Endeavour",
      "₹ 33.81 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/35463/figo-exterior-right-front-three-quarter-151689.jpeg?q=85",
      "Figo",
      "₹ 5.82 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32698/freestyle-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Freestyle",
      "₹ 7.28 Lakh onwards",
    ],
  };

  const UpcommingCarBrand = {
    car1: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ford/Mustang-2021/7939/1595910236308/front-left-side-47.jpg?tr=w-456",
      "Mustang 2021",
      "Rs.75.00 Lakh*",
    ],
    car2: [
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3A%2F%2Fcdni.autocarindia.com%2FExtraImages%2F20210705015326_Ford_ecosport.jpg&h=795&w=1200&c=1",
      "EcoSport 2021 Facelift",
      "Rs.8.49 Lakh",
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
  return OneCarAllSpecs("figo").then((data) => {
    return { joy: data.carspecs };
  });
};
export default Homee;
