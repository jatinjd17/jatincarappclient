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
import {
  TAlturas,
  TBolero,
  TBoleroNeo,
  TKuv100,
  TMarazzo,
  TScorpio,
  TThar,
  TXUV300,
  TXUV500,
} from "../../CarPicsUrl/Thumbnails";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexMahindra() {
  const CompanyName = "Mahindra";

  const ThatBrandCars = {
    car1: [TScorpio, "Scorpio", "₹ 12.66 Lakh onwards"],
    car2: [TXUV500, "XUV 500", "₹ 14.27 Lakh onwards"],
    car3: [TBolero, "Bolero", "₹ 8.64 Lakh onwards"],
    car4: [TAlturas, "Alturas", "₹ 28.77 Lakh onwards"],
    car5: [TKuv100, "Kuv 100", "₹ 6.10 Lakh onwards"],
    car6: [TMarazzo, "Marazzo", "₹ 12.30 Lakh onwards"],
    car7: [TThar, "Thar", "₹ 12.78 Lakh onwards"],
    car8: [TXUV300, "Xuv 300", "₹ 7.96 Lakh onwards"],
    car9: [TBoleroNeo, "Bolero Neo", "₹ 8.48 Lakh onwards"],
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
