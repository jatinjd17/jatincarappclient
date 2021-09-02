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
import { alcazer } from "../../../CarPicsUrl/CarPics";
import { TAlcazar } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";

function Homee({ joy }) {
  const CompanyName = "Hyundai";
  const CarPrice = "₹ 16.30 Lakh";
  const TopPic = alcazer;
  const CarName = "Hyundai Alcazar";
  const OnlyName = "Alcazar";
  const ThumPic = TAlcazar;

  const KeySpecification = [
    "₹ 16.30 Lakh onwards",
    "14.2 to 20.4 kmpl",
    "1493 to 1999 cc",
    "Manual & Automatic (Torque Converter)",
    "Petrol & Diesel",
    "6-7 Seater",
    "4,500 mm L x 1,790 mm W x 1,675 mm H",
  ];

  const SafetyFeatures = [
    "all-around disc brakes",
    "6 airbags",
    "ABS",
    "EBD",
    "ESC",
    "HSA",
    "TMPS",
    "auto-dimming IRVM",
    "rear defogger and wiper",
    "rear parking sensors",
    "rear parking camera",
    "ISOFIX child seat anchors.",
  ];

  const VarientPetrol = {
    varient1: [
      "Prestige 7-Seater",
      "1999 cc, Manual, Petrol, 14.5 kmpl",
      "	Rs.16.30 Lakh*",
    ],
    varient2: [
      "Prestige",
      "1999 cc, Manual, Petrol, 14.5 kmpl",
      "Rs.16.45 Lakh*",
    ],
    varient3: [
      "Prestige AT",
      "1999 cc, Automatic, Petrol, 14.2 kmpl",
      "Rs.17.93 Lakh*",
    ],
    varient4: [
      "Platinum 7-Seater",
      "1999 cc, Manual, Petrol, 14.5 kmpl",
      "Rs.18.22 Lakh*",
    ],

    varient5: [
      "Signature",
      "1999 cc, Manual, Petrol, 14.5 kmpl",
      "Rs.18.70 Lakh*",
    ],
    varient6: [
      "Signature Dual Tone",
      "1999 cc, Manual, Petrol, 14.5 kmpl",
      "Rs.18.85 Lakh*",
    ],
    varient7: [
      "Platinum AT",
      "1999 cc, Automatic, Petrol, 14.2 kmpl",
      "Rs.19.55 Lakh*",
    ],
    varient8: [
      "Signature AT",
      "1999 cc, Automatic, Petrol, 14.2 kmpl",
      "Rs.19.84 Lakh*",
    ],

    varient9: [
      "Signature Dual Tone AT",
      "1999 cc, Automatic, Petrol, 14.2 kmpl",
      "Rs.19.99 Lakh*",
    ],
  };

  const VarientDiesel = {
    varient1: [
      "Prestige 7-Seater Diesel",
      "1999 cc, Manual, Diesel, 20.4 kmpl",
      "Rs.16.53 Lakh*",
    ],

    varient2: [
      "Prestige Diesel",
      "1956 cc, Manual, Diesel, 20.4 kmpl",
      "Rs.16.68 Lakh*",
    ],

    varient3: [
      "Prestige 7-Seater Diesel AT",
      "1999 cc, Automatic, Diesel, 18.1 kmpl",
      "Rs.18.01 Lakh*",
    ],

    varient4: [
      "Platinum 7-Seater Diesel",
      "1956 cc, Manual, Diesel, 20.4 kmpl",
      "Rs.18.45 Lakh*",
    ],

    varient5: [
      "Signature Diesel",
      "1956 cc, Manual, Diesel, 20.4 kmpl",
      "Rs.18.93 Lakh*",
    ],

    varient6: [
      "Signature Dual Tone Diesel",
      "1999 cc, Manual, Diesel, 20.4 kmpl",
      "Rs.19.08 Lakh*",
    ],

    varient7: [
      "Platinum Diesel AT",
      "1956 cc, Automatic, Diesel, 18.1 kmpl",
      "Rs.19.78 Lakh*",
    ],

    varient8: [
      "Signature Diesel AT",
      "1956 cc, Automatic, Diesel, 18.1 kmpl",
      "Rs.19.99 Lakh*",
    ],

    varient9: [
      "Signature Dual Tone Diesel AT",
      "1956 cc, Automatic, Diesel, 18.1 kmpl",
      "Rs.20.14 Lakh*",
    ],
  };

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Diesel (1956 cc)", "Automatic", "20.65 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Hyundai has launched the Alcazar in India. Hyundai Alcazar Price: The SUV is priced from Rs 16.30 lakh to Rs 19.99 lakh (introductory ex-showroom). Hyundai Alcazar Variants: It is offered in eight variants: Prestige, Prestige (O), Platinum, Platinum (O), Signature, Signature (O), Signature Dual Tone, and Signature (O) Dual Tone. Hyundai Alcazar Seating Capacity: Hyundai’s three-row SUV comes in both 6 and 7-seater layouts. Hyundai Alcazar Powertrains: The Alcazar is equipped with two engines: a 2.0-litre petrol and a 1.5-litre diesel. The petrol engine is an uprated version of the Elantra and Tucson’s, producing 159PS and 191Nm here. The diesel is the same as the Creta, making 115PS and 250Nm. Both engines come with 6-speed manual and automatic transmissions. The Alcazar gets three drive modes (Eco, City, and Sport) and as many traction modes (snow, sand, and mud). Hyundai Alcazar Features: It features a 10.25-inch digital instrument cluster, a 10.25-inch touchscreen system, auto climate control, wireless charging, and cruise control. Hyundai has also provided the SUV with ventilated front seats, a 360-degree camera, a voice-controlled panoramic sunroof, and Hyundai’s BlueLink connected car tech. Hyundai Alcazar Safety: Safety kit includes up to six airbags, electronic stability control, and front and rear parking sensors. Hyundai Alcazar Rivals: The Alcazar goes up against the MG Hector Plus, Mahindra XUV500, Tata Safari, and the Mahindra XUV700.",
  ];

  const ProsCons = {
    pros: [
      "A 6/7-seater with city-friendly proportions. Feels just as easy as the Creta to drive in everyday conditions",
      "Captain seat option will be appreciated by chauffeur-driven owners",
      "Usable boot space even when fully-loaded",
      "Ride quality is well suited to Indian roads",
    ],
    cons: [
      "Third-row seat is usable but not ideal for adults. Best suited for kids or adults over short journeys",
      "No 7-seater petrol automatic, 7-seater diesel automatic limited to the base variant",
      "Doesn’t have the same road presence as price rivals like the Tata Safari, MG Hector Plus, and XUV500",
    ],
  };

  const Colorss = {
    color1: ["Typhoon Silver", "bg-red-800"],
    color2: ["Phantom Black", "bg-gray-900"],
    color3: ["Taiga Brown", "bg-gray-600"],
    color4: ["Polar White Dual Tone", "bg-white"],
    color5: ["Starry Night", "bg-blue-800"],
    color6: ["Titan Grey Dual Tone", "bg-red-400"],
    color7: ["Polar White", "bg-red-400"],
    color8: ["Titan Grey", "bg-red-400"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 13.63 Lakh onwards",
      "16.6 kmpl",
      "1451 to 1956 cc",
      "Manual, Automatic (Dual Clutch)",
      "Petrol, Diesel & Hybrid (Electric + Petrol)",
      "6-7 Seater",
      "4,720 mm L x 1,835 mm W x 1,760 mm H",
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Hector-Plus/7909/1594206680276/front-left-side-47.jpg?tr=w-456",
    ],
    comparisioncar2: [
      "₹ 14.99 Lakh onwards",
      "14.08 to 16.14 kmpl",
      "1956 cc",
      "Manual & Automatic (Torque Converter)",
      "Diesel",
      "7 Seater",
      "4,661 mm L x 1,894 mm W x 1,786 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40027/safari-exterior-right-front-three-quarter-2.jpeg?q=85",
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
      "What is the on road price of Alcazar?",
      "The on-road price of Alcazar in Delhi starts at ‎₹ 19.02 Lakh and goes upto ‎₹ 23.92 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Alcazar and Safari?",
      "Alcazar price starts at ₹ 16.30 Lakh ex-showroom and It comes with 1999 cc engine. Whereas Safari price starts at ₹ 14.99 Lakh ex-showroom and It comes with 1956 cc engine.",
    ],
    question3: [
      "What is the mileage of Hyundai Alcazar?",
      "The Hyundai Alcazar mileage is 14.2 - 20.4 kmpl.",
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
      <Meta
        CompanyName={CompanyName}
        OnlyName={OnlyName}
        LatestUpdate={LatestUpdate[0]}
        ImageUrl={ThumPic}
        LinkCarName="alcazar"
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
  return OneCarAllSpecs("alcazar").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
