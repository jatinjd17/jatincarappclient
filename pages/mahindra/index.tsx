import React from "react";
import {
  AlturasBasicInfoCard,
  BoleroBasicInfoCard,
  BoleroNeoBasicInfoCard,
  Kuv100BasicInfoCard,
  MarazzoBasicInfoCard,
  ScorpioBasicInfoCard,
  TharBasicInfoCard,
  Xuv300BasicInfoCard,
  Xuv500BasicInfoCard,
} from "../../AllCarBasicInfo/mahindra";
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
    car1: ScorpioBasicInfoCard,
    car2: Xuv500BasicInfoCard,
    car3: BoleroBasicInfoCard,
    car4: AlturasBasicInfoCard,
    car5: Kuv100BasicInfoCard,
    car6: MarazzoBasicInfoCard,
    car7: TharBasicInfoCard,
    car8: Xuv300BasicInfoCard,
    car9: BoleroNeoBasicInfoCard,
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
