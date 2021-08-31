import React from "react";
import { Carnival, Seltos, Sonet } from "../../CarPicsUrl/CarPics";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexKia() {
  const CompanyName = "Kia";

  const ThatBrandCars = {
    car1: [Sonet, "Sonet", "₹ 6.79 Lakh onwards"],
    car2: [Seltos, "Seltos", "₹ 9.96 Lakh onwards"],
    car3: [Carnival, "Carnival", "₹ 24.95 Lakh onwards"],
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

export default IndexKia;
