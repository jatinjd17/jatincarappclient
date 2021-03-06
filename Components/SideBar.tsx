import Router from "next/router";
import React from "react";
import { Link } from "react-scroll";
import { ClientProduction } from "../actions/ApiCarsBlogs";

function SideBar({ isToggleName, handleactive }) {
  return (
    <div>
      <div className=" col-span-1 md:col-span-10 md:hidden   md:mt-16 -mt-12 2xl:fixed md:relative z-10 ">
        {/* <Link to="bbb" smooth={true}> */}
        {/* <a rel="noreferrer" href={ClientProduction}> */}
        <div
          onClick={() => Router.push("/")}
          className=" pl-5  mb-6 uppercase text-2xl font-bold sm:pl-0 sm:mb-0 text-red-500 md:hidden cursor-pointer"
        >
          {/* IndiaCars&Bikes */}

          <div className="w-36 -mt-3 ">
            <img
              className="rounded-xl h-14"
              src="https://i.ibb.co/svwxMr0/logo3331632814713.jpg"
            />
          </div>
        </div>
        {/* </a> */}
        {/* </Link> */}

        <Link to="varients" smooth={true}>
          <div
            onClick={() => handleactive("price")}
            className={` cursor-pointer flex ml-8 sm:ml-3 sm:my-0 sm:p-0 items-center ${
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
        <Link to="comparee" smooth={true}>
          <div
            onClick={() => handleactive("compareee")}
            className={` cursor-pointer flex ml-8 sm:ml-16 sm:my-0 sm:p-0 items-center ${
              isToggleName("compareee")
                ? "text-gray-800 font-bold text-xl"
                : "text-gray-500"
            } justify-start my-2 p-3 w-4 hover:text-gray-800`}
          >
            Compare
            <span
              className={`${
                isToggleName("compareee")
                  ? "border-black sm:hidden border-r-4 pl-8"
                  : ""
              }`}
            >
              <span className={`${isToggleName("compareee") ? "" : "hidden"}`}>
                {"I"}
              </span>
            </span>
          </div>
        </Link>
        {/* <div
          onClick={() => handleactive("images")}
          className={` cursor-pointer flex ml-8 sm:ml-10 sm:my-0 sm:p-0 items-center ${
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
        </div> */}
        <Link to="specifications" smooth={true}>
          <div
            onClick={() => handleactive("specifications")}
            className={` cursor-pointer flex ml-8 sm:ml-16 sm:my-0 sm:p-0 items-center ${
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

        <Link to="varients" smooth={true}>
          <div
            onClick={() => handleactive("varients")}
            className={` cursor-pointer flex ml-8 sm:ml-16 sm:my-0 sm:p-0 items-center ${
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

        <Link to="proconn" smooth={true}>
          <div
            onClick={() => handleactive("proconnn")}
            className={` cursor-pointer flex ml-8 sm:ml-16 sm:my-0 sm:p-0 items-center ${
              isToggleName("proconnn")
                ? "text-gray-800 font-bold text-xl"
                : "text-gray-500"
            } justify-start my-2 p-3 w-4 hover:text-gray-800`}
          >
            Pros & Cons
            <span
              className={`${
                isToggleName("proconnn")
                  ? "border-black sm:hidden border-r-4 pl-8"
                  : ""
              }`}
            >
              <span className={`${isToggleName("proconnn") ? "" : "hidden"}`}>
                {"I"}
              </span>
            </span>
          </div>
        </Link>
        <Link to="mileagee" smooth={true}>
          <div
            onClick={() => handleactive("mileageee")}
            className={` cursor-pointer flex ml-8 sm:ml-16 sm:my-0 sm:p-0 items-center ${
              isToggleName("mileageee")
                ? "text-gray-800 font-bold text-xl"
                : "text-gray-500"
            } justify-start my-2 p-3 w-4 hover:text-gray-800`}
          >
            Mileage
            <span
              className={`${
                isToggleName("mileageee")
                  ? "border-black sm:hidden border-r-4 pl-8"
                  : ""
              }`}
            >
              <span className={`${isToggleName("mileageee") ? "" : "hidden"}`}>
                {"I"}
              </span>
            </span>
          </div>
        </Link>
        <Link to="coloor" smooth={true}>
          <div
            onClick={() => handleactive("color")}
            className={` cursor-pointer flex ml-8 sm:ml-16 sm:my-0 sm:p-0 items-center ${
              isToggleName("color")
                ? "text-gray-800 font-bold text-xl"
                : "text-gray-500"
            } justify-start my-2 p-3 w-4 hover:text-gray-800`}
          >
            Colors
            <span
              className={`${
                isToggleName("color")
                  ? "border-black sm:hidden border-r-4 pl-8"
                  : ""
              }`}
            >
              <span className={`${isToggleName("color") ? "" : "hidden"}`}>
                {"I"}
              </span>
            </span>
          </div>
        </Link>
        <Link to="similar" smooth={true}>
          <div
            onClick={() => handleactive("similarr")}
            className={` cursor-pointer flex ml-8 sm:ml-16 sm:my-0 sm:p-0 items-center ${
              isToggleName("similarr")
                ? "text-gray-800 font-bold text-xl"
                : "text-gray-500"
            } justify-start my-2 p-3 w-4 hover:text-gray-800`}
          >
            Similar Cars
            <span
              className={`${
                isToggleName("similarr")
                  ? "border-black sm:hidden border-r-4 pl-8"
                  : ""
              }`}
            >
              <span className={`${isToggleName("similarr") ? "" : "hidden"}`}>
                {"I"}
              </span>
            </span>
          </div>
        </Link>
        {/* <div
          onClick={() => handleactive("userreviews")}
          className={` cursor-pointer flex ml-8 sm:ml-24 sm:my-0 sm:p-0 items-center ${
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
        </div> */}
        {/* <div
          onClick={() => handleactive("expertreviews")}
          className={` cursor-pointer flex ml-8 sm:ml-16 sm:my-0 sm:p-0 items-center ${
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
        </div> */}

        {/* <div
          onClick={() => handleactive("videos")}
          className={` cursor-pointer flex ml-8 sm:ml-16 sm:my-0 sm:p-0 items-center ${
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
        </div> */}
        {/* <div
          onClick={() => handleactive("brochure")}
          className={` cursor-pointer flex ml-8 sm:ml-16 sm:my-0 sm:p-0 items-center ${
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
        </div> */}
      </div>
    </div>
  );
}

export default SideBar;
