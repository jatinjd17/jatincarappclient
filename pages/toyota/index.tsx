import React from "react";
import {
  CamryBasicInfoCard,
  FortunerBasicInfoCard,
  GlanzaBasicInfoCard,
  InnovaBasicInfoCard,
  UrbanCruiserBasicInfoCard,
  VellfireBasicInfoCard,
  YarisBasicInfoCard,
} from "../../AllCarBasicInfo/toyota";
import {
  Camry,
  Fortuner,
  Glanza,
  Innova,
  UrbanCruiser,
  Vellfire,
  Yaris,
} from "../../CarPicsUrl/CarPics";
import {
  TCamry,
  TFortuner,
  TGlanza,
  TInnova,
  TUrbanCruiser,
  TVellfire,
  TYaris,
} from "../../CarPicsUrl/Thumbnails";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexToyota() {
  const CompanyName = "Toyota";

  const ThatBrandCars = {
    car1: InnovaBasicInfoCard,
    car2: FortunerBasicInfoCard,
    car3: UrbanCruiserBasicInfoCard,
    car4: GlanzaBasicInfoCard,
    car5: YarisBasicInfoCard,
    car6: VellfireBasicInfoCard,
    car7: CamryBasicInfoCard,
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

export default IndexToyota;
