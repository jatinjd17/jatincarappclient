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

function IndexMaruti() {
  const CompanyName = "MarutiSuzuki";

  const ThatBrandCars = {
    car1: [Spresso, "S-presso", "₹ 3.77 Lakh onwards"],
    car2: [Celerio, "Celerio", "₹4.66 Lakhs onwards"],
    car3: [WaganR, "WaganR", "₹ 4.79 Lakh onwards"],
    car4: [Swift, "Swift", " ₹ 5.81 Lakh onwards"],
    car5: [Baleno, "Baleno", " ₹ 5.97 Lakh onwards"],
    car6: [Ertiga, "Ertiga", " ₹ 7.78 Lakh onwards"],
    car7: [Brezza, "Brezza", " ₹ 7.51 Lakh onwards"],
    car8: [Alto, "Alto", " ₹ 3.00 Lakh onwards"],

    car9: [Dzire, "Dzire", " ₹ 5.98 Lakh onwards"],
    car10: [Xl6, "XL6", " ₹ 9.92 Lakh onwards"],
    car11: [Ignis, "Ignis", " ₹ 4.95 Lakh onwards"],
    car12: [Eeco, "Eeco", " ₹ 4.08 Lakh onwards"],
    car13: [Ciaz, "Ciaz", " ₹ 8.51 Lakh onwards"],
    car14: [Scross, "SCross", " ₹ 8.39 Lakh onwards"],
    car15: [CelerioX, "CelerioX", " ₹ 5.12 Lakh onwards"],
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
