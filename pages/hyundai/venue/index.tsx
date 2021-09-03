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
import { Venue } from "../../../CarPicsUrl/CarPics";
import { TVenue } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  CretaBasicInfoCard,
  VenueBasicInfoCard,
  i20BasicInfoCard,
  NiosBasicInfoCard,
  VernaBasicInfoCard,
  AuraBasicInfoCard,
  SantroBasicInfoCard,
  AlcazarBasicInfoCard,
  ElantraBasicInfoCard,
  KonaBasicInfoCard,
  TucsonBasicInfoCard,
} from "../../../AllCarBasicInfo/hyundai";

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

  // const CompanyName = "Hyundai";
  // const CarPrice = "₹ 6.99 Lakh";
  // const TopPic = Venue;
  // const CarName = "Hyundai Venue";
  // const OnlyName = "Venue";
  // const ThumPic = TVenue;

  // const KeySpecification = [
  //   "₹ 6.99 Lakh onwards",
  //   "17.52 to 23.4 kmpl",
  //   "998 to 1493 cc",
  //   "Manual, Clutchless Manual & Automatic (Dual Clutch)",
  //   "Petrol & Diesel",
  //   "5 Seater",
  //   "3,995 mm L x 1,770 mm W x 1,590 mm H",
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
  //   varient1: ["E", "1197 cc, Manual, Petrol, 17.52 kmpl", "Rs.6.99 Lakh*"],
  //   varient2: ["S", "1197 cc, Manual, Petrol, 17.52 kmpl", "Rs.7.77 Lakh*"],
  //   varient3: [
  //     "S Plus",
  //     "1197 cc, Manual, Petrol, 17.52 kmpl",
  //     "Rs.8.64 Lakh*",
  //   ],
  //   varient4: [
  //     "S Turbo iMT",
  //     "998 cc, Manual, Petrol, 18.0 kmpl",
  //     "Rs.9.10 Lakh*",
  //   ],
  //   varient6: [
  //     "S Turbo DCT",
  //     "998 cc, Manual, Petrol, 18.15 kmpl",
  //     "Rs.10.01 Lakh*",
  //   ],
  //   varient7: ["SX iMT", "998 cc, Manual, Petrol, 18.0 kmpl", "Rs.10.07 Lakh*"],
  //   varient8: [
  //     "SX Turbo",
  //     "998 cc, Manual, Petrol, 18.0 kmpl",
  //     "Rs.10.07 Lakh*",
  //   ],
  //   varient9: [
  //     "SX Sport iMT",
  //     "998 cc, Manual, Petrol, 18.0 kmpl",
  //     "Rs.10.37 Lakh*",
  //   ],
  //   varient10: [
  //     "SX Turbo Executive",
  //     "998 cc, Manual, Petrol, 18.0 kmpl",
  //     "Rs.11.04 Lakh*",
  //   ],
  //   varient11: [
  //     "SX Opt iMT",
  //     "998 cc, Manual, Petrol, 18.0 kmpl",
  //     "Rs.11.35 Lakh*",
  //   ],
  //   varient12: [
  //     "SX Opt Sport iMT",
  //     "998 cc, Manual, Petrol, 18.0 kmpl",
  //     "Rs.11.48 Lakh*",
  //   ],
  //   varient13: [
  //     "SX Plus Turbo DCT",
  //     "998 cc, Manual, Petrol, 18.15 kmpl",
  //     "Rs.11.68 Lakh*",
  //   ],
  //   varient14: [
  //     "SX Plus Sport DCT",
  //     "998 cc, Manual, Petrol, 18.15 kmpl",
  //     "Rs.11.85 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {
  //   varient1: [
  //     "S Diesel",
  //     "1493 cc, Manual, Diesel, 16.8 kmpl",
  //     "Rs.9.52 Lakh*",
  //   ],

  //   varient2: [
  //     "SX Diesel",
  //     "1493 cc, Manual, Diesel, 23.7 kmpl",
  //     "Rs.9.99 Lakh*",
  //   ],

  //   varient3: [
  //     "SX Diesel Sport",
  //     "1493 cc, Manual, Diesel, 23.7 kmpl",
  //     "Rs.10.40 Lakh*",
  //   ],

  //   varient4: [
  //     "SX Opt Diesel",
  //     "1493 cc, Manual, Diesel, 23.7 kmpl",
  //     "Rs.11.67 Lakh*",
  //   ],

  //   varient5: [
  //     "SX Opt Diesel Sport",
  //     "1493 cc, Manual, Diesel, 23.7 kmpl",
  //     "Rs.11.79 Lakh*",
  //   ],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Diesel (1956 cc)", "Automatic", "20.65 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: Hyundai has axed six variants of the Venue and introduced two new trims. Hyundai Venue Price: The Venue is priced from Rs 6.92 lakh to Rs 11.73 lakh (ex-showroom Delhi). Hyundai Venue Variants: It is available in eight trims: E, S, S+, S(O), SX, SX(O) Executive, SX+, and SX(O). Hyundai Venue Seating Capacity: The Venue comes in a five-seater configuration. Hyundai Venue Engine and Transmission: Hyundai has provided its sub-4m SUV with three engine options: two petrol and one diesel. The 1.2-litre petrol engine (83PS/114Nm) comes mated to a 5-speed manual, while the 1.5-litre diesel motor (100PS/240Nm) from the Seltos is paired to a 6-speed MT. However, there’s no automatic option.  The SUV also gets a 1.0-litre turbo-petrol engine (120PS/171Nm), mated to either a 6-speed manual or a 7-speed dual-clutch automatic transmission. This unit also gets a 6-speed iMT with a manual shifter (but doesn’t feature the clutch pedal). It is more affordable than the conventional automatic option.  Hyundai Venue Features: It is equipped with auto climate control with rear AC vents, Hyundai’s BlueLink connected car tech, wireless mobile charging, cruise control, push-button start/stop, an 8-inch touchscreen infotainment system, and a sunroof.  Hyundai Venue Safety: Safety features on offer include up to six airbags, electronic stability control, and vehicle stability management. Hyundai Venue Rivals: The Venue goes up against the Renault Kiger, Nissan Magnite, Tata Nexon, Maruti Suzuki Vitara Brezza, Toyota Urban Cruiser, Ford EcoSport, Kia Sonet, and Mahindra XUV300.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "First-in-class connectivity features.",
  //     "Quality interiors coupled with long features list.",
  //     "It is the only DCT automatic in the segment.",
  //   ],
  //   cons: [
  //     "Cabin space isn’t as generous as the competitors.",
  //     "1.2-litre petrol only available in entry-level trims",
  //     "Top-spec variants are too expensive.",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Fiery Red", "bg-red-800"],
  //   color2: ["Typhoon Silver", "bg-gray-900"],
  //   color3: ["Polar White Dual Tone", "bg-gray-600"],
  //   color4: ["Deep Forest", "bg-white"],
  //   color5: ["Polar White", "bg-blue-800"],
  //   color6: ["Titan Grey", "bg-red-400"],
  //   color7: ["Denim Blue", "bg-red-400"],
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
  //     "What is the on road price of Venue?",
  //     "The on-road price of Venue in Delhi starts at ‎₹ 7.9 Lakh and goes upto ‎₹ 14.11 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Venue and Sonet?",
  //     "Venue price starts at ₹ 6.99 Lakh ex-showroom and It comes with 1197 cc engine. Whereas Sonet price starts at ₹ 6.79 Lakh ex-showroom and It comes with 1197 cc engine.",
  //   ],
  //   question3: [
  //     "What is the mileage of Hyundai Venue?",
  //     "The Hyundai Venue mileage is 17.52 - 23.4 kmpl.",
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
    car1: CretaBasicInfoCard,
    car2: VenueBasicInfoCard,
    car3: i20BasicInfoCard,
    car4: NiosBasicInfoCard,
    car5: VernaBasicInfoCard,
    car6: AuraBasicInfoCard,
    car7: SantroBasicInfoCard,
    car8: AlcazarBasicInfoCard,
    car9: ElantraBasicInfoCard,
    car10: KonaBasicInfoCard,
    car11: TucsonBasicInfoCard,
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/100121/exterior-right-front-three-quarter.jpeg?isig=0&q=85",
  //     "i20 N Line",
  //     "₹ 11.00 - 13.00 Lakh",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/51891/ax1-micro-suv-exterior-left-front-three-quarter.jpeg?q=85",
  //     "AX1 micro-SUV",
  //     "₹ 4.00 - 7.00 Lakh",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/49892/new-kona-exterior-front-view.jpeg?q=85",
  //     "New Kona",
  //     "₹ 23.00 - 25.00 Lakh",
  //   ],
  //   car4: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/47331/hyundai-new-elantra-left-side-view0.jpeg?q=85",
  //     "New Elantra",
  //     "₹ 16.00 - 20.00 Lakh",
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
        LinkCarName="venue"
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
  return OneCarAllSpecs("venue").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
