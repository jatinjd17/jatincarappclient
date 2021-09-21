import React from "react";

function UpcommingCars({ CompanyName, UpcommingCarBrand }) {
  return (
    <div>
      <div>
        <div className="ml-60 md:ml-36 sm:ml-1 text-2xl font-bold">
          Upcomming {CompanyName} Cars
        </div>
        <div className="mt-6">
          <div className="grid grid-cols-3 mr-40 md:mr-2 ml-60 md:ml-2 sm:ml-1 sm:mr-0 bg-gray-200 p-2 gap-4">
            <div className="text-center bg-gray-400 pb-3">
              <div>
                <img
                  className="object-cover w-full h-56 sm:h-24"
                  src={UpcommingCarBrand.car1[0]}
                  alt="nnn"
                />
              </div>
              <div className="text-center text-xl font-bold">
                {UpcommingCarBrand.car1[1]}
              </div>

              <div className="text-md font-bold">
                {UpcommingCarBrand.car1[2]}
              </div>

              <div className="text-xs mt-1">Expected Price</div>
            </div>
            <div className="text-center bg-gray-400 pb-3">
              <div>
                <img
                  className="object-cover w-full h-56 sm:h-24"
                  src={UpcommingCarBrand.car2[0]}
                  alt="nnn"
                />
              </div>
              <div className="text-center text-xl font-bold">
                {UpcommingCarBrand.car2[1]}
              </div>

              <div className="text-md font-bold">
                {UpcommingCarBrand.car2[2]}
              </div>

              <div className="text-xs mt-1">Expected Price</div>
            </div>
            {UpcommingCarBrand.car3 ? (
              <div className="text-center bg-gray-400 pb-3">
                <div>
                  <img
                    className="object-cover w-full h-56 sm:h-24"
                    src={UpcommingCarBrand.car3[0]}
                    alt="nnn"
                  />
                </div>
                <div className="text-center text-xl font-bold">
                  {UpcommingCarBrand.car3[1]}
                </div>

                <div className="text-md font-bold">
                  {UpcommingCarBrand.car3[2]}
                </div>

                <div className="text-xs mt-1">Expected Price</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcommingCars;
