import React from "react";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexNissa() {
  const CompanyName = "Nissan";
  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/20361/Nissan-GTR-Right-Front-Three-Quarter-84895.jpg?v=201711021421&q=85",
      "GTR",
      "₹ 2.12 Crore",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/32596/Nissan-Kicks-Right-Front-Three-Quarter-159680.jpg?wm=0&q=85",
      "Kicks",
      "Rs.9.50 Lakh*",
    ],
  };
  return (
    <div>
      <div>
        <BrandMainPageAllCars
          CompanyName={CompanyName}
          ThatBrandCars={ThatBrandCars}
        />
      </div>
    </div>
  );
}

export default IndexNissa;
