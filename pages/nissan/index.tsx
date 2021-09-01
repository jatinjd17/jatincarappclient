import React from "react";
import { GTR, Kicks, Magnite } from "../../CarPicsUrl/CarPics";
import { TGTR, TKicks, TMagnite } from "../../CarPicsUrl/Thumbnails";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexNissa() {
  const CompanyName = "Nissan";
  const ThatBrandCars = {
    car1: [TMagnite, "Magnite", "Rs.5.59 Lakh*"],
    car2: [TKicks, "Kicks", "Rs.9.50 Lakh*"],
    car3: [TGTR, "GTR", "₹ 2.12 Crore"],
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
