import React from "react";
import { Gloster, Hector, HectorPlus, ZSEV } from "../../CarPicsUrl/CarPics";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexMG() {
  const CompanyName = "MG";

  const ThatBrandCars = {
    car1: [Hector, "Hector", "₹ 13.18 Lakh onwards"],
    car2: [HectorPlus, "Hector Plus", "₹ 13.63 Lakh onwards"],
    car3: [Gloster, "Gloster", "₹ 29.98 Lakh onwards"],
    car4: [ZSEV, "ZS EV", "₹ 21.00 Lakh onwards"],
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

export default IndexMG;
