import React from "react";

function Mileage({ OnlyName, Mileage }) {
  return (
    <div>
      <div className="mt-10">
        <div className="text-2xl font-bold mb-3">{OnlyName} Mileage</div>
        <div className="grid grid-cols-2 md:grid-cols-1 md:mr-2 sm:mr-1">
          <div className="grid grid-cols-3 grid-rows-3">
            <div className="border-2 bg-gray-300 p-3">Fuel Type</div>
            <div className="border-2 bg-gray-300 p-3">Transmission</div>
            <div className="border-2 bg-gray-300 p-3">ARAI Mileage</div>
            <div className="border-2 pl-2">{Mileage.mileage1[0]}</div>
            <div className="border-2 pl-2">{Mileage.mileage1[1]}</div>
            <div className="border-2 pl-2">{Mileage.mileage1[2]}</div>
            <div className="border-2 pl-2">{Mileage.mileage2[0]}</div>
            <div className="border-2 pl-2">{Mileage.mileage2[1]}</div>
            <div className="border-2 pl-2">{Mileage.mileage2[2]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mileage;
