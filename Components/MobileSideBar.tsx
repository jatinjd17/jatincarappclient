import React from "react";
import { Link } from "react-scroll";

function MobileSideBar({ handleactive, isToggleName }) {
  return (
    <div>
      <div className="2xl:hidden md:block">
        <div className="flex flex-row overflow-scroll">
          <Link to="varients" smooth={true}>
            <div
              onClick={() => handleactive("price")}
              className={`mx-3 mb-3 pt-2 pb-3  ${
                isToggleName("price")
                  ? "border-b-4 border-blue-500 text-blue-700 font-bold"
                  : ""
              }`}
            >
              Price
            </div>
          </Link>
          <Link to="varients" smooth={true}>
            <div
              onClick={() => handleactive("images")}
              className={`mx-3 mb-3 pt-2 pb-3 ${
                isToggleName("images")
                  ? "border-b-4 border-blue-500 text-blue-700 font-bold"
                  : ""
              }`}
            >
              Images
            </div>
          </Link>
          <Link to="specifications" smooth={true}>
            <div
              onClick={() => handleactive("specifications")}
              className={`mx-3 mb-3 pt-2 pb-3 ${
                isToggleName("specifications")
                  ? "border-b-4 border-blue-500 text-blue-700 font-bold"
                  : ""
              }`}
            >
              Specifications
            </div>
          </Link>
          <Link to="varients" smooth={true}>
            <div
              onClick={() => handleactive("userreviews")}
              className={`mx-3 mb-3  pb-1 ${
                isToggleName("userreviews")
                  ? "border-b-4 border-blue-500 text-blue-700 font-bold"
                  : ""
              }`}
            >
              User Reviews
            </div>
          </Link>
          <Link to="varients" smooth={true}>
            <div
              onClick={() => handleactive("expertreviews")}
              className={`mx-3 mb-3  pb-1 ${
                isToggleName("expertreviews")
                  ? "border-b-4 border-blue-500 text-blue-700 font-bold"
                  : ""
              }`}
            >
              Expert Reviews
            </div>
          </Link>
          <Link to="varients" smooth={true}>
            <div
              onClick={() => handleactive("varients")}
              className={`mx-3 mb-3  pt-2 pb-3 ${
                isToggleName("varients")
                  ? "border-b-4 border-blue-500 text-blue-700 font-bold"
                  : ""
              }`}
            >
              Varients
            </div>
          </Link>
          <Link to="varients" smooth={true}>
            <div
              onClick={() => handleactive("videos")}
              className={`mx-3 mb-3 pt-2 pb-3 ${
                isToggleName("videos")
                  ? "border-b-4 border-blue-500 text-blue-700 font-bold"
                  : ""
              }`}
            >
              Videos
            </div>
          </Link>
          <Link to="varients" smooth={true}>
            <div
              onClick={() => handleactive("brochure")}
              className={`mx-3 mb-3 pt-2 pb-3 ${
                isToggleName("brochure")
                  ? "border-b-4 border-blue-500 text-blue-700 font-bold"
                  : ""
              }`}
            >
              Brochure
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileSideBar;
