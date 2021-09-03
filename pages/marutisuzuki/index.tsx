import React from "react";
import Link from "next/link";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";
import {
  Alto,
  Baleno,
  Brezza,
  Celerio,
  CelerioX,
  Ciaz,
  Dzire,
  Eeco,
  Ertiga,
  Ignis,
  Scross,
  Spresso,
  Swift,
  WaganR,
  Xl6,
} from "../../CarPicsUrl/CarPics";
import {
  TAlto,
  TBaleno,
  TBrezza,
  TCelerio,
  TCelerioX,
  TCiaz,
  TDzire,
  TEeco,
  TErtiga,
  TIgnis,
  TScross,
  TSpresso,
  TSwift,
  TWaganr,
  TXL6,
} from "../../CarPicsUrl/Thumbnails";
import {
  AltoBasicInfoCard,
  BalenoBasicInfoCard,
  BrezzaBasicInfoCard,
  CelerioBasicInfoCard,
  CelerioXBasicInfoCard,
  CiazBasicInfoCard,
  DzireBasicInfoCard,
  EecoBasicInfoCard,
  ErtigaBasicInfoCard,
  IgnisBasicInfoCard,
  ScrossBasicInfoCard,
  SpressoBasicInfoCard,
  SwiftBasicInfoCard,
  WaganRBasicInfoCard,
  XL6BasicInfoCard,
} from "../../AllCarBasicInfo/marutisuzuki";

function IndexMaruti() {
  const CompanyName = "MarutiSuzuki";

  const ThatBrandCars = {
    car1: SpressoBasicInfoCard,
    car2: CelerioBasicInfoCard,
    car3: WaganRBasicInfoCard,
    car4: SwiftBasicInfoCard,
    car5: BalenoBasicInfoCard,
    car6: ErtigaBasicInfoCard,
    car7: BrezzaBasicInfoCard,
    car8: AltoBasicInfoCard,
    car9: DzireBasicInfoCard,
    car10: XL6BasicInfoCard,
    car11: IgnisBasicInfoCard,
    car12: EecoBasicInfoCard,
    car13: CiazBasicInfoCard,
    car14: ScrossBasicInfoCard,
    car15: CelerioXBasicInfoCard,
  };

  return (
    <div>
      <BrandMainPageAllCars
        CompanyName={CompanyName}
        ThatBrandCars={ThatBrandCars}
      />
    </div>
  );
}

export default IndexMaruti;
