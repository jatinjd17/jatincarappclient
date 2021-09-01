import React from "react";
import { Duster, Kiger, Kwid, Triber } from "../../CarPicsUrl/CarPics";
import { TDuster, TKiger, TKwid, TTriber } from "../../CarPicsUrl/Thumbnails";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexRenault() {
  const CompanyName = "Renault";

  const ThatBrandCars = {
    car1: [TKwid, "Kwid", "₹ 3.31 Lakh"],
    car2: [TTriber, "Triber", "₹ 5.49 Lakh"],
    car3: [TKiger, "Kiger", "₹ 5.64 Lakh"],
    car4: [TDuster, "Duster", "₹ 9.84 Lakh"],
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

export default IndexRenault;
