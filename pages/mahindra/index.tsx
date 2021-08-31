import React from "react";
import {
  Alturas,
  Bolero,
  BoleroNeo,
  Kuv100,
  Marazzo,
  Scorpio,
  Thar,
  Xuv300,
  Xuv500,
} from "../../CarPicsUrl/CarPics";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexMahindra() {
  const CompanyName = "Mahindra";

  const ThatBrandCars = {
    car1: [Scorpio, "Scorpio", "₹ 12.66 Lakh onwards"],
    car2: [Xuv500, "XUV 500", "₹ 14.27 Lakh onwards"],
    car3: [Bolero, "Bolero", "₹ 8.64 Lakh onwards"],
    car4: [Alturas, "Alturas", "₹ 28.77 Lakh onwards"],
    car5: [Kuv100, "Kuv 100", "₹ 6.10 Lakh onwards"],
    car6: [Marazzo, "Marazzo", "₹ 12.30 Lakh onwards"],
    car7: [Thar, "Thar", "₹ 12.78 Lakh onwards"],
    car8: [Xuv300, "Xuv 300", "₹ 7.96 Lakh onwards"],
    car9: [BoleroNeo, "Bolero Neo", "₹ 8.48 Lakh onwards"],
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

export default IndexMahindra;
