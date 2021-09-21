import React from "react";
import Carousel from "react-multi-carousel";

function PopularAlternativeCarComparision() {
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
      "Dzire",
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
      "New Dzire",
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
      breakpoint: { max: 4000, min: 1250 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 1250, min: 1024 },
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
      <div className="mx-14 sm:mx-2">
        {/* <div className="text-2xl font-bold mt-6 mb-3">
          Alternative Car Comparision
        </div> */}
        <Carousel responsive={responsive1}>
          <div>
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
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Engine</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[2]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Mileage</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[1]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-sm font-bold mb-1 mt-0.5 overflow-x-hidden">
                      Transmission
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[3]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Fuel Type</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[4]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Dimension</div>
                    <div className="text-sm m-0.5">
                      {ComparisionCar.comparisioncar1[6]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
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
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Engine</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[2]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Mileage</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[1]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-sm font-bold mb-1 mt-0.5 overflow-x-hidden">
                      Transmission
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[3]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Fuel Type</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[4]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Dimension</div>
                    <div className="text-sm m-0.5">
                      {ComparisionCar.comparisioncar1[6]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">
                      Seating Capacity
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[5]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center mr-9 md:hidden text-3xl">
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
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Engine</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[2]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Mileage</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[1]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-sm font-bold mb-1 mt-0.5 overflow-x-hidden">
                      Transmission
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[3]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Fuel Type</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[4]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Dimension</div>
                    <div className="text-sm m-0.5">
                      {ComparisionCar.comparisioncar1[6]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
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
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Engine</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[2]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Mileage</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[1]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-sm font-bold mb-1 mt-0.5 overflow-x-hidden">
                      Transmission
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[3]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Fuel Type</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[4]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Dimension</div>
                    <div className="text-sm m-0.5">
                      {ComparisionCar.comparisioncar1[6]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">
                      Seating Capacity
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[5]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center mr-9 md:hidden text-3xl">
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
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Engine</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[2]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Mileage</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[1]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-sm font-bold mb-1 mt-0.5 overflow-x-hidden">
                      Transmission
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[3]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Fuel Type</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[4]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Dimension</div>
                    <div className="text-sm m-0.5">
                      {ComparisionCar.comparisioncar1[6]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
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
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Engine</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[2]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Mileage</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[1]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-sm font-bold mb-1 mt-0.5 overflow-x-hidden">
                      Transmission
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[3]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Fuel Type</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[4]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Dimension</div>
                    <div className="text-sm m-0.5">
                      {ComparisionCar.comparisioncar1[6]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">
                      Seating Capacity
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[5]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center mr-9 md:hidden text-3xl">
              <span className=" border-2 rounded-full p-1">VS</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 mr-4 md:mr-2 sm:mr-1">
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
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Engine</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[2]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Mileage</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[1]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-sm font-bold mb-1 mt-0.5 overflow-x-hidden">
                      Transmission
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[3]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Fuel Type</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[4]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Dimension</div>
                    <div className="text-sm m-0.5">
                      {ComparisionCar.comparisioncar1[6]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
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
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Engine</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[2]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Mileage</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[1]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-sm font-bold mb-1 mt-0.5 overflow-x-hidden">
                      Transmission
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[3]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Fuel Type</div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[4]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">Dimension</div>
                    <div className="text-sm m-0.5">
                      {ComparisionCar.comparisioncar1[6]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-base font-bold mb-1">
                      Seating Capacity
                    </div>
                    <div className="text-xs">
                      {ComparisionCar.comparisioncar1[5]}
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
