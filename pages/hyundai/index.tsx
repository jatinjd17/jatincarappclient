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

function IndexHyundai() {
  const CompanyName = "Hyundai";
  const ThatBrandCars = {
    car1: [Creta, "Creta", "₹ 10.15 Lakh onwards"],
    car2: [Venue, "Venue", "₹ 6.99 Lakh onwards"],
    car3: [i20, "i20", "₹ 6.91 Lakh onwards"],
    car4: [Nios, "i10 Nios", "₹ 5.28 Lakh onwards"],
    car5: [Verna, "Verna", "₹ 9.28 Lakh onwards"],
    car6: [Aura, "Aura", "₹ 6.00 Lakh onwards"],
    car7: [Santro, "Santro", "₹ 4.77 Lakh onwards"],
    car8: [alcazer, "Alcazar", "₹ 16.30 Lakh onwards"],
    car9: [Elantra, "Elantra", "₹ 17.86 Lakh onwards"],
    car10: [KonaEV, "Kona Electric", "₹ 23.79 Lakh onwards"],
    car11: [Tucson, "Tucson", "₹ 22.69 Lakh onwards"],
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
