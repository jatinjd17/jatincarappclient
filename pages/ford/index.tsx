import React from "react";
import {
  Aspire,
  Ecosport,
  Endeavour,
  Figo,
  Freestyle,
} from "../../CarPicsUrl/CarPics";
import {
  TAspire,
  TEcosport,
  TEndeavour,
  TFigo,
  TFreestyle,
} from "../../CarPicsUrl/Thumbnails";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";
import Nav from "../../Components/head";

function IndexFord() {
  const CompanyName = "Ford";

  const ThatBrandCars = {
    car1: [TEcosport, "EcoSport", "₹ 8.19 Lakh onwards"],
    car2: [TEndeavour, "Endeavour", "₹ 33.81 Lakh onwards"],
    car3: [TFigo, "Figo", "₹ 5.82 Lakh onwards"],
    car4: [TFreestyle, "Freestyle", "₹ 7.28 Lakh onwards"],
    car5: [TAspire, "Aspire", "₹ 7.28 Lakh onwards"],
  };
  return (
    <div>
      <Nav />
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
