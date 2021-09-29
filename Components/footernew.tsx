import React from "react";

function FooterNew() {
  return (
    <div>
      <div className="bg-gray-500 text-white grid grid-cols-3 text-center px-32 md:px-8 sm:px-1 sm:text-xs justify-center ">
        <div className="border-r-2 border-gray-400 pt-4 pb-4  ">
          <div className="sm:mt-3">Language: English</div>
          <div className="sm:mt-1">About Us</div>
        </div>
        <div className="border-r-2 border-gray-400 pt-8 ">
          <div>Contact Us</div>
          <div className="sm:mt-1 sm:text-xs overflow-x-auto">
            team.indiacarsnbikes@gmail.com
          </div>
        </div>
        <div className="pt-8">
          <div>Download Mobile App</div>
          <div className="w-32 ml-28 xl:ml-20 md:ml-12 sm:w-24 sm:ml-3 cursor-not-allowed">
            <img
              className=""
              src="https://www.codot.gov/safety/impaired-driving/planahead/2011-assets/android-market-icon.png/@@images/image"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterNew;
