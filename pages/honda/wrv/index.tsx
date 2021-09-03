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
import PopularCarsFrontPage from "../../../Components/FrontPage/popularcarsfrontpage";
import { OneCarAllSpecs } from "../../../actions/allspecsspecificcar";
import { Wrv } from "../../../CarPicsUrl/CarPics";
import { TWRV } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  AmazeBasicInfoCard,
  City4BasicInfoCard,
  CityBasicInfoCard,
  JazzBasicInfoCard,
  WRVBasicInfoCard,
} from "../../../AllCarBasicInfo/honda";
import { VenueBasicInfoCard } from "../../../AllCarBasicInfo/hyundai";
import { NexonBasicInfoCard } from "../../../AllCarBasicInfo/tata";
import { UrbanCruiserBasicInfoCard } from "../../../AllCarBasicInfo/toyota";
import { SonetBasicInfoCard } from "../../../AllCarBasicInfo/kia";
import { Xuv300BasicInfoCard } from "../../../AllCarBasicInfo/mahindra";
import { MagniteBasicInfoCard } from "../../../AllCarBasicInfo/nissan";

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

  const SimilarCars = {
    car1: VenueBasicInfoCard,
    car2: NexonBasicInfoCard,
    car3: UrbanCruiserBasicInfoCard,
    car4: SonetBasicInfoCard,
    car5: Xuv300BasicInfoCard,
    car6: MagniteBasicInfoCard,
  };

  const ThatBrandCars = {
    car1: AmazeBasicInfoCard,
    car2: CityBasicInfoCard,
    car3: WRVBasicInfoCard,
    car4: JazzBasicInfoCard,
    car5: City4BasicInfoCard,
  };

  // const CompanyName = "Honda";
  // const CarPrice = "₹ 8.90 Lakh";
  // const TopPic = Wrv;
  // const CarName = "Honda WR-V";
  // const OnlyName = "WR-V";
  // const ThumPic = TWRV;

  // const KeySpecification = [
  //   "₹ 8.90 Lakh onwards",
  //   "16.5 to 23.7 kmpl",
  //   "1199 to 1498 cc",
  //   "Manual",
  //   "Petrol & Diesel",
  //   "5 Seater",
  //   "3,999 mm L x 1,734 mm W x 1,601 mm H",
  // ];

  // const SafetyFeatures = [
  //   "ABS with EBD.",
  //   "Dual Front SRS Airbags (Driver and Passenger)",
  //   "Rear Parking Camera.",
  //   "ACETM Body Structure.",
  //   "Driver Side Window One Touch up/down with Pinch Guard.",
  //   "Immobilizer Anti-Theft System/Impact Mitigating Headrests.",
  //   "Rear Parking Sensors.",
  // ];

  // const VarientPetrol = {
  //   varient1: ["SV", "1199 cc, Manual, Petrol, 16.5 kmpl", "Rs.8.76 Lakh*"],
  //   varient2: ["VX", "1199 cc, Manual, Petrol, 16.5 kmpl", "Rs.9.89 Lakh*"],
  // };

  // const VarientDiesel = {
  //   varient1: [
  //     "SV Diesel",
  //     "1199 cc, Automatic AMT, Diesel, 23.7 kmpl",
  //     "Rs.10.77 Lakh*",
  //   ],
  //   varient2: [
  //     "VX Diesel",
  //     "1199 cc, Manual, Diesel, 23.7 kmpl",
  //     "Rs.11.79 Lakh*",
  //   ],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "23.26 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: The WR-V has become pricier by up to Rs 92,000. Honda WR-V Price: Honda offers the WR-V in two trims: SV and VX. Honda WR-V Engine and Transmission: It is powered by 1.2-litre petrol (90PS/110Nm) and 1.5-litre diesel (100PS/200Nm) engines. The petrol unit is mated to a 5-speed MT while the diesel motor gets a 6-speed MT. The WR-V does not get an automatic transmission.  Honda WR-V Features: The sub-4m crossover gets LED projector headlamps, fog lamps, and LED elements in the tail lamps. Inside, it sports redesigned leatherette upholstery and a touchscreen infotainment system with Android Auto and Apple CarPlay. It also comes with cruise control, push-button start-stop, and a sunroof. Honda WR-V Safety: Safety features include dual front airbags, ABS with EBD, and rear parking sensors. Honda WR-V Rivals: It takes on the Ford EcoSport, Hyundai Venue, Mahindra XUV300, Kia Sonet, Maruti Suzuki Vitara Brezza, Tata Nexon, Toyota Urban Cruiser, Renault Kiger, and the Nissan Magnite.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "High on cabin space and practicality; large 363 litres boot",
  //     "Good visibility and ease of driving",
  //     "Both petrol and diesel engines to choose from.",
  //   ],
  //   cons: [
  //     "Misses out on an automatic option.",
  //     "The soft suspension is bothersome on windy sections of roads and speeds over 80kmph",
  //     "Rear seats lack armrest, dedicated AC vent and USB port",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["PLATINUM WHITE PEARL", "bg-blue-600"],
  //   color2: ["Lunar Silver Metallic", "bg-gray-400"],
  //   color3: ["Modern Steel Metallic", "bg-white"],
  //   color4: ["Golden Brown Metallic", "bg-brown-600"],
  //   color5: ["Radiant Red Metallic", "bg-gray-800"],
  //   color6: ["Premium Amber Metallic", "bg-gray-800"],
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
  //     "What is the on road price of WR-V?",
  //     "The on-road price of WR-V in Delhi starts at ‎₹ 9.78 Lakh and goes upto ‎₹ 13.89 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between WR-V and Jazz?",
  //     "WR-V price starts at ₹ 8.90 Lakh ex-showroom and It comes with 1199 cc engine. Whereas Jazz price starts at ₹ 7.75 Lakh ex-showroom and It comes with 1199 cc engine.",
  //   ],
  //   question3: [
  //     "What is the mileage of Honda WR-V?",
  //     "The Honda WR-V mileage is 16.5 - 23.7 kmpl.",
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
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/33276/amaze-exterior-right-front-three-quarter-2.jpeg?q=85",
  //     "Amaze",
  //     "₹ 6.34 Lakh onwards",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/40535/all-new-city-exterior-right-front-three-quarter.jpeg?q=85",
  //     "City",
  //     "₹ 11.19 Lakh onwards",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/45732/wr-v-exterior-right-front-three-quarter.jpeg?q=85",
  //     "WRV",
  //     "₹ 8.90 Lakh onwards",
  //   ],
  //   car4: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/46891/jazz-exterior-right-front-three-quarter.jpeg?q=85",
  //     "Jazz",
  //     "₹ 7.75 Lakh onwards",
  //   ],
  //   car5: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/26755/city-4th-generation-exterior-right-front-three-quarter.jpeg?q=85",
  //     "City 4th Gen",
  //     "₹ 9.33 Lakh onwards",
  //   ],
  // };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/45951/amaze-facelift-exterior-front-view-2.jpeg?isig=0&q=85",
  //     "Amaze Facelift 2021",
  //     "₹ 6.35 - 10.10 Lakh",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/43195/Honda-New-Jazz-Exterior-176189.jpg?wm=1&q=85",
  //     "New Gen Jazz",
  //     "₹ 8.00 - 12.00 Lakh",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/43195/Honda-New-Jazz-Exterior-176189.jpg?wm=1&q=85",
  //     "New Gen Jazz",
  //     "₹ 8.00 - 12.00 Lakh",
  //   ],
  //   car4: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/39751/Honda-HRV-Exterior-169828.jpg?wm=0&q=85",
  //     "HRV",
  //     "₹ 12.00 - 16.00 Lakh",
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
        LinkCarName="wrv"
      />
      <Nav />

      <MobileSideBar isToggleName={isToggleName} handleactive={handleactive} />

      <div className="grid grid-cols-10">
        <SideBar isToggleName={isToggleName} handleactive={handleactive} />

        <div className="col-span-10 sm:col-span-10 2xl:ml-40 md:ml-0">
          <StartingBox
            OnlyName="WRV"
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

      {/* <PopularCarsFrontPage PopularCars={SimilarCars} /> */}

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
  return OneCarAllSpecs("wrv").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
