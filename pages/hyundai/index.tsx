import React from "react";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";
import Nav from "../../Components/head";
import {
  alcazer,
  Aura,
  Creta,
  Elantra,
  i20,
  KonaEV,
  Nios,
  Santro,
  Tucson,
  Venue,
  Verna,
} from "../../CarPicsUrl/CarPics";
import {
  TAlcazar,
  TAura,
  TCreta,
  TElantra,
  Ti20,
  TKona,
  TNios,
  TSantro,
  TTucson,
  TVenue,
  TVerna,
} from "../../CarPicsUrl/Thumbnails";

function IndexHyundai() {
  const CompanyName = "Hyundai";
  const ThatBrandCars = {
    car1: [TCreta, "Creta", "₹ 10.15 Lakh onwards"],
    car2: [TVenue, "Venue", "₹ 6.99 Lakh onwards"],
    car3: [Ti20, "i20", "₹ 6.91 Lakh onwards"],
    car4: [TNios, "i10 Nios", "₹ 5.28 Lakh onwards"],
    car5: [TVerna, "Verna", "₹ 9.28 Lakh onwards"],
    car6: [TAura, "Aura", "₹ 6.00 Lakh onwards"],
    car7: [TSantro, "Santro", "₹ 4.77 Lakh onwards"],
    car8: [TAlcazar, "Alcazar", "₹ 16.30 Lakh onwards"],
    car9: [TElantra, "Elantra", "₹ 17.86 Lakh onwards"],
    car10: [TKona, "Kona Electric", "₹ 23.79 Lakh onwards"],
    car11: [TTucson, "Tucson", "₹ 22.69 Lakh onwards"],
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

export default IndexHyundai;
