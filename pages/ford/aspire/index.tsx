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
import { Aspire } from "../../../CarPicsUrl/CarPics";
import Meta from "../../../Components/metaSEO";
import { TAspire } from "../../../CarPicsUrl/Thumbnails";
import {
  AspireBasicInfoCard,
  EndeavourBasicInfoCard,
  FigoBasicInfoCard,
  FreestyleBasicInfoCard,
} from "../../../AllCarBasicInfo/ford";
import { AmazeBasicInfoCard } from "../../../AllCarBasicInfo/honda";
import { AuraBasicInfoCard } from "../../../AllCarBasicInfo/hyundai";
import { VentoBasicInfoCard } from "../../../AllCarBasicInfo/volkswagen";
import { RapidBasicInfoCard } from "../../../AllCarBasicInfo/skoda";
import { DzireBasicInfoCard } from "../../../AllCarBasicInfo/marutisuzuki";

function Homee({ joy }) {
  console.log(joy);
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

  const SimilarCars = {
    car1: AmazeBasicInfoCard,
    car2: AuraBasicInfoCard,
    car3: VentoBasicInfoCard,
    car4: RapidBasicInfoCard,
    car5: DzireBasicInfoCard,
  };

  const ThatBrandCars = {
    car1: AspireBasicInfoCard,
    car2: EndeavourBasicInfoCard,
    car3: FigoBasicInfoCard,
    car4: FreestyleBasicInfoCard,
  };

  // const ThatBrandCars = joy.ThatBrandCars;

  const UpcommingCarBrand = joy.UpcommingCarBrand;

  // const KeySpecification = [
  //   "₹ 7.28 Lakh onwards",
  //   "18.5 to 24.4 kmpl",
  //   "1194 to 1499 cc",
  //   "Manual",
  //   "Petrol & Diesel",
  //   "5 Seater",
  //   "3,995 mm L x 1,704 mm W x 1,525 mm H",
  // ];

  // const SafetyFeatures = [
  //   "Driver and Passenger Airbags.",
  //   "Rear Parking Camera and Sensors.",
  //   "ABS with EBD.",
  //   "Driver and Passenger Seatbelt Reminder.",
  //   "High-Speed Sensing Alert System.",
  //   "Side and Curtain Airbags.",
  //   "Door Ajar Warning.",
  //   "Perimeter Alarm.",
  // ];

  // const VarientPetrol = {
  //   varient1: [
  //     "Titanium",
  //     "1194 cc, Manual, Petrol, 18.5 kmpl",
  //     "Rs.7.28 Lakh*",
  //   ],
  //   varient2: [
  //     "Titanium Plus",
  //     "1194 cc, Manual, Petrol, 18.5 kmpl",
  //     "Rs.7.63 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {
  //   varient1: [
  //     "Titanium Diesel",
  //     "1194 cc, Manual AMT, Diesel, 24.4 kmpl",
  //     "Rs.8.38 Lakh*",
  //   ],
  //   varient2: [
  //     "Titanium Plus Diesel",
  //     "1194 cc, Manual, Diesel, 24.4 kmpl",
  //     "Rs.8.73 Lakh*",
  //   ],
  // };

  // const VarientCNG = {};

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "23.26 kmpl"],
  //   mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: Ford will soon offer the Aspire with the Figo’s reintroduced automatic gearbox. Ford Aspire Price: The Aspire is priced between Rs Rs 7.27 lakh and Rs 8.72 lakh (ex-showroom Delhi). Ford Aspire Variants: Ford offers the sub-4m sedan in two variants: Titanium and Titanium+. Ford Aspire Engine and Transmission: The sedan is powered by 1.2-litre petrol (96PS/119Nm) and 1.5-litre diesel (100PS/215Nm) engines. Both engines are only available with a 5-speed manual. Mileage figures are 18.5kmpl for petrol and 24.4kmpl for diesel.  Ford Aspire Features: It comes with auto headlamps, auto-dimming IRVM, rain-sensing wipers, Ford Pass connected car tech, and push-button start/stop. Ford Aspire Safety: Ford has equipped it with up to six airbags, ABS with EBD, and rear parking sensors. Ford Aspire Rivals: It goes up against the Maruti Suzuki Dzire, Honda Amaze, Tata Tigor, and Hyundai Aura.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "Comfortable ride quality gobbles up potholes and broken surfaces",
  //     "Well-loaded lower variants. You don't need to spend big bucks to get a well-loaded car",
  //     "Clutch, steering and gear action is light. Makes it super easy to drive inside the city",
  //   ],
  //   cons: [
  //     "Headroom continues to be an issue, especially for those around 6ft tall",
  //     "Missing features such as projector headlamps, daytime running lamps, leather-wrapped steering wheel",
  //     "No top-spec petrol automatic on offer. No diesel-auto combo either",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Diamond White", "bg-blue-600"],
  //   color2: ["Moondust Silver", "bg-gray-400"],
  //   color3: ["Ruby Red", "bg-white"],
  //   color4: ["White Gold", "bg-brown-600"],
  //   color5: ["Smoke Grey", "bg-gray-800"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 6.34 Lakh Onwards",
  //     "18.3 to 24.7 kmpl",
  //     "1199 to 1498 cc",
  //     "Manual & Automatic CVT",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "3,995 mm L x 1,695 mm W x 1,498-1,501 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/33276/amaze-exterior-right-front-three-quarter-2.jpeg?q=85",
  //   ],
  //   comparisioncar2: [
  //     "₹ 6.00 Lakh onwards",
  //     "20 to 28 kmpl",
  //     "998 to 1197 cc",
  //     "Manual & Automatic AMT",
  //     "Petrol & Diesel",
  //     "5 Seater",
  //     "3,995 mm L x 1,680 mm W x 1,520 mm H",
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=85",
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
  //     "What is the on road price of Aspire?",
  //     "The on-road price of Aspire in Delhi starts at ‎₹ 8.22 Lakh and goes upto ‎₹ 10.08 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Aspire and Freestyle?",
  //     "Aspire price starts at ₹ 7.28 Lakh ex-showroom and It comes with 1194 cc engine. Whereas Freestyle price starts at ₹ 7.28 Lakh ex-showroom and It comes with 1194 cc engine.",
  //   ],
  //   question3: [
  //     "What is the mileage of Ford Aspire?",
  //     "The Ford Aspire mileage is 18.5 - 24.4 kmpl.",
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
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/33276/amaze-exterior-right-front-three-quarter-2.jpeg?q=85",
  //     "Amaze",
  //     "₹ 9.28 Lakh Onwards",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=85",
  //     "Aura",
  //     "₹ 6.00 Lakh onwards0",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/26563/Volkswagen-Vento-Right-Front-Three-Quarter-169094.jpg?wm=0&q=85",
  //     "Vento",
  //     "10.00 Lakh onwards",
  //   ],
  //   car4: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Rapid/7920/1608614333184/front-left-side-47.jpg?tr=w-456",
  //     "Rapid",
  //     "₹ 7.79 Lakh onwards",
  //   ],
  // };

  // const ThatBrandCars = {
  //   car1: [
  //     "https://imgd.aeplcdn.com/664x374/cw/ec/40369/Ford-EcoSport-Right-Front-Three-Quarter-159249.jpg?wm=0&q=85",
  //     "EcoSport",
  //     "₹ 8.19 Lakh onwards",
  //   ],
  //   car2: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/37640/endeavour-exterior-right-front-three-quarter-149473.jpeg?q=85",
  //     "Endeavour",
  //     "₹ 33.81 Lakh onwards",
  //   ],
  //   car3: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/35463/figo-exterior-right-front-three-quarter-151689.jpeg?q=85",
  //     "Figo",
  //     "₹ 5.82 Lakh onwards",
  //   ],
  //   car4: [
  //     "https://imgd.aeplcdn.com/664x374/n/cw/ec/32698/freestyle-exterior-right-front-three-quarter-2.jpeg?q=85",
  //     "Freestyle",
  //     "₹ 7.28 Lakh onwards",
  //   ],
  // };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ford/Mustang-2021/7939/1595910236308/front-left-side-47.jpg?tr=w-456",
  //     "Mustang 2021",
  //     "Rs.75.00 Lakh*",
  //   ],
  //   car2: [
  //     "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3A%2F%2Fcdni.autocarindia.com%2FExtraImages%2F20210705015326_Ford_ecosport.jpg&h=795&w=1200&c=1",
  //     "EcoSport 2021 Facelift",
  //     "Rs.8.49 Lakh",
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
        LinkCarName="aspire"
      />
      <Nav />

      <MobileSideBar isToggleName={isToggleName} handleactive={handleactive} />

      <div className="grid grid-cols-10">
        <SideBar isToggleName={isToggleName} handleactive={handleactive} />

        <div className="col-span-10 sm:col-span-10 2xl:ml-40 md:ml-0">
          <StartingBox
            CarName={CarName}
            OnlyName={OnlyName}
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
  return OneCarAllSpecs("aspire").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
