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
import { WaganR } from "../../../CarPicsUrl/CarPics";
import { TWaganr } from "../../../CarPicsUrl/Thumbnails";
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

  // const CompanyName = "MarutiSuzuki";
  // const CarPrice = "₹ 4.79 Lakh";
  // const TopPic = WaganR;
  // const CarName = "Maruti WaganR";
  // const OnlyName = "WaganR";
  // const ThumPic = TWaganr;

  // const KeySpecification = [
  //   "₹ 4.79 Lakh onwards",
  //   "20.52 to 32.52 kmpl",
  //   "998 to 1197 cc",
  //   "Manual & AMT",
  //   "Petrol & CNG",
  //   "5 Seater",
  //   "length of 3655 mm, width of 1620 mm and a wheelbase of 2435 mm.",
  // ];

  // const SafetyFeatures = [
  //   "Seat Belt Warning",
  //   "Anti-Lock Braking System",
  //   "2 Airbags",
  //   "EBD",
  //   "Speed Alert",
  // ];

  // const VarientPetrol = {
  //   varient1: [
  //     "LXI 1.0",
  //     "998  cc, Manual, Petrol, 21.79 kmpl",
  //     "Rs.4.79 Lakh*",
  //   ],
  //   varient2: [
  //     "LXI (O) 1.0",
  //     "998  cc, Manual, Petrol, 21.79 kmpl",
  //     "Rs.4.86 Lakh*",
  //   ],
  //   varient3: [
  //     "VXI 1.0",
  //     "998 cc, Manual, Petrol, 21.79 kmpl",
  //     "Rs.5.12 Lakh*",
  //   ],
  //   varient4: [
  //     "VXI (O) 1.0",
  //     "998 cc, Manual, Petrol, 21.79 kmpl",
  //     "Rs.5.19 Lakh*",
  //   ],
  //   varient5: [
  //     "VXI 1.2",
  //     "1197  cc, Manual, Petrol, 20.52 kmpl",
  //     "Rs.5.47 Lakh*",
  //   ],
  //   varient6: [
  //     "VXI (O) 1.2",
  //     "1197 cc, Manual, Petrol, 20.52 kmpl",
  //     "Rs.5.54 Lakh*",
  //   ],
  //   varient7: [
  //     "VXI 1.0 AMT",
  //     "998 cc, Automatic, Petrol, 21.79 kmpl",
  //     "Rs.5.62 Lakh*",
  //   ],
  //   varient8: [
  //     "VXI (O) 1.0 AMT",
  //     "998 cc, Automatic, Petrol, 21.79 kmpl",
  //     "Rs.5.69 Lakh*",
  //   ],

  //   varient9: [
  //     "ZXI 1.2",
  //     "1197 cc, Manual, Petrol, 20.52 kmpl",
  //     "Rs.5.82 Lakh*",
  //   ],
  //   varient10: [
  //     "VXi 1.2 AMT",
  //     "1197 cc, Automatic, Petrol, 20.52 kmpl",
  //     "Rs.5.97 Lakh*",
  //   ],
  //   varient11: [
  //     "VXi (O) 1.2 AMT",
  //     "1197 cc, Automatic, Petrol, 20.52 kmpl",
  //     "Rs.6.04 Lakh*",
  //   ],
  //   varient12: [
  //     "ZXi 1.2 AMT",
  //     "1197 cc, Automatic, Petrol, 20.52 kmpl",
  //     "Rs.6.32 Lakh*",
  //   ],
  // };

  // const VarientDiesel = {};

  // const VarientCNG = {
  //   varient1: [
  //     "LXI 1.0 CNG",
  //     "998 cc, Manual, CNG, 32.52 km/kg",
  //     "Rs.5.71 Lakh*",
  //   ],
  //   varient2: [
  //     "LXI (O) 1.0 CNG",
  //     "998 cc, Manual, CNG, 32.52 km/kg",
  //     "Rs.5.78 Lakh*",
  //   ],
  // };

  // const Mileage = {
  //   mileage1: ["Petrol (1197 cc)", "Manual", "20.52 kmpl"],
  //   mileage2: ["CNG (1.0 cc)", "Manual", "32.52 km/kg"],
  // };

  // const LatestUpdate = [
  //   "Latest Update: Maruti has launched a limited edition Wagon R called Xtra. Maruti Wagon R Price: The Wagon R is priced between Rs 4.80 lakh and Rs 6.33 lakh (ex-showroom Delhi). Maruti Wagon R Variants: It is offered in three trims: LXi, VXi, and ZXi. Maruti Wagon R Engine and Transmission: Maruti offers the Wagon R with two petrol engine options: a 1.0-litre (68PS/90Nm) and a 1.2-litre (83PS/113Nm). Both engines can be mated to 5-speed manual and AMT gearboxes. The Wagon R also has a CNG variant with a 1.0-litre engine (59PS/78Nm), paired with a 5-speed MT. Claimed fuel efficiency figures are as follows: 1.0-litre MT/AMT- 21.79kmpl 1.0-litre CNG- 32.52km/kg 1.2-litre MT/AMT- 20.52kmpl Maruti Wagon R Features: It is equipped with a 7-inch touchscreen infotainment system with Android Auto and Apple CarPlay, manual AC, all four power windows, keyless entry, and steering-mounted audio and calling controls. Maruti Wagon R Safety: Standard safety features include a driver airbag, ABS with EBD, and rear parking sensors. Maruti Wagon R Rivals: The Wagon R fights it out with the Tata Tiago, Hyundai Santro, Datsun GO, and Maruti Suzuki Celerio.",
  // ];

  // const ProsCons = {
  //   pros: [
  //     "More than sufficient cabin space ",
  //     "Bigger 1.2-litre engine with a choice of AMT ",
  //     "All the features expected from its segment",
  //   ],
  //   cons: [
  //     "Has gotten pricier over the older generation",
  //     "Could do with slightly better driving dynamics ",
  //     "Excessive body roll owing to the tall-boy design",
  //   ],
  // };

  // const Colorss = {
  //   color1: ["Poolside Blue", "bg-blue-600"],
  //   color2: ["Silky Silver", "bg-gray-400"],
  //   color3: ["Solid White", "bg-white"],
  //   color4: ["Pearl Phoenix Red", "bg-red-600"],
  //   color5: ["Magma Grey", "bg-gray-800"],
  //   color6: ["Autumn Orange", "bg-orange-800"],
  //   color7: ["Nutmeg Brown", "bg-gray-800"],
  // };

  // const ComparisionCar = {
  //   comparisioncar1: [
  //     "₹ 5.81 Lakh onwards",
  //     "23.2 kmpl",
  //     "1197 cc",
  //     "Manual, Automatic",
  //     "Petrol",
  //     "5 Seater",
  //     "length of 3845, width of 1735 and a wheelbase of 2450",
  //     "https://imgd.aeplcdn.com/600x600/n/cw/ec/26742/swift-exterior-right-front-three-quarter-2.jpeg?q=85",
  //   ],
  //   comparisioncar2: [
  //     "₹ 7.34 Lakh onwards",
  //     "21.96 kmpl",
  //     "1197 cc",
  //     "Manual, Automatic",
  //     "Petrol",
  //     "5 Seater",
  //     "3,995 mm L x 1,745 mm W x 1,510 mm H",
  //     "https://images.financialexpress.com/2019/06/19-1.jpg",
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
  //     "What is the on road price of Wagon R?",
  //     "The on-road price of Wagon R in Delhi starts at ‎₹ 5.3 Lakh and goes upto ‎₹ 6.98 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
  //   ],
  //   question2: [
  //     "Which car is better between Wagon R and Celerio?",
  //     "Wagon R price starts at ₹ 4.79 Lakh ex-showroom and It comes with 998 cc engine. Whereas Celerio price starts at ₹ 4.65 Lakh ex-showroom and It comes with 998 cc engine. Compare the two models to identify the best car for you.",
  //   ],
  //   question3: [
  //     "What is price of Wagon R top model?",
  //     "Top model of Wagon R is ZXi 1.2 AMT and the ex-showroom for Wagon R ZXi 1.2 AMT is ₹ 6.32 Lakh.",
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
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/8378/1614747593719/front-left-side-47.jpg",
      "Swift",
      " ₹ 5.81 Lakh onwards",
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
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201911/0G6A5935_1.png?LkCz.7ZUenqnJF.SOBjEMulD..iElUYe&size=770:433",
      "S-presso",
      "₹ 3.77 Lakh onwards",
    ],
    car2: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbWFsSvTTFc7n__WfN3PJOWp9iBEqMvmFzg&usqp=CAU",
      "Celario",
      "₹4.66 Lakhs onwards",
    ],
    car3: [
      "https://www.shivamautozone.com/wp-content/uploads/2019/01/SUPERIOR-WHITE.png",
      "Wagon R",
      "₹ 4.79 Lakh onwards",
    ],
    car4: [
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/8378/1614747593719/front-left-side-47.jpg",
      "Swift",
      " ₹ 5.81 Lakh onwards",
    ],
  };

  // const UpcommingCarBrand = {
  //   car1: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Celerio-2021/8454/Maruti-Celerio-2021-/1623741753799/front-left-side-47.jpg?tr=w-456",
  //     "Celario 2021",
  //     "Rs.4.50 Lakh",
  //   ],
  //   car2: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Maruti-Solio/6317/1558342716659/front-left-side-47.jpg?imwidth=420&impolicy=resize",
  //     "Maruti Solio",
  //     "Rs.6.00 Lakh",
  //   ],
  //   car3: [
  //     "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Alto-2021/8020/1600235578537/front-left-side-47.jpg?tr=w-456",
  //     "Alto 2021",
  //     "Rs.3.00 Lakh",
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
        LinkCarName="waganr"
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
  return OneCarAllSpecs("waganr").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
