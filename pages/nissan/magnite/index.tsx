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
import { Magnite } from "../../../CarPicsUrl/CarPics";
import { TMagnite } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  MagniteBasicInfoCard,
  KicksBasicInfoCard,
  GTRBasicInfoCard,
} from "../../../AllCarBasicInfo/nissan";
import { VenueBasicInfoCard } from "../../../AllCarBasicInfo/hyundai";
import { NexonBasicInfoCard } from "../../../AllCarBasicInfo/tata";
import { UrbanCruiserBasicInfoCard } from "../../../AllCarBasicInfo/toyota";
import { SonetBasicInfoCard } from "../../../AllCarBasicInfo/kia";
import { Xuv300BasicInfoCard } from "../../../AllCarBasicInfo/mahindra";

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

  // const CompanyName = "Nissan";
  // const CarPrice = "₹ 5.59 Lakh";
  // const TopPic = Magnite;
  // const CarName = "Nissan Magnite";
  // const OnlyName = "Magnite";
  // const ThumPic = TMagnite;

  // const KeySpecification = [
  //   "₹ 5.59 Lakh onwards",
  //   "17.7 to 19.42 kmpl",
  //   "999 cc",
  //   "Manual & Automatic (CVT)",
  //   "Petrol",
  //   "5 Seater",
  //   "3,994 mm L x 1,758 mm W x 1,572 mm H",
  // ];

  // const SafetyFeatures = [
  //   "Anti-Lock Braking System",
  //   "Central Locking",
  //   "2 Airbags",
  //   "EBD",
  //   "Speed Alert",
  //   "Speed Sensing Auto Door Lock",
  // ];

  // const VarientPetrol = {
  //   varient1: ["XE", "999 cc, Manual, Petrol, 18.75 kmpl", "Rs.5.59 Lakh*"],
  //   varient2: ["XL", "999 cc, Manual, Petrol, 18.75 kmpl", "Rs.6.32 Lakh*"],
  //   varient3: ["XV", "999 cc, Manual, Petrol, 18.75 kmpl", "Rs.6.99 Lakh*"],
  //   varient4: ["XV DT", "999 cc, Manual, Petrol, 18.75 kmpl", "Rs.7.15 Lakh*"],
  //   varient5: [
  //     "Turbo XL",
  //     "999 cc, Automatic, Petrol, 20.0 kmpl",
  //     "Rs.7.49 Lakh*",
  //   ],
  //   varient6: [
  //     "XV Premium",
  //     "999 cc, Manual, Petrol, 18.75 kmpl",
  //     "Rs.7.68 Lakh*",
  //   ],
  //   varient7: [
  //     "XV Premium DT",
  //     "999 cc, Manual, Petrol, 18.75 kmpl",
  //     "Rs.7.84 Lakh*",
  //   ],
  //   varient8: [
  //     "Turbo XV",
  //     "999 cc, Manual, Petrol, 20.0 kmpl",
  //     "Rs.8.09 Lakh*",
  //   ],
  //   varient9: [
  //     "Turbo XV DT",
  //     "999 cc, Manual, Petrol, 20.0 kmpl",
  //     "Rs.8.25 Lakh*",
  //   ],
  //   varient10: [
  //     "Turbo CVT XL",
  //     "999 cc, Automatic, Petrol, 17.7 kmpl",
  //     "Rs.8.39 Lakh*",
  //   ],
  //   varient11: [
  //     "Turbo XV Premium",
  //     "999 cc, Manual, Petrol, 20.0 kmpl",
  //     "Rs.8.89 Lakh*",
  //   ],
  //   varient12: [
  //     "Turbo XV Premium Opt",
  //     "999 cc, Manual, Petrol, 20.0 kmpl",
  //     "Rs.8.99 Lakh*",
  //   ],
  //   varient13: [
  //     "Turbo CVT XV",
  //     "999 cc, Automatic, Petrol, 17.7 kmpl",
  //     "Rs.8.99 Lakh*",
  //   ],
  //   varient14: [
  //     "Turbo XV Premium DT",
  //     "999 cc, Manual, Petrol, 20.0 kmpl",
  //     "Rs.9.05 Lakh*",
  //   ],
  //   varient15: [
  //     "Turbo XV Premium Opt DT",
  //     "999 cc, Manual, Petrol, 20.0 kmpl",
  //     "Rs.9.15 Lakh*",
  //   ],
  //   varient16: [
  //     "Turbo CVT XV DT",
  //     "999 cc, Automatic, Petrol, 17.7 kmpl",
  //     "Rs.9.15 Lakh*",
  //   ],
  //   varient17: [
  //     "Turbo CVT XV Premium",
  //     "999 cc, Automatic, Petrol, 17.7 kmpl",
  //     "Rs.9.74 Lakh*",
  //   ],
  //   varient18: [
  //     "Turbo CVT XV Premium Opt",
  //     "999 cc, Automatic, Petrol, 17.7 kmpl",
  //     "Rs.9.84 Lakh*",
  //   ],
  //   varient19: [
  //     "Turbo CVT XV Premium DT",
  //     "999 cc, Automatic, Petrol, 17.7 kmpl",
  //     "Rs.9.90 Lakh*",
  //   ],
  //   varient20: [
  //     "Turbo CVT XV Prm Opt DT",
  //     "999 cc, Automatic, Petrol, 17.7 kmpl",
  //     "Rs.10.00 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (3799 cc)", "Automatic (Dual Clutch)", "14.23 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Nissan Magnite Price: The Magnite is priced between Rs Rs 5.59 lakh and Rs 9.90 lakh (ex-showroom Delhi). Nissan Magnite Variants: It is sold in five variants: XE, XL, XV, XV Premium, and XV Premium (O). Nissan Magnite Seating Capacity: The Magnite can carry up to five people. Nissan Magnite Powertrains: The Magnite is a petrol-only offering with two engine options: naturally aspirated 1.0-litre (72PS/96Nm) and 1.0-litre turbo-petrol (100PS/160Nm). While the former is mated to a 5-speed MT only, the latter gets the choice of either a 5-speed MT or CVT (152Nm with the CVT gearbox). Nissan Magnite Features: It gets an 8-inch touchscreen infotainment system with wireless Android Auto and Apple CarPlay, 16-inch dual-tone alloy wheels, LED headlamps with LED DRLs, and auto AC with rear AC vents. The higher-specced XV and XV Premium come with a Tech Pack comprising a wireless charger, an air purifier, high-end JBL speakers, LED scuff plates, ambient lighting, and puddle lamps. Sadly, Nissan doesn’t offer the SUV with a sunroof. Nissan Magnite Safety: It comes with dual front airbags, rear parking sensors, ABS with EBD, hill launch control, and electronic stability control. Nissan Magnite Rivals: The Magnite takes on the Kia Sonet, Hyundai Venue, Maruti Suzuki Vitara Brezza, Toyota Urban Cruiser, Tata Nexon, Mahindra XUV300, Ford EcoSport, and Renault Kiger.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Smartly designed sub-compact SUV. Very well proportioned",
  //     "Spacious and practical cabin. A good SUV for the family",
  //     "Comfortable ride quality. Bad roads can be tackled with confidence",
  //   ],
  //   cons: [
  //     "Fitment quality is decent but not premium. Doesn’t feel as rich inside as a Sonet/Venue/XUV300",
  //     "Not an exciting or fun to drive car, even with the turbo petrol engine",
  //     "No diesel engine option",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Flare Garnet Red With Onyx Black", "bg-red-800"],
  //   color2: ["Vivid Blue With Strom White", "bg-blue-800"],
  //   color3: ["Tourmaline Brown onyx Black", "bg-brown-700"],
  //   color4: ["Onyx Black", "bg-gray-900"],
  //   color5: ["Blade Silver", "bg-gray-600"],
  //   color6: ["PEARL WHITE WITH ONYX BLACK", "bg-white"],
  //   color7: ["Sandstone Browns", "bg-brown-800"],
  //   color8: ["Storm White", "bg-white"],
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
  //     "What is the on road price of Magnite?",
  //     "The on-road price of Magnite in Delhi starts at ‎₹ 6.16 Lakh and goes upto ‎₹ 11.06 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Magnite and Kiger?",
  //     "Magnite price starts at ₹ 5.59 Lakh ex-showroom and It comes with 999 cc engine. Whereas Kiger price starts at ₹ 5.64 Lakh ex-showroom and It comes with 999 cc engine. Compare the two models to identify the best car for you.",
  //   ],
  //   question3: [
  //     "What is the mileage of Nissan Magnite?",
  //     "The Nissan Magnite mileage is 17.7 - 19.42 kmpl.",
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
    car1: VenueBasicInfoCard,
    car2: NexonBasicInfoCard,
    car3: UrbanCruiserBasicInfoCard,
    car4: SonetBasicInfoCard,
    car5: Xuv300BasicInfoCard,
  };

  const ThatBrandCars = {
    car1: MagniteBasicInfoCard,
    car2: KicksBasicInfoCard,
    car3: GTRBasicInfoCard,
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Nissan/Nissan-X-Trail/3718/1568357284267/front-left-side-47.jpg?tr=w-456",
  //     "Nissan X-Trail",
  //     "Rs.22.60 Lakh*",
  //   ],
  //   car2: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Nissan/Nissan-Sunny-2020/6887/1555329555708/front-left-side-47.jpg?tr=w-456",
  //     "Nissan Sunny 2021",
  //     "Rs.8.50 Lakh*",
  //   ],
  //   car3: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Nissan/Nissan-Leaf/1351/1550722575097/front-left-side-47.jpg?tr=w-456",
  //     "Nissan Leaf",
  //     "Rs.30.00 Lakh",
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
        LinkCarName="magnite"
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

          <div className="ml-24 sm:ml-1 sm:mr-1 mt-10">
            <KeySpecSafetyFeatures
              KeySpecification={KeySpecification}
              SafetyFeatures={SafetyFeatures}
              OnlyName={OnlyName}
            />

            <div>
              <div className="grid grid-cols-10 mt-6 md:grid-cols-5 sm:mr-1"></div>
            </div>
            <Link to="specifications" smooth={true}>
              <div className="text-3xl bg-red-500 w-96 md:w-auto text-white rounded-md text-center font-bold p-3 hover:bg-red-200 mt-10 sm:mr-1 cursor-pointer">
                Show All Specifications
              </div>
            </Link>

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
              {/* <SomeHighlightedFeatures
                OnlyName={OnlyName}
                HighlightedFeatures={HighlightedFeatures}
              /> */}
              <Faqs OnlyName={OnlyName} faqs={faqs} />
              {/* <LatestArticles OnlyName={OnlyName} articles={articles} /> */}
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
  return OneCarAllSpecs("magnite").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
