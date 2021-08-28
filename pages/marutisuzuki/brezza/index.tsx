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
  const CarPrice = "₹ 7.51 Lakh";
  const TopPic =
    "https://media.zigcdn.com/media/model/2020/Feb/front-1-4-left-190291530_600x400.jpg";
  const CarName = "Maruti Vitara Brezza";
  const OnlyName = "Brezza";

  const KeySpecification = [
    "₹ 7.51 Lakh onwards",
    "17.03 to 18.76 kmpl",
    "1462 cc",
    "Manual",
    "Petrol",
    "5 Seater",
    "3,995 mm L x 1,790 mm W x 1,640 mm H",
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
      "LXI",
      "1462 cc, Manual, Petrol, 17.03 to 18.76 kmpl",
      "Rs.7.51 Lakh*",
    ],
    varient2: [
      "VXI",
      "1462 cc, Manual, Petrol, 17.03 to 18.76 kmpl",
      "Rs.8.57 Lakh*",
    ],
    varient3: [
      "ZXI",
      "1462 cc, Manual, Petrol, 17.03 to 18.76 kmpl",
      "Rs.9.32 Lakh*",
    ],
    varient4: [
      "ZXI PLUS",
      "1462 cc, Manual, Petrol, 17.03 to 18.76 kmpl",
      "Rs.9.86 Lakh*",
    ],
    varient5: [
      "VXi AT SHVS",
      "1462 cc, Manual, Petrol, 17.03 to 18.76 kmpl",
      "Rs.9.88 Lakh*",
    ],
    varient6: [
      "ZXI PLUS Dual Tone",
      "1462 cc, Manual, Petrol, 17.03 to 18.76 kmpl",
      "Rs.10.00 Lakh*",
    ],
    varient7: [
      "ZXi AT SHVS",
      "1462 cc, Manual, Petrol, 17.03 to 18.76 kmpl",
      "Rs.10.63 Lakh*",
    ],
    varient8: [
      "ZXi PLUS AT SHVS",
      "1462 cc, Manual, Petrol, 17.03 to 18.76 kmpl",
      "Rs.11.26 Lakh*",
    ],
    varient9: [
      "ZXi PLUS AT DualTone",
      "1462 cc, Manual, Petrol, 17.03 to 18.76 kmpl",
      "Rs.11.42 Lakh*",
    ],
  };

  const VarientDiesel = {};

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1462 cc)", "Manual", "17.03 to 18.76 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Maruti is offering discounts of up to Rs 39,000 on the Vitara Brezza this July. Maruti Vitara Brezza Price: The Vitara Brezza is priced between Rs 7.51 lakh and Rs 11.41 lakh (ex-showroom Delhi). Maruti Vitara Brezza Variants: It is sold in four trims: LXi, VXi, ZXi, and ZXi+. Maruti Vitara Brezza Seating Capacity: The sub-4m SUV can seat up to five people. Maruti Vitara Brezza Engine and Transmission: It gets a 1.5-litre petrol engine (105PS/138Nm) paired with either a 5-speed manual or a 4-speed AT. Maruti Vitara Brezza Features: The SUV is equipped with cruise control, a height-adjustable driver’s seat, auto AC, a 7-inch touchscreen infotainment system with Apple CarPlay and Android Auto, rain-sensing wipers, and push-button start/stop. Maruti Vitara Brezza Safety: Safety features include dual front airbags, ABS with EBD, and rear parking sensors.  Maruti Vitara Brezza Rivals: It goes up against the Toyota Urban Cruiser, Mahindra XUV300, Hyundai Venue, Tata Nexon, Ford EcoSport, Renault Kiger, Nissan Magnite, and Kia Sonet.",
  ];

  const ProsCons = {
    pros: [
      "Smooth petrol engine is relaxing and fun!",
      "Comfortable ride quality. Tackles bumps, potholes much better.",
      "Spacious cabin for a family of five. Ample boot space too.",
    ],
    cons: [
      "Old-school 4-speed automatic feels slow on inclines and highways.",
      "Missing features: sunroof, rear-AC vents, side and curtain airbags.",
      "No option of a diesel engine.",
    ],
  };

  const Colorss = {
    color1: ["Torque Blue", "bg-blue-600"],
    color2: ["PREMIUM SILVER", "bg-gray-400"],
    color3: ["Pearl Artic White", "bg-white"],
    color4: ["Sizzling Red With Midnight Black Roof", "bg-red-600"],
    color5: ["Granite Grey", "bg-gray-800"],
    color6: ["Granite Grey with Autumn Orange Roof", "bg-gray-800"],
    color7: ["Autumn Orange", "bg-orange-800"],
    color8: ["Torque Blue With Midnight Black Roof", "bg-blue-800"],
    color9: ["Sizzling Red", "bg-red-800"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 6.92 Lakh Onwards",
      "17.52 to 23.4 kmpl",
      "998 to 1493 cc",
      "Clutchless Manual & Automatic (Dual Clutch)",
      "Petrol & Diesel",
      "5 Seater",
      "3,995 mm L x 1,770 mm W x 1,590 mm H",
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/7931/1626089251600/front-left-side-47.jpg",
    ],
    comparisioncar2: [
      "₹7.20 Lakh onwards",
      "16 to 22.4 kmpl",
      "1199 to 1497 cc",
      "Manual & AMT",
      "Petrol & Diesel",
      "5 Seater",
      "3993 mm L x 1811 mm W x 1606 mm H, 2498mm WB",
      "https://img.etimg.com/thumb/msid-77905386,width-640,resizemode-4,imgsize-480363/electric-sunroof.jpg",
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
      "What is the on road price of Vitara Brezza?",
      "The on-road price of Vitara Brezza in Delhi starts at ‎₹ 8.49 Lakh and goes upto ‎₹ 13.24 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Vitara Brezza and Venue?",
      "Vitara Brezza price starts at ₹ 7.51 Lakh ex-showroom and It comes with 1462 cc engine. Whereas Venue price starts at ₹ 6.92 Lakh ex-showroom and It comes with 998 cc engine. Compare the two models to identify the best car for you",
    ],
    question3: [
      "What is price of Vitara Brezza top model?",
      "Top model of Vitara Brezza is ZXI Plus AT Dual Tone and the ex-showroom for Vitara Brezza ZXI Plus AT Dual Tone is ₹ 11.42 Lakh.",
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
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/7931/1626089251600/front-left-side-47.jpg",
      "Venue",
      "₹ 6.92 Lakh Onwards",
    ],
    car2: [
      "https://img.etimg.com/thumb/msid-77905386,width-640,resizemode-4,imgsize-480363/electric-sunroof.jpg",
      "Nexon",
      "₹ 7.20 Lakh onwards0",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47016/urban-cruiser-exterior-right-front-three-quarter.jpeg?q=85",
      "Urban Cruiser",
      "₹ 8.63 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41523/sonet-exterior-right-front-three-quarter-110.jpeg?q=85",
      "Sonet",
      "₹ 6.79 Lakh onwards",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/26918/xuv300-exterior-right-front-three-quarter-148706.jpeg?q=85",
      "XUV300",
      "₹ 7.96 Lakh onwards",
    ],
    car6: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45795/magnite-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Magnite",
      "₹ 5.59 Lakh onwards",
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
  return OneCarAllSpecs("brezza").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
