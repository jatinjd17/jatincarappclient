import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function KeySpecSafetyFeatures({ KeySpecification, SafetyFeatures, OnlyName }) {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-1">
        <div className="text-3xl font-bold grid grid-cols-1">
          <div className="sm:mb-4 mb-4">Key Specifications</div>
          <div>
            <div className="grid grid-cols-3 w-auto gap-1">
              <div className="bg-gray-400 rounded-md text-xl p-2">
                <span className="font-bold text-xl flex flex-row">
                  <div className="h-7 w-7">
                    <img src="https://img.icons8.com/dotty/80/000000/money.png" />
                  </div>
                  <div className="ml-2">Price</div>
                </span>{" "}
                <div className="text-sm px-2 mt-2 ">{KeySpecification[0]}</div>
              </div>
              <div className="bg-gray-400 rounded-md text-xl p-2">
                <span className="font-bold text-xl flex flex-row">
                  <div className="h-7 w-7">
                    <img src="https://img.icons8.com/ios/50/000000/odometer.png" />
                  </div>
                  <div className="ml-2">Mileage</div>
                </span>
                <div className="text-sm px-2 mt-2 ">{KeySpecification[1]}</div>
              </div>
              <div className="bg-gray-400 rounded-md text-xl p-2">
                <span className="font-bold text-xl flex flex-row">
                  <div className="h-7 w-7">
                    <img src="https://img.icons8.com/ios/50/000000/engine.png" />
                  </div>
                  <div className="ml-2">Engine</div>
                </span>
                <div className="text-sm px-2 mt-2 ">{KeySpecification[2]}</div>
              </div>
              <div className="bg-gray-400 rounded-md text-xl p-2">
                <span className="font-bold text-xl flex flex-row">
                  <div className="h-7 w-7">
                    <img src="https://img.icons8.com/ios/50/000000/gear-stick.png" />
                  </div>
                  <div className="overflow-x-auto">Transmission</div>
                </span>
                <span className="text-sm px-2 mt-2 ">
                  {KeySpecification[3]}
                </span>
              </div>
              <div className="bg-gray-400 rounded-md text-xl p-2">
                <span className="font-bold text-xl flex flex-row">
                  <div>
                    <img src="https://img.icons8.com/material-sharp/24/000000/fuel-gas.png" />
                  </div>
                  <div className="ml-2">Fuel Type</div>
                </span>{" "}
                <div className="text-sm px-2 mt-2 ">{KeySpecification[4]}</div>
              </div>
              <div className="bg-gray-400 rounded-md text-xl p-2">
                <span className="font-bold text-xl flex flex-row">
                  <div className="mt-3">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/waiting-room--v2.png" />
                  </div>
                  <div className="ml-2">Seating Capacity</div>
                </span>{" "}
                <div className="text-sm px-2 mt-2 ">{KeySpecification[5]}</div>
              </div>
            </div>
          </div>
        </div>
        <div className=" font-bold ml-14 sm:ml-1 grid grid-cols-1">
          <div className="sm:mt-7 ml-10 sm:ml-0 sm:mb-4 mb-4 text-3xl">
            {OnlyName} Safety & Features
          </div>
          <div>
            <div className=" bg-gray-200 mx-3 sm:mx-0  p-7 rounded-xl">
              <div className="mb-6">
                <FiberManualRecordIcon
                  className="mb-0.5 mr-2"
                  style={{ fontSize: 10 }}
                />
                {SafetyFeatures[0]}
              </div>
              <div className="mb-6">
                <FiberManualRecordIcon
                  className="mb-0.5 mr-2"
                  style={{ fontSize: 10 }}
                />
                {SafetyFeatures[1]}
              </div>
              <div className="mb-6">
                <FiberManualRecordIcon
                  className="mb-0.5 mr-2"
                  style={{ fontSize: 10 }}
                />
                {SafetyFeatures[2]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeySpecSafetyFeatures;
