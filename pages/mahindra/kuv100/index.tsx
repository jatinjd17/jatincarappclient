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
import { Kuv100 } from "../../../CarPicsUrl/CarPics";

function Homee({ joy }) {
  const CompanyName = "Mahindra";
  const CarPrice = "₹ 6.10 Lakh";
  const TopPic = Kuv100;
  const CarName = "Mahindra KUV 100 NXT";
  const OnlyName = "KUV 100 NXT";

  const KeySpecification = [
    "₹ 6.10 Lakh onwards",
    "18.1 kmpl",
    "1198 cc",
    "Manual",
    "Petrol",
    "4 Seater",
    "3,700 mm L x 1,735 mm W x 1,655 mm H",
  ];

  const SafetyFeatures = [
    "A driver’s side airbag",

    "Rear parking sensors",

    "Seatbelt reminders for the driver and front passenger",

    "A speed warning system (at 80kmph and 120kmph)",

    "A manual override for the central locking system",
  ];

  const VarientPetrol = {
    varient1: [
      "G80 K2 Plus 6 Str",
      "1198 cc, Manual, Petrol, 18.1 kmpl",
      "Rs.6.08 Lakh*",
    ],
    varient2: [
      "G80 K4 Plus 6Str",
      "1198 cc, Manual, Petrol, 18.1 kmpl",
      "Rs.6.57 Lakh*",
    ],
    varient3: [
      "G80 K6 Plus 6Str",
      "1198 cc, Manual, Petrol, 18.1 kmpl",
      "Rs.7.10 Lakh*",
    ],
    varient4: [
      "K8 6Str",
      "1198 cc, Manual, Petrol, 18.1 kmpl",
      "Rs.7.74 Lakh*",
    ],
  };

  const VarientDiesel = {};

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "23.26 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: The prices of the KUV100 NXT have been increased by Rs 3,000. Mahindra KUV100 NXT Price: Mahindra retails it from Rs 6.08 lakh to Rs 7.82 lakh (ex-showroom Delhi). Mahindra KUV100 NXT Variants: It is sold in four trims: K2+, K4+, K6+, and K8. Mahindra KUV100 NXT Seating Capacity: The KUV100 NXT comes in both 5- and 6-seater layouts. Mahindra KUV100 NXT Engine and Transmission: It gets a 1.2-litre petrol engine (82PS/115Nm), paired to a 5-speed manual gearbox. Mahindra KUV100 NXT Features: The KUV100 NXT comes with a 7-inch touchscreen infotainment system with Bluetooth and AUX connectivity, steering-mounted audio and calling controls, and a height-adjustable driver’s seat. Mahindra KUV100 NXT Safety: Standard safety features include dual front airbags, ABS with EBD, and rear parking sensors. Mahindra KUV100 NXT Rivals: It goes up against the Maruti Ignis and Swift, Hyundai Grand i10 Nios, and Ford Figo",
  ];

  const ProsCons = {
    pros: [
      "Feature loaded: Daytime running lights, chilled glovebox, 7.0-inch touchscreen infotainment system with steering mounted controls and ambient lights, etc.",
      "Space. Headroom and legroom at the rear are generous.",
      "Safety features. All variants get ABS with EBD as standard. Dual front airbags on all variants except the base K2.",
    ],
    cons: [
      "Not a real 6-seater. Front middle seat is cramped and unsafe to use.",
      "Looks. While better than, it may still come across a bit too quirky for some buyers.",
      "Average handling and noise insulation. Competitors like the Grand i10 and Ignis are better in these aspects",
    ],
  };

  const Colorss = {
    color1: ["Dazzling Silver & Metallic Black", "bg-blue-600"],
    color2: ["Designer Grey", "bg-gray-400"],
    color3: ["Flamboyant Red & Metallic Black", "bg-gray-400"],
    color4: ["Flamboyant Red", "bg-gray-400"],
    color5: ["Fiery Orange", "bg-gray-400"],
    color6: ["Polar White", "bg-gray-400"],
    color7: ["Midnight black", "bg-gray-400"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 3.32 Lakh onwards",
      "25 kmpl",
      "799 to 1000 cc",
      "Manual, Automatic",
      "Petrol",
      "4 Seater",
      "3731mm-L 1579mm-W 1490mm-H mm 2422mm-WheelBase",
      "https://i.ibb.co/C63SXxn/Kwid.jpg",
    ],
    comparisioncar2: [
      "₹ 3.80 Lakh onwards",
      "22 kmpl",
      "799 to 999 cc",
      "Manual, Automatic",
      "Petrol",
      "4 Seater",
      "3435mm-L 1574mm-W 1546mm-H mm 2348mm-WB",
      "https://i.ibb.co/ZdN0MWM/Datsun-Redi-GO.jpg",
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
      "What is the on road price of KUV100 NXT?",
      "The on-road price of KUV100 NXT in Delhi starts at ‎₹ 6.88 Lakh and goes upto ‎₹ 8.88 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between KUV100 NXT and Kiger?",
      "KUV100 NXT price starts at ₹ 6.10 Lakh ex-showroom and It comes with 1198 cc engine. Whereas Kiger price starts at ₹ 5.64 Lakh ex-showroom and It comes with 999 cc engine.",
    ],
    question3: [
      "What is price of KUV100 NXT top model?",
      "Top model of KUV100 NXT is K8 6 STR and the ex-showroom for KUV100 NXT K8 6 STR is ₹ 7.76 Lakh.",
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
      "https://i.ibb.co/C63SXxn/Kwid.jpg",
      "Renault Kwid",
      "₹ 3.32 Lakh onwards",
    ],
    car2: [
      "https://i.ibb.co/ZdN0MWM/Datsun-Redi-GO.jpg",
      "Datsun redi-go",
      "₹ 3.80 Lakh onwards0",
    ],
    car3: [
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201911/0G6A5935_1.png?LkCz.7ZUenqnJF.SOBjEMulD..iElUYe&size=770:433",
      "S-presso",
      "₹ 3.77 Lakh onwards",
    ],
    car4: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbWFsSvTTFc7n__WfN3PJOWp9iBEqMvmFzg&usqp=CAU",
      "Celario",
      "₹4.66 Lakhs onwards",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/31883/scorpio-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Scorpio",
      "₹ 12.66 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/34024/xuv500-exterior-right-front-three-quarter-3.jpeg?q=85",
      "XUV 500",
      "₹ 14.27 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45933/mahindra-bolero-right-front-three-quarter1.jpeg?q=85",
      "Bolero",
      "₹ 8.64 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/33266/alturas-g4-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Alturas G4",
      "₹ 28.77 Lakh onwards",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/21497/kuv100-nxt-exterior-right-front-three-quarter-64047.jpeg?q=85",
      "Kuv 100",
      "₹ 6.10 Lakh onwards",
    ],
    car6: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/49114/marazzo-exterior-right-front-three-quarter-4.jpeg?q=85",
      "Marazzo",
      "₹ 12.30 Lakh onwards",
    ],
    car7: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/thar-exterior-right-front-three-quarter-11.jpeg?q=85",
      "Thar",
      "₹ 12.78 Lakh onwards",
    ],
    car8: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/26918/xuv300-exterior-right-front-three-quarter-148706.jpeg?q=85",
      "Xuv 300",
      "₹ 7.96 Lakh onwards",
    ],
    car9: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/97853/bolero-neo-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Bolero Neo",
      "₹ 8.48 Lakh onwards",
    ],
  };

  const UpcommingCarBrand = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-left-front-three-quarter.jpeg?isig=0&q=85",
      "XUV 700",
      "₹ 13.00 - 20.00 Lakh",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/41157/Mahindra-TUV300-Plus-Facelift-Exterior-163347.jpg?wm=0&q=85",
      "TUV 300 Plus",
      "₹ 10.00 - 12.00 Lakh",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/33297/Mahindra-e20-NXT-Exterior-120569.jpg?wm=0&q=85",
      "e20 NXT",
      "₹ 6.00 - 8.00 Lakh",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/42453/Mahindra-S204-Exterior-171413.jpg?wm=0&q=85",
      "Mahindra S204",
      "₹ 11.00 - 15.00 Lakh",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45278/mahindra-exuv300-left-side-view0.jpeg?q=85",
      "eXUV300",
      "₹ 14.00 - 16.00 Lakh",
    ],
    car6: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/40432/Mahindra-New-Scorpio-Exterior-159617.jpg?wm=0&q=85",
      "New Scorpio",
      "₹ 10.00 - 14.00 Lakh",
    ],
    car7: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/33261/Mahindra-eKUV100-Exterior-170053.jpg?wm=0&q=85",
      "eKUV100",
      "₹ 8.00 - 9.00 Lakh",
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
            OnlyName="KUV100"
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
  return OneCarAllSpecs("kuv100").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
