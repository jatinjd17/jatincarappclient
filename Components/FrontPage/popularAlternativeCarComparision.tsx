import React from "react";
import Link from "next/link";
import Router from "next/router";
import Carousel from "react-multi-carousel";
import {
  TAltroz,
  TCreta,
  Ti20,
  TKushaq,
  TNexon,
  TSonet,
} from "../../CarPicsUrl/Thumbnails";

function PopularAlternativeCarComparision() {
  const ComparisionCar = {
    comparisioncar1: [
      "₹ 14.30 Lakh Onwards",
      "14.63 to 16.35 kmpl",
      "1956 cc",
      "Manual & Automatic (Torque Converter)",
      "Diesel",
      "5 Seater",
      "4,598 mm L x 1,894 mm W x 1,706 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32958/tata-harrier-right-front-three-quarter58.jpeg?q=85",
      "Harrier",
    ],
    comparisioncar2: [
      "₹ 13.63 Lakh onwards",
      "16.6 kmpl",
      "1451 to 1956 cc",
      "Manual & Automatic",
      "Petrol & Diesel",
      "6-7 Seater",
      "4,720 mm L x 1,835 mm W x 1,760 mm H",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45184/hector-plus-exterior-right-front-three-quarter-7.jpeg?q=85",
      "HectorPlus",
    ],
    comparisioncar3: [
      "₹ 10.15 Lakh onwards",
      "17 to 21 kmpl",
      "1353 to 1497 cc",
      "Manual, Automatic (CVT), Automatic (Torque Converter) & Automatic (Dual Clutch)",
      "Petrol & Diesel",
      "5 Seater",
      "4,300 mm L x 1,790 mm W x 1,620-1,635 mm H",
      TCreta,
      "Creta",
    ],
    comparisioncar4: [
      "₹ 10.51 Lakh onwards",
      "15.78 to 17.88 kmpl",
      "999 to 1498 cc",
      "Manual, Automatic (Torque Converter) & Automatic (Dual Clutch)",
      "Petrol",
      "5 Seater",
      "4,225 mm L x 1,760 mm W x 1,612 mm H",
      TKushaq,
      "Kushaq",
    ],
    comparisioncar5: [
      "₹ 6.91 Lakh onwards",
      "19.65 to 25.2 kmpl",
      "998 to 1493 cc",
      "Manual, Automatic (CVT), Clutchless Manual & Automatic (Dual Clutch)",
      "Petrol & Diesel",
      "5 Seater",
      "3,995 mm L x 1,775 mm W x 1,505 mm H",
      Ti20,
      "i20",
    ],
    comparisioncar6: [
      "₹ 5.80 Lakh onwards",
      "19.05 to 25.11 kmpl",
      "1199 to 1497 cc",
      "Manual",
      "Petrol & Diesel",
      "5 Seater",
      "3,990 mm L x 1,755 mm W x 1,523 mm H",
      TAltroz,
      "Altroz",
    ],
    comparisioncar7: [
      "₹ 6.79 Lakh onwards",
      "18.2 to 24.1 kmpl",
      "998 to 1493 cc",
      "Manual, Clutchless Manual, Automatic (Dual Clutch) & Automatic (Torque Converter)",
      "Petrol & Diesel",
      "5 Seater",
      "3,995 mm L x 1,790 mm W x 1,610-1,642 mm H",
      TSonet,
      "Sonet",
    ],
    comparisioncar8: [
      "₹ 7.28 Lakh onwards",
      "16 to 22.4 kmpl",
      "1199 to 1497 cc",
      "Manual & AMT",
      "Petrol & Diesel",
      "5 Seater",
      "3993 mm in length, 1811 mm in width and 1606 mm in height",
      TNexon,
      "Nexon",
    ],
  };

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
      breakpoint: { max: 4000, min: 1350 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 1350, min: 1024 },
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
  return (
    <div>
      <div className="mx-14 sm:mx-2 mb-5">
        {/* <div className="text-2xl font-bold mt-6 mb-3">
          Alternative Car Comparision
        </div> */}
        <Carousel responsive={responsive1}>
          <div
            className="cursor-pointer "
            onClick={() =>
              Router.push(
                `/compare/${ComparisionCar.comparisioncar1[8].toLowerCase()}vs${ComparisionCar.comparisioncar2[8].toLowerCase()}`
              )
            }
          >
            {/* <Link
              href={`/compare/${ComparisionCar.comparisioncar1[8].toLowerCase()}vs${ComparisionCar.comparisioncar2[8].toLowerCase()}`}
            > */}
            <div className="text-center mr-9  md:hidden text-3xl">
              <span className=" border-2 rounded-full p-1">VS</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 mr-8 md:mr-2 sm:mr-1">
              <div className="flex flex-col border-r-2 pr-1 md:border-r-0 ">
                <div className="w-max h-auto  self-center md:h-auto">
                  <img
                    className="object-cover w-60 h-28"
                    src={ComparisionCar.comparisioncar1[7]}
                  />
                </div>
                <div className="text-2xl font-bold text-center">
                  {ComparisionCar.comparisioncar1[8]}
                </div>
                <div className="text-2xl font-bold text-center mb-1">
                  {ComparisionCar.comparisioncar1[0]}
                </div>
                <div className="grid grid-cols-3 grid-rows-2 text-center shadow-lg ml-1">
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Engine</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[2]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Mileage</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[1]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-sm font-bold mb-1 mt-0.5 overflow-x-hidden">
                      Transmission
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[3]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Fuel Type</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[4]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Dimension</div>
                    <div className="text-xs m-0.5">
                      {ComparisionCar.comparisioncar1[6]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">
                      Seating Capacity
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[5]}
                    </div>
                  </div>
                </div>

                <div className="text-center text-3xl my-5 2xl:hidden md:block">
                  <span className="bg-red-500 rounded-full p-2 text-white">
                    VS
                  </span>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="w-max h-auto  self-center md:h-auto">
                  <img
                    className="object-cover w-60 h-28"
                    src={ComparisionCar.comparisioncar2[7]}
                  />
                </div>
                <div className="text-2xl font-bold text-center">
                  {ComparisionCar.comparisioncar2[8]}
                </div>
                <div className="text-2xl font-bold text-center mb-1">
                  {ComparisionCar.comparisioncar2[0]}
                </div>
                <div className="grid grid-cols-3 grid-rows-2 text-center shadow-lg ml-1">
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Engine</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar2[2]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Mileage</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar2[1]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-sm font-bold mb-1 mt-0.5 overflow-x-hidden">
                      Transmission
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar2[3]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Fuel Type</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar2[4]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Dimension</div>
                    <div className="text-xs m-0.5">
                      {ComparisionCar.comparisioncar2[6]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">
                      Seating Capacity
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar2[5]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </Link> */}
          </div>
          <div
            className="cursor-pointer "
            onClick={() =>
              Router.push(
                `/compare/${ComparisionCar.comparisioncar3[8].toLowerCase()}vs${ComparisionCar.comparisioncar4[8].toLowerCase()}`
              )
            }
          >
            <div className="text-center mr-9 md:hidden text-3xl">
              <span className=" border-2 rounded-full p-1">VS</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 mr-8 md:mr-2 sm:mr-1">
              <div className="flex flex-col border-r-2 pr-1 md:border-r-0 ">
                <div className="w-max h-auto  self-center md:h-auto">
                  <img
                    className="object-cover w-60 h-28"
                    src={ComparisionCar.comparisioncar3[7]}
                  />
                </div>
                <div className="text-2xl font-bold text-center">
                  {ComparisionCar.comparisioncar3[8]}
                </div>
                <div className="text-2xl font-bold text-center mb-1">
                  {ComparisionCar.comparisioncar3[0]}
                </div>
                <div className="grid grid-cols-3 grid-rows-2 text-center shadow-lg ml-1">
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Engine</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar3[2]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Mileage</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar3[1]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-sm font-bold mb-1 mt-0.5 overflow-x-hidden">
                      Transmission
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar3[3]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Fuel Type</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar3[4]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Dimension</div>
                    <div className="text-xs m-0.5">
                      {ComparisionCar.comparisioncar3[6]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">
                      Seating Capacity
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar3[5]}
                    </div>
                  </div>
                </div>

                <div className="text-center text-3xl my-5 2xl:hidden md:block">
                  <span className="bg-red-500 rounded-full p-2 text-white">
                    VS
                  </span>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="w-max h-auto  self-center md:h-auto">
                  <img
                    className="object-cover w-60 h-28"
                    src={ComparisionCar.comparisioncar4[7]}
                  />
                </div>
                <div className="text-2xl font-bold text-center">
                  {ComparisionCar.comparisioncar4[8]}
                </div>
                <div className="text-2xl font-bold text-center mb-1">
                  {ComparisionCar.comparisioncar4[0]}
                </div>
                <div className="grid grid-cols-3 grid-rows-2 text-center shadow-lg ml-1">
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Engine</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar4[2]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Mileage</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar4[1]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-sm font-bold mb-1 mt-0.5 overflow-x-hidden">
                      Transmission
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar4[3]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Fuel Type</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar4[4]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Dimension</div>
                    <div className="text-xs m-0.5">
                      {ComparisionCar.comparisioncar4[6]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">
                      Seating Capacity
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar4[5]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="cursor-pointer "
            onClick={() =>
              Router.push(
                `/compare/${ComparisionCar.comparisioncar5[8].toLowerCase()}vs${ComparisionCar.comparisioncar6[8].toLowerCase()}`
              )
            }
          >
            <div className="text-center mr-9 md:hidden text-3xl">
              <span className=" border-2 rounded-full p-1">VS</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 mr-8 md:mr-2 sm:mr-1">
              <div className="flex flex-col border-r-2 pr-1 md:border-r-0 ">
                <div className="w-max h-auto  self-center md:h-auto">
                  <img
                    className="object-cover w-60 h-28"
                    src={ComparisionCar.comparisioncar5[7]}
                  />
                </div>
                <div className="text-2xl font-bold text-center">
                  {ComparisionCar.comparisioncar5[8]}
                </div>
                <div className="text-2xl font-bold text-center mb-1">
                  {ComparisionCar.comparisioncar5[0]}
                </div>
                <div className="grid grid-cols-3 grid-rows-2 text-center shadow-lg ml-1">
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Engine</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar5[2]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Mileage</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar5[1]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-sm font-bold mb-1 mt-0.5 overflow-x-hidden">
                      Transmission
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar5[3]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Fuel Type</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar5[4]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Dimension</div>
                    <div className="text-xs m-0.5">
                      {ComparisionCar.comparisioncar5[6]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">
                      Seating Capacity
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar5[5]}
                    </div>
                  </div>
                </div>

                <div className="text-center text-3xl my-5 2xl:hidden md:block">
                  <span className="bg-red-500 rounded-full p-2 text-white">
                    VS
                  </span>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="w-max h-auto  self-center md:h-auto">
                  <img
                    className="object-cover w-60 h-28"
                    src={ComparisionCar.comparisioncar6[7]}
                  />
                </div>
                <div className="text-2xl font-bold text-center">
                  {ComparisionCar.comparisioncar6[8]}
                </div>
                <div className="text-2xl font-bold text-center mb-1">
                  {ComparisionCar.comparisioncar6[0]}
                </div>
                <div className="grid grid-cols-3 grid-rows-2 text-center shadow-lg ml-1">
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Engine</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar6[2]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Mileage</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar6[1]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-sm font-bold mb-1 mt-0.5 overflow-x-hidden">
                      Transmission
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar6[3]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Fuel Type</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar6[4]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Dimension</div>
                    <div className="text-xs m-0.5">
                      {ComparisionCar.comparisioncar6[6]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">
                      Seating Capacity
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar6[5]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="cursor-pointer "
            onClick={() =>
              Router.push(
                `/compare/${ComparisionCar.comparisioncar7[8].toLowerCase()}vs${ComparisionCar.comparisioncar8[8].toLowerCase()}`
              )
            }
          >
            <div className="text-center mr-9 md:hidden text-3xl">
              <span className=" border-2 rounded-full p-1">VS</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 mr-4 md:mr-2 sm:mr-1">
              <div className="flex flex-col border-r-2 pr-1 md:border-r-0 ">
                <div className="w-max h-auto  self-center md:h-auto">
                  <img
                    className="object-cover w-60 h-28"
                    src={ComparisionCar.comparisioncar7[7]}
                  />
                </div>
                <div className="text-2xl font-bold text-center">
                  {ComparisionCar.comparisioncar7[8]}
                </div>
                <div className="text-2xl font-bold text-center mb-1">
                  {ComparisionCar.comparisioncar7[0]}
                </div>
                <div className="grid grid-cols-3 grid-rows-2 text-center shadow-lg ml-1">
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Engine</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar7[2]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Mileage</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar7[1]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-sm font-bold mb-1 mt-0.5 overflow-x-hidden">
                      Transmission
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar7[3]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Fuel Type</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar7[4]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Dimension</div>
                    <div className="text-xs m-0.5">
                      {ComparisionCar.comparisioncar7[6]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">
                      Seating Capacity
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar7[5]}
                    </div>
                  </div>
                </div>

                <div className="text-center text-3xl my-5 2xl:hidden md:block">
                  <span className="bg-red-500 rounded-full p-2 text-white">
                    VS
                  </span>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="w-max h-auto  self-center md:h-auto">
                  <img
                    className="object-cover w-60 h-28"
                    src={ComparisionCar.comparisioncar8[7]}
                  />
                </div>
                <div className="text-2xl font-bold text-center">
                  {ComparisionCar.comparisioncar8[8]}
                </div>
                <div className="text-2xl font-bold text-center mb-1">
                  {ComparisionCar.comparisioncar8[0]}
                </div>
                <div className="grid grid-cols-3 grid-rows-2 text-center shadow-lg ml-1">
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Engine</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar8[2]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Mileage</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar8[1]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-sm font-bold mb-1 mt-0.5 overflow-x-hidden">
                      Transmission
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar8[3]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Fuel Type</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar8[4]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">Dimension</div>
                    <div className="text-xs m-0.5">
                      {ComparisionCar.comparisioncar8[6]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2 h-28 sm:h-max xl:h-max">
                    <div className="text-base font-bold mb-1">
                      Seating Capacity
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar8[5]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default PopularAlternativeCarComparision;
