import React from "react";
import { Kushaq, Octavia, Rapid, Superb } from "../../CarPicsUrl/CarPics";
import {
  TKushaq,
  TOctavia,
  TRapid,
  TSuperb,
} from "../../CarPicsUrl/Thumbnails";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexSkoda() {
  const CompanyName = "Skoda";

  const ThatBrandCars = {
    car1: [TRapid, "Rapid", "₹ 7.80 Lakh"],
    car2: [TOctavia, "Octavia", "₹ 26.01 Lakh"],
    car3: [TSuperb, "Superb", "₹ 32.02 Lakh"],
    car4: [TKushaq, "Kushaq", "₹ 10.51 Lakh"],
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
