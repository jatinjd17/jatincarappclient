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

const DynamicSimilarCar = dynamic(
  () => import("../../../Components/SpecificCar/SimilarCars"),
  {
    ssr: false,
  }
);

function Homee({ joy }) {
  const CompanyName = "Honda";
  const CarPrice = "₹ 6.34 Lakh";
  const TopPic =
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/33276/amaze-exterior-right-front-three-quarter-2.jpeg?q=85";
  const CarName = "Honda Amaze";
  const OnlyName = "Amaze";

  const KeySpecification = [
    "₹ 6.34 Lakh onwards",
    "18.3 to 24.7 kmpl",
    "1199 to 1498 cc",
    "Manual & Automatic (CVT)",
    "Petrol & Diesel",
    "5 Seater",
    "3,995 mm L x 1,695 mm W x 1,498-1,501 mm H",
  ];

  const SafetyFeatures = [
    "E MT. S. MT/CVT. V. MT/CVT. VX. MT/CVT.",
    "Advanced Compatibility Engineering (ACE) Body Structure.",
    "Driver Seat i-SRS Airbag System.",
    "Passenger Seat SRS Airbag System.",
    "Dr & As Seat Pretensioner with Load Limiter.",
    "ISOFIX Child Seat Anchorage.",
    "Anti-Lock Braking System (ABS) with EBD.",
    "Engine Immobilizer.",
  ];

  const VarientPetrol = {
    varient1: [
      "E Petrol",
      "1199 cc, Manual, Petrol, 18.6 kmpl",
      "Rs.6.32 Lakh*",
    ],
    varient2: [
      "S Petrol",
      "1199 cc, Manual, Petrol, 18.6 kmpl",
      "Rs.7.10 Lakh*",
    ],
    varient3: [
      "V Petrol",
      "1199 cc, Manual AMT, Petrol, 18.6 kmpl",
      "Rs.7.70 Lakh*",
    ],
    varient4: [
      "S CVT Petrol",
      "1199 cc, Automatic, Petrol, 18.3 kmpl",
      "Rs.8.00 Lakh*",
    ],
    varient5: [
      "VX Petrol",
      "1199 cc, Manual, Petrol, 18.6 kmpl",
      "Rs.8.18 Lakh*",
    ],
    varient6: [
      "V CVT Petrol",
      "1199 cc, Automatic, Petrol, 18.3 kmpl",
      "Rs.8.60 Lakh*",
    ],

    varient7: [
      "VX CVT Petrol",
      "1199 cc, Automatic, Petrol, 18.3 kmpl",
      "Rs.9.01 Lakh*",
    ],
  };

  const VarientDiesel = {
    varient1: [
      "E Diesel",
      "1498 cc, Manual, Diesel, 24.7 kmpl",
      "Rs.8.66 Lakh*",
    ],

    varient2: [
      "S Diesel",
      "1498 cc, Manual, Diesel, 24.7 kmpl",
      "Rs.9.20 Lakh*",
    ],
    varient3: [
      "V Diesel",
      "1498 cc, Manual, Diesel, 24.7 kmpl",
      "Rs.9.80 Lakh*",
    ],
    varient4: [
      "S CVT Diesel",
      "1498 cc, Automatic, Diesel, 21.0 kmpl",
      "Rs.9.99 Lakh*",
    ],
    varient5: [
      "VX Diesel",
      "1498 cc, Manual, Diesel, 24.7 kmpl",
      "Rs.10.21 Lakh*",
    ],
    varient6: [
      "V CVT Diesel",
      "1498 cc, Automatic, Diesel, 21.0 kmpl",
      "Rs.10.60 Lakh*",
    ],
    varient7: [
      "VX CVT Diesel",
      "1498 cc, Automatic, Diesel, 21.0 kmpl",
      "Rs.11.11 Lakh*",
    ],
  };

  const VarientCNG = {};

  const Mileage = {
    mileage1: ["Petrol (1197 cc)", "Manual", "23.26 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: Honda has commenced bookings for the facelifted Amaze. Honda Amaze Price: The sub-4m sedan is priced from Rs 6.32 lakh to Rs 11.11 lakh (ex-showroom Delhi). Honda Amaze Variants: Honda offers the Amaze in four trims: E, S, V, and VX. Honda Amaze Engine and Transmission: The Amaze is equipped with two engine options: a 1.2-litre petrol (90PS/110Nm) and a 1.5-litre diesel (100PS/200Nm). Both are paired to a standard 5-speed manual transmission, along with the option of a CVT. The diesel CVT, however, produces slightly less power and torque (80PS/160Nm). Honda’s claimed fuel efficiency figures for each engine and gearbox combo are listed below: Petrol MT- 18.6kmpl Petrol CVT- 18.3kmpl Diesel MT- 24.7kmpl Diesel CVT- 21kmpl Honda Amaze Features: Honda has equipped it with a 7-inch touchscreen infotainment system with Apple CarPlay and Android Auto, cruise control, a rear parking camera, and passive keyless entry with push-button engine start-stop. Honda Amaze Safety: Standard safety features include dual front airbags, ABS with EBD, and rear parking sensors. Honda Amaze Rivals: It competes with the Ford Aspire, Hyundai Aura, Tata Tigor, and the Maruti Suzuki Dzire.",
  ];

  const ProsCons = {
    pros: [
      "Comfortable ride over all surfaces, noiseless suspension even over broken roads",
      "Improved overall interior space with increased storage spaces, including 1-litre bottle holders on all doors",
      "Diesel-CVT is smooth, efficient and well suited for the city",
    ],
    cons: [
      "Missing feature list - automatic headlamps, automatic wipers, projector headlamps",
      "Fit and finish issues, cost cutting is evident",
      "Rear headroom is at a premium, fixed headrests not comfortable",
    ],
  };

  const Colorss = {
    color1: ["PLATINUM WHITE PEARL", "bg-blue-600"],
    color2: ["Lunar Silver Metallic", "bg-gray-400"],
    color3: ["Modern Steel Metallic", "bg-white"],
    color4: ["Golden Brown Metallic", "bg-brown-600"],
    color5: ["Radiant Red", "bg-gray-800"],
  };

  const ComparisionCar = {
    comparisioncar1: [
      "₹ 5.98 Lakh onwards",
      "23.26 to 24.12 kmpl",
      "1197 cc",
      "Manual & Automatic",
      "Petrol",
      "5 Seater",
      "3,995 mm L x 1,735 mm W x 1,515 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45691/marutisuzuki-dzire-right-front-three-quarter8.jpeg?q=85",
    ],
    comparisioncar2: [
      "₹ 6.00 Lakh onwards",
      "20 to 28 kmpl",
      "998 to 1197 cc",
      "Manual & Automatic AMT",
      "Petrol & Diesel",
      "5 Seater",
      "3,995 mm L x 1,680 mm W x 1,520 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=85",
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
      "What is the on road price of Amaze?",
      "The on-road price of Amaze in Delhi starts at ‎₹ 7.11 Lakh and goes upto ‎₹ 13.13 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
    ],
    question2: [
      "Which car is better between Amaze and Aura?",
      "Amaze price starts at ₹ 6.34 Lakh ex-showroom and It comes with 1199 cc engine. Whereas Aura price starts at ₹ 6.00 Lakh ex-showroom and It comes with 1197 cc engine",
    ],
    question3: [
      "What is the mileage of Honda Amaze?",
      "The Honda Amaze mileage is 18.3 - 24.7 kmpl.",
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
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45691/marutisuzuki-dzire-right-front-three-quarter8.jpeg?q=85",
      "Dzire",
      "₹ 5.98 Lakh Onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=85",
      "Aura",
      "₹ 6.00 Lakh onwards0",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/26563/Volkswagen-Vento-Right-Front-Three-Quarter-169094.jpg?wm=0&q=85",
      "Vento",
      "10.00 Lakh onwards",
    ],
    car4: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Rapid/7920/1608614333184/front-left-side-47.jpg?tr=w-456",
      "Rapid",
      "₹ 7.79 Lakh onwards",
    ],
  };

  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/33276/amaze-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Amaze",
      "₹ 6.34 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40535/all-new-city-exterior-right-front-three-quarter.jpeg?q=85",
      "City",
      "₹ 11.19 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45732/wr-v-exterior-right-front-three-quarter.jpeg?q=85",
      "WRV",
      "₹ 8.90 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/46891/jazz-exterior-right-front-three-quarter.jpeg?q=85",
      "Jazz",
      "₹ 7.75 Lakh onwards",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/26755/city-4th-generation-exterior-right-front-three-quarter.jpeg?q=85",
      "City 4th Gen",
      "₹ 9.33 Lakh onwards",
    ],
  };

  const UpcommingCarBrand = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45951/amaze-facelift-exterior-front-view-2.jpeg?isig=0&q=85",
      "Amaze Facelift 2021",
      "₹ 6.35 - 10.10 Lakh",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/43195/Honda-New-Jazz-Exterior-176189.jpg?wm=1&q=85",
      "New Gen Jazz",
      "₹ 8.00 - 12.00 Lakh",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/43195/Honda-New-Jazz-Exterior-176189.jpg?wm=1&q=85",
      "New Gen Jazz",
      "₹ 8.00 - 12.00 Lakh",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/39751/Honda-HRV-Exterior-169828.jpg?wm=0&q=85",
      "HRV",
      "₹ 12.00 - 16.00 Lakh",
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

      {/* {typeof window !== "undefined" && (
        <DynamicSimilarCar SimilarCars={SimilarCars} />
      )} */}

      {/* <SimilarCarss SimilarCars={SimilarCars} /> */}

      <div className="mx-64 md:mx-2">
        <Carousel responsive={responsive}>
          <div className="m-8  border-2 shadow-lg">
            {/* sm:m-1 sm:mt-5 */}
            <Link href="/maruti/xl6">
              <div className="grid grid-cols-1 bg-gray-200">
                <div>
                  <img src={SimilarCars.car1[0]} alt="nnn" />
                </div>
                <div className="text-center text-xl font-bold">
                  {SimilarCars.car1[1]}
                </div>
                <div className="flex flex-row">
                  <div className="text-md font-bold">{SimilarCars.car1[2]}</div>
                  <div className="text-md text-gray-500 ml-2 mt-0">Onwards</div>
                </div>

                <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
              </div>
            </Link>
          </div>
          <div className="m-8  border-2 shadow-lg">
            <Link href="/maruti/xl6">
              <div className="grid grid-cols-1 bg-gray-200">
                <div>
                  <img src={SimilarCars.car2[0]} alt="nnn" />
                </div>
                <div className="text-center text-xl font-bold">
                  {SimilarCars.car2[1]}
                </div>
                <div className="flex flex-row">
                  <div className="text-md font-bold">{SimilarCars.car2[2]}</div>
                  <div className="text-md text-gray-500 ml-2 mt-0">Onwards</div>
                </div>

                <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
              </div>
            </Link>
          </div>
          {SimilarCars.car3 ? (
            <div className="m-8  border-2 shadow-lg">
              <Link href="/maruti/xl6">
                <div className="grid grid-cols-1 bg-gray-200">
                  <div>
                    <img src={SimilarCars.car3[0]} alt="nnn" />
                  </div>
                  <div className="text-center text-xl font-bold">
                    {SimilarCars.car3[1]}
                  </div>
                  <div className="flex flex-row">
                    <div className="text-md font-bold">
                      {SimilarCars.car3[2]}
                    </div>
                    <div className="text-md text-gray-500 ml-2 mt-0">
                      Onwards
                    </div>
                  </div>

                  <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                </div>
              </Link>
            </div>
          ) : null}

          {SimilarCars.car4 ? (
            <div className="m-8 border-2 shadow-lg">
              <Link href="/maruti/xl6">
                <div className="grid grid-cols-1 bg-gray-200">
                  <div>
                    <img src={SimilarCars.car4[0]} alt="nnn" />
                  </div>
                  <div className="text-center text-xl font-bold">
                    {SimilarCars.car4[1]}
                  </div>
                  <div className="flex flex-row">
                    <div className="text-md font-bold">
                      {SimilarCars.car4[2]}
                    </div>
                    <div className="text-md text-gray-500 ml-2 mt-0">
                      Onwards
                    </div>
                  </div>

                  <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                </div>
              </Link>
            </div>
          ) : null}
        </Carousel>
      </div>

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
  return OneCarAllSpecs("amaze").then((data) => {
    return { joy: data.carspecs };
  });
};

export default Homee;
