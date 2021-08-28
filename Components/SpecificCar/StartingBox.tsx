import React from "react";
import Image from "react-image-resizer";
import Compare from "../compare";

function StartingBox({ CarName, TopPic, CarPrice, OnlyName }) {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="text-black font-bold text-6xl ml-14 mt-10 md:hidden">
          {CarName}
        </div>
        <div className=" w-full mt-5 font-bold text-center rounded-md text-2xl">
          <Compare OnlyName={OnlyName} />
        </div>
      </div>

      <div className="border-2 rounded-md mt-24 ml-24 sm:ml-1 sm:mr-1 md:mt-5 mr-20  md:mr-2">
        <div className="flex flex-row md:flex-col">
          <div className="max-w-3xl 2xl:pr-14 md:px-0 h-auto">
            {/* <Image src={TopPic} height={240} width={240} /> */}
            <img src={TopPic} alt="nnn" />
          </div>

          <div className="text-3xl  flex flex-col ">
            <div className="text-5xl font-bold mt-11">{CarName}</div>
            {/* <div className="bg-gray-500 w-72 text-center">Varient</div> */}
            <div className="mt-9">{CarPrice}</div>
            <div className="text-base text-gray-500">
              Avg. Ex-Showroom price
            </div>
            <div className="bg-yellow-600 text-white font-bold text-center rounded-md text-2xl mt-7 p-2">
              Show All Varients
            </div>
            <div className="flex flex-row mt-4 text-center text-lg">
              <div className="border-2 m-2 p-1 rounded-lg flex flex-row">
                <div className="h-7 w-7">
                  <img src="https://img.icons8.com/material-outlined/24/000000/invert-colors.png" />
                </div>
                <div>Colors</div>
              </div>
              <div className="border-2 m-2 p-1 rounded-lg flex flex-row">
                <div>
                  <img src="https://img.icons8.com/material-outlined/24/000000/images-folder.png" />
                </div>
                <div>Images</div>
              </div>
              <div className="border-2 m-2 p-1 rounded-lg flex flex-row">
                <div className="h-6 w-6">
                  <img src="https://img.icons8.com/ios/50/000000/video.png" />
                </div>
                <div>Videos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartingBox;
