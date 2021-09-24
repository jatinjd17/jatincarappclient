import React from "react";
// import { Link } from "react-scroll";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import { ClientProduction } from "../../actions/ApiCarsBlogs";

function MoreCars({ CompanyName, ThatBrandCars }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div>
        <div className="ml-60 sm:ml-1 md:ml-36 text-2xl font-bold">
          More {CompanyName} Cars
        </div>
        <div className="mr-20 ml-60 md:mx-2">
          <Carousel responsive={responsive}>
            <div className="m-8 sm:m-3 border-2 shadow-lg">
              <Link
                href={`${ClientProduction}/${
                  ThatBrandCars.car1[3]
                }/${ThatBrandCars.car1[1].toLowerCase()}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                  <div>
                    <img
                      className="object-cover w-full h-36 sm:h-24"
                      src={ThatBrandCars.car1[0]}
                      alt="nnn"
                    />
                  </div>
                  <div className="text-center text-xl font-bold">
                    {ThatBrandCars.car1[1]}
                  </div>
                  <div className="flex flex-row">
                    <div className="text-md font-bold">
                      {ThatBrandCars.car1[2]}
                    </div>
                    {/* <div className="text-md text-gray-500 ml-2 mt-0">
                      Onwards
                    </div> */}
                  </div>

                  <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                </div>
              </Link>
            </div>
            {ThatBrandCars.car2 ? (
              <div className="m-8 sm:m-3 border-2 shadow-lg">
                <Link
                  href={`${ClientProduction}/${
                    ThatBrandCars.car2[3]
                  }/${ThatBrandCars.car2[1].toLowerCase()}`}
                >
                  <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                    <div>
                      <img
                        className="object-cover w-full h-36 sm:h-24"
                        src={ThatBrandCars.car2[0]}
                        alt="nnn"
                      />
                    </div>
                    <div className="text-center text-xl font-bold">
                      {ThatBrandCars.car2[1]}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-md font-bold">
                        {ThatBrandCars.car2[2]}
                      </div>
                      {/* <div className="text-md text-gray-500 ml-2 mt-0">
                        Onwards
                      </div> */}
                    </div>

                    <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                  </div>
                </Link>
              </div>
            ) : null}

            {ThatBrandCars.car3 ? (
              <div className="m-8 sm:m-3 border-2 shadow-lg">
                <Link
                  href={`${ClientProduction}/${
                    ThatBrandCars.car3[3]
                  }/${ThatBrandCars.car3[1].toLowerCase()}`}
                >
                  <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                    <div>
                      <img
                        className="object-cover w-full h-36 sm:h-24"
                        src={ThatBrandCars.car3[0]}
                        alt="nnn"
                      />
                    </div>
                    <div className="text-center text-xl font-bold">
                      {ThatBrandCars.car3[1]}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-md font-bold">
                        {ThatBrandCars.car3[2]}
                      </div>
                      {/* <div className="text-md text-gray-500 ml-2 mt-0">
                        Onwards
                      </div> */}
                    </div>

                    <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                  </div>
                </Link>
              </div>
            ) : null}

            {ThatBrandCars.car4 ? (
              <div className="m-8 sm:m-3 border-2 shadow-lg">
                <Link
                  href={`${ClientProduction}/${
                    ThatBrandCars.car4[3]
                  }/${ThatBrandCars.car4[1].toLowerCase()}`}
                >
                  <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                    <div>
                      <img
                        className="object-cover w-full h-36 sm:h-24"
                        src={ThatBrandCars.car4[0]}
                        alt="nnn"
                      />
                    </div>
                    <div className="text-center text-xl font-bold">
                      {ThatBrandCars.car4[1]}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-md font-bold">
                        {ThatBrandCars.car4[2]}
                      </div>
                      {/* <div className="text-md text-gray-500 ml-2 mt-0">
                        Onwards
                      </div> */}
                    </div>

                    <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                  </div>
                </Link>
              </div>
            ) : null}
            {ThatBrandCars.car5 ? (
              <div className="m-8 sm:m-3 border-2 shadow-lg">
                <Link
                  href={`${ClientProduction}/${
                    ThatBrandCars.car5[3]
                  }/${ThatBrandCars.car5[1].toLowerCase()}`}
                >
                  <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                    <div>
                      <img
                        className="object-cover w-full h-36 sm:h-24"
                        src={ThatBrandCars.car5[0]}
                        alt="nnn"
                      />
                    </div>
                    <div className="text-center text-xl font-bold">
                      {ThatBrandCars.car5[1]}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-md font-bold">
                        {ThatBrandCars.car5[2]}
                      </div>
                      {/* <div className="text-md text-gray-500 ml-2 mt-0">
                        Onwards
                      </div> */}
                    </div>

                    <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                  </div>
                </Link>
              </div>
            ) : null}
            {ThatBrandCars.car6 ? (
              <div className="m-8 sm:m-3 border-2 shadow-lg">
                <Link
                  href={`${ClientProduction}/${
                    ThatBrandCars.car6[3]
                  }/${ThatBrandCars.car6[1].toLowerCase()}`}
                >
                  <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                    <div>
                      <img
                        className="object-cover w-full h-36 sm:h-24"
                        src={ThatBrandCars.car6[0]}
                        alt="nnn"
                      />
                    </div>
                    <div className="text-center text-xl font-bold">
                      {ThatBrandCars.car6[1]}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-md font-bold">
                        {ThatBrandCars.car6[2]}
                      </div>
                      {/* <div className="text-md text-gray-500 ml-2 mt-0">
                        Onwards
                      </div> */}
                    </div>

                    <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                  </div>
                </Link>
              </div>
            ) : null}
            {ThatBrandCars.car7 ? (
              <div className="m-8 sm:m-3 border-2 shadow-lg">
                <Link
                  href={`${ClientProduction}/${
                    ThatBrandCars.car7[3]
                  }/${ThatBrandCars.car7[1].toLowerCase()}`}
                >
                  <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                    <div>
                      <img
                        className="object-cover w-full h-36 sm:h-24"
                        src={ThatBrandCars.car7[0]}
                        alt="nnn"
                      />
                    </div>
                    <div className="text-center text-xl font-bold">
                      {ThatBrandCars.car7[1]}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-md font-bold">
                        {ThatBrandCars.car7[2]}
                      </div>
                      {/* <div className="text-md text-gray-500 ml-2 mt-0">
                        Onwards
                      </div> */}
                    </div>

                    <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                  </div>
                </Link>
              </div>
            ) : null}
            {ThatBrandCars.car8 ? (
              <div className="m-8 sm:m-3 border-2 shadow-lg">
                <Link
                  href={`${ClientProduction}/${
                    ThatBrandCars.car8[3]
                  }/${ThatBrandCars.car8[1].toLowerCase()}`}
                >
                  <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                    <div>
                      <img
                        className="object-cover w-full h-36 sm:h-24"
                        src={ThatBrandCars.car8[0]}
                        alt="nnn"
                      />
                    </div>
                    <div className="text-center text-xl font-bold">
                      {ThatBrandCars.car8[1]}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-md font-bold">
                        {ThatBrandCars.car8[2]}
                      </div>
                      {/* <div className="text-md text-gray-500 ml-2 mt-0">
                        Onwards
                      </div> */}
                    </div>

                    <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                  </div>
                </Link>
              </div>
            ) : null}
            {ThatBrandCars.car9 ? (
              <div className="m-8 sm:m-3 border-2 shadow-lg">
                <Link
                  href={`${ClientProduction}/${
                    ThatBrandCars.car9[3]
                  }/${ThatBrandCars.car9[1].toLowerCase()}`}
                >
                  <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                    <div>
                      <img
                        className="object-cover w-full h-36 sm:h-24"
                        src={ThatBrandCars.car9[0]}
                        alt="nnn"
                      />
                    </div>
                    <div className="text-center text-xl font-bold">
                      {ThatBrandCars.car9[1]}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-md font-bold">
                        {ThatBrandCars.car9[2]}
                      </div>
                      {/* <div className="text-md text-gray-500 ml-2 mt-0">
                        Onwards
                      </div> */}
                    </div>

                    <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                  </div>
                </Link>
              </div>
            ) : null}
            {ThatBrandCars.car10 ? (
              <div className="m-8 sm:m-3 border-2 shadow-lg">
                <Link
                  href={`${ClientProduction}/${
                    ThatBrandCars.car10[3]
                  }/${ThatBrandCars.car10[1].toLowerCase()}`}
                >
                  <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                    <div>
                      <img
                        className="object-cover w-full h-36 sm:h-24"
                        src={ThatBrandCars.car10[0]}
                        alt="nnn"
                      />
                    </div>
                    <div className="text-center text-xl font-bold">
                      {ThatBrandCars.car10[1]}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-md font-bold">
                        {ThatBrandCars.car10[2]}
                      </div>
                      {/* <div className="text-md text-gray-500 ml-2 mt-0">
                        Onwards
                      </div> */}
                    </div>

                    <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                  </div>
                </Link>
              </div>
            ) : null}
            {ThatBrandCars.car11 ? (
              <div className="m-8 sm:m-3 border-2 shadow-lg">
                <Link
                  href={`${ClientProduction}/${
                    ThatBrandCars.car11[3]
                  }/${ThatBrandCars.car11[1].toLowerCase()}`}
                >
                  <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                    <div>
                      <img
                        className="object-cover w-full h-36 sm:h-24"
                        src={ThatBrandCars.car11[0]}
                        alt="nnn"
                      />
                    </div>
                    <div className="text-center text-xl font-bold">
                      {ThatBrandCars.car11[1]}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-md font-bold">
                        {ThatBrandCars.car11[2]}
                      </div>
                      {/* <div className="text-md text-gray-500 ml-2 mt-0">
                        Onwards
                      </div> */}
                    </div>

                    <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                  </div>
                </Link>
              </div>
            ) : null}
            {ThatBrandCars.car12 ? (
              <div className="m-8 sm:m-3 border-2 shadow-lg">
                <Link
                  href={`${ClientProduction}/${
                    ThatBrandCars.car12[3]
                  }/${ThatBrandCars.car12[1].toLowerCase()}`}
                >
                  <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                    <div>
                      <img
                        className="object-cover w-full h-36 sm:h-24"
                        src={ThatBrandCars.car12[0]}
                        alt="nnn"
                      />
                    </div>
                    <div className="text-center text-xl font-bold">
                      {ThatBrandCars.car12[1]}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-md font-bold">
                        {ThatBrandCars.car12[2]}
                      </div>
                      {/* <div className="text-md text-gray-500 ml-2 mt-0">
                        Onwards
                      </div> */}
                    </div>

                    <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                  </div>
                </Link>
              </div>
            ) : null}
            {ThatBrandCars.car13 ? (
              <div className="m-8 sm:m-3 border-2 shadow-lg">
                <Link
                  href={`${ClientProduction}/${
                    ThatBrandCars.car13[3]
                  }/${ThatBrandCars.car13[1].toLowerCase()}`}
                >
                  <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                    <div>
                      <img
                        className="object-cover w-full h-36 sm:h-24"
                        src={ThatBrandCars.car13[0]}
                        alt="nnn"
                      />
                    </div>
                    <div className="text-center text-xl font-bold">
                      {ThatBrandCars.car13[1]}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-md font-bold">
                        {ThatBrandCars.car13[2]}
                      </div>
                      {/* <div className="text-md text-gray-500 ml-2 mt-0">
                        Onwards
                      </div> */}
                    </div>

                    <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                  </div>
                </Link>
              </div>
            ) : null}
            {ThatBrandCars.car14 ? (
              <div className="m-8 sm:m-3 border-2 shadow-lg">
                <Link
                  href={`${ClientProduction}/${
                    ThatBrandCars.car14[3]
                  }/${ThatBrandCars.car14[1].toLowerCase()}`}
                >
                  <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                    <div>
                      <img
                        className="object-cover w-full h-36 sm:h-24"
                        src={ThatBrandCars.car14[0]}
                        alt="nnn"
                      />
                    </div>
                    <div className="text-center text-xl font-bold">
                      {ThatBrandCars.car14[1]}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-md font-bold">
                        {ThatBrandCars.car14[2]}
                      </div>
                      {/* <div className="text-md text-gray-500 ml-2 mt-0">
                        Onwards
                      </div> */}
                    </div>

                    <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                  </div>
                </Link>
              </div>
            ) : null}
            {ThatBrandCars.car15 ? (
              <div className="m-8 sm:m-3 border-2 shadow-lg">
                <Link
                  href={`${ClientProduction}/${
                    ThatBrandCars.car15[3]
                  }/${ThatBrandCars.car15[1].toLowerCase()}`}
                >
                  <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                    <div>
                      <img
                        className="object-cover w-full h-36 sm:h-24"
                        src={ThatBrandCars.car15[0]}
                        alt="nnn"
                      />
                    </div>
                    <div className="text-center text-xl font-bold">
                      {ThatBrandCars.car15[1]}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-md font-bold">
                        {ThatBrandCars.car15[2]}
                      </div>
                      {/* <div className="text-md text-gray-500 ml-2 mt-0">
                        Onwards
                      </div> */}
                    </div>

                    <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                  </div>
                </Link>
              </div>
            ) : null}
            {ThatBrandCars.car16 ? (
              <div className="m-8 sm:m-3 border-2 shadow-lg">
                <Link
                  href={`${ClientProduction}/${
                    ThatBrandCars.car16[3]
                  }/${ThatBrandCars.car16[1].toLowerCase()}`}
                >
                  <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                    <div>
                      <img
                        className="object-cover w-full h-36 sm:h-24"
                        src={ThatBrandCars.car16[0]}
                        alt="nnn"
                      />
                    </div>
                    <div className="text-center text-xl font-bold">
                      {ThatBrandCars.car16[1]}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-md font-bold">
                        {ThatBrandCars.car16[2]}
                      </div>
                      {/* <div className="text-md text-gray-500 ml-2 mt-0">
                        Onwards
                      </div> */}
                    </div>

                    <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                  </div>
                </Link>
              </div>
            ) : null}
            {ThatBrandCars.car17 ? (
              <div className="m-8 sm:m-3 border-2 shadow-lg">
                <Link
                  href={`${ClientProduction}/${
                    ThatBrandCars.car17[3]
                  }/${ThatBrandCars.car17[1].toLowerCase()}`}
                >
                  <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                    <div>
                      <img
                        className="object-cover w-full h-36 sm:h-24"
                        src={ThatBrandCars.car17[0]}
                        alt="nnn"
                      />
                    </div>
                    <div className="text-center text-xl font-bold">
                      {ThatBrandCars.car17[1]}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-md font-bold">
                        {ThatBrandCars.car17[2]}
                      </div>
                      {/* <div className="text-md text-gray-500 ml-2 mt-0">
                        Onwards
                      </div> */}
                    </div>

                    <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                  </div>
                </Link>
              </div>
            ) : null}
            {ThatBrandCars.car18 ? (
              <div className="m-8 sm:m-3 border-2 shadow-lg">
                <Link
                  href={`${ClientProduction}/${
                    ThatBrandCars.car18[3]
                  }/${ThatBrandCars.car18[1].toLowerCase()}`}
                >
                  <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                    <div>
                      <img
                        className="object-cover w-full h-36 sm:h-24"
                        src={ThatBrandCars.car18[0]}
                        alt="nnn"
                      />
                    </div>
                    <div className="text-center text-xl font-bold">
                      {ThatBrandCars.car18[1]}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-md font-bold">
                        {ThatBrandCars.car18[2]}
                      </div>
                      {/* <div className="text-md text-gray-500 ml-2 mt-0">
                        Onwards
                      </div> */}
                    </div>

                    <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                  </div>
                </Link>
              </div>
            ) : null}
            {ThatBrandCars.car19 ? (
              <div className="m-8 sm:m-3 border-2 shadow-lg">
                <Link
                  href={`${ClientProduction}/${
                    ThatBrandCars.car19[3]
                  }/${ThatBrandCars.car19[1].toLowerCase()}`}
                >
                  <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                    <div>
                      <img
                        className="object-cover w-full h-36 sm:h-24"
                        src={ThatBrandCars.car19[0]}
                        alt="nnn"
                      />
                    </div>
                    <div className="text-center text-xl font-bold">
                      {ThatBrandCars.car19[1]}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-md font-bold">
                        {ThatBrandCars.car19[2]}
                      </div>
                      {/* <div className="text-md text-gray-500 ml-2 mt-0">
                        Onwards
                      </div> */}
                    </div>

                    <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                  </div>
                </Link>
              </div>
            ) : null}
            {ThatBrandCars.car20 ? (
              <div className="m-8 sm:m-3 border-2 shadow-lg">
                <Link
                  href={`${ClientProduction}/${
                    ThatBrandCars.car20[3]
                  }/${ThatBrandCars.car20[1].toLowerCase()}`}
                >
                  <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                    <div>
                      <img
                        className="object-cover w-full h-36 sm:h-24"
                        src={ThatBrandCars.car20[0]}
                        alt="nnn"
                      />
                    </div>
                    <div className="text-center text-xl font-bold">
                      {ThatBrandCars.car20[1]}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-md font-bold">
                        {ThatBrandCars.car20[2]}
                      </div>
                      {/* <div className="text-md text-gray-500 ml-2 mt-0">
                        Onwards
                      </div> */}
                    </div>

                    <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                  </div>
                </Link>
              </div>
            ) : null}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default MoreCars;
