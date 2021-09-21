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
