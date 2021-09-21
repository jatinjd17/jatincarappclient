import React from "react";
import { Amaze, City, City4, Jazz, Wrv } from "../../CarPicsUrl/CarPics";
import {
  TAmaze,
  TCity,
  TCity4,
  TJazz,
  TWRV,
} from "../../CarPicsUrl/Thumbnails";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";
import Nav from "../../Components/head";

function IndexHonda() {
  const CompanyName = "Honda";

  const ThatBrandCars = {
    car1: [TAmaze, "Amaze", "₹ 6.34 Lakh onwards"],
    car2: [TCity, "City", "₹ 11.19 Lakh onwards"],
    car3: [TWRV, "WRV", "₹ 8.90 Lakh onwards"],
    car4: [TJazz, "Jazz", "₹ 7.75 Lakh onwards"],
    car5: [TCity4, "City 4th Gen", "₹ 9.33 Lakh onwards"],
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

export default IndexHonda;
