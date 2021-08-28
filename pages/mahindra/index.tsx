import React from "react";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexMahindra() {
  const CompanyName = "Mahindra";

  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/31883/scorpio-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Scorpio",
      "₹ 12.66 Lakh onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/34024/xuv500-exterior-right-front-three-quarter-3.jpeg?q=85",
      "XUV 500",
      "₹ 14.27 Lakh onwards",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45933/mahindra-bolero-right-front-three-quarter1.jpeg?q=85",
      "Bolero",
      "₹ 8.64 Lakh onwards",
    ],
    car4: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/33266/alturas-g4-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Alturas G4",
      "₹ 28.77 Lakh onwards",
    ],
    car5: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/21497/kuv100-nxt-exterior-right-front-three-quarter-64047.jpeg?q=85",
      "Kuv 100",
      "₹ 6.10 Lakh onwards",
    ],
    car6: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/49114/marazzo-exterior-right-front-three-quarter-4.jpeg?q=85",
      "Marazzo",
      "₹ 12.30 Lakh onwards",
    ],
    car7: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/thar-exterior-right-front-three-quarter-11.jpeg?q=85",
      "Thar",
      "₹ 12.78 Lakh onwards",
    ],
    car8: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/26918/xuv300-exterior-right-front-three-quarter-148706.jpeg?q=85",
      "Xuv 300",
      "₹ 7.96 Lakh onwards",
    ],
    car9: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/97853/bolero-neo-exterior-right-front-three-quarter-2.jpeg?q=85",
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
