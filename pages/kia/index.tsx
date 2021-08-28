import React from "react";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexKia() {
  const CompanyName = "Kia";

  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41523/sonet-exterior-right-front-three-quarter-110.jpeg?q=85",
      "Sonet",
      "₹ 6.79 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/33372/seltos-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Seltos",
      "₹ 9.96 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41205/kia-carnival-right-front-three-quarter8.jpeg?q=85",
      "Carnival",
      "₹ 24.95 Lakh onwards",
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

export default IndexKia;
