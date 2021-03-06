import React from "react";
import {
  AltrozBasicInfoCard,
  HarrierBasicInfoCard,
  NexonBasicInfoCard,
  NexonEVBasicInfoCard,
  SafariBasicInfoCard,
  TiagoBasicInfoCard,
  TiagoNRGBasicInfoCard,
  TigorBasicInfoCard,
  TigorEVBasicInfoCard,
} from "../../AllCarBasicInfo/tata";
import {
  Altroz,
  Harrier,
  Nexon,
  NexonEV,
  Safari,
  Tiago,
  TiagoNRG,
  Tigor,
  TigorEV,
} from "../../CarPicsUrl/CarPics";
import {
  TAltroz,
  THarrier,
  TNexon,
  TNexonEV,
  TSafari,
  TTiago,
  TTiagoNRG,
  TTigor,
  TTigorEV,
} from "../../CarPicsUrl/Thumbnails";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";
import Nav from "../../Components/head";
import Meta from "../../Components/metaSEO";

function IndexTata() {
  const CompanyName = "Tata";

  const ThatBrandCars = {
    car1: NexonBasicInfoCard,
    car2: AltrozBasicInfoCard,
    car3: SafariBasicInfoCard,
    car4: HarrierBasicInfoCard,
    car5: TiagoBasicInfoCard,
    car6: TigorBasicInfoCard,
    car7: NexonEVBasicInfoCard,
    car8: TigorEVBasicInfoCard,
    car9: TiagoNRGBasicInfoCard,
  };

  return (
    <div>
      <Meta
        CompanyName={CompanyName}
        OnlyName="All Cars"
        LatestUpdate="List of All Tata Cars"
        ImageUrl="https://i.ibb.co/wpjgBSJ/tata.jpg"
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

export default IndexTata;
