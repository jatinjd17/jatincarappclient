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
