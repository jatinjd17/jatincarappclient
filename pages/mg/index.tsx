import React from "react";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexMG() {
  const CompanyName = "MG";

  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/52565/hector-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Hector",
      "₹ 13.18 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45184/hector-plus-exterior-right-front-three-quarter-7.jpeg?q=85",
      "Hector Plus",
      "₹ 13.63 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39348/zs-ev-exterior-right-front-three-quarter-2.jpeg?q=85",
      "ZS EV",
      "₹ 21.00 Lakh onwards",
    ],
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
