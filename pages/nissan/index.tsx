import React from "react";
import {
  GTRBasicInfoCard,
  KicksBasicInfoCard,
  MagniteBasicInfoCard,
} from "../../AllCarBasicInfo/nissan";
import { GTR, Kicks, Magnite } from "../../CarPicsUrl/CarPics";
import { TGTR, TKicks, TMagnite } from "../../CarPicsUrl/Thumbnails";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexNissa() {
  const CompanyName = "Nissan";
  const ThatBrandCars = {
    car1: MagniteBasicInfoCard,
    car2: KicksBasicInfoCard,
    car3: GTRBasicInfoCard,
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

export default IndexNissa;
