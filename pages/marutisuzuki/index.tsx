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

function IndexMaruti() {
  const CompanyName = "MarutiSuzuki";

  const ThatBrandCars = {
    car1: [TSpresso, "S-presso", "₹ 3.77 Lakh onwards"],
    car2: [TCelerio, "Celerio", "₹4.66 Lakhs onwards"],
    car3: [TWaganr, "WaganR", "₹ 4.79 Lakh onwards"],
    car4: [TSwift, "Swift", " ₹ 5.81 Lakh onwards"],
    car5: [TBaleno, "Baleno", " ₹ 5.97 Lakh onwards"],
    car6: [TErtiga, "Ertiga", " ₹ 7.78 Lakh onwards"],
    car7: [TBrezza, "Brezza", " ₹ 7.51 Lakh onwards"],
    car8: [TAlto, "Alto", " ₹ 3.00 Lakh onwards"],

    car9: [TDzire, "Dzire", " ₹ 5.98 Lakh onwards"],
    car10: [TXL6, "XL6", " ₹ 9.92 Lakh onwards"],
    car11: [TIgnis, "Ignis", " ₹ 4.95 Lakh onwards"],
    car12: [TEeco, "Eeco", " ₹ 4.08 Lakh onwards"],
    car13: [TCiaz, "Ciaz", " ₹ 8.51 Lakh onwards"],
    car14: [TScross, "SCross", " ₹ 8.39 Lakh onwards"],
    car15: [TCelerioX, "CelerioX", " ₹ 5.12 Lakh onwards"],
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
