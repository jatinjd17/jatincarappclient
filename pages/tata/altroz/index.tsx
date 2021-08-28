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
  const CarPrice = "₹ 5.80 Lakh";
  const TopPic =
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/32597/tata-altroz-right-front-three-quarter20.jpeg?q=85";
  const CarName = "Tata Altroz";
  const OnlyName = "Altroz";

  const KeySpecification = [
    "₹ 5.80 Lakh onwards",
    "19.05 to 25.11 kmpl",
    "1199 to 1497 cc",
    "Manual",
    "Petrol & Diesel",
    "5 Seater",
    "3,990 mm L x 1,755 mm W x 1,523 mm H",
  ];

  const SafetyFeatures = [
    "dual front airbags",
    "ABS with EBD and CSC",
    "reverse parking sensors",
    "ISOFIX",
    "driver and co-driver seatbelt reminder",
    "high-speed alert system",
    "impact sensing auto door unlock.",
  ];

  const VarientPetrol = {
    varient1: ["XE", "1199  cc, Manual, Petrol, 19.05 kmpl", "Rs.5.84 Lakh*"],
    varient2: ["XM", "1199  cc, Manual, Petrol, 19.05 kmpl", "Rs.6.49 Lakh*"],
    varient3: [
      "XM plus",
      "1199 cc, Manual, Petrol, 19.05 kmpl",
      "Rs.6.79 Lakh*",
    ],

    varient4: ["XT", "1199  cc, Manual, Petrol, 19.05 kmpl", "Rs.7.38 Lakh*"],

    varient5: ["XZ", "1199 cc, Manual, Petrol, 19.05 kmpl", "Rs.7.92 Lakh*"],

    varient6: [
      "XT Turbo",
      "1199 cc, Manual, Petrol, 19.05 kmpl",
      "Rs.8.02 Lakh*",
    ],
    varient7: [
      "XZ Option",
      "1199 cc, Manual, Petrol, 19.05 kmpl",
      "Rs.8.04 Lakh*",
    ],
    varient8: [
      "XZ Plus",
      "1199 cc, Manual, Petrol, 19.05 kmpl",
      "Rs.8.44 Lakh*",
    ],

    varient9: [
      "XZ Plus Dark Edition",
      "1199 cc, Manual, Petrol, 19.05 kmpl",
      "Rs.8.70 Lakh*",
    ],
    varient10: [
      "XZ Opt Turbo",
      "1199 cc, Manual, Petrol, 19.05 kmpl",
      "Rs.8.72 Lakh*",
    ],
    varient11: [
      "XZ Turbo",
      "1199 cc, Manual, Petrol, 19.05 kmpl",
      "Rs.8.72 Lakh*",
    ],

    varient12: [
      "XZ Plus Turbo",
      "1199 cc, Manual, Petrol, 19.05 kmpl",
      "Rs.9.09 Lakh*",
    ],

    varient13: [
      "XZ Plus Turbo Dark Edition",
      "1199 cc, Manual, Petrol, 19.05 kmpl",
      "Rs.9.35 Lakh*",
    ],
  };

  const VarientDiesel = {
    varient1: [
      "XE Diesel",
      "1497 cc, Manual, Diesel, 25.11 kmpl",
      "Rs.7.04 Lakh*",
    ],
    varient2: [
      "XM Diesel",
      "1497 cc, Manual, Diesel, 25.11 kmpl",
      "Rs.7.64 Lakh*",
    ],
    varient3: [
      "XM plus Diesel",
      "1497 cc, Manual, Diesel, 25.11 kmpl",
      "Rs.7.94 Lakh*",
    ],
    varient4: [
      "XT Diesel",
      "1497 cc, Manual, Diesel, 25.11 kmpl",
      "Rs.8.53 Lakh*",
    ],
    varient5: [
      "XZ Diesel",
      "1497 cc, Manual, Diesel, 25.11 kmpl",
      "Rs.9.07 Lakh*",
    ],
    varient6: [
      "XZ Option Diesel",
      "1497 cc, Manual, Diesel, 25.11 kmpl",
      "Rs.9.19 Lakh*",
    ],
    varient7: [
      "XZ Plus Diesel",
      "1497 cc, Manual, Diesel, 25.11 kmpl",
      "Rs.9.59 Lakh*",
    ],
  };

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Tata has launched the Altroz Dark Edition. Tata Altroz Price: The Altroz is priced between Rs 5.79 lakh and Rs 9.55 lakh (ex-showroom). Tata Altroz Variants: It is available in seven trims: XE, XM, XM+, XT, XZ, XZ (O), and XZ+. Tata Altroz Engine and Transmission: Under the hood, the hatchback comes with three engine options: a 1.2-litre naturally aspirated petrol (86PS/113Nm), a 1.2-litre turbo-petrol (110PS/140Nm), and a 1.5-litre diesel (90PS/200Nm). All three are offered with a 5-speed manual gearbox as standard, while a 7-speed DCT automatic is expected to be introduced later. Tata Altroz Features: Tata has equipped the Altroz with a semi-digital instrument cluster, ambient lighting, cruise control, a 7-inch touchscreen system with Android Auto and Apple CarPlay, and connected car tech. The Altroz also offers various customisation options. Tata Altroz Safety: Standard safety features include dual front airbags, ISOFIX child seat anchors, and rear parking sensors. Tata Altroz Rivals: It rivals the Toyota Glanza, Hyundai i20, Maruti Suzuki Baleno, Volkswagen Polo, and Honda Jazz.",
  ];

  const ProsCons = {
    pros: [
      "Turbo-petrol engine offers enjoyable performance",
      "Five-star safety rating",
      "Leatherette upholstery makes the cabin feel more premium",
    ],
    cons: [
      "Premium features like ventilated seats, wireless changer, and sunroof still missing",
      "No option for an automatic transmission yet",
      "Cabin insulation is lacking",
    ],
  };

  const Colorss = {
    color1: ["HighStreet Gold", "bg-yellow-600"],
    color2: ["Downtown Red", "bg-red-400"],
    color3: ["Avenue White", "bg-white"],
    color4: ["Midtown Grey", "bg-gray-600"],
    color5: ["Harbour Blue", "bg-blue-800"],
    color6: ["Premium Cosmo Dark", "bg-gray-900"],
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
      "What is the on road price of Altroz?",
      "The on-road price of Altroz in Delhi starts at ‎₹ 6.41 Lakh and goes upto ‎₹ 10.86 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Altroz and i20?",
      "Altroz price starts at ₹ 5.80 Lakh ex-showroom and It comes with 1199 cc engine. Whereas i20 price starts at ₹ 6.91 Lakh ex-showroom and It comes with 1197 cc engine. Compare the two models to identify the best car for you.",
    ],
    question3: [
      "What is price of Altroz top model?",
      "Top model of Altroz is XZ Plus Diesel and the ex-showroom for Altroz XZ Plus Diesel is ₹ 9.57 Lakh.",
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
  return OneCarAllSpecs("altroz").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
