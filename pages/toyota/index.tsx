import React from "react";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexToyota() {
  const CompanyName = "Toyota";

  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Innova",
      "₹ 16.82 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg?q=85",
      "Fortuner",
      "₹ 30.36 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47016/urban-cruiser-exterior-right-front-three-quarter.jpeg?q=85",
      "Urban Cruiser",
      "₹ 8.63 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39545/glanza-exterior-right-front-three-quarter-159523.jpeg?q=85",
      "Glanza",
      "₹ 7.34 Lakh onwards",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32943/yaris-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Yaris",
      "₹ 9.17 Lakh onwards",
    ],
    car6: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41217/toyota-vellfire-right-front-three-quarter5.jpeg?q=85",
      "Vellfire",
      "₹ 89.89 Lakh onwards",
    ],
    car7: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/37561/Toyota-Camry-Right-Front-Three-Quarter-146683.jpg?wm=0&q=85",
      "Camry",
      "₹ 40.61 Lakh onwards",
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

export default IndexToyota;
