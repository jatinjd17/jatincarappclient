import React from "react";
import {
  PoloBasicInfoCard,
  TiguanBasicInfoCard,
  TrocBasicInfoCard,
  VentoBasicInfoCard,
} from "../../AllCarBasicInfo/volkswagen";
import { Polo, Tiguan, Troc, Vento } from "../../CarPicsUrl/CarPics";
import { TPolo, TTiguan, TTroc, TVento } from "../../CarPicsUrl/Thumbnails";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";
import MoreCars from "../../Components/SpecificCar/MoreCars";
import Nav from "../../Components/head";
import Meta from "../../Components/metaSEO";

function IndexVolkswagen() {
  const CompanyName = "Volkswagen";
  const ThatBrandCars = {
    car1: PoloBasicInfoCard,
    car2: TrocBasicInfoCard,
    car3: VentoBasicInfoCard,
    car4: TiguanBasicInfoCard,
  };
  return (
    <div>
      <Meta
        CompanyName={CompanyName}
        OnlyName="All Cars"
        LatestUpdate="List of All Volkswagen Cars"
        ImageUrl="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/volkswagen.jpg"
        LinkCarName=""
      />
      <Nav />
      <div className="">
        <BrandMainPageAllCars
          CompanyName={CompanyName}
          ThatBrandCars={ThatBrandCars}
        />
      </div>
    </div>
  );
}

export default IndexVolkswagen;
