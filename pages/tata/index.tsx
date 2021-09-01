import React from "react";
import {
  Altroz,
  Harrier,
  Nexon,
  NexonEV,
  Safari,
  Tiago,
  TiagoNRG,
  Tigor,
  TigorEV,
} from "../../CarPicsUrl/CarPics";
import {
  TAltroz,
  THarrier,
  TNexon,
  TNexonEV,
  TSafari,
  TTiago,
  TTiagoNRG,
  TTigor,
  TTigorEV,
} from "../../CarPicsUrl/Thumbnails";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexTata() {
  const CompanyName = "Tata";

  const ThatBrandCars = {
    car1: [TNexon, "Nexon", "₹ 7.20 Lakh onwards"],
    car2: [TAltroz, "Altroz", "₹ 5.80 Lakh onwards"],
    car3: [TSafari, "Safari", "₹ 14.99 Lakh onwards"],
    car4: [THarrier, "Harrier", "₹ 14.30 Lakh onwards"],
    car5: [TTiago, "Tiago", "₹ 5.00 Lakh onwards"],
    car6: [TTigor, "Tigor", "₹ 5.60 Lakh onwards"],
    car7: [TNexonEV, "Nexon EV", "₹ 13.99 Lakh onwards"],
    car8: [TTigorEV, "Tigor EV", "₹ 10.58 Lakh onwards"],
    car9: [TTiagoNRG, "Tiago NRG", "₹ 6.57 Lakh onwards"],
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

export default IndexTata;
