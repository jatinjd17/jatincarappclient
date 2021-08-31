import React from "react";
import { GTR, Kicks, Magnite } from "../../CarPicsUrl/CarPics";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexNissa() {
  const CompanyName = "Nissan";
  const ThatBrandCars = {
    car1: [Magnite, "Magnite", "Rs.5.59 Lakh*"],
    car2: [Kicks, "Kicks", "Rs.9.50 Lakh*"],
    car3: [GTR, "GTR", "₹ 2.12 Crore"],
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
