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
import { Safari } from "../../../CarPicsUrl/CarPics";
import { TSafari } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";
import {
  NexonBasicInfoCard,
  AltrozBasicInfoCard,
  SafariBasicInfoCard,
  HarrierBasicInfoCard,
  TiagoBasicInfoCard,
  TigorBasicInfoCard,
  NexonEVBasicInfoCard,
  TigorEVBasicInfoCard,
  TiagoNRGBasicInfoCard,
} from "../../../AllCarBasicInfo/tata";

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

  // const CompanyName = "Tata";
  // const CarPrice = "₹ 14.99 Lakh";
  // const TopPic = Safari;
  // const CarName = "Tata Safari";
  // const OnlyName = "Safari";
  // const ThumPic = TSafari;

  // const KeySpecification = [
  //   "₹ 14.99 Lakh onwards",
  //   "14.08 to 16.14 kmpl",
  //   "1956 cc",
  //   "Manual & Automatic (Torque Converter)",
  //   "Diesel",
  //   "7 Seater",
  //   "4,661 mm L x 1,894 mm W x 1,786 mm H",
  // ];

  // const SafetyFeatures = [
  //   "6 airbags",
  //   "ABS with EBD and CSC",
  //   "reverse parking sensors",
  //   "ISOFIX",
  //   "driver and co-driver seatbelt reminder",
  //   "high-speed alert system",
  //   "impact sensing auto door unlock.",
  // ];

  // const VarientPetrol = {};

  // const VarientDiesel = {
  //   varient1: ["XE", "1956  cc, Manual, Diesel, 16.14 kmpl", "Rs.14.99 Lakh*"],
  //   varient2: ["XM", "1956  cc, Manual, Diesel, 16.14 kmpl", "Rs.16.36 Lakh*"],
  //   varient3: ["XT", "1956 cc, Manual, Diesel, 16.14 kmpl", "Rs.17.61 Lakh*"],
  //   varient4: [
  //     "XT Plus",
  //     "1956 cc, Manual, Diesel, Rs.18.61 Lakh*",
  //     "Rs.17.81 Lakh*",
  //   ],
  //   varient5: ["XZ", "1956  cc, Manual, Diesel, 16.14 kmpl", "Rs.19.51 Lakh*"],
  //   varient6: [
  //     "XZ Plus",
  //     "1956 cc, Manual, Diesel, 16.14 kmpl",
  //     "Rs.20.35 Lakh*",
  //   ],
  //   varient7: [
  //     "XZ Plus 6 Str",
  //     "1956 cc, Manual, Diesel, 16.14 kmpl",
  //     "Rs.20.37 Lakh*",
  //   ],
  //   varient8: [
  //     "XZ Plus Adventure Edition",
  //     "1956 cc, Manual, Diesel, 16.14 kmpl",
  //     "Rs.20.56 Lakh*",
  //   ],
  //   varient9: [
  //     "XZ Plus 6 Str Adventure Edition",
  //     "1956 cc, Manual, Diesel, 16.14 kmpl",
  //     "Rs.20.58 Lakh*",
  //   ],
  //   varient10: [
  //     "XZA AT",
  //     "1956 cc, Automatic, Diesel, 14.08 kmpl",
  //     "Rs.20.76 Lakh*",
  //   ],
  //   varient11: [
  //     "XZA Plus AT",
  //     "1956 cc, Automatic, Diesel, 14.08 kmpl",
  //     "Rs.21.61 Lakh*",
  //   ],
  //   varient12: [
  //     "XZA Plus 6 Str AT",
  //     "1956 cc, Automatic, Diesel, 14.08 kmpl",
  //     "Rs.21.65 Lakh*",
  //   ],
  //   varient13: [
  //     "XZA Plus Adventure Edition AT",
  //     "1956 cc, Automatic, Diesel, 14.08 kmpl",
  //     "Rs.21.81 Lakh*",
  //   ],
  //   varient14: [
  //     "XZA Plus 6Str Adventure Edition AT",
  //     "1956 cc, Automatic, Diesel, 14.08 kmpl",
  //     "Rs.21.86 Lakh*",
  //   ],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "21.01 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: Tata has rolled out the 10,000th Safari from its Pune facility. Tata Safari Price: The SUV is priced from Rs 14.99 lakh to Rs 21.81 lakh (ex-showroom). Tata Safari Variants: It is sold in six trims: XE, XM, XT, XT+, XZ, and XZ+. Tata Safari Seating Capacity: The Safari is available in both 6- and 7-seater configurations. The former gets the choice of captain seats in the top-spec variant. Tata Safari Engine and Transmission: It is powered by the Harrier’s 2.0-litre diesel engine (170PS/350Nm), paired with a 6-speed manual and an optional 6-speed automatic. Going forward, Tata could also provide the SUV with a 1.5-litre turbo-petrol unit and an AWD.  Tata Safari Features: The Safari gets an 8.8-inch touchscreen infotainment system, iRA connected car tech, a 9-speaker JBL sound system, a panoramic sunroof, and a 6-way powered driver seat. It also gets cruise control, auto AC with the second and third-row vents, mood lighting, tyre pressure monitoring, and premium leatherette upholstery (for the dual-tone cabin). Tata Safari Safety: The new Safari gets disc brakes all around, an electronic parking brake with auto hold, traction control, up to six airbags, rollover mitigation, and corner stability control. Tata Safari Rivals: It rivals the Mahindra XUV500, MG Hector Plus, Hyundai Alcazar, and the Mahindra XUV700.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Comfortable and spacious seating for 7",
  //     "Impressive ride comfort",
  //     "Cabin feels premium",
  //   ],
  //   cons: [
  //     "Missing some modern day features",
  //     "White upholstery gets dirty easily",
  //     "Captain seats are narrow",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Royal Blue", "bg-blue-800"],
  //   color2: ["Daytona Grey", "bg-gray-700"],
  //   color3: ["Orcus White", "bg-white-600"],
  //   color4: ["Tropical Mist", "bg-blue-200"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 14.30 Lakh Onwards",
  //     "14.63 to 16.35 kmpl",
  //     "1956 cc",
  //     "Manual & Automatic (Torque Converter)",
  //     "Diesel",
  //     "5 Seater",
  //     "4,598 mm L x 1,894 mm W x 1,706 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/32958/tata-harrier-right-front-three-quarter58.jpeg?q=85",
  //   ],
  //   comparisioncar2: [
  //     "₹ 13.18 Lakh onwards",
  //     "13.96 to 17.41 kmpl",
  //     "1451 to 1956 cc",
  //     "Manual & Automatic",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "4655 mm in length, 1835 mm in width and 1760 mm in height",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/52565/hector-exterior-right-front-three-quarter-3.jpeg?q=85",
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
  //     "What is the on road price of Safari?",
  //     "The on-road price of Safari in Delhi starts at ‎₹ 18.06 Lakh and goes upto ‎₹ 26.34 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Safari and Harrier?",
  //     "Safari price starts at ₹ 14.99 Lakh ex-showroom and It comes with 1956 cc engine. Whereas Harrier price starts at ₹ 14.39 Lakh ex-showroom and It comes with 1956 cc engine.",
  //   ],
  //   question3: [
  //     "What is the mileage of Tata Safari?",
  //     "The Tata Safari mileage is 14.08 - 16.14 kmpl.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32958/tata-harrier-right-front-three-quarter58.jpeg?q=85",
      "Harrier",
      "₹ 14.30 Lakh Onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/52565/hector-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Hector",
      "₹ 13.18 Lakh onwards0",
    ],
    car3: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/6775/1584360708758/front-left-side-47.jpg?tr=w-456",
      "Creta",
      "Rs.10.16 Lakh onwards",
    ],
  };

  const ThatBrandCars = {
    car1: NexonBasicInfoCard,
    car2: AltrozBasicInfoCard,
    car3: SafariBasicInfoCard,
    car4: HarrierBasicInfoCard,
    car5: TiagoBasicInfoCard,
    car6: TigorBasicInfoCard,
    car7: NexonEVBasicInfoCard,
    car8: TigorEVBasicInfoCard,
    car9: TiagoNRGBasicInfoCard,
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/39015/Tata-H2X-Exterior-170093.jpg?wm=0&q=85",
  //     "HBX",
  //     "₹ 5.00 - 8.00 Lakh",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/40453/Tata-Tiago-EV-Exterior-169932.jpg?wm=0&q=85",
  //     "Tiago EV",
  //     "₹ 5.00 - 7.00 Lakh",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/46800/tata-altroz-ev-left-side-view5.jpeg?q=85",
  //     "Altroz EV",
  //     "₹ 12.00 - 15.00 Lakh",
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
        LinkCarName="safari"
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
  return OneCarAllSpecs("safari").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
