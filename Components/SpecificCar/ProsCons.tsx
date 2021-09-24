import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function ProsAndCons({ ProsCons }) {
  return (
    <div>
      <div className="text-2xl font-bold mt-6 mb-3">Pros And Cons</div>
      <div className="grid grid-cols-2 mr-40 md:mr-2 sm:mr-1 text-center gap-5 sm:gap-1">
        <div className="bg-green-200 rounded-xl">
          <div className="mt-1 text-lg font-bold text-green-800">Pros</div>
          <div className="grid grid-cols-1 px-6 py-3">
            <div className="mb-4">
              <FiberManualRecordIcon
                className="mb-1 mr-1"
                style={{ fontSize: 15 }}
              />
              {ProsCons.pros[0]}
            </div>
            <div className="mb-4">
              <FiberManualRecordIcon
                className="mb-1 mr-1"
                style={{ fontSize: 15 }}
              />
              {ProsCons.pros[1]}
            </div>
            <div className="mb-4">
              <FiberManualRecordIcon
                className="mb-1 mr-1"
                style={{ fontSize: 15 }}
              />
              {ProsCons.pros[2]}
            </div>
          </div>
        </div>
        <div className="bg-red-300 rounded-xl">
          <div className="mt-1 text-lg font-bold text-red-800">Cons</div>
          <div className="grid grid-cols-1 px-6 py-3">
            <div className="mb-4">
              <FiberManualRecordIcon
                className="mb-1 mr-1"
                style={{ fontSize: 15 }}
              />
              {ProsCons.cons[0]}
            </div>
            <div className="mb-4">
              <FiberManualRecordIcon
                className="mb-1 mr-1"
                style={{ fontSize: 15 }}
              />
              {ProsCons.cons[1]}
            </div>
            <div className="mb-4">
              <FiberManualRecordIcon
                className="mb-1 mr-1"
                style={{ fontSize: 15 }}
              />
              {ProsCons.cons[2]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProsAndCons;
