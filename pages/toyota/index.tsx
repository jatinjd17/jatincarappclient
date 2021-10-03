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
import Nav from "../../Components/head";
import Meta from "../../Components/metaSEO";

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
      <Meta
        CompanyName={CompanyName}
        OnlyName="All Cars"
        LatestUpdate="List of All Toyota Cars"
        ImageUrl="https://i.ibb.co/NKNL9nX/toyota.jpg"
        LinkCarName=""
      />
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

export default IndexToyota;
