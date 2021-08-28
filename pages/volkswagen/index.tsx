import React from "react";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";
import MoreCars from "../../Components/SpecificCar/MoreCars";

function IndexVolkswagen() {
  const CompanyName = "Volkswagen";
  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Polo",
      "₹ 6.21 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/55747/t-roc-exterior-right-front-three-quarter-3.jpeg?q=85",
      "T-Roc",
      "₹ 21.35 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/26563/Volkswagen-Vento-Right-Front-Three-Quarter-169094.jpg?wm=0&q=85",
      "Vento",
      "₹ 10.00 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45290/volkswagen-tiguan-allspace-right-front-three-quarter54.jpeg?q=85",
      "Tiguan Allspace",
      "₹ 34.19 Lakh onwards",
    ],
  };
  return (
    <div>
      <div className="">
        <BrandMainPageAllCars
          CompanyName={CompanyName}
          ThatBrandCars={ThatBrandCars}
        />
      </div>
    </div>
  );
}

export default IndexVolkswagen;
