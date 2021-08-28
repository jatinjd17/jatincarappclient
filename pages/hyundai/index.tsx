import React from "react";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";
import Nav from "../../Components/head";

function IndexHyundai() {
  const CompanyName = "Hyundai";
  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41564/hyundai-creta-right-front-three-quarter9.jpeg?q=85",
      "Creta",
      "₹ 10.15 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/35455/venue-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Venue",
      "₹ 6.99 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40530/i20-exterior-right-front-three-quarter-5.jpeg?q=85",
      "i20",
      "₹ 6.91 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/35465/grand-i10-nios-exterior-right-front-three-quarter-2.jpeg?q=85",
      "i10 Nios",
      "₹ 5.28 Lakh onwards",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41197/hyundai-verna-right-front-three-quarter7.jpeg?q=85",
      "Verna",
      "₹ 9.28 Lakh onwards",
    ],
    car6: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=85",
      "Aura",
      "₹ 6.00 Lakh onwards",
    ],
    car7: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32940/santro-exterior-right-front-three-quarter-138782.jpeg?q=85",
      "Santro",
      "₹ 4.77 Lakh onwards",
    ],
    car8: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/46812/alcazar-exterior-right-front-three-quarter.jpeg?q=85",
      "Alcazar",
      "₹ 16.30 Lakh onwards",
    ],
    car9: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41138/elantra-exterior-right-front-three-quarter-3.jpeg?q=85",
      "Elantra",
      "₹ 17.86 Lakh onwards",
    ],
    car10: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/29580/Hyundai-Kona-Electric-Right-Front-Three-Quarter-162185.jpg?wm=0&q=85",
      "Kona Electric",
      "₹ 23.79 Lakh onwards",
    ],
    car11: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39082/tucson-exterior-right-front-three-quarter.jpeg?q=85",
      "Tucson",
      "₹ 22.69 Lakh onwards",
    ],
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
