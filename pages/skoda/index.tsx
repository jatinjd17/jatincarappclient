import React from "react";
import {
  KushaqBasicInfoCard,
  OctaviaBasicInfoCard,
  RapidBasicInfoCard,
  SuperbBasicInfoCard,
} from "../../AllCarBasicInfo/skoda";
import { Kushaq, Octavia, Rapid, Superb } from "../../CarPicsUrl/CarPics";
import {
  TKushaq,
  TOctavia,
  TRapid,
  TSuperb,
} from "../../CarPicsUrl/Thumbnails";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";
import Nav from "../../Components/head";
import Meta from "../../Components/metaSEO";

function IndexSkoda() {
  const CompanyName = "Skoda";

  const ThatBrandCars = {
    car1: RapidBasicInfoCard,
    car2: OctaviaBasicInfoCard,
    car3: SuperbBasicInfoCard,
    car4: KushaqBasicInfoCard,
  };

  return (
    <div>
      <Meta
        CompanyName={CompanyName}
        OnlyName="All Cars"
        LatestUpdate="List of All Skoda Cars"
        ImageUrl="https://i.ibb.co/PFK2zJj/skoda.jpg"
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

export default IndexSkoda;
