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
  const CarPrice = "Rs.5.76 - 6.40 Lakh*";
  const TopPic =
    "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift-Dzire-Tour/8201/1606283248075/front-left-side-47.jpg?imwidth=420&impolicy=resize";
  const CarName = "Maruti Dzire Tour";
  const OnlyName = "Dzire Tour";

  const KeySpecification = [
    "Rs.5.76 onwards",
    "19.95 kmpl",
    "1197 cc",
    "Manual",
    "Petrol",
    "5 Seater",
    "3,995 mm L x 1,695 mm W x 1,515 mm H",
  ];

  const SafetyFeatures = [
    "Seat Belt Warning",
    "Anti-Lock Braking System",
    "2 Airbags",
    "EBD",
    "Speed Alert",
    "Driver frontal airbag, Front passenger frontal airbag",
    "Door Ajar Warning.",
  ];

  const VarientPetrol = {
    varient1: [
      "1.2 S STD",
      "1197 cc, Manual, Petrol, 19.95 kmpl",
      "Rs.5.76 Lakh*",
    ],
    varient2: [
      "1.2 S STD Opt",
      "1197 cc, Manual, Petrol, 19.95 kmpl",
      "Rs.5.80 Lakh*",
    ],
  };

  const VarientDiesel = {};

  const VarientCNG = {
    varient1: [
      "1.2 S STD CNG",
      "1197 cc, Automatic AMT, Petrol, 24.12 kmpl",
      "Rs.6.36 Lakh*",
    ],
    varient2: [
      "1.2 S STD CNG Opt",
      "1197 cc, Manual, Petrol, 19.95 kmpl",
      "Rs.6.40 Lakh*",
    ],
  };

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "19.95 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: The Dzire is likely to get a CNG option soon. Maruti Dzire Price: Maruti retails the Dzire from Rs 5.98 lakh to Rs 9.02 lakh (ex-showroom Delhi). Maruti Dzire Variants: The sub-4m sedan is offered in four trims: LXi, VXi, ZXi, and ZXi+. Maruti Dzire Engine and Transmission: It comes with a 1.2-litre DualJet petrol engine (90PS/113Nm), mated to a 5-speed manual or AMT option. Its claimed fuel efficiency stands at 23.26kmpl with the MT and 24.12kmpl with the AMT. Maruti Dzire Features: Maruti offers the Dzire with cruise control, automatic LED headlamps, auto-folding ORVMs, push-button engine start-stop, and auto AC with rear AC vents. The facelifted Dzire also gets a 7.0-inch touchscreen infotainment system with Android Auto and Apple CarPlay connectivity as well as cloud-based services. Its 4.2-inch multi-colour MID shows plenty of useful driving information. Maruti Dzire Safety: The Dzire comes with dual front airbags, ISOFIX child seat anchors, and rear parking sensors as standard. Its AMT variants also get electronic stability control and hill hold assist with features such as a rearview camera and rear defogger offered in the higher-spec variants. Maruti Dzire Rivals: It goes up against the Honda Amaze, Hyundai Aura, Tata Tigor, and Ford Aspire.",
  ];

  const ProsCons = {
    pros: [
      "Refined petrol engine",
      "High claimed efficiency",
      "Comfortable ride quality",
    ],
    cons: [
      "Interior quality could have been better",
      "Bouncy high speed ride quality",
      "No diesel engine option",
    ],
  };

  const Colorss = {
    color1: ["Midnight black", "bg-gray-900"],
    color2: ["Metallic silky silver", "bg-gray-400"],
    color3: ["Pearl Metallic Arctic White", "bg-white"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 6.34 Lakh Onwards",
      "18.3 to 24.7 kmpl",
      "1199 to 1498 cc",
      "Manual & Automatic CVT",
      "Petrol & Diesel",
      "5 Seater",
      "3,995 mm L x 1,695 mm W x 1,498-1,501 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/33276/amaze-exterior-right-front-three-quarter-2.jpeg?q=85",
    ],
    comparisioncar2: [
      "₹ 6.00 Lakh onwards",
      "20 to 28 kmpl",
      "998 to 1197 cc",
      "Manual & Automatic AMT",
      "Petrol & Diesel",
      "5 Seater",
      "3,995 mm L x 1,680 mm W x 1,520 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=85",
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
      "What is the on road price of Dzire?",
      "The on-road price of Dzire in Delhi starts at ‎₹ 6.6 Lakh and goes upto ‎₹ 10.13 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Dzire and Swift?",
      "Dzire price starts at ₹ 5.98 Lakh ex-showroom and It comes with 1197 cc engine. Whereas Swift price starts at ₹ 5.81 Lakh ex-showroom and It comes with 1197 cc engine. Compare the two models to identify the best car for you.",
    ],
    question3: [
      "What is price of Dzire top model?",
      "Top model of Dzire is ZXi Plus AGS and the ex-showroom for Dzire ZXi Plus AGS is ₹ 9.03 Lakh.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/33276/amaze-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Amaze",
      "₹ 9.28 Lakh Onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=85",
      "Aura",
      "₹ 6.00 Lakh onwards0",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/26563/Volkswagen-Vento-Right-Front-Three-Quarter-169094.jpg?wm=0&q=85",
      "Vento",
      "10.00 Lakh onwards",
    ],
    car4: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Rapid/7920/1608614333184/front-left-side-47.jpg?tr=w-456",
      "Rapid",
      "₹ 7.79 Lakh onwards",
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
  return OneCarAllSpecs("dziretour").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
