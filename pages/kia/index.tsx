import React from "react";
import { Carnival, Seltos, Sonet } from "../../CarPicsUrl/CarPics";
import { TCarnival, TSeltos, TSonet } from "../../CarPicsUrl/Thumbnails";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexKia() {
  const CompanyName = "Kia";

  const ThatBrandCars = {
    car1: [TSonet, "Sonet", "₹ 6.79 Lakh onwards"],
    car2: [TSeltos, "Seltos", "₹ 9.96 Lakh onwards"],
    car3: [TCarnival, "Carnival", "₹ 24.95 Lakh onwards"],
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
