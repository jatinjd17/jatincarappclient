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
import { Ecosport, Nexon } from "../../../CarPicsUrl/CarPics";
import { TEcosport } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import { VenueBasicInfoCard } from "../../../AllCarBasicInfo/hyundai";
import { NexonBasicInfoCard } from "../../../AllCarBasicInfo/tata";
import { UrbanCruiserBasicInfoCard } from "../../../AllCarBasicInfo/toyota";
import { SonetBasicInfoCard } from "../../../AllCarBasicInfo/kia";
import { Xuv300BasicInfoCard } from "../../../AllCarBasicInfo/mahindra";
import { MagniteBasicInfoCard } from "../../../AllCarBasicInfo/nissan";
import {
  AspireBasicInfoCard,
  EndeavourBasicInfoCard,
  FigoBasicInfoCard,
  FreestyleBasicInfoCard,
} from "../../../AllCarBasicInfo/ford";

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

  const SimilarCars = {
    car1: VenueBasicInfoCard,
    car2: NexonBasicInfoCard,
    car3: UrbanCruiserBasicInfoCard,
    car4: SonetBasicInfoCard,
    car5: Xuv300BasicInfoCard,
    car6: MagniteBasicInfoCard,
  };

  const ThatBrandCars = {
    car1: AspireBasicInfoCard,
    car2: EndeavourBasicInfoCard,
    car3: FigoBasicInfoCard,
    car4: FreestyleBasicInfoCard,
  };

  const UpcommingCarBrand = joy.UpcommingCarBrand;

  // const CompanyName = "Ford";
  // const CarPrice = "₹ 8.19 Lakh";
  // const TopPic = Ecosport;
  // const CarName = "Ford EcoSport";
  // const OnlyName = "EcoSport";
  // const ThumPic = TEcosport;

  // const KeySpecification = [
  //   "₹ 8.19 Lakh onwards",
  //   "14.7 to 21.7 kmpl",
  //   "1496 to 1498 cc",
  //   "Manual & Automatic (Torque Converter)",
  //   "Petrol & Diesel",
  //   "5 Seater",
  //   "3,998 mm L x 1,765 mm W x 1,647 mm H",
  // ];

  // const SafetyFeatures = [
  //   "6 Airbags.",
  //   "Rear Parking Camera and Sensors.",
  //   "ABS with EBD.",
  //   "Driver and Passenger Seatbelt Reminder.",
  //   "High-Speed Sensing Alert System.",
  //   "Side and Curtain Airbags.",
  //   "Door Ajar Warning.",
  //   "Perimeter Alarm.",
  // ];

  // const VarientPetrol = {
  //   varient1: [
  //     "Ambiente",
  //     "1496 cc, Manual, Petrol, 15.9 kmpl",
  //     "Rs.8.19 Lakh*",
  //   ],
  //   varient2: ["Trend", "1496 cc, Manual, Petrol, 15.9 kmpl", "Rs.8.84 Lakh*"],

  //   varient3: [
  //     "Titanium",
  //     "1496 cc, Manual, Petrol, 15.9 kmpl",
  //     "Rs.9.99 Lakh*",
  //   ],

  //   varient4: [
  //     "SE Petrol",
  //     "1496 cc, Manual, Petrol, 15.9 kmpl",
  //     "Rs.10.69 Lakh*",
  //   ],

  //   varient5: [
  //     "Sports",
  //     "1496 cc, Manual, Petrol, 15.9 kmpl",
  //     "Rs.11.19 Lakh*",
  //   ],

  //   varient6: [
  //     "Titanium Plus AT",
  //     "1496 cc, Manual, Petrol, 15.9 kmpl",
  //     "Rs.11.39 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {
  //   varient1: [
  //     "Ambiente Diesel",
  //     "1498 cc, Manual AMT, Diesel, 21.7 kmpl",
  //     "Rs.8.89 Lakh*",
  //   ],

  //   varient2: [
  //     "Trend Diesel",
  //     "1498 cc, Manual, Diesel, 21.7 kmpl",
  //     "Rs.9.34 Lakh*",
  //   ],

  //   varient3: [
  //     "Titanium Diesel",
  //     "1498 cc, Manual, Diesel, 21.7 kmpl",
  //     "Rs.9.99 Lakh*",
  //   ],

  //   varient4: [
  //     "SE Diesel",
  //     "1498 cc, Manual, Diesel, 21.7 kmpl",
  //     "Rs.11.19 Lakh*",
  //   ],

  //   varient5: [
  //     "Sports Diesel",
  //     "1498 cc, Manual, Diesel, 21.7 kmpl",
  //     "Rs.11.69 Lakh*",
  //   ],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "23.26 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: The facelifted EcoSport has been spied in a new exterior shade. Ford EcoSport Price: Ford retails the EcoSport from Rs 8.19 lakh to Rs 11.69 lakh (ex-showroom Delhi). Ford EcoSport Variants: It is sold in six variants: Ambiente, Trend, Titanium, Titanium+, SE, and Sports. Ford EcoSport Seating Capacity: The sub-4m SUV can seat up to five people.  Ford EcoSport Engine and Transmission: It gets 1.5-litre petrol (122PS/149Nm) and 1.5-litre diesel (100PS/215Nm) engines, both paired with a 5-speed MT as standard. The petrol-powered SUV also gets an optional 6-speed torque converter. Ford EcoSport Features: Ford offers it with a sunroof, auto climate control, rain-sensing wipers, FordPass connected car tech, and up to a 9-inch touchscreen infotainment system with Android Auto and Apple CarPlay. Ford EcoSport Safety: Standard safety features include dual front airbags, ABS with EBD, and rear parking sensors. Ford EcoSport Rivals: It goes up against the Nissan Magnite, Tata Nexon, Mahindra XUV300, Maruti Suzuki Vitara Brezza, Toyota Urban Cruiser, Hyundai Venue, Kia Sonet, and Renault Kiger.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Striking looks especially in the S guise ",
  //     "Feature-rich cabin with decent ergonomics ",
  //     "Sporty drivability in terms of steering and body control",
  //   ],
  //   cons: [
  //     "Narrow cabin lack of shoulder room on the rear bench ",
  //     "Inconsistent cabin plastics and dated instrument console ",
  //     "More expensive than its rivals",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Lightning Blue", "bg-blue-600"],
  //   color2: ["Diamond White", "bg-gray-400"],
  //   color3: ["Moondust Silver", "bg-white"],
  //   color4: ["Canyon Ridge", "bg-brown-600"],
  //   color5: ["Race Red", "bg-gray-800"],
  //   color6: ["Absolute Black", "bg-gray-800"],
  //   color7: ["Smoke Grey", "bg-gray-800"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 6.92 Lakh Onwards",
  //     "17.52 to 23.4 kmpl",
  //     "998 to 1493 cc",
  //     "Clutchless Manual & Automatic (Dual Clutch)",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "3,995 mm L x 1,770 mm W x 1,590 mm H",
  //     "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/7931/1626089251600/front-left-side-47.jpg",
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
  //     "2 Airbags",
  //     "",
  //   ],
  // };

  // const faqs = {
  //   question1: [
  //     "What is the on road price of EcoSport?",
  //     "The on-road price of EcoSport in Delhi starts at ‎₹ 9.26 Lakh and goes upto ‎₹ 13.85 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between EcoSport and Nexon?",
  //     "EcoSport price starts at ₹ 8.19 Lakh ex-showroom and It comes with 1496 cc engine. Whereas Nexon price starts at ₹ 7.28 Lakh ex-showroom and It comes with 1199 cc engine.",
  //   ],
  //   question3: [
  //     "What is the mileage of Ford EcoSport?",
  //     "The Ford EcoSport mileage is 14.7 - 21.7 kmpl.",
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

  // const SimilarCars = {
  //   car1: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/7931/1626089251600/front-left-side-47.jpg",
  //     "Venue",
  //     "₹ 6.92 Lakh Onwards",
  //   ],
  //   car2: [
  //     "https://img.etimg.com/thumb/msid-77905386,width-640,resizemode-4,imgsize-480363/electric-sunroof.jpg",
  //     "Nexon",
  //     "₹ 7.20 Lakh onwards0",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/47016/urban-cruiser-exterior-right-front-three-quarter.jpeg?q=85",
  //     "Urban Cruiser",
  //     "₹ 8.63 Lakh onwards",
  //   ],
  //   car4: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/41523/sonet-exterior-right-front-three-quarter-110.jpeg?q=85",
  //     "Sonet",
  //     "₹ 6.79 Lakh onwards",
  //   ],
  //   car5: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/26918/xuv300-exterior-right-front-three-quarter-148706.jpeg?q=85",
  //     "XUV300",
  //     "₹ 7.96 Lakh onwards",
  //   ],
  //   car6: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/45795/magnite-exterior-right-front-three-quarter-3.jpeg?q=85",
  //     "Magnite",
  //     "₹ 5.59 Lakh onwards",
  //   ],
  // };

  // const ThatBrandCars = {
  //   car1: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/40369/Ford-EcoSport-Right-Front-Three-Quarter-159249.jpg?wm=0&q=85",
  //     "EcoSport",
  //     "₹ 8.19 Lakh onwards",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/37640/endeavour-exterior-right-front-three-quarter-149473.jpeg?q=85",
  //     "Endeavour",
  //     "₹ 33.81 Lakh onwards",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/35463/figo-exterior-right-front-three-quarter-151689.jpeg?q=85",
  //     "Figo",
  //     "₹ 5.82 Lakh onwards",
  //   ],
  //   car4: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/32698/freestyle-exterior-right-front-three-quarter-2.jpeg?q=85",
  //     "Freestyle",
  //     "₹ 7.28 Lakh onwards",
  //   ],
  // };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ford/Mustang-2021/7939/1595910236308/front-left-side-47.jpg?tr=w-456",
  //     "Mustang 2021",
  //     "Rs.75.00 Lakh*",
  //   ],
  //   car2: [
  //     "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3A%2F%2Fcdni.autocarindia.com%2FExtraImages%2F20210705015326_Ford_ecosport.jpg&h=795&w=1200&c=1",
  //     "EcoSport 2021 Facelift",
  //     "Rs.8.49 Lakh",
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
        LinkCarName="ecosport"
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
  return OneCarAllSpecs("ecosport").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
