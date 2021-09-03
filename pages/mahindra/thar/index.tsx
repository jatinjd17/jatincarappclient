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
import { Thar } from "../../../CarPicsUrl/CarPics";
import { TThar } from "../../../CarPicsUrl/Thumbnails";
import Meta from "../../../Components/metaSEO";

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

  // const CompanyName = "Mahindra";
  // const CarPrice = "₹ 12.78 Lakh";
  // const TopPic = Thar;
  // const CarName = "Mahindra Thar";
  // const OnlyName = "Thar";
  // const ThumPic = TThar;

  // const KeySpecification = [
  //   "₹ 12.78 Lakh onwards",
  //   "15 kmpl",
  //   "1997 to 2184 cc",
  //   "Manual & Automatic (Torque Converter)",
  //   "Petrol & Diesel",
  //   "4 Seater",
  //   "3,985 mm L x 1,820-1,855 mm W x 1,844-1,896 mm H",
  // ];

  // const SafetyFeatures = [
  //   "Dual airbags",

  //   "Rear parking sensors",

  //   "Seatbelt reminders for the driver and front passenger",

  //   "A speed warning system (at 80kmph and 120kmph)",

  //   "A manual override for the central locking system",
  // ];

  // const VarientPetrol = {
  //   varient1: [
  //     "AX Opt 4-Str Convert Top",
  //     "1997 cc, Manual, Petrol, 15.2 kmpl",
  //     "Rs.12.78 Lakh*",
  //   ],
  //   varient2: [
  //     "LX 4-Str Hard Top",
  //     "1997 cc, Manual, Petrol, 15.2 kmpl",
  //     "Rs.13.38 Lakh*",
  //   ],
  //   varient3: [
  //     "LX 4-Str Convert Top AT",
  //     "1997 cc, Automatic, Petrol, 15.2 kmpl",
  //     "Rs.14.78 Lakh*",
  //   ],
  //   varient4: [
  //     "LX 4-Str Hard Top AT",
  //     "1997 cc, Automatic, Petrol, 15.2 kmpl",
  //     "Rs.14.88 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {
  //   varient1: [
  //     "AX Opt 4-Str Convert Top Diesel",
  //     "2184 cc, Manual, Diesel, 15.2 kmpl",
  //     "Rs.12.98 Lakh*",
  //   ],

  //   varient2: [
  //     "AX Opt 4-Str Hard Top Diesel",
  //     "2184 cc, Manual, Diesel, 15.2 kmpl",
  //     "Rs.13.08 Lakh*",
  //   ],

  //   varient3: [
  //     "LX 4-Str Convert Top Diesel",
  //     "2184 cc, Manual, Diesel, 15.2 kmpl",
  //     "Rs.13.58 Lakh*",
  //   ],

  //   varient4: [
  //     "LX 4-Str Hard Top Diesel",
  //     "2184 cc, Manual, Diesel, 15.2 kmpl",
  //     "Rs.13.68 Lakh*",
  //   ],

  //   varient5: [
  //     "LX 4-Str Convert Top Diesel AT",
  //     "2184 cc, Automatic, Diesel, 15.2 kmpl",
  //     "Rs.14.98 Lakh*",
  //   ],

  //   varient6: [
  //     "LX 4-Str Hard Top Diesel AT",
  //     "2184 cc, Automatic, Diesel, 15.2 kmpl",
  //     "Rs.15.08 Lakh*",
  //   ],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "23.26 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: Mahindra has hiked the prices of the Thar by up to Rs 92,000. Mahindra Thar Price: The SUV is now priced from Rs 12.78 lakh to Rs 15.08 lakh (ex-showroom). Mahindra Thar Variants: It is sold in two trims: AX(O) and LX. Mahindra Thar Engine and Transmission: The Thar comes with both petrol and diesel engines. While the petrol engine is a new 2.0-litre turbocharged unit (150PS/up to 320Nm), the diesel engine is a 2.2-litre unit (130PS/300Nm). Both get a 6-speed manual as standard and an optional 6-speed automatic. A 4x4 drivetrain is standard for both powertrains. Mahindra Thar Features: It gets cruise control, a 7-inch touchscreen infotainment system with Android Auto and Apple CarPlay, halogen headlamps with LED DRLs, electrically operated AC, steering-mounted controls, and a digital MID in the instrument cluster. The SUV comes with a washable interior and removable roof panels. Mahindra Thar Safety: It is equipped with dual front airbags, ABS with EBD, rear parking sensors, and front seatbelt reminder as standard. Mahindra Thar Rivals: The Thar’s only direct rival will be the upcoming 2021 Force Gurkha and 2022 Maruti Suzuki Jimny, but it also takes on similarly priced compact SUVs, such as the Hyundai Creta, Kia Seltos, Renault Duster, and Nissan Kicks.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Attention grabbing design. Looks macho and has stronger road presence than ever before.",
  //     "Available with petrol and diesel engines with a choice of 6-speed manual or automatic transmissions for both.",
  //     "Design better suited for off-roading than before. Big improvements in departure angle, breakover angle and ground clearance.",
  //   ],
  //   cons: [
  //     "Stiff ride quality. Deals with bad roads well but sharp bumps can unsettle the cabin quite easily",
  //     "Old school ladder frame SUV and behaves like one. Loads of body roll even on mild curves",
  //     "Some cabin flaws: Rear windows aren’t openable, pedal box leaves no proper space to rest your left foot even in the automatic & thick B pillars create large blind spots to the side",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Galaxy Grey", "bg-blue-600"],
  //   color2: ["Aquamarine", "bg-gray-400"],
  //   color3: ["Rocky Beige", "bg-gray-400"],
  //   color4: ["Mystic Copper", "bg-gray-400"],
  //   color5: ["Red Rage", "bg-gray-400"],
  //   color6: ["Napoli Black", "bg-gray-400"],
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
  //     "What is the on road price of Thar?",
  //     "The on-road price of Thar in Delhi starts at ‎₹ 15.23 Lakh and goes upto ‎₹ 18.28 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Thar and Wrangler?",
  //     "Thar price starts at ₹ 12.78 Lakh ex-showroom and It comes with 1997 cc engine. Whereas Wrangler price starts at ₹ 53.90 Lakh ex-showroom and It comes with 1998 cc engine.",
  //   ],
  //   question3: [
  //     "What is price of Thar top model?",
  //     "Top model of Thar is LX 4-STR Hard Top Diesel AT and the ex-showroom for Thar LX 4-STR Hard Top Diesel AT is ₹ 15.08 Lakh.",
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

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-left-front-three-quarter.jpeg?isig=0&q=85",
  //     "XUV 700",
  //     "₹ 13.00 - 20.00 Lakh",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/41157/Mahindra-TUV300-Plus-Facelift-Exterior-163347.jpg?wm=0&q=85",
  //     "TUV 300 Plus",
  //     "₹ 10.00 - 12.00 Lakh",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/33297/Mahindra-e20-NXT-Exterior-120569.jpg?wm=0&q=85",
  //     "e20 NXT",
  //     "₹ 6.00 - 8.00 Lakh",
  //   ],
  //   car4: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/42453/Mahindra-S204-Exterior-171413.jpg?wm=0&q=85",
  //     "Mahindra S204",
  //     "₹ 11.00 - 15.00 Lakh",
  //   ],
  //   car5: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/45278/mahindra-exuv300-left-side-view0.jpeg?q=85",
  //     "eXUV300",
  //     "₹ 14.00 - 16.00 Lakh",
  //   ],
  //   car6: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/40432/Mahindra-New-Scorpio-Exterior-159617.jpg?wm=0&q=85",
  //     "New Scorpio",
  //     "₹ 10.00 - 14.00 Lakh",
  //   ],
  //   car7: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/33261/Mahindra-eKUV100-Exterior-170053.jpg?wm=0&q=85",
  //     "eKUV100",
  //     "₹ 8.00 - 9.00 Lakh",
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
        LinkCarName="thar"
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
  return OneCarAllSpecs("thar").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
