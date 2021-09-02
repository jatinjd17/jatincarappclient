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
import { Kwid } from "../../../CarPicsUrl/CarPics";
import { TKwid } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";

function Homee({ joy }) {
  const CompanyName = "Renault";
  const CarPrice = "₹ 3.31 Lakh";
  const TopPic = Kwid;
  const CarName = "Renault Kwid";
  const OnlyName = "Kwid";
  const ThumPic = TKwid;

  const KeySpecification = [
    "₹ 3.31 Lakh onwards",
    "22 to 25 kmpl",
    "799 to 999 cc",
    "Manual & AMT",
    "Petrol",
    "4 Seater",
    "3,731 mm L x 1,579 mm W x 1,474-1,490 mm H",
  ];

  const SafetyFeatures = [
    "dual airbags.",
    "reverse parking sensors.",
    "ABS and EBD.",
    "seat belt reminder.",
  ];

  const VarientPetrol = {
    varient1: ["STD", "799 cc, Manual, Petrol, 22.3 kmpl", "Rs.5.64 Lakh*"],
    varient2: ["RXE", "799 cc, Manual, Petrol, 22.3 kmpl", "Rs.5.84 Lakh*"],
    varient3: ["RXL", "799 cc, Manual, Petrol, 22.3 kmpl", "Rs.6.54 Lakh*"],
    varient4: [
      "Neotech",
      "999 cc, Manual, Petrol, 21.74 kmpl",
      "Rs.6.74 Lakh*",
    ],
    varient5: [
      "1.0 RXL",
      "999 cc, Manual, Petrol, 21.74 kmpl",
      "Rs.7.02 Lakh*",
    ],
    varient6: [
      "1.0 Neotech",
      "999 cc, Manual, Petrol, 21.74 kmpl",
      "Rs.7.04 Lakh*",
    ],
    varient7: ["RXT", "999 cc, Manual, Petrol, 21.74 kmpl", "Rs.7.22 Lakh*"],
    varient8: [
      "1.0 RXT Opt",
      "999 cc, Manual, Petrol, 21.74 kmpl",
      "Rs.7.24 Lakh*",
    ],
    varient9: [
      "1.0 RXL AMT",
      "999 cc, Automatic, Petrol, 22.0 kmpl",
      "Rs.7.37 Lakh*",
    ],
    varient10: [
      "1.0 Neotech AMT",
      "999 cc, Automatic, Petrol, 22.0 kmpl",
      "Rs.7.52 Lakh*",
    ],
    varient11: [
      "Climber 1.0 MT Opt",
      "999 cc, Manual, Petrol, 21.74 kmpl",
      "Rs.7.64 Lakh*",
    ],
    varient12: [
      "1.0 RXT AMT Opt",
      "999 cc, Automatic, Petrol, 22.0 kmpl",
      "Rs.7.72 Lakh*",
    ],

    varient13: [
      "Climber 1.0 AMT Opt",
      "999 cc, Automatic, Petrol, 22.0 kmpl",
      "Rs.7.84 Lakh*",
    ],
  };

  const VarientDiesel = {};

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (999 cc)", "Automatic (Dual Clutch)", "16.42 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: The Kwid is carrying offers of up to Rs 52,000 this July. Renault Kwid Price: Renault has priced the Kwid from Rs 3.32 lakh to Rs 5.48 lakh (ex-showroom Delhi). Renault Kwid Variants: It is available in five trims: STD, RXE, RXL, RXT, and Climber. Renault Kwid Powertrain: Renault offers the Kwid with two petrol engines: a 0.8-litre (54PS/72Nm) and a 1.0-litre (68PS/91Nm). While the former is mated to only a 5-speed manual, the latter gets both 5-speed MT and 5-speed AMT. Renault Kwid Features: It comes with keyless entry, a reverse-parking camera, manual AC, an 8-inch touchscreen infotainment system with Apple CarPlay and Android Auto, and a 12V charger for rear passengers. Renault Kwid Safety: Standard safety features include rear parking sensors, a driver-side airbag, and ABS with EBD. Renault Kwid Rivals: The Kwid locks horns with the Maruti Suzuki Alto, Maruti Suzuki S-Presso, and Datsun redi-GO.",
  ];

  const ProsCons = {
    pros: [
      "Looks better than the rivals",
      "Ride quality is ideal for Indian roads",
      "Loaded with segment above features",
    ],
    cons: [
      "Engine is not the most refined in the segment",
      "AMT transmission is slow to shift",
      "Build and plastic quality should have been better",
    ],
  };

  const Colorss = {
    color1: ["Fiery Red", "bg-red-600"],
    color2: ["Moonlight Silver", "bg-gray-800"],
    color3: ["Ice Cool White", "bg-white-700"],
    color4: ["Outback Bronze", "bg-gray-300"],
    color5: ["Electric Blue", "bg-blue-800"],
    color6: ["Zanskar Blue", "bg-blue-800"],
    color7: ["Moonlight Silver Body with Zanskar Blue roof", "bg-gray-800"],
    color8: ["Zanskar Blue with Moonlight Silver roof", "bg-blue-800"],
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
      "What is the on road price of Kwid?",
      "The on-road price of Kwid in Delhi starts at ‎₹ 3.74 Lakh and goes upto ‎₹ 6.08 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Kwid and Alto?",
      "Kwid price starts at ₹ 3.31 Lakh ex-showroom and It comes with 799 cc engine. Whereas Alto price starts at ₹ 3.00 Lakh ex-showroom and It comes with 796 cc engine. Compare the two models to identify the best car for you.",
    ],
    question3: [
      "What is price of Kwid top model?",
      "Top model of Kwid is CLIMBER 1.0 AMT Opt and the ex-showroom for Kwid CLIMBER 1.0 AMT Opt is ₹ 5.47 Lakh.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/48543/kwid-exterior-right-front-three-quarter-17.jpeg?q=85",
      "Kwid",
      "₹ 3.31 Lakh",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39276/triber-exterior-right-front-three-quarter-168563.jpeg?q=85",
      "Triber",
      "₹ 5.49 Lakh",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/44407/kiger-exterior-right-front-three-quarter-12.jpeg?q=85",
      "Kiger",
      "₹ 5.64 Lakh",
    ],
    car4: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Duster/7704/1598257607089/front-left-side-47.jpg?tr=w-456",
      "Duster",
      "₹ 9.84 Lakh",
    ],
  };

  const UpcommingCarBrand = {
    car1: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Zoe/6278/1581400662093/front-left-side-47.jpg?tr=w-456",
      "Renault Zoe",
      "Rs.8.00 Lakh*",
    ],
    car2: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Renault-Kwid-EV/6214/1555414583232/front-left-side-47.jpg?tr=w-456",
      "Renault K-ZE",
      "Rs.10.00 Lakh*",
    ],
    car3: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Renault-Arkana/6573/front-left-side-47.jpg?tr=w-456",
      "Renault Arkana",
      "Rs.10.00 Lakh",
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
      <Meta
        CompanyName={CompanyName}
        OnlyName={OnlyName}
        LatestUpdate={LatestUpdate[0]}
        ImageUrl={ThumPic}
        LinkCarName="kwid"
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
  return OneCarAllSpecs("kwid").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
