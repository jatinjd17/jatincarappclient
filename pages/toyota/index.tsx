import React from "react";
import {
  Camry,
  Fortuner,
  Glanza,
  Innova,
  UrbanCruiser,
  Vellfire,
  Yaris,
} from "../../CarPicsUrl/CarPics";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexToyota() {
  const CompanyName = "Toyota";

  const ThatBrandCars = {
    car1: [Innova, "Innova", "₹ 16.82 Lakh onwards"],
    car2: [Fortuner, "Fortuner", "₹ 30.36 Lakh onwards"],
    car3: [UrbanCruiser, "Urban Cruiser", "₹ 8.63 Lakh onwards"],
    car4: [Glanza, "Glanza", "₹ 7.34 Lakh onwards"],
    car5: [Yaris, "Yaris", "₹ 9.17 Lakh onwards"],
    car6: [Vellfire, "Vellfire", "₹ 89.89 Lakh onwards"],
    car7: [Camry, "Camry", "₹ 40.61 Lakh onwards"],
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

export default IndexToyota;
