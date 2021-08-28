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

function Homee() {
  const CompanyName = "Datsun";
  const CarPrice = "₹ 4.16 Lakh";
  const TopPic =
    "https://stimg.cardekho.com/images/carexteriorimages/630x420/Datsun/Datsun-GO/6649/front-left-side-47.jpg?tr=w-456";
  const CarName = "Datsun Go";
  const OnlyName = "Go";

  const KeySpecification = [
    "₹ 4.16 Lakh onwards",
    "19.02 - 19.59 kmpl",
    "1198 cc",
    "Manual,Automatic",
    "Petrol",
    "4 Seater",
    "3,788 mm L x 1,636 mm W x 1,507 mm H",
  ];

  const SafetyFeatures = [
    "Dual front airbags",
    "ABS (anti-lock braking system) with EBD (electronic brakeforce distribution)",
    "BA (brake assist), rear parking sensors,",
  ];

  const VarientPetrol = {
    varient1: [
      "D Petrol",
      "1198  cc, Manual, Petrol, 19.02 kmpl",
      "Rs.4.02 Lakh*",
    ],
    varient2: [
      "A Petrol",
      "1198  cc, Manual, Petrol, 19.02 kmpl",
      "Rs.4.99 Lakh*",
    ],
    varient3: [
      "A Option Petrol",
      "1198  cc, Manual, Petrol, 19.02 kmpl",
      "Rs.5.40 Lakh*",
    ],
    varient4: ["T", "1198  cc, Manual, Petrol, 19.02 kmpl", "Rs.5.75 Lakh*"],
    varient5: [
      "T Option",
      "1198  cc, Manual, Petrol, 19.02 kmpl",
      "Rs.5.95 Lakh*",
    ],
    varient6: [
      "T CVT",
      "1198  cc, Automatic, Petrol, 19.59 kmpl",
      "Rs.6.31 Lakh*",
    ],
    varient7: [
      "T Option CVT",
      "1198  cc, Automatic, Petrol, 19.59 kmpl",
      "Rs.6.51 Lakh*",
    ],
  };

  const VarientCNG = {
    varient1: ["LXI CNG", "796 cc, Manual, CNG, 31.59 km/kg", "Rs.4.66 Lakh*"],
    varient2: [
      "LXI(O) CNG",
      "796 cc, Manual, CNG, 31.59 km/kg",
      "Rs.4.71 Lakh*",
    ],
  };

  const VarientDiesel = {};

  const Mileage = {
    mileage1: ["Petrol (796 cc)", "Manual", "22.05 kmpl"],
    mileage2: ["CNG (796 cc)", "Manual", "31.59 km/kg"],
  };

  const LatestUpdate = [
    "Latest Update: The Datsun GO gets savings of up to Rs 40,000 this April. Datsun GO Price: It is priced from Rs 4.02 lakh to Rs 6.51 lakh (ex-showroom Delhi). Datsun GO Variants: The GO is available in five variants: D, A, A(O), T, and T(O). Datsun GO Powertrain: It is offered with a 1.2-litre 3-cylinder petrol engine. This engine comes mated to either a 5-speed MT or a CVT. While it produces 68PS when paired to the manual gearbox, it goes up to 77PS with the CVT. The petrol motor, however, produces identical torque (104Nm) with both transmission options. Datsun GO Features: Datsun offers the GO with keyless entry, a 7-inch touchscreen infotainment system with Android Auto and Apple CarPlay, 14-inch alloy wheels, and a manual AC with heater.  Datsun GO Safety: Standard safety features include rear parking sensors, ABS with EBD, and dual front airbags. Datsun GO Rivals: It fights it out with the Hyundai Santro, Maruti Suzuki WagonR, Celerio, Ignis, and Tata Tiago.",
  ];

  const ProsCons = {
    pros: [
      "New dashboard setup looks much better.",
      "Good boot space, ample enough for a short family trip.",
      "The exterior changes, especially the new 14-inch alloy wheels, look good.",
    ],
    cons: [
      "Lack of storage space for the second row",
      "Disappointing audio quality with just two speakers",
      "Underbody noise insulation still lacking as stones hitting the bottom make a sharp noise.",
    ],
  };

  const Colorss = {
    color1: ["Ruby Red", "bg-blue-600"],
    color2: ["vivid blue", "bg-gray-400"],
    color3: ["Opal White", "bg-white"],
    color4: ["Crystal Silver", "bg-red-600"],
    color5: ["AMBER-ORANGE", "bg-gray-800"],
    color6: ["Bronze Grey", "bg-green-500"],
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
      "https://images.carandbike.com/car-images/gallery/large/maruti-suzuki/alto-800/interior/dashboard.webp?v=2020-10-24",
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
      "What is the mileage?",
      "As for the claimed fuel efficiency, the Datsun Go base Petrol returns 19.02, ",
    ],
    question2: [
      "What is the Seating capacity?",
      "Datsun Go has a seating capacity of 4 people.",
    ],
    question3: [
      "What are the Top variants?",
      " Datsun Go comes with T option CVT",
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

  const UpcommingCarBrand = {
    car1: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Celerio-2021/8454/Maruti-Celerio-2021-/1623741753799/front-left-side-47.jpg?tr=w-456",
      "Celario 2021",
      "Rs.4.50 Lakh",
    ],
    car2: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Maruti-Solio/6317/1558342716659/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      "Maruti Solio",
      "Rs.6.00 Lakh",
    ],
    car3: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Alto-2021/8020/1600235578537/front-left-side-47.jpg?tr=w-456",
      "Alto 2021",
      "Rs.3.00 Lakh",
    ],
  };

  const SpecificationsFeatures = {
    EngineTransmission: {
      Engine: ["796 cc"],
      EngineType: ["F8D"],
      FuelType: ["Petrol"],
      MaxPower: ["47 bhp @ 6000 rpm"],
      MaxTorque: ["69 Nm @ 3500 rpm"],
      Mileage: ["22.05 kmpl"],
      Drivetrain: ["FWD"],
      Transmission: ["Manual - 5 Gears"],
      EmissionStandard: ["BS 6"],
    },
    DimensionWeight: {
      Length: ["3445 mm"],
      Width: ["1515 mm"],
      Height: ["1475 mm"],
      Wheelbase: ["2360 mm"],
      GroundClearance: ["160 mm"],
    },
    SuspensionBrakeSteering: {
      FrontSuspension: ["Mac Pherson Strut"],
      RearSuspension: ["3-Link Rigid Axle Suspension"],
      FrontBrake: ["Disc"],
      RearBrake: ["Drum"],
      MinimumTurningRadius: ["4.6 metres"],
      SteeringType: ["Power assisted (Electric)"],
      Wheels: ["Steel Rims"],
      SpareWheel: ["Steel"],
      TyreSize: ["145 / 80 R12"],
    },
    Safety: {
      NCAPRating: ["Not Tested"],
      Airbags: ["2 Airbags (Driver, Passenger)"],
      MiddleRearSeatbelt: ["No"],
      MiddleRearHeadrest: ["No"],
      TyrePressureMoni: ["No"],
      ChildSeatAnchor: ["No"],
      SeatBeltWarning: ["Yes"],
    },
    BreakindAndTraction: {
      AntiLockBreaking: ["Yes"],
      ElectricBrakeDistri: ["Yes"],
      BrakeAssist: ["Yes"],
      ElectricStabilityProgram: ["No"],
      HillHoldControl: ["No"],
      TractionControlSys: ["No"],
      HillDescentControl: ["No"],
    },
    LocksAndSecurity: {
      EngineImmobilizer: ["Yes"],
      CentralLocking: ["Remote"],
      SpeedSensingDoorLock: ["No"],
      ChildSafetyLock: ["Yes"],
    },
    ConfortAndCOnvenience: {
      AirConditioner: ["Yes (Manual)"],
      FrontAC: ["Single Zone, Common Fan Speed Control"],
      RearAC: ["No"],
      Heater: ["Yes"],
      VanityMirror: ["No"],
      CabinBootAccess: ["Yes"],
      AntiGlareMirrors: ["No"],
      ParkingAssist: ["No"],
      ParkingSensors: ["Rear"],
      CruiseCOntrol: ["No"],
      HeadLightIgnitionONReminder: ["Yes"],
      KeylessStartStopButton: ["No"],
      SteeringAdjustment: ["No"],
      twelveVPowerOutlets: ["Yes"],
    },
    SeatsAndUpholstery: {
      DriverSeatAdjustment: [
        "4 way manually adjustable (seat forward / back, backrest tilt forward / back)",
      ],
      FrontPassengerSeatAdjustment: [
        "4 way manually adjustable (seat forward / back, backrest tilt forward / back)",
      ],
      RearRowSeatAdjustment: ["No"],
      SeatUpholstery: ["Vinyl + Fabric"],
      LeatherWrappedSteeringwheel: ["No"],
      LeatherWrappedGearKnob: ["No"],
      DriverArmrest: ["No"],
      RearPassengerSeatsType: ["Bench"],
      VentilatedSeats: ["No"],
      InteriorColors: ["Black and Beige"],
      RearArmrest: ["No"],
      FoldingRearSeat: ["Full"],
      SplitRearSeat: ["No"],
      FrontSeatbackPockets: ["Yes"],
      HeadRest: ["Front and Rear"],
    },
    Storage: {
      CupHolders: ["Front and Rear"],
      DriverArmrestStorage: ["No"],
      CooledGloveBox: ["No"],
      SunglassHOlder: ["No"],
    },
    DoorsWindowsMirrorsWipers: {
      PowerWindows: ["Front Only"],
      OneTouchDown: ["No"],
      OneTouchUp: ["No"],
      AdjustableORVM: ["Internally Adjustable"],
      TurnIndicatorsonORVM: ["No"],
      RearDefogger: ["No"],
      RearWiper: ["No"],
      ExteriorDoorHandles: ["Body Coloured"],
      RainSensingWipers: ["No"],
      InteriorDoorHandles: ["Silver"],
      DoorPockets: ["Front"],
      SideWindowBlinds: ["No"],
      BootLidOpener: ["Internal with Remote"],
      OutsideRearViewMirrors: ["Body Coloured"],
    },
    Exterior: {
      Sunroof: ["No"],
      RoofMountedAntenna: ["Yes"],
      BodyColorBumpers: ["Yes"],
      BodyKit: ["No"],
      RubStrips: ["Black"],
    },
    Lighting: {
      DaytimeRunningLights: ["No"],
      AmbientInteriorLighting: ["No"],
      PuddleLamps: ["No"],
      FogLights: ["Yes"],
      HeadLights: ["Halogen"],
      AutomaticHeadLamps: ["No"],
      FollowmeHomeLamps: ["No"],
      TailLight: ["Halogen"],
      CabinLamps: ["Front"],
      HeadLightHeightAdjuster: ["Yes"],
      GloveBoxLamp: ["No"],
      LightsonVanityMirrors: ["No"],
      RearReadingLamps: ["No"],
      COrneringHeadLights: ["No"],
    },
    Instrumentation: {
      InstrumentCluster: ["Analogue and Digital"],
      TripMeter: ["Electronic 2 trips"],
      AverageFuelConsumption: ["Yes"],
      AverageSpeed: ["No"],
      DistanceToEmpty: ["Yes"],
      Clock: ["Digital"],
      LowFuelLevelWarning: ["Yes"],
      DoorAjarWarning: ["No"],
      AdjustableClusterBrightness: ["No"],
      GearIndicator: ["No"],
      ShiftIndicator: ["No"],
      TachoMeter: ["No"],
      InstantaneousConsumption: ["No"],
    },
    EntertainmentInfoandCommunication: {
      WirelessCharger: ["No"],
      SmartConnectivity: ["Android Auto (Yes), Apple Car Play (Yes)"],
      HeadUnitSize: ["-"],
      IntegratedMusicSystem: ["Yes"],
      Display: ["TouchScreen"],
      GPSNavigationSystem: ["Yes"],
      Speakers: ["2"],
      USBCampatibility: ["Yes"],
      AUXCompatibility: ["Yes"],
      BluetoothCompatibility: ["Yes"],
      SteeringMountedControls: ["No"],
      VoiceCommand: ["No"],
      CDPlayer: ["No"],
    },
    ManufacturerWarranty: {
      WarrantyYears: ["2"],
      WarrantyKilometers: ["40000"],
      ExtendedWarranty: ["-"],
    },
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
            CarName={CarName}
            OnlyName={OnlyName}
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
              SpecificationsFeatures={SpecificationsFeatures}
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
              <AllSPecifications
                SpecificationsFeatures={SpecificationsFeatures}
              />

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

export default Homee;
