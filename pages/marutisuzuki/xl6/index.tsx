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
import { Xl6 } from "../../../CarPicsUrl/CarPics";

function Homee({ joy }) {
  const CompanyName = "MarutiSuzuki";
  const CarPrice = "₹ 9.92 Lakh onwards";
  const TopPic = Xl6;
  const CarName = "Maruti XL6";
  const OnlyName = "XL6";

  const KeySpecification = [
    "₹ 9.92 Lakh onwards",
    "17.99 to 19.01 kmpl",
    "1462 cc",
    "Manual and Automatic",
    "Petrol & CNG",
    "6-7 Seater",
    "4,445 mm L x 1,775 mm W x 1,700 mm H",
  ];

  const SafetyFeatures = ["Driver Airbag", "Seat Belts", "Speed Alert"];

  const VarientPetrol = {
    varient1: [
      "Zeta MT Petrol",
      "1462 cc, Manual, Petrol, 19.01 kmpl",
      "Rs.9.92 Lakh*",
    ],
    varient2: [
      "Alpha MT Petrol",
      "1462 cc, Manual, Petrol, 19.01 kmpl",
      "Rs.10.50 Lakh*",
    ],
    varient3: [
      "Zeta AT Petrol",
      "1462 cc, Automatic, Petrol, 19.01 kmpl",
      "Rs.11.12 Lakh*",
    ],
    varient4: [
      "Alpha AT Petrol",
      "1462 cc, Automatic, Petrol, 19.01 kmpl",
      "Rs.11.70 Lakh*",
    ],
  };

  const VarientDiesel = {};

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1462 cc)", "Manual", "19.01 kmpl"],
    mileage2: ["CNG (1462 cc)", "Manual", "26.2 km/kg"],
  };

  const LatestUpdate = [
    "Maruti XL6 Price: The XL6 is priced from Rs 9.94 lakh to Rs 11.73 lakh (ex-showroom Delhi). Maruti XL6 Variants: Maruti offers the MPV in two trims: Zeta and Alpha. Maruti XL6 Seating Capacity: It comes in a six-seater layout. Maruti XL6 Powertrain: It gets the same 1.5-litre petrol engine as the Ertiga (105PS/138Nm) with mild-hybrid tech, mated to a 5-speed MT and a 4-speed torque converter. Maruti XL6 Features: Maruti has equipped it with a 7-inch infotainment screen with Android Auto and Apple CarPlay connectivity, cruise control, and auto climate control with rear AC vents. Maruti XL6 Safety: Standard safety features include dual airbags, ABS with EBD, and rear parking sensors. Maruti XL6 Rivals: The XL6 competes with the Maruti Suzuki Ertiga, Mahindra Marazzo, and Toyota Innova Crysta.",
  ];

  const ProsCons = {
    pros: [
      "The redesigned front face packs more attitude and offers better road presence.",
      "All-black leather interiors improve the ambience of the cabin.",
      "Captain seats are large and comfortable, and offer a more upmarket experience.",
    ],
    cons: [
      "Petrol motor gets noisy post 2,500rpm",
      "The engine feels laidback and doesn't respond well to quick speed changes.",
      "At the higher price, some premium features like automatic day/night IRVM, rear window blinds and cup holders are missing.",
    ],
  };

  const Colorss = {
    color1: ["Nexa Blue", "bg-blue-600"],
    color2: ["Premium Silver", "bg-gray-400"],
    color3: ["Arctic White", "bg-white"],
    color4: ["Magma Gray", "bg-gray-600"],
    color5: ["Brave Khaki", "bg-black-800"],
    color6: ["Auburn Red", "bg-black-800"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 5.50 Lakh onwards",
      "18.2 - 20.0 kmpl",
      "999 cc",
      "Manual, Automatic",
      "Petrol",
      "7 Seater",
      "3,990 mm L x 1,739 mm W x 1,643 mm H",
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Triber/7418/1580113966019/front-left-side-47.jpg?tr=w-456",
    ],
    comparisioncar2: [
      "₹ 7.78 Lakh onwards",
      "19.01 kmpl",
      "1462 cc",
      "Manual, Automatic",
      "Petrol",
      "6-7 Seater",
      "4,395 mm L x 1,735 mm W x 1,690 mm H",
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3A%2F%2Fcdni.autocarindia.com%2FGalleries%2F20180420105800_2018-Suzuki-Ertiga-fronw.jpg&h=578&w=872&c=1",
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
      "1 Airbags",
      "",
    ],
  };

  const faqs = {
    question1: [
      "What is the on road price of XL6?",
      "The on-road price of XL6 in Delhi starts at ‎₹ 11.11 Lakh and goes upto ‎₹ 13.54 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between XL6 and Ertiga?",
      "XL6 price starts at ₹ 9.92 Lakh ex-showroom and It comes with 1462 cc engine. Whereas Ertiga price starts at ₹ 7.78 Lakh ex-showroom and It comes with 1462 cc engine. Compare the two models to identify the best car for you.",
    ],
    question3: [
      "What is the mileage of Maruti Suzuki XL6?",
      "The Maruti Suzuki XL6 mileage is 17.99 - 19.01 kmpl.",
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
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Triber/7418/1580113966019/front-left-side-47.jpg?tr=w-456",
      "Triber",
      " ₹ 5.50 Lakh onwards",
    ],
    car2: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Eeco/7346/1581669301115/front-left-side-47.jpg?tr=w-456",
      "Eeco",
      "₹ 5.50 Lakh onwards0",
    ],
    car3: [
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3A%2F%2Fcdni.autocarindia.com%2FGalleries%2F20180420105800_2018-Suzuki-Ertiga-fronw.jpg&h=578&w=872&c=1",
      "Ertiga",
      "₹ 7.78 Lakh onwards",
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
  return OneCarAllSpecs("xl6").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
