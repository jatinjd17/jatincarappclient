import React from "react";

function ColorCar({ OnlyName, Colorss }) {
  return (
    <div>
      <div>
        <div className="text-2xl font-bold mt-6 mb-3">{OnlyName} Colors</div>
        <div className="grid grid-cols-4 lg:grid-cols-3 mr-40 md:mr-2 sm:mr-1 bg-gray-400">
          {Colorss.color1 ? (
            <div className=" m-5 sm:m-1  bg-red-200 p-4 sm:p-2 xl:p-2 flex flex-row xl:flex-col rounded-lg shadow-lg">
              <div
                className={`${Colorss.color1[1]} w-12 h-12 xl:ml-6 xl:mb-2  rounded-full`}
              ></div>
              <div className="ml-4 flex flex-col">
                <div className="text-lg font-bold mb-1">
                  {Colorss.color1[0]}
                </div>
                <div className="text-sm text-gray-600">
                  Available for all variants.
                </div>
              </div>
            </div>
          ) : null}

          {Colorss.color2 ? (
            <div className=" m-5 sm:m-1 bg-red-200 p-4 sm:p-2 xl:p-2 flex flex-row xl:flex-col rounded-lg shadow-lg">
              <div
                className={`${Colorss.color2[1]} w-12 h-12 xl:ml-6 xl:mb-2  rounded-full`}
              ></div>
              <div className="ml-4 flex flex-col">
                <div className="text-lg font-bold mb-1">
                  {Colorss.color2[0]}
                </div>
                <div className="text-sm text-gray-600">
                  Available for all variants.
                </div>
              </div>
            </div>
          ) : null}

          {Colorss.color3 ? (
            <div className=" m-5 sm:m-1 bg-red-200 p-4 sm:p-2 xl:p-2 flex flex-row xl:flex-col rounded-lg shadow-lg">
              <div
                className={`${Colorss.color3[1]} w-12 h-12 xl:ml-6 xl:mb-2  rounded-full`}
              ></div>
              <div className="ml-4 flex flex-col">
                <div className="text-lg font-bold mb-1">
                  {Colorss.color3[0]}
                </div>
                <div className="text-sm text-gray-600">
                  Available for all variants.
                </div>
              </div>
            </div>
          ) : null}

          {Colorss.color4 ? (
            <div className=" m-5 sm:m-1 bg-red-200 p-4 sm:p-2 xl:p-2 flex flex-row xl:flex-col rounded-lg shadow-lg">
              <div
                className={`${Colorss.color4[1]} w-12 h-12 xl:ml-6 xl:mb-2  rounded-full`}
              ></div>
              <div className="ml-4 flex flex-col">
                <div className="text-lg font-bold mb-1">
                  {Colorss.color4[0]}
                </div>
                <div className="text-sm text-gray-600">
                  Available for all variants.
                </div>
              </div>
            </div>
          ) : null}

          {Colorss.color5 ? (
            <div className=" m-5 sm:m-1 bg-red-200 p-4 sm:p-2 xl:p-2 flex flex-row xl:flex-col rounded-lg shadow-lg">
              <div
                className={`${Colorss.color5[1]} w-12 h-12 xl:ml-6 xl:mb-2  rounded-full`}
              ></div>
              <div className="ml-4 flex flex-col">
                <div className="text-lg font-bold mb-1">
                  {Colorss.color5[0]}
                </div>
                <div className="text-sm text-gray-600">
                  Available for all variants.
                </div>
              </div>
            </div>
          ) : null}

          {Colorss.color6 ? (
            <div className=" m-5 sm:m-1 bg-red-200 p-4 sm:p-2 xl:p-2 flex flex-row xl:flex-col rounded-lg shadow-lg">
              <div
                className={`${Colorss?.color6[1]} w-12 h-12 xl:ml-6 xl:mb-2  rounded-full`}
              ></div>
              <div className="ml-4 flex flex-col">
                <div className="text-lg font-bold mb-1">
                  {Colorss?.color6[0]}
                </div>
                <div className="text-sm text-gray-600">
                  Available for all variants.
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ColorCar;
