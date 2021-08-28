import React from "react";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexSkoda() {
  const CompanyName = "Skoda";

  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47562/skoda-rapid-tsi-right-front-three-quarter0.jpeg?q=85",
      "Rapid",
      "₹ 7.80 Lakh",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40371/octavia-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Octavia",
      "₹ 26.01 Lakh",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39039/superb-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Superb",
      "₹ 32.02 Lakh",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/44549/kushaq-exterior-right-front-three-quarter-52.jpeg?q=85",
      "Kushaq",
      "₹ 10.51 Lakh",
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

export default IndexSkoda;
