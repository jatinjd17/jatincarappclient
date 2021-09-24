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
import { Elantra } from "../../../CarPicsUrl/CarPics";
import { TElantra } from "../../../CarPicsUrl/Thumbnails";
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
import {
  OctaviaBasicInfoCard,
  SuperbBasicInfoCard,
} from "../../../AllCarBasicInfo/skoda";

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
  // const CarPrice = "₹ 17.86 Lakh";
  // const TopPic = Elantra;
  // const CarName = "Hyundai Elantra";
  // const OnlyName = "Elantra";
  // const ThumPic = TElantra;

  // const KeySpecification = [
  //   "₹ 17.86 Lakh onwards",
  //   "14.59 - 14.62 kmpl",
  //   "1493 to 1999 cc",
  //   "Manual, Automatic",
  //   "Petrol & Diesel",
  //   "5 Seater",
  //   "4,620 mm L x 1,800 mm W x 1,465 mm H",
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
  //   varient1: [
  //     "VTVT SX",
  //     "1999 cc, Manual, Petrol, 14.59 kmpl",
  //     "Rs.17.86 Lakh*",
  //   ],

  //   varient2: [
  //     "VTVT SX AT",
  //     "1999 cc, Automatic, Petrol, 14.62 kmpl",
  //     "Rs.18.89 Lakh*",
  //   ],
  //   varient3: [
  //     "VTVT SX Option AT",
  //     "1999 cc, Automatic, Petrol, 14.62 kmpl",
  //     "s.20.11 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {
  //   varient1: [
  //     "CRDi SX",
  //     "1493 cc, Manual, Diesel, 14.59 kmpl",
  //     "Rs.18.88 Lakh*",
  //   ],

  //   varient2: [
  //     "CRDi SX Option AT",
  //     "1493 cc, Automatic, Diesel, 14.62 kmpl",
  //     "Rs.21.13 Lakh*",
  //   ],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Diesel (1956 cc)", "Automatic", "20.65 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: Hyundai has increased the prices of the Elantra by up to Rs 15,000. Hyundai Elantra Price: The sedan is priced between Rs 17.85 lakh and Rs 21.12 lakh (ex-showroom Delhi). Hyundai Elantra Variants: It is available in two variants: SX and SX(O).  Hyundai Elantra Powertrain: It comes with a 2.0-litre petrol engine (152PS/192Nm), mated to a 6-speed manual or automatic transmission. The diesel Elantra is powered by the second-gen Hyundai Creta’s 1.5-litre unit (115PS/250Nm) and shares its transmission options with its petrol counterpart. Hyundai Elantra Features: The Elantra comes with an 8-inch touchscreen infotainment system with Android Auto and Apple CarPlay, dual-zone climate control, a sunroof, wireless charging, connected car tech, and Infinity sound system. Hyundai Elantra Safety: Safety features on offer include six airbags, electronic stability control, and front and rear parking sensors. Hyundai Elantra Rivals: It goes up against the Honda Civic and the upcoming new-gen Skoda Octavia. Hyundai Elantra 2021: Hyundai is expected to launch the next-gen Elantra in India in the second half of 2021.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Wonderfully balanced ride quality. Super comfortable in the city.",
  //     "Engine-transmission combination is well tuned. Offers a smooth, hassle free drive on all fronts.",
  //     "Convenience features like ventilated seats and wireless charger are a must have in today’s conditions.",
  //   ],
  //   cons: [
  //     "Looks are polarizing. Use of triangles on an otherwise curvy design feels a mismatch.",
  //     "The exteriors have been modernised but the interiors still feel old-school.",
  //     "Missing features like an auto day/night IRVM, electronic boot and fuel cap release and one-touch power windows for the passengers takes back from the premium experience",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Fiery Red", "bg-red-800"],
  //   color2: ["Typhoon Silver", "bg-gray-900"],
  //   color3: ["Phantom Black", "bg-gray-600"],
  //   color4: ["Marine Blue", "bg-white"],
  //   color5: ["Polar White", "bg-blue-800"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "Rs.31.99 - 34.99 Lakh",
  //     "15.1 kmpl",
  //     "1984 cc",
  //     "Automatic",
  //     "Petrol",
  //     "5 Seater",
  //     "4,869 mm L x 1,864 mm W x 1,469 mm H",
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Superb/6764/1592459454448/front-left-side-47.jpg",
  //   ],
  //   comparisioncar2: [
  //     "₹ 26.01 Lakh onwards",
  //     "15.81 kmpl",
  //     "1984 cc",
  //     "Automatic",
  //     "Petrol",
  //     "5 Seater",
  //     "4,689 mm L x 1,469 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/40371/octavia-exterior-right-front-three-quarter-2.jpeg?q=85",
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
  //     "What is the on road price of Elantra?",
  //     "The on-road price of Elantra in Delhi starts at ‎₹ 20.81 Lakh and goes upto ‎₹ 25.07 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Elantra and Octavia?",
  //     "Elantra price starts at ₹ 17.86 Lakh ex-showroom and It comes with 1999 cc engine. Whereas Octavia price starts at ₹ 26.01 Lakh ex-showroom and It comes with 1984 cc engine ",
  //   ],
  //   question3: [
  //     "What is the mileage of Hyundai Elantra?",
  //     "The Hyundai Elantra mileage is 15 - 17.32 kmpl.",
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
    car1: SuperbBasicInfoCard,
    car2: OctaviaBasicInfoCard,
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
        LinkCarName="elantra"
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
  return OneCarAllSpecs("elantra").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
