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
import { getOneBlog } from "../../../actions/cat";
import { OneCarAllSpecs } from "../../../actions/allspecsspecificcar";
import { Sonet } from "../../../CarPicsUrl/CarPics";
import { TSonet } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  SonetBasicInfoCard,
  SeltosBasicInfoCard,
  CarnivalBasicInfoCard,
} from "../../../AllCarBasicInfo/kia";

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

  // console.log(joy);
  // const CompanyName = "Kia";
  // const CarPrice = "₹ 6.79 Lakh";
  // const TopPic = Sonet;
  // const CarName = "Kia Sonet";
  // const OnlyName = "Sonet";
  // const ThumPic = TSonet;

  // const KeySpecification = [
  //   "₹ 6.79 Lakh onwards",
  //   "18.2 to 24.1 kmpl",
  //   "998 to 1493 cc",
  //   "Manual, Clutchless Manual, Automatic (Dual Clutch) & Automatic (Torque Converter)",
  //   "Petrol & Diesel",
  //   "5 Seater",
  //   "3,995 mm L x 1,790 mm W x 1,610-1,642 mm H",
  // ];

  // const SafetyFeatures = [
  //   "Impact Sensing Auto Door Unlock",
  //   "6 airbags",
  //   "ABS",
  //   "EBD",
  //   "Central Locking",
  //   "Emergency Stop Signal",
  //   "Driver & Passenger SeatBelt Reminder",
  //   "Speed Sensing Auto Door Lock",
  //   "Headlamp Escort Function",
  //   "ISOFIX",
  //   "Speed Alert System",
  //   "Driver & Passenger Side Seat Belt Pretensioners & Load Limiters",
  // ];

  // const VarientPetrol = {
  //   varient1: [
  //     "1.2 HTE",
  //     "1197 cc, Manual, Petrol, 18.4 kmpl",
  //     "Rs.6.79 Lakh*",
  //   ],
  //   varient2: [
  //     "1.2 HTK",
  //     "1197 cc, Manual, Petrol, 18.4 kmpl",
  //     "Rs.7.79 Lakh*",
  //   ],
  //   varient3: [
  //     "1.2 HTK Plus",
  //     "1197 cc, Manual, Petrol, 18.4 kmpl",
  //     "Rs.8.65 Lakh*",
  //   ],
  //   varient4: [
  //     "HTK Plus Turbo iMT",
  //     "998 cc, Manual, Petrol, 18.2 kmpl",
  //     "Rs.9.79 Lakh*",
  //   ],
  //   varient5: [
  //     "HTX Turbo iMT",
  //     "998 cc, Manual, Petrol, 18.2 kmpl",
  //     "Rs.10.29 Lakh*",
  //   ],
  //   varient6: [
  //     "HTX DCT",
  //     "998 cc, Automatic, Petrol, 18.3 kmpl",
  //     "Rs.10.99 Lakh*",
  //   ],
  //   varient7: [
  //     "HTX Plus Turbo iMT",
  //     "998 cc, Manual, Petrol, 18.2 kmpl",
  //     "Rs.11.75 Lakh*",
  //   ],
  //   varient8: [
  //     "HTX Plus Turbo iMT DT",
  //     "998 cc, Manual, Petrol, 18.2 kmpl",
  //     "Rs.11.85 Lakh*",
  //   ],
  //   varient9: [
  //     "GTX Plus Turbo iMT",
  //     "998 cc, Manual, Petrol, 18.2 kmpl",
  //     "Rs.12.19 Lakh*",
  //   ],
  //   varient10: [
  //     "GTX Plus Turbo iMT DT",
  //     "998 cc, Manual, Petrol, 18.2 kmpl",
  //     "Rs.12.29 Lakh*",
  //   ],
  //   varient11: [
  //     "GTX Plus Turbo DCT",
  //     "998 cc, Automatic, Petrol, 18.3 kmpl",
  //     "Rs.12.99 Lakh*",
  //   ],
  //   varient12: [
  //     "GTX Plus Turbo DCT DT",
  //     "998 cc, Automatic, Petrol, 18.3 kmpl",
  //     "Rs.13.09 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {
  //   varient1: [
  //     "1.5 HTE Diesel",
  //     "1493 cc, Manual, Diesel, 24.1 kmpl",
  //     "Rs.8.35 Lakh*",
  //   ],

  //   varient2: [
  //     "1.5 HTK Diesel",
  //     "1493 cc, Manual, Diesel, 24.1 kmpl",
  //     "Rs.9.29 Lakh*",
  //   ],

  //   varient3: [
  //     "1.5 HTK Plus Diesel",
  //     "1493 cc, Manual, Diesel, 24.1 kmpl",
  //     "Rs.9.89 Lakh*",
  //   ],

  //   varient4: [
  //     "1.5 HTX Diesel",
  //     "1493 cc, Manual, Diesel, 24.1 kmpl",
  //     "Rs.10.49 Lakh*",
  //   ],

  //   varient5: [
  //     "1.5 HTX Diesel AT",
  //     "1493 cc, Automatic, Diesel, 24.1 kmpl",
  //     "Rs.11.29 Lakh*",
  //   ],

  //   varient6: [
  //     "1.5 HTX Plus Diesel",
  //     "1493 cc, Manual, Diesel, 24.1 kmpl",
  //     "Rs.11.99 Lakh*",
  //   ],

  //   varient7: [
  //     "1.5 HTX Plus Diesel DT",
  //     "1493 cc, Manual, Diesel, 24.1 kmpl",
  //     "Rs.12.09 Lakh*",
  //   ],

  //   varient8: [
  //     "1.5 GTX Plus Diesel",
  //     "1493 cc, Manual, Diesel, 24.1 kmpl",
  //     "Rs.12.45 Lakh*",
  //   ],

  //   varient9: [
  //     "1.5 GTX Plus Diesel DT",
  //     "1493 cc, Manual, Diesel, 24.1 kmpl",
  //     "Rs.12.55 Lakh*",
  //   ],

  //   varient10: [
  //     "1.5 GTX Plus Diesel AT",
  //     "1493 cc, Automatic, Diesel, 19.00 kmpl",
  //     "Rs.13.25 Lakh*",
  //   ],

  //   varient11: [
  //     "1.5 GTX Plus Diesel AT DT",
  //     "1493 cc, Automatic, Diesel, 19.00 kmpl",
  //     "Rs.13.35 Lakh*",
  //   ],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Diesel (1956 cc)", "Automatic", "20.65 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Automatic", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Kia Sonet Price: Kia retails the Sonet between Rs 6.79 lakh and Rs 13.35 lakh (ex-showroom). Kia Sonet Variants: The sub-4m SUV is sold in six trims: HTE, HTK, HTK+, HTX, HTX+, and GTX+. Kia Sonet Seating Capacity: The Kia Sonet can seat five.  Kia Sonet Powertrains: It shares its engines with the Hyundai Venue: The transmission options on offer are a 6-speed iMT (clutchless manual) and a 7-speed DCT with the 1.0-litre turbo-petrol, a 5-speed MT with the 1.2-litre petrol, and a 6-speed MT or AT with the 1.5-litre diesel engine. The Sonet’s claimed fuel efficiency figures are as follows: Kia Sonet Features: It comes with UVO connected car tech, wireless charging, a sunroof, a 10.25-inch touchscreen infotainment system with Android Auto and Apple CarPlay, and an air purifier. Kia Sonet Safety: Safety features include up to six airbags, ABS with EBD, electronic stability control (ESC), and vehicle stability management. Kia Sonet Rivals: The Sonet goes up against the Ford EcoSport, Tata Nexon, Mahindra XUV300, Renault Kiger, Toyota Urban Cruiser, Nissan Magnite, Hyundai Venue, and Maruti Suzuki Vitara Brezza.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Presence. Tall height and bonnet gives the Sonet a strong stance.",
  //     "Feature packed: ventilated seats, wireless charging, ambient lighting, Bose sound system and lots more",
  //     "‘Proper’ automatic options: 7-speed DCT for the turbo-petrol, 6-speed AT for the diesel.",
  //   ],
  //   cons: [
  //     "Limited rear-seat width limits usability as a 5-seater.",
  //     "Silly cost-cutting measures: backlight only for driver’s power window, missing chilled glovebox, adjustable front armrest.",
  //     "Automatic transmissions limited to mid-spec HTK+ and top-spec GTX+ variants only.",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Intense Red", "bg-red-800"],
  //   color2: ["Beige Gold With Aurora Black Pearl", "bg-gray-900"],
  //   color3: ["Glacier White Pearl", "bg-gray-600"],
  //   color4: ["Steel Silver", "bg-gray-600"],
  //   color5: ["Aurora Black Pearl", "bg-gray-600"],
  //   color6: ["Beige Gold", "bg-gray-600"],
  //   color7: ["Intelligence Blue", "bg-gray-600"],
  //   color8: ["Glacier White Pearl With Aurora Black Pearl", "bg-gray-600"],
  //   color9: ["Gravity Gray", "bg-gray-600"],
  //   color10: ["Intense Red With Aurora Black Pearl", "bg-gray-600"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 7.51 Lakh onwards",
  //     "17.03 to 18.76 kmpl",
  //     "1462 cc",
  //     "Manual",
  //     "Petrol",
  //     "5 Seater",
  //     "3,995 mm L x 1,790 mm W x 1,640 mm H",
  //     "https://media.zigcdn.com/media/model/2020/Feb/front-1-4-left-190291530_600x400.jpg",
  //   ],
  //   comparisioncar2: [
  //     "₹7.20 Lakh onwards",
  //     "16 to 22.4 kmpl",
  //     "1199 to 1497 cc",
  //     "Manual & AMT",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "3993 mm L x 1811 mm W x 1606 mm H, 2498mm WB",
  //     "https://img.etimg.com/thumb/msid-77905386,width-640,resizemode-4,imgsize-480363/electric-sunroof.jpg",
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
  //     "What is the on road price of Sonet?",
  //     "The on-road price of Sonet in Delhi starts at ‎₹ 7.65 Lakh and goes upto ‎₹ 15.73 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Sonet and Venue?",
  //     "Sonet price starts at ₹ 6.79 Lakh ex-showroom and It comes with 1197 cc engine. Whereas Venue price starts at ₹ 6.99 Lakh ex-showroom and It comes with 998 cc engine.",
  //   ],
  //   question3: [
  //     "What is the mileage of Kia Sonet?",
  //     "The Kia Sonet mileage is 18.2 - 24.1 kmpl.",
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
      "https://media.zigcdn.com/media/model/2020/Feb/front-1-4-left-190291530_600x400.jpg",
      "Brezza",
      "₹ 7.51 Lakh Onwards",
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
    car1: SonetBasicInfoCard,
    car2: SeltosBasicInfoCard,
    car3: CarnivalBasicInfoCard,
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos-7-Seater/8424/1619518563355/front-left-side-47.jpg?tr=w-456",
  //     "Kia Seltos 7-Seater",
  //     "₹ 12.00 Lakh",
  //   ],
  //   car2: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Carnival-2021/7886/1614601829878/front-left-side-47.jpg?tr=w-456",
  //     "Carnival 2022",
  //     "Rs.26.00 Lakh*",
  //   ],
  //   car3: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Sportage/5860/1623155125464/front-left-side-47.jpg?imwidth=420&impolicy=resize",
  //     "Sportage",
  //     "Rs.25.00 Lakh*",
  //   ],
  //   car4: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Kia-Ceed/6220/1558590662958/front-left-side-47.jpg?tr=w-456",
  //     "Ceed",
  //     "Rs.9.00 Lakh*",
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
        LinkCarName="sonet"
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
  return OneCarAllSpecs("sonet").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
