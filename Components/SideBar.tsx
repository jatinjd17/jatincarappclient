import React from "react";
import { Link } from "react-scroll";

function SideBar({ isToggleName, handleactive }) {
  return (
    <div>
      <div className=" col-span-1 md:col-span-10 md:hidden   md:mt-16 -mt-12 2xl:fixed md:relative z-10 ">
        <div className=" pl-5  mb-6 uppercase text-2xl font-bold sm:pl-0 sm:mb-0 text-red-500 md:hidden">
          IndiaCars&Bikes
        </div>
        <Link to="varients" smooth={true}>
          <div
            onClick={() => handleactive("price")}
            className={`flex ml-8 sm:ml-3 sm:my-0 sm:p-0 items-center ${
              isToggleName("price")
                ? "text-gray-800 font-bold text-xl"
                : "text-gray-500"
            } justify-start my-2 p-3 w-4 hover:text-gray-800`}
          >
            Price
            <span
              className={`${
                isToggleName("price")
                  ? "border-black border-r-4 sm:hidden pl-8"
                  : ""
              }`}
            >
              <span className={`${isToggleName("price") ? "" : "hidden"}`}>
                {"I"}
              </span>
            </span>
          </div>
        </Link>
        <div
          onClick={() => handleactive("images")}
          className={`flex ml-8 sm:ml-10 sm:my-0 sm:p-0 items-center ${
            isToggleName("images")
              ? "text-gray-800 font-bold text-xl"
              : "text-gray-500"
          } justify-start my-2 p-3 w-4 hover:text-gray-800`}
        >
          Images
          <span
            className={`${
              isToggleName("images")
                ? "border-black sm:hidden border-r-4 pl-8"
                : ""
            }`}
          >
            <span className={`${isToggleName("images") ? "" : "hidden"}`}>
              {"I"}
            </span>
          </span>
        </div>
        <Link to="specifications" smooth={true}>
          <div
            onClick={() => handleactive("specifications")}
            className={`flex ml-8 sm:ml-16 sm:my-0 sm:p-0 items-center ${
              isToggleName("specifications")
                ? "text-gray-800 font-bold text-xl"
                : "text-gray-500"
            } justify-start my-2 p-3 w-4 hover:text-gray-800`}
          >
            Specifications
            <span
              className={`${
                isToggleName("specifications")
                  ? "border-black sm:hidden border-r-4 pl-8"
                  : ""
              }`}
            >
              <span
                className={`${isToggleName("specifications") ? "" : "hidden"}`}
              >
                {"I"}
              </span>
            </span>
          </div>
        </Link>
        <div
          onClick={() => handleactive("userreviews")}
          className={`flex ml-8 sm:ml-24 sm:my-0 sm:p-0 items-center ${
            isToggleName("userreviews")
              ? "text-gray-800 font-bold text-xl"
              : "text-gray-500"
          } justify-start my-2 p-3 w-4 hover:text-gray-800`}
        >
          User Reviews
          <span
            className={`${
              isToggleName("userreviews")
                ? "border-black sm:hidden border-r-4 pl-8"
                : ""
            }`}
          >
            <span className={`${isToggleName("userreviews") ? "" : "hidden"}`}>
              {"I"}
            </span>
          </span>
        </div>
        <div
          onClick={() => handleactive("expertreviews")}
          className={`flex ml-8 sm:ml-16 sm:my-0 sm:p-0 items-center ${
            isToggleName("expertreviews")
              ? "text-gray-800 font-bold text-xl"
              : "text-gray-500"
          } justify-start my-2 p-3 w-4 hover:text-gray-800`}
        >
          Expert Reviews
          <span
            className={`${
              isToggleName("expertreviews")
                ? "border-black sm:hidden border-r-4 pl-8"
                : ""
            }`}
          >
            <span
              className={`${isToggleName("expertreviews") ? "" : "hidden"}`}
            >
              {"I"}
            </span>
          </span>
        </div>
        <Link to="varients" smooth={true}>
          <div
            onClick={() => handleactive("varients")}
            className={`flex ml-8 sm:ml-16 sm:my-0 sm:p-0 items-center ${
              isToggleName("varients")
                ? "text-gray-800 font-bold text-xl"
                : "text-gray-500"
            } justify-start my-2 p-3 w-4 hover:text-gray-800`}
          >
            Varients
            <span
              className={`${
                isToggleName("varients")
                  ? "border-black sm:hidden border-r-4 pl-8"
                  : ""
              }`}
            >
              <span className={`${isToggleName("varients") ? "" : "hidden"}`}>
                {"I"}
              </span>
            </span>
          </div>
        </Link>

        <div
          onClick={() => handleactive("videos")}
          className={`flex ml-8 sm:ml-16 sm:my-0 sm:p-0 items-center ${
            isToggleName("videos")
              ? "text-gray-800 font-bold text-xl"
              : "text-gray-500"
          } justify-start my-2 p-3 w-4 hover:text-gray-800`}
        >
          Videos
          <span
            className={`${
              isToggleName("videos")
                ? "border-black sm:hidden border-r-4 pl-8"
                : ""
            }`}
          >
            <span className={`${isToggleName("videos") ? "" : "hidden"}`}>
              {"I"}
            </span>
          </span>
        </div>
        <div
          onClick={() => handleactive("brochure")}
          className={`flex ml-8 sm:ml-16 sm:my-0 sm:p-0 items-center ${
            isToggleName("brochure")
              ? "text-gray-800 font-bold text-xl"
              : "text-gray-500"
          } justify-start my-2 p-3 w-4 hover:text-gray-800`}
        >
          Brochure
          <span
            className={`${
              isToggleName("brochure")
                ? "border-black sm:hidden border-r-4 pl-8"
                : ""
            }`}
          >
            <span className={`${isToggleName("brochure") ? "" : "hidden"}`}>
              {"I"}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
