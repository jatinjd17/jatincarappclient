import React from "react";
import { Duster, Kiger, Kwid, Triber } from "../../CarPicsUrl/CarPics";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexRenault() {
  const CompanyName = "Renault";

  const ThatBrandCars = {
    car1: [Kwid, "Kwid", "₹ 3.31 Lakh"],
    car2: [Triber, "Triber", "₹ 5.49 Lakh"],
    car3: [Kiger, "Kiger", "₹ 5.64 Lakh"],
    car4: [Duster, "Duster", "₹ 9.84 Lakh"],
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
