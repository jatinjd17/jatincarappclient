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
import { Nios } from "../../../CarPicsUrl/CarPics";

function Homee({ joy }) {
  const CompanyName = "Hyundai";
  const CarPrice = "₹ 5.28 Lakh";
  const TopPic = Nios;
  const CarName = "Hyundai i10 Nios";
  const OnlyName = "i10 Nios";

  const KeySpecification = [
    "₹ 5.28 Lakh onwards",
    "18.9 to 25 kmpl",
    "998 to 1197 cc",
    "Manual & AMT",
    "Petrol, CNG & Diesel",
    "5 Seater",
    "3,805 mm L x 1,680 mm W x 1,520 mm H",
  ];

  const SafetyFeatures = [
    "Impact Sensing Auto Door Unlock",
    "2 airbags",
    "ABS",
    "EBD",
    "Central Locking",
    "Emergency Stop Signal",
    "Driver & Passenger SeatBelt Reminder",
    "Speed Sensing Auto Door Lock",
    "Headlamp Escort Function",
    "ISOFIX",
    "Speed Alert System",
    "Driver & Passenger Side Seat Belt Pretensioners & Load Limiters",
  ];

  const VarientPetrol = {
    varient1: ["Era", "1197 cc, Manual, Petrol, 20.7 kmpl", "Rs.5.28 Lakh*"],
    varient2: ["Magna", "1197 cc, Manual, Petrol, 20.7 kmpl", "Rs.5.99 Lakh*"],
    varient3: ["Sportz", "1197 cc, Manual, Petrol, 20.7 kmpl", "Rs.6.66 Lakh*"],
    varient4: [
      "AMT Magna",
      "1197 cc, Automatic, Petrol, 20.7 kmpl",
      "Rs.6.67 Lakh*",
    ],
    varient5: [
      "Sportz Dual Tone",
      "1197 cc, Manual, Petrol, 20.7 kmpl",
      "Rs.6.91 Lakh*",
    ],
    varient6: [
      "Magna CNG",
      "1197 cc, Manual, CNG, 18.9 km/kg",
      "Rs.6.99 Lakh*",
    ],
    varient7: [
      "AMT Sportz",
      "1197 cc, Automatic, Petrol, 20.7 kmpl",
      "Rs.7.27 Lakh*",
    ],

    varient8: ["Asta", "1197 cc, Manual, Petrol, 20.7", "Rs.7.42 Lakh*"],
    varient9: [
      "Sportz CNG",
      "1197 cc, Manual, CNG, 18.9 km/kg",
      "Rs.7.53 Lakh*",
    ],
    varient10: [
      "Turbo Sportz",
      "998 cc, Manual, Petrol, 20.7 kmpl",
      "Rs.7.87 Lakh*",
    ],
    varient11: [
      "AMT Asta",
      "1197 cc, Automatic, Petrol, 20.7 kmpl",
      "Rs.7.91 Lakh*",
    ],
    varient12: [
      "Turbo Sportz Dual Tone",
      "998 cc, Manual, Petrol, 20.7 kmpl",
      "Rs.7.92 Lakh*",
    ],
  };

  const VarientDiesel = {
    varient1: [
      "Magna CRDi",
      "1186 cc, Manual, Diesel, 26.2 kmpl",
      "Rs.7.20 Lakh*",
    ],

    varient2: [
      "Magna CRDi Corp Edition",
      "1186 cc, Manual, Diesel, 26.2 kmpl",
      "Rs.7.30 Lakh*",
    ],

    varient3: [
      "Sportz CRDi",
      "1186 cc, Manual, Diesel, 26.2 kmpl",
      "Rs.7.74 Lakh*",
    ],

    varient4: [
      "AMT Sportz CRDi",
      "1186 cc, Automatic, Diesel, 20.7 kmpl",
      "Rs.8.35 Lakh*",
    ],
    varient5: [
      "Asta CRDi",
      "1186 cc, Manual, Diesel, 26.2 kmpl",
      "Rs.8.50 Lakh*",
    ],
  };
  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Diesel (1956 cc)", "Automatic", "20.65 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: The Grand i10 Nios’s prices have been increased by up to Rs 15,000. Hyundai Grand i10 Nios Price: Hyundai retails the Grand i10 Nios between Rs 5.28 lakh and Rs 8.50 lakh (ex-showroom Delhi). Hyundai Grand i10 Nios Variants: Hyundai offers the hatchback in four trims: Era, Magna, Sportz, and Asta. Hyundai Grand i10 Nios Engine and Transmission: It is powered by both petrol and diesel engines. Both 1.2-litre petrol (83PS/114Nm) and 1.2-litre diesel motors (75PS/190Nm) are coupled with either a 5-speed MT or AMT. Hyundai also offers the Aura’s 1.0-litre turbo-petrol engine (100PS/172Nm) on the Grand i10 Nios. It even provides a CNG kit on the Magna and Sportz variants, mated to the 5-speed manual gearbox. Hyundai Grand i10 Nios Features: The Grand i10 Nios comes with an 8-inch touchscreen infotainment system with Android Auto and Apple CarPlay, a wireless charger, auto AC with rear AC vent, keyless entry, and a height-adjustable driver seat. Hyundai Grand i10 Nios Safety: Standard safety features include rear parking sensors, dual front airbags, and ABS with EBD. Hyundai Grand i10 Nios Rivals: It rivals the Maruti Suzuki Swift, Ford Freestyle, and Ford Figo. If you want a 7-seater model in the same price range, you can check out the Renault Triber.",
  ];

  const ProsCons = {
    pros: [
      "Build quality. Doesn't feel too far off from an i20!",
      "Space. Generous amount of kneeroom and headroom for rear seat occupants.",
      "Well equipped: 8 touchscreen, wireless charging, projector headlamps and foglamps- you name it!",
    ],
    cons: [
      "Strict four-seater, seating five will be a stretch.",
      "Diesel engine not as refined as earlier.",
      "Diesel variants limited to just three. Sportz variant, for example, is AMT only.",
    ],
  };

  const Colorss = {
    color1: ["Fiery Red Dual Tone", "bg-red-800"],
    color2: ["Aqua Teal Dual Tone", "bg-gray-900"],
    color3: ["Fiery Red", "bg-gray-600"],
    color4: ["Typhoon Silver", "bg-white"],
    color5: ["Polar White Dual Tone", "bg-blue-800"],
    color6: ["Polar White", "bg-red-400"],
    color7: ["Titan Grey", "bg-red-400"],
    color8: ["Aqua Teal", "bg-red-400"],
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
      "6 Airbags",
      "",
    ],
  };

  const faqs = {
    question1: [
      "What is the on road price of Grand i10 Nios?",
      "The on-road price of Grand i10 Nios in Delhi starts at ‎₹ 5.91 Lakh and goes upto ‎₹ 9.75 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Grand i10 Nios and Swift?",
      "Grand i10 Nios price starts at ₹ 5.28 Lakh ex-showroom and It comes with 1197 cc engine. Whereas Swift price starts at ₹ 5.81 Lakh ex-showroom and It comes with 1197 cc engine.",
    ],
    question3: [
      "What is the mileage of Hyundai Grand i10 Nios?",
      "The Hyundai Grand i10 Nios mileage is 18.9 - 25 kmpl.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41564/hyundai-creta-right-front-three-quarter9.jpeg?q=85",
      "Creta",
      "₹ 10.15 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/35455/venue-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Venue",
      "₹ 6.99 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40530/i20-exterior-right-front-three-quarter-5.jpeg?q=85",
      "i20",
      "₹ 6.91 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/35465/grand-i10-nios-exterior-right-front-three-quarter-2.jpeg?q=85",
      "i10 Nios",
      "₹ 5.28 Lakh onwards",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41197/hyundai-verna-right-front-three-quarter7.jpeg?q=85",
      "Verna",
      "₹ 9.28 Lakh onwards",
    ],
    car6: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40530/i20-exterior-right-front-three-quarter-5.jpeg?q=85",
      "i20",
      "₹ 6.91 Lakh onwards",
    ],
    car7: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=85",
      "Aura",
      "₹ 6.00 Lakh onwards",
    ],
    car8: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32940/santro-exterior-right-front-three-quarter-138782.jpeg?q=85",
      "Santro",
      "₹ 4.77 Lakh onwards",
    ],
    car9: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/46812/alcazar-exterior-right-front-three-quarter.jpeg?q=85",
      "Alcazar",
      "₹ 16.30 Lakh onwards",
    ],
    car10: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41138/elantra-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Elantra",
      "₹ 17.86 Lakh onwards",
    ],
    car11: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/29580/Hyundai-Kona-Electric-Right-Front-Three-Quarter-162185.jpg?wm=0&q=85",
      "Kona Electric",
      "₹ 23.79 Lakh onwards",
    ],
    car12: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39082/tucson-exterior-right-front-three-quarter.jpeg?q=85",
      "Tucson",
      "₹ 22.69 Lakh onwards",
    ],
  };

  const UpcommingCarBrand = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/100121/exterior-right-front-three-quarter.jpeg?isig=0&q=85",
      "i20 N Line",
      "₹ 11.00 - 13.00 Lakh",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/51891/ax1-micro-suv-exterior-left-front-three-quarter.jpeg?q=85",
      "AX1 micro-SUV",
      "₹ 4.00 - 7.00 Lakh",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/49892/new-kona-exterior-front-view.jpeg?q=85",
      "New Kona",
      "₹ 23.00 - 25.00 Lakh",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47331/hyundai-new-elantra-left-side-view0.jpeg?q=85",
      "New Elantra",
      "₹ 16.00 - 20.00 Lakh",
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
  return OneCarAllSpecs("i10").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
