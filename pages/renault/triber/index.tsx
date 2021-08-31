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
import { Triber } from "../../../CarPicsUrl/CarPics";

function Homee({ joy }) {
  const CompanyName = "Renault";
  const CarPrice = "₹ 5.49 Lakh";
  const TopPic = Triber;
  const CarName = "Renault Triber";
  const OnlyName = "Triber";

  const KeySpecification = [
    "₹ 5.49 Lakh onwards",
    "18.29 to 19 kmpl",
    "999 cc",
    "Manual & AMT",
    "Petrol",
    "7 Seater",
    "3,990 mm L x 1,739 mm W x 1,643 mm H",
  ];

  const SafetyFeatures = [
    " dual airbags",
    "ABS with EBD",
    "and child safety locks.",
  ];

  const VarientPetrol = {
    varient1: ["RXE", "999 cc, Manual, Petrol, 20.0 kmpl", "Rs.9.86 Lakh*"],
    varient2: ["RXL", "999 cc, Manual, Petrol, 20.0 kmpl", "Rs.10.46 Lakh*"],
    varient3: [
      "RXL EASY-R AMT",
      "999 cc, Automatic, Petrol, 18.2 kmpl",
      "Rs.11.27 Lakh*",
    ],
    varient4: ["RXT", "999 cc, Manual, Petrol, 20.0 kmpl", "Rs.12.05 Lakh*"],
    varient5: [
      "RXT EASY-R AMT",
      "999 cc, Automatic, Petrol, 18.2 kmpl",
      "Rs.12.65 Lakh*",
    ],
    varient6: ["RXZ", "999 cc, Manual, Petrol, 20.0 kmpl", "Rs.13.65 Lakh*"],
    varient7: [
      "RXZ Dual Tone",
      "999 cc, Manual, Petrol, 20.0 kmpl",
      "Rs.14.25 Lakh*",
    ],
    varient8: [
      "RXZ EASY-R AMT",
      "999 cc, Automatic, Petrol, 18.2 kmpl",
      "Rs.14.25 Lakh*",
    ],
    varient9: [
      "RXZ EASY-R AMT Dual Tone",
      "999 cc, Automatic, Petrol, 18.2 kmpl",
      "Rs.14.25 Lakh*",
    ],
  };

  const VarientDiesel = {};

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (999 cc)", "Automatic (Dual Clutch)", "20.0 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Renault is offering the Triber with benefits of up to Rs 55,000 this July. Renault Triber Price: Renault retails the Triber between Rs 5.50 lakh and Rs 7.95 lakh (ex-showroom Delhi). Renault Triber Variants: The Triber is available in four variants: RXE, RXL, RXT, and RXZ. Renault Triber Seating Capacity: Renault offers the sub-4m crossover MPV in a 7-seater layout. Renault Triber Powertrain: It is powered by a 1.0-litre petrol engine (72PS/96Nm), mated to either a 5-speed manual or an AMT gearbox. Renault will also introduce a 1.0-litre turbo-petrol engine (100PS/160Nm) in the crossover MPV. This motor was showcased at Auto Expo 2020, but its launch has now been pushed to 2022. This unit will likely come paired with a 5-speed manual and a CVT automatic. Renault Triber Features: The Triber gets an 8-inch touchscreen infotainment system with Android Auto and Apple CarPlay, a height-adjustable driver's seat, steering-mounted audio and calling controls, AC vents for second and third-row seats, a digital instrument cluster, and push-button start/stop. Renault Triber Safety: Renault offers dual front airbags, ABS with EBD, and rear parking sensors as standard across all variants. Renault Triber Rivals: While it doesn't have any direct rival, the Triber is an alternative to mid-size hatchbacks such as the Maruti Swift, Hyundai Grand i10 Nios, Ford Freestyle, and Ford Figo. It also rivals the Datsun GO+. That said, if you are looking for a rugged utility vehicle, you could even consider the Mahindra Bolero.",
  ];

  const ProsCons = {
    pros: [
      "Practical cabin with lots of storage spaces.",
      "Good boot space of 625 litres.",
      "Triber can be turned into a two-seater, four seater, five-seater, six-seater or even a seven-seater vehicle.",
    ],
    cons: [
      "Engine feels underpowered on highways or with a full load of passengers.",
      "No diesel engine option.",
      "Missing features: No automatic climate control, alloy wheels or foglamps.",
    ],
  };

  const Colorss = {
    color1: ["Electric Blue", "bg-blue-600"],
    color2: ["Cedar Brown", "bg-brown-800"],
    color3: ["Moonlight Silver With Black Roof", "bg-gray-700"],
    color4: ["Electric Blue With Black Roof", "bg-blue-300"],
    color5: ["Moonlight Silver", "bg-gray-800"],
    color6: ["ICE Cool White", "bg-white-800"],
    color7: ["Metal Mustard With Black Roof", "bg-yellow-800"],
    color8: ["Metal Mustard", "bg-yellow-800"],
    color9: ["Cedar Brown With Black Roof", "bg-brown-800"],
    color10: ["Ice Cool White With Black Roof", "bg-white-800"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 4.08 Lakh onwards",
      "16.11 kmpl to 30.47 km/kg",
      "1197 cc",
      "Manual, Automatic",
      "Petrol",
      "5-7 Seater",
      "3,675 mm L x 1,475 mm W x 1,800-1,825 mm H",
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Eeco/7346/1581669301115/front-left-side-47.jpg?tr=w-456",
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
      "What is the on road price of Triber?",
      "The on-road price of Triber in Delhi starts at ‎₹ 6.27 Lakh and goes upto ‎₹ 8.76 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Triber and GO+?",
      "Triber price starts at ₹ 5.49 Lakh ex-showroom and It comes with 999 cc engine. Whereas GO+ price starts at ₹ 4.26 Lakh ex-showroom and It comes with 1198 cc engine. Compare the two models to identify the best car for you.",
    ],
    question3: [
      "What is price of Triber top model?",
      "Top model of Triber is RXZ EASY-R AMT Dual Tone and the ex-showroom for Triber RXZ EASY-R AMT Dual Tone is ₹ 7.95 Lakh.",
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
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Eeco/7346/1581669301115/front-left-side-47.jpg?tr=w-456",
      "Eeco",
      " ₹ 4.08 Lakh onwards",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/48543/kwid-exterior-right-front-three-quarter-17.jpeg?q=85",
      "Kwid",
      "₹ 3.31 Lakh",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39276/triber-exterior-right-front-three-quarter-168563.jpeg?q=85",
      "Triber",
      "₹ 5.49 Lakh",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/44407/kiger-exterior-right-front-three-quarter-12.jpeg?q=85",
      "Kiger",
      "₹ 5.64 Lakh",
    ],
    car4: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Duster/7704/1598257607089/front-left-side-47.jpg?tr=w-456",
      "Duster",
      "₹ 9.84 Lakh",
    ],
  };

  const UpcommingCarBrand = {
    car1: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Zoe/6278/1581400662093/front-left-side-47.jpg?tr=w-456",
      "Renault Zoe",
      "Rs.8.00 Lakh*",
    ],
    car2: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Renault-Kwid-EV/6214/1555414583232/front-left-side-47.jpg?tr=w-456",
      "Renault K-ZE",
      "Rs.10.00 Lakh*",
    ],
    car3: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Renault-Arkana/6573/front-left-side-47.jpg?tr=w-456",
      "Renault Arkana",
      "Rs.10.00 Lakh",
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
  return OneCarAllSpecs("triber").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
