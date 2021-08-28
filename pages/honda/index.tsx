import React from "react";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexHonda() {
  const CompanyName = "Honda";

  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/33276/amaze-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Amaze",
      "₹ 6.34 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40535/all-new-city-exterior-right-front-three-quarter.jpeg?q=85",
      "City",
      "₹ 11.19 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45732/wr-v-exterior-right-front-three-quarter.jpeg?q=85",
      "WRV",
      "₹ 8.90 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/46891/jazz-exterior-right-front-three-quarter.jpeg?q=85",
      "Jazz",
      "₹ 7.75 Lakh onwards",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/26755/city-4th-generation-exterior-right-front-three-quarter.jpeg?q=85",
      "City 4th Gen",
      "₹ 9.33 Lakh onwards",
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

export default IndexHonda;
