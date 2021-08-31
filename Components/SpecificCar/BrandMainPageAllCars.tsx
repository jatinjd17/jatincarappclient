import React from "react";
import Link from "next/link";
import Carousel from "react-multi-carousel";

function BrandMainPageAllCars({ CompanyName, ThatBrandCars }) {
  // const LowercaseCompanyName = str.

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
      items: 1,
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
        <div className="ml-60 sm:ml-1 md:ml-36 text-4xl mt-4 font-semibold ">
          All <b> {CompanyName} </b>Cars
        </div>
        <div className=" ml-56 mr-56 md:ml-2 md:mr-2 md:mx-1 grid grid-cols-3 sm:grid-cols-2 ">
          <div className="m-8 md:m-1 border-2 shadow-lg bg-gray-200 hover:shadow-2xl ">
            <Link
              href={`/${CompanyName.toLowerCase()}/${ThatBrandCars.car1[1]
                .toLowerCase()
                .replace(/ /g, "")}`}
            >
              <div className="grid grid-cols-1 bg-gray-200 ">
                <div>
                  <img src={ThatBrandCars.car1[0]} alt="nnn" />
                </div>
                <div className="text-center text-xl font-bold">
                  {ThatBrandCars.car1[1]}
                </div>
                <div className="flex flex-row">
                  <div className="text-md font-bold">
                    {ThatBrandCars.car1[2]}
                  </div>
                  {/* <div className="text-md text-gray-500 ml-2 mt-0">Onwards</div> */}
                </div>

                <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
              </div>
            </Link>
          </div>
          {ThatBrandCars.car2 ? (
            <div className="m-8 md:m-1 border-2 shadow-lg bg-gray-200 hover:shadow-2xl ">
              <Link
                href={`/${CompanyName.toLowerCase()}/${ThatBrandCars.car2[1]
                  .toLowerCase()
                  .replace(/ /g, "")}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 ">
                  <div>
                    <img src={ThatBrandCars.car2[0]} alt="nnn" />
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
            <div className="m-8 md:m-1 border-2 shadow-lg bg-gray-200 hover:shadow-2xl">
              <Link
                href={`/${CompanyName.toLowerCase()}/${ThatBrandCars.car3[1]
                  .toLowerCase()
                  .replace(/ /g, "")}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 ">
                  <div>
                    <img src={ThatBrandCars.car3[0]} alt="nnn" />
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
            <div className="m-8 md:m-1 border-2 shadow-lg bg-gray-200 hover:shadow-2xl">
              <Link
                href={`/${CompanyName.toLowerCase()}/${ThatBrandCars.car4[1]
                  .toLowerCase()
                  .replace(/ /g, "")}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 ">
                  <div>
                    <img src={ThatBrandCars.car4[0]} alt="nnn" />
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
            <div className="m-8 md:m-1 border-2 shadow-lg bg-gray-200 hover:shadow-2xl">
              <Link
                href={`/${CompanyName.toLowerCase()}/${ThatBrandCars.car5[1]
                  .toLowerCase()
                  .replace(/ /g, "")}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 ">
                  <div>
                    <img src={ThatBrandCars.car5[0]} alt="nnn" />
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
            <div className="m-8 md:m-1 border-2 shadow-lg bg-gray-200 hover:shadow-2xl">
              <Link
                href={`/${CompanyName.toLowerCase()}/${ThatBrandCars.car6[1]
                  .toLowerCase()
                  .replace(/ /g, "")}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 ">
                  <div>
                    <img src={ThatBrandCars.car6[0]} alt="nnn" />
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
            <div className="m-8 md:m-1 border-2 shadow-lg bg-gray-200 hover:shadow-2xl">
              <Link
                href={`/${CompanyName.toLowerCase()}/${ThatBrandCars.car7[1]
                  .toLowerCase()
                  .replace(/ /g, "")}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 ">
                  <div>
                    <img src={ThatBrandCars.car7[0]} alt="nnn" />
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
            <div className="m-8 md:m-1 border-2 shadow-lg bg-gray-200 hover:shadow-2xl">
              <Link
                href={`/${CompanyName.toLowerCase()}/${ThatBrandCars.car8[1]
                  .toLowerCase()
                  .replace(/ /g, "")}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 ">
                  <div>
                    <img src={ThatBrandCars.car8[0]} alt="nnn" />
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
            <div className="m-8 md:m-1 border-2 shadow-lg bg-gray-200 hover:shadow-2xl">
              <Link
                href={`/${CompanyName.toLowerCase()}/${ThatBrandCars.car9[1]
                  .toLowerCase()
                  .replace(/ /g, "")}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 ">
                  <div>
                    <img src={ThatBrandCars.car9[0]} alt="nnn" />
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
            <div className="m-8 md:m-1 border-2 shadow-lg bg-gray-200 hover:shadow-2xl">
              <Link
                href={`/${CompanyName.toLowerCase()}/${ThatBrandCars.car10[1]
                  .toLowerCase()
                  .replace(/ /g, "")}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 ">
                  <div>
                    <img src={ThatBrandCars.car10[0]} alt="nnn" />
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
            <div className="m-8 md:m-1 border-2 shadow-lg bg-gray-200 hover:shadow-2xl">
              <Link
                href={`/${CompanyName.toLowerCase()}/${ThatBrandCars.car11[1]
                  .toLowerCase()
                  .replace(/ /g, "")}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 ">
                  <div>
                    <img src={ThatBrandCars.car11[0]} alt="nnn" />
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
            <div className="m-8 md:m-1 border-2 shadow-lg bg-gray-200 hover:shadow-2xl">
              <Link
                href={`/${CompanyName.toLowerCase()}/${ThatBrandCars.car12[1]
                  .toLowerCase()
                  .replace(/ /g, "")}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 ">
                  <div>
                    <img src={ThatBrandCars.car12[0]} alt="nnn" />
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
            <div className="m-8 md:m-1 border-2 shadow-lg bg-gray-200 hover:shadow-2xl">
              <Link
                href={`/${CompanyName.toLowerCase()}/${ThatBrandCars.car13[1]
                  .toLowerCase()
                  .replace(/ /g, "")}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 ">
                  <div>
                    <img src={ThatBrandCars.car13[0]} alt="nnn" />
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
            <div className="m-8 md:m-1 border-2 shadow-lg bg-gray-200 hover:shadow-2xl">
              <Link
                href={`/${CompanyName.toLowerCase()}/${ThatBrandCars.car14[1]
                  .toLowerCase()
                  .replace(/ /g, "")}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 ">
                  <div>
                    <img src={ThatBrandCars.car14[0]} alt="nnn" />
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
        </div>
      </div>
    </div>
  );
}

export default BrandMainPageAllCars;
