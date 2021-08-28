import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-scroll";

function SimilarCarss({ SimilarCars }) {
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
      <div className="mx-64 md:mx-2">
        <Carousel responsive={responsive}>
          <div className="m-8  border-2 shadow-lg">
            {/* sm:m-1 sm:mt-5 */}
            <Link href="/maruti/xl6">
              <div className="grid grid-cols-1 bg-gray-200">
                <div>
                  <img src={SimilarCars.car1[0]} alt="nnn" />
                </div>
                <div className="text-center text-xl font-bold">
                  {SimilarCars.car1[1]}
                </div>
                <div className="flex flex-row">
                  <div className="text-md font-bold">{SimilarCars.car1[2]}</div>
                  <div className="text-md text-gray-500 ml-2 mt-0">Onwards</div>
                </div>

                <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
              </div>
            </Link>
          </div>
          <div className="m-8  border-2 shadow-lg">
            <Link href="/maruti/xl6">
              <div className="grid grid-cols-1 bg-gray-200">
                <div>
                  <img src={SimilarCars.car2[0]} alt="nnn" />
                </div>
                <div className="text-center text-xl font-bold">
                  {SimilarCars.car2[1]}
                </div>
                <div className="flex flex-row">
                  <div className="text-md font-bold">{SimilarCars.car2[2]}</div>
                  <div className="text-md text-gray-500 ml-2 mt-0">Onwards</div>
                </div>

                <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
              </div>
            </Link>
          </div>
          {SimilarCars.car3 ? (
            <div className="m-8  border-2 shadow-lg">
              <Link href="/maruti/xl6">
                <div className="grid grid-cols-1 bg-gray-200">
                  <div>
                    <img src={SimilarCars.car3[0]} alt="nnn" />
                  </div>
                  <div className="text-center text-xl font-bold">
                    {SimilarCars.car3[1]}
                  </div>
                  <div className="flex flex-row">
                    <div className="text-md font-bold">
                      {SimilarCars.car3[2]}
                    </div>
                    <div className="text-md text-gray-500 ml-2 mt-0">
                      Onwards
                    </div>
                  </div>

                  <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                </div>
              </Link>
            </div>
          ) : null}

          {SimilarCars.car4 ? (
            <div className="m-8 border-2 shadow-lg">
              <Link href="/maruti/xl6">
                <div className="grid grid-cols-1 bg-gray-200">
                  <div>
                    <img src={SimilarCars.car4[0]} alt="nnn" />
                  </div>
                  <div className="text-center text-xl font-bold">
                    {SimilarCars.car4[1]}
                  </div>
                  <div className="flex flex-row">
                    <div className="text-md font-bold">
                      {SimilarCars.car4[2]}
                    </div>
                    <div className="text-md text-gray-500 ml-2 mt-0">
                      Onwards
                    </div>
                  </div>

                  <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                </div>
              </Link>
            </div>
          ) : null}

          {SimilarCars.car5 ? (
            <div className="m-8 border-2 shadow-lg">
              <Link href="/maruti/xl6">
                <div className="grid grid-cols-1 bg-gray-200">
                  <div>
                    <img src={SimilarCars.car5[0]} alt="nnn" />
                  </div>
                  <div className="text-center text-xl font-bold">
                    {SimilarCars.car5[1]}
                  </div>
                  <div className="flex flex-row">
                    <div className="text-md font-bold">
                      {SimilarCars.car5[2]}
                    </div>
                    <div className="text-md text-gray-500 ml-2 mt-0">
                      Onwards
                    </div>
                  </div>

                  <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                </div>
              </Link>
            </div>
          ) : null}

          {SimilarCars.car6 ? (
            <div className="m-8 border-2 shadow-lg">
              <Link href="/maruti/xl6">
                <div className="grid grid-cols-1 bg-gray-200">
                  <div>
                    <img src={SimilarCars.car6[0]} alt="nnn" />
                  </div>
                  <div className="text-center text-xl font-bold">
                    {SimilarCars.car6[1]}
                  </div>
                  <div className="flex flex-row">
                    <div className="text-md font-bold">
                      {SimilarCars.car6[2]}
                    </div>
                    <div className="text-md text-gray-500 ml-2 mt-0">
                      Onwards
                    </div>
                  </div>

                  <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
                </div>
              </Link>
            </div>
          ) : null}
        </Carousel>
      </div>
    </div>
  );
}

export default SimilarCarss;
