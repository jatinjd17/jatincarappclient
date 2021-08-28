import React from "react";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexRenault() {
  const CompanyName = "Renault";

  const ThatBrandCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/48543/kwid-exterior-right-front-three-quarter-17.jpeg?q=85",
      "Kwid",
      "₹ 3.31 Lakh",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39276/triber-exterior-right-front-three-quarter-168563.jpeg?q=85",
      "Triber",
      "₹ 5.49 Lakh",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/44407/kiger-exterior-right-front-three-quarter-12.jpeg?q=85",
      "Kiger",
      "₹ 5.64 Lakh",
    ],
    car4: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Duster/7704/1598257607089/front-left-side-47.jpg?tr=w-456",
      "Duster",
      "₹ 9.84 Lakh",
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

export default IndexRenault;
