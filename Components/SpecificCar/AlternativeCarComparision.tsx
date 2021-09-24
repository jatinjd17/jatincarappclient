import React from "react";
import Carousel from "react-multi-carousel";

function AlternativeCarComparision({
  TopPic,
  KeySpecification,
  ComparisionCar,
}) {
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

  return (
    <div>
      <div>
        <div className="text-2xl font-bold mt-6 mb-3">
          Alternative Car Comparision
        </div>
        <Carousel responsive={responsive1}>
          <div>
            <div className="text-center mr-40 md:hidden text-3xl">
              <span className=" border-2 rounded-full p-1">VS</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 mr-40 md:mr-2 sm:mr-1">
              <div className="flex flex-col border-r-2 md:border-r-0 ">
                <div className="w-80 h-auto self-center lg:w-auto lg:h-30 md:w-80 md:h-auto">
                  <img
                    className="object-contain w-full h-44 sm:h-24"
                    src={TopPic}
                  />
                </div>
                <div className="text-2xl font-bold text-center mb-1">
                  {KeySpecification[0]}
                </div>
                <div className="grid grid-cols-3 grid-rows-2 text-center shadow-lg mr-1">
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">Engine</div>
                    <div>{KeySpecification[2]}</div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">Mileage</div>
                    <div>{KeySpecification[1]}</div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-lg font-bold mb-1">Transmission</div>
                    <div>{KeySpecification[3]}</div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">Fuel Type</div>
                    <div>{KeySpecification[4]}</div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">Dimension</div>
                    <div>{KeySpecification[6]}</div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">
                      Seating Capacity
                    </div>
                    <div>{KeySpecification[5]}</div>
                  </div>
                </div>

                <div className="text-center text-3xl my-5 2xl:hidden md:block">
                  <span className="bg-red-500 rounded-full p-2 text-white">
                    VS
                  </span>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="w-80 h-auto self-center lg:w-auto lg:h-30 md:w-80 md:h-auto">
                  <img
                    className="object-contain w-full h-44 sm:h-24"
                    src={ComparisionCar.comparisioncar1[7]}
                  />
                </div>
                <div className="text-2xl font-bold text-center mb-1">
                  {ComparisionCar.comparisioncar1[0]}
                </div>
                <div className="grid grid-cols-3 grid-rows-2 text-center shadow-lg ml-1">
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">Engine</div>
                    <div>{ComparisionCar.comparisioncar1[2]}</div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">Mileage</div>
                    <div>{ComparisionCar.comparisioncar1[1]}</div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-lg font-bold mb-1">Transmission</div>
                    <div>{ComparisionCar.comparisioncar1[3]}</div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">Fuel Type</div>
                    <div>{ComparisionCar.comparisioncar1[4]}</div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">Dimension</div>
                    <div className="text-sm m-0.5">
                      {ComparisionCar.comparisioncar1[6]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">
                      Seating Capacity
                    </div>
                    <div>{ComparisionCar.comparisioncar1[5]}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center mr-40 md:hidden text-3xl">
              <span className=" border-2 rounded-full p-1">VS</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 mr-40 md:mr-2 sm:mr-1">
              <div className="flex flex-col border-r-2 md:border-r-0 ">
                <div className="w-80 h-auto self-center lg:w-auto lg:h-30 md:w-80 md:h-auto">
                  <img
                    className="object-contain w-full h-44 sm:h-24"
                    src={TopPic}
                  />
                </div>
                <div className="text-2xl font-bold text-center mb-1">
                  {KeySpecification[0]}
                </div>
                <div className="grid grid-cols-3 grid-rows-2 text-center shadow-lg mr-1">
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">Engine</div>
                    <div>{KeySpecification[2]}</div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">Mileage</div>
                    <div>{KeySpecification[1]}</div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-lg font-bold mb-1">Transmission</div>
                    <div>{KeySpecification[3]}</div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">Fuel Type</div>
                    <div>{KeySpecification[4]}</div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">Dimension</div>
                    <div>{KeySpecification[6]}</div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">
                      Seating Capacity
                    </div>
                    <div>{KeySpecification[5]}</div>
                  </div>
                </div>

                <div className="text-center text-3xl my-5 2xl:hidden md:block">
                  <span className="bg-red-500 rounded-full p-2 text-white">
                    VS
                  </span>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="w-80 h-auto self-center lg:w-auto lg:h-30 md:w-80 md:h-auto">
                  <img
                    className="object-contain w-full h-44 sm:h-24"
                    src={ComparisionCar.comparisioncar2[7]}
                  />
                </div>
                <div className="text-2xl font-bold text-center mb-1">
                  {ComparisionCar.comparisioncar2[0]}
                </div>
                <div className="grid grid-cols-3 grid-rows-2 text-center shadow-lg ml-1">
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">Engine</div>
                    <div>{ComparisionCar.comparisioncar2[2]}</div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">Mileage</div>
                    <div>{ComparisionCar.comparisioncar2[1]}</div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-lg font-bold mb-1">Transmission</div>
                    <div>{ComparisionCar.comparisioncar2[3]}</div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">Fuel Type</div>
                    <div>{ComparisionCar.comparisioncar2[4]}</div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">Dimension</div>
                    <div className="text-sm m-0.5">
                      {ComparisionCar.comparisioncar2[6]}
                    </div>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="text-xl font-bold mb-1">
                      Seating Capacity
                    </div>
                    <div>{ComparisionCar.comparisioncar2[5]}</div>
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

export default AlternativeCarComparision;
