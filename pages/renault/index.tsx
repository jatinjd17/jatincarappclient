import React from "react";
import {
  DusterBasicInfoCard,
  KigerBasicInfoCard,
  KwidBasicInfoCard,
  TriberBasicInfoCard,
} from "../../AllCarBasicInfo/renault";
import { Duster, Kiger, Kwid, Triber } from "../../CarPicsUrl/CarPics";
import { TDuster, TKiger, TKwid, TTriber } from "../../CarPicsUrl/Thumbnails";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexRenault() {
  const CompanyName = "Renault";

  const ThatBrandCars = {
    car1: KwidBasicInfoCard,
    car2: TriberBasicInfoCard,
    car3: KigerBasicInfoCard,
    car4: DusterBasicInfoCard,
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

export default IndexRenault;
