import React from "react";
import {
  CarnivalBasicInfoCard,
  SeltosBasicInfoCard,
  SonetBasicInfoCard,
} from "../../AllCarBasicInfo/kia";
import { Carnival, Seltos, Sonet } from "../../CarPicsUrl/CarPics";
import { TCarnival, TSeltos, TSonet } from "../../CarPicsUrl/Thumbnails";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";
import Nav from "../../Components/head";

function IndexKia() {
  const CompanyName = "Kia";

  const ThatBrandCars = {
    car1: SonetBasicInfoCard,
    car2: SeltosBasicInfoCard,
    car3: CarnivalBasicInfoCard,
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

export default IndexKia;
