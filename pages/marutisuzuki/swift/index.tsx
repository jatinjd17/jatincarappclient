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
import { Swift } from "../../../CarPicsUrl/CarPics";

function Homee({ joy }) {
  const CompanyName = "MarutiSuzuki";
  const CarPrice = "₹ 5.81 Lakh";
  const TopPic = Swift;
  const CarName = "Maruti Swift";
  const OnlyName = "Swift";

  const KeySpecification = [
    "₹ 5.81 Lakh onwards",
    "23.2 to 23.76 kmpl",
    "1197 cc",
    "Manual & AMT",
    "Petrol",
    "5 Seater",
    "length of 3845, width of 1735 and a wheelbase of 245",
  ];

  const SafetyFeatures = [
    "Seat Belt Warning",
    "Anti-Lock Braking System",
    "2 Airbags",
    "EBD",
    "Speed Alert",
  ];

  const VarientPetrol = {
    varient1: ["LXI", "1197  cc, Manual, Petrol, 23.2 kmpl", "Rs.5.97 Lakh*"],
    varient2: ["VXI", "1197  cc, Manual, Petrol, 23.2 kmpl", "Rs.6.69 Lakh*"],
    varient3: [
      "VXI AMT",
      "1197 cc, Automatic, Petrol, 23.2 kmpl",
      "Rs.7.32 Lakh*",
    ],
    varient4: ["ZXI", "1197 cc, Manual, Petrol, 23.2 kmpl", "Rs.7.57 Lakh*"],
    varient5: [
      "ZXI AMT",
      "1197  cc, Automatic, Petrol, 23.2 kmpl",
      "Rs.7.89 Lakh*",
    ],
    varient6: [
      "ZXI Plus",
      "1197 cc, Manual, Petrol, 23.2 kmpl",
      "Rs.8.06 Lakh*",
    ],
    varient7: [
      "ZXI Plus DualTone",
      "1197 cc, Manual, Petrol, 23.2 kmpl",
      "Rs.8.20 Lakh*",
    ],
    varient8: [
      "ZXI Plus AMT",
      "1197 cc, Automatic, Petrol, 23.2 kmpl",
      "Rs.8.51 Lakh*",
    ],
    varient9: [
      "ZXI Plus AMT DualTone",
      "1197 cc, Automatic, Petrol, 23.2 kmpl",
      "Rs.9.27 Lakh*",
    ],
  };

  const VarientDiesel = {};

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "23.2 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: As per latest spy shots, the Swift is likely to get a CNG option soon. Maruti Swift Price: The Swift is priced from Rs 5.81 lakh to Rs 8.42 lakh (ex-showroom Delhi). Maruti Swift Variants: It is sold in four trims: LXi, VXi, ZXi, and ZXi+. Maruti Swift Engine and Transmission: It is powered by the new 1.2-litre DualJet petrol engine (90PS/113Nm) introduced on the facelifted Dzire that comes with an idle start-stop feature for improved fuel efficiency. It gets the same 5-speed manual and AMT gearbox options as before. The fuel efficiency figures with both the transmissions are as follows: 1.2-litre MT- 23.20kmpl 1.2-litre AMT- 23.76kmpl Maruti Swift Features: The Swift gets a new 4.2-inch coloured driver’s display and cruise control while retaining features such as the 7-inch touchscreen infotainment system, height-adjustable driver seat, auto AC, and LED headlamps with LED DRLs. Maruti Swift Safety: Maruti is offering the AMT-equipped variants with electronic stability control (ESC) and hill hold control. Features such as dual front airbags, ABS with EBD, and rear parking sensors have been carried forward from the pre-facelift model. Maruti Swift Rivals: It takes on the Hyundai Grand i10 Nios, Ford Figo and Freestyle, and the Renault Triber.",
  ];

  const ProsCons = {
    pros: [
      "Funky styling still gets attention. Lots of modification potential too!",
      "Playful chassis and steering makes it quite a hoot to drive.",
      "New features such as cruise control and coloured MID make it a better package.",
    ],
    cons: [
      "Pricing is woefully close to the Baleno, a car that offers more space and better quality.",
      "No significant design changes. Doesn’t look like a new model.",
      "New safety features are limited to the AMT variant.",
    ],
  };

  const Colorss = {
    color1: ["Pearl Arctic White Pearl Metallic Midnight Blue", "bg-blue-600"],
    color2: ["Metallic silky silver", "bg-gray-400"],
    color3: ["Pearl Artic White", "bg-white"],
    color4: ["Solid Fire Red", "bg-red-600"],
    color5: ["Solid Fire Red With Pearl Midnight Black", "bg-red-800"],
    color6: ["Pearl Metallic Lucent Orange", "bg-red-800"],
    color7: ["Pearl Metallic Midnight Blue", "bg-blue-800"],
    color8: ["Metallic Magma Grey", "bg-gray-800"],
    color9: ["Pearl Arctic White Midnight Black", "bg-gray-900"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 5.97 Lakh onwards",
      "21.01 kmpl",
      "1197 cc",
      "Manual, Automatic",
      "Petrol",
      "5 Seater",
      "3,995 mm L x 1,745 mm W x 1,510 mm H",
      "https://live.staticflickr.com/7840/45954179625_28f5d35cbf_b.jpg",
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
      "What is the on road price of Swift?",
      "The on-road price of Swift in Delhi starts at ‎₹ 6.49 Lakh and goes upto ‎₹ 9.65 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Swift and Baleno?",
      "Swift price starts at ₹ 5.81 Lakh ex-showroom and It comes with 1197 cc engine. Whereas Baleno price starts at ₹ 5.97 Lakh ex-showroom and It comes with 1197 cc engine. Compare the two models to identify the best car for you.",
    ],
    question3: [
      "What is price of Swift top model?",
      "Top model of Swift is Zxi Plus AMT Dual Tone and the ex-showroom for Swift Zxi Plus AMT Dual Tone is ₹ 8.56 Lakh.",
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
      "https://live.staticflickr.com/7840/45954179625_28f5d35cbf_b.jpg",
      "Baleno",
      " ₹ 5.97 Lakh onwards",
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
  return OneCarAllSpecs("swift").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
