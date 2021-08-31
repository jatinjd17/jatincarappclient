import React from "react";
import { Polo, Tiguan, Troc, Vento } from "../../CarPicsUrl/CarPics";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";
import MoreCars from "../../Components/SpecificCar/MoreCars";

function IndexVolkswagen() {
  const CompanyName = "Volkswagen";
  const ThatBrandCars = {
    car1: [Polo, "Polo", "₹ 6.21 Lakh onwards"],
    car2: [Troc, "T-Roc", "₹ 21.35 Lakh onwards"],
    car3: [Vento, "Vento", "₹ 10.00 Lakh onwards"],
    car4: [Tiguan, "Tiguan Allspace", "₹ 34.19 Lakh onwards"],
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
