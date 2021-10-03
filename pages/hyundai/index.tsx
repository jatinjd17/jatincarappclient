import React from "react";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";
import Nav from "../../Components/head";
import {
  alcazer,
  Aura,
  Creta,
  Elantra,
  i20,
  KonaEV,
  Nios,
  Santro,
  Tucson,
  Venue,
  Verna,
} from "../../CarPicsUrl/CarPics";
import {
  TAlcazar,
  TAura,
  TCreta,
  TElantra,
  Ti20,
  TKona,
  TNios,
  TSantro,
  TTucson,
  TVenue,
  TVerna,
} from "../../CarPicsUrl/Thumbnails";
import {
  CretaBasicInfoCard,
  VenueBasicInfoCard,
  i20BasicInfoCard,
  NiosBasicInfoCard,
  VernaBasicInfoCard,
  AuraBasicInfoCard,
  SantroBasicInfoCard,
  AlcazarBasicInfoCard,
  ElantraBasicInfoCard,
  KonaBasicInfoCard,
  TucsonBasicInfoCard,
} from "../../AllCarBasicInfo/hyundai";
import Meta from "../../Components/metaSEO";

function IndexHyundai() {
  const CompanyName = "Hyundai";
  const ThatBrandCars = {
    car1: CretaBasicInfoCard,
    car2: VenueBasicInfoCard,
    car3: i20BasicInfoCard,
    car4: NiosBasicInfoCard,
    car5: VernaBasicInfoCard,
    car6: AuraBasicInfoCard,
    car7: SantroBasicInfoCard,
    car8: AlcazarBasicInfoCard,
    car9: ElantraBasicInfoCard,
    car10: KonaBasicInfoCard,
    car11: TucsonBasicInfoCard,
  };
  return (
    <div>
      <Meta
        CompanyName={CompanyName}
        OnlyName="All Cars"
        LatestUpdate="List of All Hyundai Cars"
        ImageUrl="https://i.ibb.co/7K1hs4K/hyundai.jpg"
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

export default IndexHyundai;
