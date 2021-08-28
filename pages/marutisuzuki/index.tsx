import React from "react";
import Link from "next/link";
import BrandMainPageAllCars from "../../Components/SpecificCar/BrandMainPageAllCars";

function IndexMaruti() {
  const CompanyName = "MarutiSuzuki";

  const ThatBrandCars = {
    car1: [
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201911/0G6A5935_1.png?LkCz.7ZUenqnJF.SOBjEMulD..iElUYe&size=770:433",
      "S-presso",
      "₹ 3.77 Lakh onwards",
    ],
    car2: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbWFsSvTTFc7n__WfN3PJOWp9iBEqMvmFzg&usqp=CAU",
      "Celerio",
      "₹4.66 Lakhs onwards",
    ],
    car3: [
      "https://www.shivamautozone.com/wp-content/uploads/2019/01/SUPERIOR-WHITE.png",
      "Wagon R",
      "₹ 4.79 Lakh onwards",
    ],
    car4: [
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/8378/1614747593719/front-left-side-47.jpg",
      "Swift",
      " ₹ 5.81 Lakh onwards",
    ],
  };

  return (
    <div>
      <BrandMainPageAllCars
        CompanyName={CompanyName}
        ThatBrandCars={ThatBrandCars}
      />
    </div>
  );
}

export default IndexMaruti;
