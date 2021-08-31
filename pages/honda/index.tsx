import React from "react";
import { Amaze, City, City4, Jazz, Wrv } from "../../CarPicsUrl/CarPics";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexHonda() {
  const CompanyName = "Honda";

  const ThatBrandCars = {
    car1: [Amaze, "Amaze", "₹ 6.34 Lakh onwards"],
    car2: [City, "City", "₹ 11.19 Lakh onwards"],
    car3: [Wrv, "WRV", "₹ 8.90 Lakh onwards"],
    car4: [Jazz, "Jazz", "₹ 7.75 Lakh onwards"],
    car5: [City4, "City 4th Gen", "₹ 9.33 Lakh onwards"],
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

export default IndexHonda;
