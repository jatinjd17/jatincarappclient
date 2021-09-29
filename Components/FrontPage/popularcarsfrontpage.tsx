import Router from "next/router";
import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-scroll";
import { ClientProduction } from "../../actions/ApiCarsBlogs";

function PopularCarsFrontPage({ PopularCars }) {
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
  return (
    <div>
      <div className="mx-28 md:mx-2">
        <Carousel responsive={responsive}>
          <div className="m-8  border-2 shadow-lg cursor-pointer">
            {/* sm:m-1 sm:mt-5 */}
            {/* <Link
              href={`${ClientProduction}/${
                PopularCars.car1[3]
              }/${PopularCars.car1[1].toLowerCase().replace(/ /g, "")}`}
            > */}
            <div
              onClick={() =>
                Router.push(
                  `${ClientProduction}/${
                    PopularCars.car1[3]
                  }/${PopularCars.car1[1].toLowerCase().replace(/ /g, "")}`
                )
              }
              className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl"
            >
              <div>
                <img
                  className="object-cover w-full h-28 sm:h-40"
                  src={PopularCars.car1[0]}
                  alt="nnn"
                />
              </div>
              <div className="text-center text-xl font-bold">
                {PopularCars.car1[1]}
              </div>
              <div className="flex flex-row">
                <div className="text-md font-bold">{PopularCars.car1[2]}</div>
                {/* <div className="text-md text-gray-500 ml-2 mt-0">Onwards</div> */}
              </div>

              <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
            </div>
            {/* </Link> */}
          </div>
          <div className="m-8  border-2 shadow-lg cursor-pointer">
            <div
              onClick={() =>
                Router.push(
                  `${ClientProduction}/${
                    PopularCars.car2[3]
                  }/${PopularCars.car2[1].toLowerCase().replace(/ /g, "")}`
                )
              }
              className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl"
            >
              <div>
                <img
                  className="object-cover w-full h-28 sm:h-40"
                  src={PopularCars.car2[0]}
                  alt="nnn"
                />
              </div>
              <div className="text-center text-xl font-bold">
                {PopularCars.car2[1]}
              </div>
              <div className="flex flex-row">
                <div className="text-md font-bold">{PopularCars.car2[2]}</div>
                {/* <div className="text-md text-gray-500 ml-2 mt-0">Onwards</div> */}
              </div>

              <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
            </div>
          </div>
          {PopularCars.car3 ? (
            <div className="m-8  border-2 shadow-lg cursor-pointer">
              <div
                onClick={() =>
                  Router.push(
                    `${ClientProduction}/${
                      PopularCars.car3[3]
                    }/${PopularCars.car3[1].toLowerCase().replace(/ /g, "")}`
                  )
                }
                className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl"
              >
                <div>
                  <img
                    className="object-cover w-full h-28 sm:h-40"
                    src={PopularCars.car3[0]}
                    alt="nnn"
                  />
                </div>
                <div className="text-center text-xl font-bold">
                  {PopularCars.car3[1]}
                </div>
                <div className="flex flex-row">
                  <div className="text-md font-bold">{PopularCars.car3[2]}</div>
                  {/* <div className="text-md text-gray-500 ml-2 mt-0">
                      Onwards
                    </div> */}
                </div>

                <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
              </div>
            </div>
          ) : null}

          {PopularCars.car4 ? (
            <div className="m-8 border-2 shadow-lg cursor-pointer">
              <div
                onClick={() =>
                  Router.push(
                    `${ClientProduction}/${
                      PopularCars.car4[3]
                    }/${PopularCars.car4[1].toLowerCase().replace(/ /g, "")}`
                  )
                }
                className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl"
              >
                <div>
                  <img
                    className="object-cover w-full h-28 sm:h-40"
                    src={PopularCars.car4[0]}
                    alt="nnn"
                  />
                </div>
                <div className="text-center text-xl font-bold">
                  {PopularCars.car4[1]}
                </div>
                <div className="flex flex-row">
                  <div className="text-md font-bold">{PopularCars.car4[2]}</div>
                  {/* <div className="text-md text-gray-500 ml-2 mt-0">
                      Onwards
                    </div> */}
                </div>

                <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
              </div>
            </div>
          ) : null}

          {PopularCars.car5 ? (
            <div className="m-8 border-2 shadow-lg cursor-pointer">
              <div
                onClick={() =>
                  Router.push(
                    `${ClientProduction}/${
                      PopularCars.car5[3]
                    }/${PopularCars.car5[1].toLowerCase().replace(/ /g, "")}`
                  )
                }
                className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl"
              >
                <div>
                  <img
                    className="object-cover w-full h-28 sm:h-40"
                    src={PopularCars.car5[0]}
                    alt="nnn"
                  />
                </div>
                <div className="text-center text-xl font-bold">
                  {PopularCars.car5[1]}
                </div>
                <div className="flex flex-row">
                  <div className="text-md font-bold">{PopularCars.car5[2]}</div>
                  {/* <div className="text-md text-gray-500 ml-2 mt-0">
                      Onwards
                    </div> */}
                </div>

                <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
              </div>
            </div>
          ) : null}

          {PopularCars.car6 ? (
            <div className="m-8 border-2 shadow-lg cursor-pointer">
              <div
                onClick={() =>
                  Router.push(
                    `${ClientProduction}/${
                      PopularCars.car6[3]
                    }/${PopularCars.car6[1].toLowerCase().replace(/ /g, "")}`
                  )
                }
                className="grid grid-cols-1 bg-gray-200 hover:shadow-2xl"
              >
                <div>
                  <img
                    className="object-cover w-full h-28 sm:h-40"
                    src={PopularCars.car6[0]}
                    alt="nnn"
                  />
                </div>
                <div className="text-center text-xl font-bold">
                  {PopularCars.car6[1]}
                </div>
                <div className="flex flex-row">
                  <div className="text-md font-bold">{PopularCars.car6[2]}</div>
                  {/* <div className="text-md text-gray-500 ml-2 mt-0">
                      Onwards
                    </div> */}
                </div>

                <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
              </div>
            </div>
          ) : null}
        </Carousel>
      </div>
    </div>
  );
}

export default PopularCarsFrontPage;
