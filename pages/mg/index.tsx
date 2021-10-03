import React from "react";
import {
  GlosterBasicInfoCard,
  HectorBasicInfoCard,
  HectorPlusBasicInfoCard,
  ZSEVBasicInfoCard,
} from "../../AllCarBasicInfo/mg";
import { Gloster, Hector, HectorPlus, ZSEV } from "../../CarPicsUrl/CarPics";
import {
  TGloster,
  THector,
  THectorPlus,
  TZSEV,
} from "../../CarPicsUrl/Thumbnails";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";
import Nav from "../../Components/head";
import Meta from "../../Components/metaSEO";

function IndexMG() {
  const CompanyName = "MG";

  const ThatBrandCars = {
    car1: HectorBasicInfoCard,
    car2: HectorPlusBasicInfoCard,
    car3: GlosterBasicInfoCard,
    car4: ZSEVBasicInfoCard,
  };

  return (
    <div>
      <Meta
        CompanyName={CompanyName}
        OnlyName="All Cars"
        LatestUpdate="List of All MG Cars"
        ImageUrl="https://i.ibb.co/Dkb5qsc/mg.jpg"
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

export default IndexMG;
