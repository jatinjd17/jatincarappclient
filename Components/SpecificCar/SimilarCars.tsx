import React from "react";
import Carousel from "react-multi-carousel";
// import { Link } from "react-scroll";
import Router from "next/router";
import Link from "next/link";
import { ClientProduction } from "../../actions/ApiCarsBlogs";

function SimilarCarss({ SimilarCars }) {
  // console.log(SimilarCars);
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
      <div id="similar" className="mr-20 ml-60 md:mx-2">
        <Carousel responsive={responsive}>
          <div className="m-8 sm:m-3 border-2 shadow-lg">
            {/* sm:m-1 sm:mt-5 */}
            {/* <a
              rel="noreferrer"
              key={SimilarCars.car1[1]}
              className="dataItem"
              href={`${ClientProduction}/honda/${SimilarCars.car1[1]}`}
              // target="_blank"
            > */}
            {/* <Link
              href={`${ClientProduction}/${
                SimilarCars.car1[3]
              }/${SimilarCars.car1[1].toLowerCase()}`}
            > */}
            <div
              onClick={() =>
                Router.push(
                  `${ClientProduction}/${
                    SimilarCars.car1[3]
                  }/${SimilarCars.car1[1].toLowerCase()}`
                )
              }
              className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl"
            >
              <div>
                <img
                  className="object-cover w-full h-36 sm:h-24"
                  src={SimilarCars.car1[0]}
                  alt="nnn"
                />
              </div>
              <div className="text-center text-xl font-bold">
                {SimilarCars.car1[1]}
              </div>
              <div className="flex flex-row">
                <div className="text-md font-bold">{SimilarCars.car1[2]}</div>
                {/* <div className="text-md text-gray-500 ml-2 mt-0">Onwards</div> */}
              </div>

              <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
            </div>
            {/* </Link> */}
            {/* </a> */}
          </div>
          <div className="m-8 sm:m-3 border-2 shadow-lg">
            <Link
              href={`${ClientProduction}/${
                SimilarCars.car2[3]
              }/${SimilarCars.car2[1].toLowerCase()}`}
            >
              <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                <div>
                  <img
                    className="object-cover w-full h-36 sm:h-24"
                    src={SimilarCars.car2[0]}
                    alt="nnn"
                  />
                </div>
                <div className="text-center text-xl font-bold">
                  {SimilarCars.car2[1]}
                </div>
                <div className="flex flex-row">
                  <div className="text-md font-bold">{SimilarCars.car2[2]}</div>
                  {/* <div className="text-md text-gray-500 ml-2 mt-0">Onwards</div> */}
                </div>

                <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
              </div>
            </Link>
          </div>
          {SimilarCars.car3 ? (
            <div className="m-8 sm:m-3 border-2 shadow-lg">
              <Link
                href={`${ClientProduction}/${
                  SimilarCars.car3[3]
                }/${SimilarCars.car3[1].toLowerCase()}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                  <div>
                    <img
                      className="object-cover w-full h-36 sm:h-24"
                      src={SimilarCars.car3[0]}
                      alt="nnn"
                    />
                  </div>
                  <div className="text-center text-xl font-bold">
                    {SimilarCars.car3[1]}
                  </div>
                  <div className="flex flex-row">
                    <div className="text-md font-bold">
                      {SimilarCars.car3[2]}
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

          {SimilarCars.car4 ? (
            <div className="m-8 sm:m-3 border-2 shadow-lg">
              <Link
                href={`${ClientProduction}/${
                  SimilarCars.car4[3]
                }/${SimilarCars.car4[1].toLowerCase()}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                  <div>
                    <img
                      className="object-cover w-full h-36 sm:h-24"
                      src={SimilarCars.car4[0]}
                      alt="nnn"
                    />
                  </div>
                  <div className="text-center text-xl font-bold">
                    {SimilarCars.car4[1]}
                  </div>
                  <div className="flex flex-row">
                    <div className="text-md font-bold">
                      {SimilarCars.car4[2]}
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

          {SimilarCars.car5 ? (
            <div className="m-8 sm:m-3 border-2 shadow-lg">
              <Link
                href={`${ClientProduction}/${
                  SimilarCars.car5[3]
                }/${SimilarCars.car5[1].toLowerCase()}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                  <div>
                    <img
                      className="object-cover w-full h-36 sm:h-24"
                      src={SimilarCars.car5[0]}
                      alt="nnn"
                    />
                  </div>
                  <div className="text-center text-xl font-bold">
                    {SimilarCars.car5[1]}
                  </div>
                  <div className="flex flex-row">
                    <div className="text-md font-bold">
                      {SimilarCars.car5[2]}
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

          {SimilarCars.car6 && (
            <div className="m-8 sm:m-3 border-2 shadow-lg">
              <Link
                href={`${ClientProduction}/${
                  SimilarCars.car6[3]
                }/${SimilarCars.car6[1].toLowerCase()}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                  <div>
                    <img
                      className="object-cover w-full h-36 sm:h-24"
                      src={SimilarCars.car6[0]}
                      alt="nnn"
                    />
                  </div>
                  <div className="text-center text-xl font-bold">
                    {SimilarCars.car6[1]}
                  </div>
                  <div className="flex flex-row">
                    <div className="text-md font-bold">
                      {SimilarCars.car6[2]}
                    </div>
                    {/* <div className="text-md text-gray-500 ml-2 mt-0">
                      Onwards
                    </div> */}
                  </div>

                  <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                </div>
              </Link>
            </div>
          )}

          {SimilarCars.car7 && (
            <div className="m-8 sm:m-3 border-2 shadow-lg">
              <Link
                href={`${ClientProduction}/${
                  SimilarCars.car7[3]
                }/${SimilarCars.car7[1].toLowerCase()}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                  <div>
                    <img
                      className="object-cover w-full h-36 sm:h-24"
                      src={SimilarCars.car7[0]}
                      alt="nnn"
                    />
                  </div>
                  <div className="text-center text-xl font-bold">
                    {SimilarCars.car7[1]}
                  </div>
                  <div className="flex flex-row">
                    <div className="text-md font-bold">
                      {SimilarCars.car7[2]}
                    </div>
                    {/* <div className="text-md text-gray-500 ml-2 mt-0">
                      Onwards
                    </div> */}
                  </div>

                  <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                </div>
              </Link>
            </div>
          )}
          {SimilarCars.car8 && (
            <div className="m-8 sm:m-3 border-2 shadow-lg">
              <Link
                href={`${ClientProduction}/${
                  SimilarCars.car8[3]
                }/${SimilarCars.car8[1].toLowerCase()}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                  <div>
                    <img
                      className="object-cover w-full h-36 sm:h-24"
                      src={SimilarCars.car8[0]}
                      alt="nnn"
                    />
                  </div>
                  <div className="text-center text-xl font-bold">
                    {SimilarCars.car8[1]}
                  </div>
                  <div className="flex flex-row">
                    <div className="text-md font-bold">
                      {SimilarCars.car8[2]}
                    </div>
                    {/* <div className="text-md text-gray-500 ml-2 mt-0">
                      Onwards
                    </div> */}
                  </div>

                  <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                </div>
              </Link>
            </div>
          )}
          {SimilarCars.car9 && (
            <div className="m-8 sm:m-3 border-2 shadow-lg">
              <Link
                href={`${ClientProduction}/${
                  SimilarCars.car9[3]
                }/${SimilarCars.car9[1].toLowerCase()}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                  <div>
                    <img
                      className="object-cover w-full h-36 sm:h-24"
                      src={SimilarCars.car9[0]}
                      alt="nnn"
                    />
                  </div>
                  <div className="text-center text-xl font-bold">
                    {SimilarCars.car9[1]}
                  </div>
                  <div className="flex flex-row">
                    <div className="text-md font-bold">
                      {SimilarCars.car9[2]}
                    </div>
                    {/* <div className="text-md text-gray-500 ml-2 mt-0">
                      Onwards
                    </div> */}
                  </div>

                  <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                </div>
              </Link>
            </div>
          )}
          {SimilarCars.car10 && (
            <div className="m-8 sm:m-3 border-2 shadow-lg">
              <Link
                href={`${ClientProduction}/${
                  SimilarCars.car10[3]
                }/${SimilarCars.car10[1].toLowerCase()}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                  <div>
                    <img
                      className="object-cover w-full h-36 sm:h-24"
                      src={SimilarCars.car10[0]}
                      alt="nnn"
                    />
                  </div>
                  <div className="text-center text-xl font-bold">
                    {SimilarCars.car10[1]}
                  </div>
                  <div className="flex flex-row">
                    <div className="text-md font-bold">
                      {SimilarCars.car10[2]}
                    </div>
                    {/* <div className="text-md text-gray-500 ml-2 mt-0">
                      Onwards
                    </div> */}
                  </div>

                  <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                </div>
              </Link>
            </div>
          )}
          {SimilarCars.car11 && (
            <div className="m-8 sm:m-3 border-2 shadow-lg">
              <Link
                href={`${ClientProduction}/${
                  SimilarCars.car11[3]
                }/${SimilarCars.car11[1].toLowerCase()}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                  <div>
                    <img
                      className="object-cover w-full h-36 sm:h-24"
                      src={SimilarCars.car11[0]}
                      alt="nnn"
                    />
                  </div>
                  <div className="text-center text-xl font-bold">
                    {SimilarCars.car11[1]}
                  </div>
                  <div className="flex flex-row">
                    <div className="text-md font-bold">
                      {SimilarCars.car11[2]}
                    </div>
                    {/* <div className="text-md text-gray-500 ml-2 mt-0">
                      Onwards
                    </div> */}
                  </div>

                  <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                </div>
              </Link>
            </div>
          )}
          {SimilarCars.car12 && (
            <div className="m-8 sm:m-3 border-2 shadow-lg">
              <Link
                href={`${ClientProduction}/${
                  SimilarCars.car12[3]
                }/${SimilarCars.car12[1].toLowerCase()}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                  <div>
                    <img
                      className="object-cover w-full h-36 sm:h-24"
                      src={SimilarCars.car12[0]}
                      alt="nnn"
                    />
                  </div>
                  <div className="text-center text-xl font-bold">
                    {SimilarCars.car12[1]}
                  </div>
                  <div className="flex flex-row">
                    <div className="text-md font-bold">
                      {SimilarCars.car12[2]}
                    </div>
                    {/* <div className="text-md text-gray-500 ml-2 mt-0">
                      Onwards
                    </div> */}
                  </div>

                  <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                </div>
              </Link>
            </div>
          )}
          {SimilarCars.car13 && (
            <div className="m-8 sm:m-3 border-2 shadow-lg">
              <Link
                href={`${ClientProduction}/${
                  SimilarCars.car13[3]
                }/${SimilarCars.car13[1].toLowerCase()}`}
              >
                <div className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl">
                  <div>
                    <img
                      className="object-cover w-full h-36 sm:h-24"
                      src={SimilarCars.car13[0]}
                      alt="nnn"
                    />
                  </div>
                  <div className="text-center text-xl font-bold">
                    {SimilarCars.car13[1]}
                  </div>
                  <div className="flex flex-row">
                    <div className="text-md font-bold">
                      {SimilarCars.car13[2]}
                    </div>
                    {/* <div className="text-md text-gray-500 ml-2 mt-0">
                      Onwards
                    </div> */}
                  </div>

                  <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                </div>
              </Link>
            </div>
          )}
        </Carousel>
      </div>
    </div>
  );
}

export default SimilarCarss;
