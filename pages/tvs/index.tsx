import React from "react";
import Link from "next/link";

function index() {
  return (
    <div>
      <Link href="/tvs/raider">
        <div className="flex flex-row border-2 w-max p-4">
          <div>
            <img
              className="object-cover w-full h-40 sm:h-24"
              src="https://bd.gaadicdn.com/processedimages/tvs/raider/640X309/raider6145811f954f9.jpg?tr=w-300"
              alt="ja"
            />
          </div>
          <div className="flex flex-col pl-5">
            <div>
              <div>TVS Raider</div>
            </div>
            <div>
              <div>Rs.77,500*</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default index;
