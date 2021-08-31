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
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexTata() {
  const CompanyName = "Tata";

  const ThatBrandCars = {
    car1: [Nexon, "Nexon", "₹ 7.20 Lakh onwards"],
    car2: [Altroz, "Altroz", "₹ 5.80 Lakh onwards"],
    car3: [Safari, "Safari", "₹ 14.99 Lakh onwards"],
    car4: [Harrier, "Harrier", "₹ 14.30 Lakh onwards"],
    car5: [Tiago, "Tiago", "₹ 5.00 Lakh onwards"],
    car6: [Tigor, "Tigor", "₹ 5.60 Lakh onwards"],
    car7: [NexonEV, "Nexon EV", "₹ 13.99 Lakh onwards"],
    car8: [TigorEV, "Tigor EV", "₹ 10.58 Lakh onwards"],
    car9: [TiagoNRG, "Tiago NRG", "₹ 6.57 Lakh onwards"],
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
