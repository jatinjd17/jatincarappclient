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
