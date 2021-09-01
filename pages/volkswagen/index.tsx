import React from "react";
import { Polo, Tiguan, Troc, Vento } from "../../CarPicsUrl/CarPics";
import { TPolo, TTiguan, TTroc, TVento } from "../../CarPicsUrl/Thumbnails";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";
import MoreCars from "../../Components/SpecificCar/MoreCars";

function IndexVolkswagen() {
  const CompanyName = "Volkswagen";
  const ThatBrandCars = {
    car1: [TPolo, "Polo", "₹ 6.21 Lakh onwards"],
    car2: [TTroc, "T-Roc", "₹ 21.35 Lakh onwards"],
    car3: [TVento, "Vento", "₹ 10.00 Lakh onwards"],
    car4: [TTiguan, "Tiguan Allspace", "₹ 34.19 Lakh onwards"],
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
