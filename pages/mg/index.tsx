import React from "react";
import { Gloster, Hector, HectorPlus, ZSEV } from "../../CarPicsUrl/CarPics";
import {
  TGloster,
  THector,
  THectorPlus,
  TZSEV,
} from "../../CarPicsUrl/Thumbnails";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexMG() {
  const CompanyName = "MG";

  const ThatBrandCars = {
    car1: [THector, "Hector", "₹ 13.18 Lakh onwards"],
    car2: [THectorPlus, "Hector Plus", "₹ 13.63 Lakh onwards"],
    car3: [TGloster, "Gloster", "₹ 29.98 Lakh onwards"],
    car4: [TZSEV, "ZS EV", "₹ 21.00 Lakh onwards"],
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
