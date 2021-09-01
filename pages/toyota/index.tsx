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
import {
  TCamry,
  TFortuner,
  TGlanza,
  TInnova,
  TUrbanCruiser,
  TVellfire,
  TYaris,
} from "../../CarPicsUrl/Thumbnails";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexToyota() {
  const CompanyName = "Toyota";

  const ThatBrandCars = {
    car1: [TInnova, "Innova", "₹ 16.82 Lakh onwards"],
    car2: [TFortuner, "Fortuner", "₹ 30.36 Lakh onwards"],
    car3: [TUrbanCruiser, "Urban Cruiser", "₹ 8.63 Lakh onwards"],
    car4: [TGlanza, "Glanza", "₹ 7.34 Lakh onwards"],
    car5: [TYaris, "Yaris", "₹ 9.17 Lakh onwards"],
    car6: [TVellfire, "Vellfire", "₹ 89.89 Lakh onwards"],
    car7: [TCamry, "Camry", "₹ 40.61 Lakh onwards"],
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
