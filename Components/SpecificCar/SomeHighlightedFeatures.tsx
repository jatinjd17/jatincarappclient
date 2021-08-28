import React from "react";

function SomeHighlightedFeatures({ OnlyName, HighlightedFeatures }) {
  return (
    <div>
      <div>
        <div className="text-2xl font-bold mb-5 mt-7">
          Some More Highlighted Features From {OnlyName}
        </div>
        <div className="grid grid-cols-3 mr-40 md:mr-2 sm:mr-1 bg-gray-200 p-6 sm:p-2 gap-4 sm:gap-2">
          <div className="text-center bg-gray-400 pb-3">
            <div className="">
              <img src={HighlightedFeatures.feature1[0]} alt="nnn" />
            </div>
            <div className="text-center text-xl font-bold">
              {HighlightedFeatures.feature1[1]}
            </div>

            <div className="text-xs mt-1">
              {HighlightedFeatures.feature1[2]}
            </div>
          </div>
          <div className="text-center bg-gray-400 pb-3">
            <div>
              <img src={HighlightedFeatures.feature2[0]} alt="nnn" />
            </div>
            <div className="text-center text-xl font-bold">
              {HighlightedFeatures.feature2[1]}
            </div>

            <div className="text-xs mt-1">
              {HighlightedFeatures.feature2[2]}
            </div>
          </div>
          <div className="text-center bg-gray-400 pb-3">
            <div>
              <img src={HighlightedFeatures.feature3[0]} alt="nnn" />
            </div>
            <div className="text-center text-xl font-bold">
              {HighlightedFeatures.feature3[1]}
            </div>

            <div className="text-xs mt-1">
              {HighlightedFeatures.feature3[2]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SomeHighlightedFeatures;
