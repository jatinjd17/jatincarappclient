import React from "react";
import { Kushaq, Octavia, Rapid, Superb } from "../../CarPicsUrl/CarPics";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexSkoda() {
  const CompanyName = "Skoda";

  const ThatBrandCars = {
    car1: [Rapid, "Rapid", "₹ 7.80 Lakh"],
    car2: [Octavia, "Octavia", "₹ 26.01 Lakh"],
    car3: [Superb, "Superb", "₹ 32.02 Lakh"],
    car4: [Kushaq, "Kushaq", "₹ 10.51 Lakh"],
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

export default IndexSkoda;
