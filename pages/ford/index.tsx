import React from "react";
import {
  Aspire,
  Ecosport,
  Endeavour,
  Figo,
  Freestyle,
} from "../../CarPicsUrl/CarPics";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexFord() {
  const CompanyName = "Ford";

  const ThatBrandCars = {
    car1: [Ecosport, "EcoSport", "₹ 8.19 Lakh onwards"],
    car2: [Endeavour, "Endeavour", "₹ 33.81 Lakh onwards"],
    car3: [Figo, "Figo", "₹ 5.82 Lakh onwards"],
    car4: [Freestyle, "Freestyle", "₹ 7.28 Lakh onwards"],
    car5: [Aspire, "Aspire", "₹ 7.28 Lakh onwards"],
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

export default IndexFord;
