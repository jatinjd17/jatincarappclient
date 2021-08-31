import React from "react";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexMahindra() {
  const CompanyName = "Mahindra";

  const ThatBrandCars = {
    car1: [
      "https://i.ibb.co/rsXJVdx/scorpio.png",
      "Scorpio",
      "₹ 12.66 Lakh onwards",
    ],
    car2: [
      "https://i.ibb.co/D5F3qVf/xuv500.png",
      "XUV 500",
      "₹ 14.27 Lakh onwards",
    ],
    car3: [
      "https://i.ibb.co/mRnRdDg/mahindra-bolero.webp",
      "Bolero",
      "₹ 8.64 Lakh onwards",
    ],
    car4: [
      "https://i.ibb.co/qB2hDMC/alturas.png",
      "Alturas G4",
      "₹ 28.77 Lakh onwards",
    ],
    car5: [
      "https://i.ibb.co/rxrpTCb/mahindra.png",
      "Kuv 100",
      "₹ 6.10 Lakh onwards",
    ],
    car6: [
      "https://i.ibb.co/RYvTKB2/marazzo.png",
      "Marazzo",
      "₹ 12.30 Lakh onwards",
    ],
    car7: [
      "https://i.ibb.co/znxvGDC/thar.webp",
      "Thar",
      "₹ 12.78 Lakh onwards",
    ],
    car8: [
      "https://i.ibb.co/0yNZPp2/xuv300.png",
      "Xuv 300",
      "₹ 7.96 Lakh onwards",
    ],
    car9: [
      "https://i.ibb.co/f8FyrwJ/bolero-neo.webp",
      "Bolero Neo",
      "₹ 8.48 Lakh onwards",
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

export default IndexMahindra;
