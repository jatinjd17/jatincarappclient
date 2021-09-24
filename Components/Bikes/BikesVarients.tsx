import React from "react";
import SpecificSpecs from "../specificspec";

function BikeVarients({ SpecificationsFeatures, VarientPetrol }) {
  return (
    <div>
      <div className="mt-10 bg-gray-300 mr-24 md:mr-2 sm:mr-1 rounded-lg">
        <div id="varients" className="text-4xl font-bold p-3">
          Varients
        </div>
        <div className="grid grid-cols-10 md:grid-cols-5">
          <div className="col-span-5 md:col-span-10">
            <div className="text-center md:mt-3 mb-2 text-2xl font-bold">
              Petrol
            </div>
            <div className="grid grid-cols-1">
              <div>
                {VarientPetrol.varient1 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient1[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient1[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient1[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : (
                  <div className="text-lg text-center">
                    No Petrol Varient Offer
                  </div>
                )}
                {VarientPetrol.varient2 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient2[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient2[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient2[2]}
                      </div>
                    </div>

                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient3 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient3[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient3[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient3[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient4 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient4[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient4[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient4[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient5 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient5[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient5[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient5[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient6 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient6[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient6[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient6[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient7 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient7[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient7[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient7[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient8 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient8[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient8[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient8[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient9 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient9[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient9[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient9[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient10 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient10[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient10[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient10[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient11 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient11[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient11[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient11[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient12 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient12[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient12[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient12[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient13 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient13[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient13[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient13[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient14 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient14[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient14[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient14[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient15 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient15[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient15[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient15[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient16 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient16[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient16[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient16[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient17 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient17[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient17[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient17[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient18 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient18[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient18[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient18[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient19 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient19[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient19[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient19[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient20 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient20[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient20[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient20[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient21 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient21[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient21[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient21[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient22 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient22[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient22[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient22[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient23 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient23[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient23[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient23[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient24 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient24[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient24[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient24[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient25 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient25[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient25[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient25[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
                {VarientPetrol.varient26 ? (
                  <div className="border-2 p-2">
                    <div className=" grid grid-cols-7 ">
                      <div className="grid grid-cols-1 col-span-4">
                        <div className="text-xl font-bold">
                          {VarientPetrol.varient26[0]}
                        </div>
                        <div className="text-sm mt-1">
                          {VarientPetrol.varient26[1]}
                        </div>
                      </div>
                      <div className="text-center col-span-3 pt-3 font-bold">
                        {VarientPetrol.varient26[2]}
                      </div>
                    </div>
                    {/* <div className="text-center col-span-2 mt-1">
                      <div className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-200">
                        <SpecificSpecs specs={SpecificationsFeatures} />
                      </div>
                    </div> */}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BikeVarients;
