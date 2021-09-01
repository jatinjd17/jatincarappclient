import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

function AllSPecifications({ SpecificationsFeatures }) {
  const SimilarCars = {
    car1: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/33276/amaze-exterior-right-front-three-quarter-2.jpeg?q=85",
      "Amaze",
      "₹ 9.28 Lakh Onwards",
    ],
    car2: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=85",
      "Aura",
      "₹ 6.00 Lakh onwards0",
    ],
    car3: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/26563/Volkswagen-Vento-Right-Front-Three-Quarter-169094.jpg?wm=0&q=85",
      "Vento",
      "10.00 Lakh onwards",
    ],
    car4: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Rapid/7920/1608614333184/front-left-side-47.jpg?tr=w-456",
      "Rapid",
      "₹ 7.79 Lakh onwards",
    ],
  };
  return (
    <div>
      <div className="text-2xl font-bold mt-6 mb-3 bg-white">
        Specifications & Features
      </div>

      <div className=" sticky top-0 z-50">
        <div className=" grid grid-cols-2 mr-40 md:mr-0 gap-3 bg-white shadow-2xl">
          <div className="flex flex-row w-72 md:w-40 h-20 ml-52 xl:ml-32 sm:ml-0 border-2 p-2 sm:p-1 bg-gray-200">
            <div className="h-auto w-24 md:w-20">
              <img src={SpecificationsFeatures.Car1.CarInfo.TopPic[0]} />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-wrap font-bold ml-5  md:mt-0">
                {SpecificationsFeatures.Car1.CarInfo.OnlyName[0]}
              </div>
              <div className="flex flex-wrap ml-5  md:mt-0 md:text-xs">
                {SpecificationsFeatures.Car1.CarInfo.Price[0]}
              </div>
            </div>
          </div>
          <div className="flex flex-row w-72 md:w-40 h-20 ml-52 xl:ml-32 sm:ml-0 border-2 p-2 bg-gray-200">
            <div className="h-auto w-24 md:w-20">
              <img src={SpecificationsFeatures.Car2.CarInfo.TopPic[0]} />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-wrap font-bold ml-5 md:mt-0">
                {SpecificationsFeatures.Car2.CarInfo.OnlyName[0]}
              </div>
              <div className="flex flex-wrap ml-5  md:mt-0 md:text-xs">
                {SpecificationsFeatures.Car2.CarInfo.Price[0]}
              </div>
            </div>
          </div>
          {/* <div className=" grid grid-cols-2 mr-40 gap-3 bg-white">
            <div className="w-52 ml-60">
              <div className="grid grid-cols-1 bg-gray-200">
                <div>
                  <img src={SimilarCars.car1[0]} alt="nnn" />
                </div>
                <div className="text-center text-xl font-bold">
                  {SimilarCars.car1[1]}
                </div>
                <div className="flex flex-row">
                  <div className="text-md font-bold">{SimilarCars.car1[2]}</div>
                  <div className="text-md text-gray-500 ml-2 mt-0">Onwards</div>
                </div>

                <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
              </div>
            </div>
            <div className="w-52 ml-60">
              <div className="grid grid-cols-1 bg-gray-200">
                <div>
                  <img src={SimilarCars.car1[0]} alt="nnn" />
                </div>
                <div className="text-center text-xl font-bold">
                  {SimilarCars.car1[1]}
                </div>
                <div className="flex flex-row">
                  <div className="text-md font-bold">{SimilarCars.car1[2]}</div>
                  <div className="text-md text-gray-500 ml-2 mt-0">Onwards</div>
                </div>

                <div className="text-xs mt-1">Avg. Ex-Showroom price</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div>
        <div className=" mr-40 md:mr-1">
          <div className=" bg-white rounded-2xl">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Engine & Transmission</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="grid grid-cols-1">
                      <div className="grid grid-cols-1 border-b-2  py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Engine
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.EngineTransmission
                                .Engine[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.EngineTransmission
                                .Engine[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Engine Type
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.EngineTransmission
                                .EngineType[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.EngineTransmission
                                .EngineType[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Fuel Type
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.EngineTransmission
                                .FuelType[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.EngineTransmission
                                .FuelType[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Max Power (bhp@rpm)
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.EngineTransmission
                                .MaxPower[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.EngineTransmission
                                .MaxPower[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Max Torque (Nm@rpm)
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.EngineTransmission
                                .MaxTorque[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.EngineTransmission
                                .MaxTorque[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Mileage (ARAI)
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.EngineTransmission
                                .Mileage[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.EngineTransmission
                                .Mileage[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Drivetrain
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.EngineTransmission
                                .Drivetrain[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.EngineTransmission
                                .Drivetrain[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Transmission
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.EngineTransmission
                                .Transmission[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.EngineTransmission
                                .Transmission[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Emission Standard
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.EngineTransmission
                                .EmissionStandard[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.EngineTransmission
                                .EmissionStandard[0]
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Dimensions & Weight</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="grid grid-cols-1">
                      <div className="grid grid-cols-1 border-b-2  py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Length
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.DimensionWeight
                                .Length[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.DimensionWeight
                                .Length[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Width
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.DimensionWeight
                                .Width[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.DimensionWeight
                                .Width[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Height
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.DimensionWeight
                                .Height[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.DimensionWeight
                                .Height[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Wheelbase
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.DimensionWeight
                                .Wheelbase[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.DimensionWeight
                                .Wheelbase[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Ground Clearance
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.DimensionWeight
                                .GroundClearance[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.DimensionWeight
                                .GroundClearance[0]
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Suspensions, Brakes, Steering & Tyres</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="grid grid-cols-1">
                      <div className="grid grid-cols-1 border-b-2  py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Front Suspension
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .SuspensionBrakeSteering.FrontSuspension[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .SuspensionBrakeSteering.FrontSuspension[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Rear Suspension
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .SuspensionBrakeSteering.RearSuspension[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .SuspensionBrakeSteering.RearSuspension[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Front Brake Type
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .SuspensionBrakeSteering.FrontBrake[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .SuspensionBrakeSteering.FrontBrake[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Rear Brake Type
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .SuspensionBrakeSteering.RearBrake[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .SuspensionBrakeSteering.RearBrake[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Minimum Turning Radius
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .SuspensionBrakeSteering.MinimumTurningRadius[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .SuspensionBrakeSteering.MinimumTurningRadius[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Steering Type
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .SuspensionBrakeSteering.SteeringType[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .SuspensionBrakeSteering.SteeringType[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Wheels
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .SuspensionBrakeSteering.Wheels[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .SuspensionBrakeSteering.Wheels[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Spare Wheel
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .SuspensionBrakeSteering.SpareWheel[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .SuspensionBrakeSteering.SpareWheel[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Tyre Size
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .SuspensionBrakeSteering.TyreSize[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .SuspensionBrakeSteering.TyreSize[0]
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Safety</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="grid grid-cols-1">
                      <div className="grid grid-cols-1 border-b-2  py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          NCAP Rating
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {SpecificationsFeatures.Car1.Safety.NCAPRating[0]}
                          </div>
                          <div className="text-center">
                            {SpecificationsFeatures.Car1.Safety.NCAPRating[0]}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Airbags
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {SpecificationsFeatures.Car1.Safety.Airbags[0]}
                          </div>
                          <div className="text-center">
                            {SpecificationsFeatures.Car2.Safety.Airbags[0]}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Middle rear three-point seatbelt
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Safety
                                .MiddleRearSeatbelt[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Safety
                                .MiddleRearSeatbelt[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Middle Rear Head Rest
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Safety
                                .MiddleRearHeadrest[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Safety
                                .MiddleRearHeadrest[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Tyre Pressure Monitoring System (TPMS)
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Safety
                                .TyrePressureMoni[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Safety
                                .TyrePressureMoni[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Child Seat Anchor Points
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Safety
                                .ChildSeatAnchor[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Safety
                                .ChildSeatAnchor[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Seat Belt Warning
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Safety
                                .SeatBeltWarning[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Safety
                                .SeatBeltWarning[0]
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Braking & Traction</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="grid grid-cols-1">
                      <div className="grid grid-cols-1 border-b-2  py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Anti-Lock Braking System (ABS)
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.BreakindAndTraction
                                .AntiLockBreaking[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.BreakindAndTraction
                                .AntiLockBreaking[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Electronic Brake-force Distribution (EBD)
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.BreakindAndTraction
                                .ElectricBrakeDistri[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.BreakindAndTraction
                                .ElectricBrakeDistri[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Brake Assist (BA)
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.BreakindAndTraction
                                .BrakeAssist[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.BreakindAndTraction
                                .BrakeAssist[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Electronic Stability Program (ESP)
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.BreakindAndTraction
                                .ElectricStabilityProgram[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.BreakindAndTraction
                                .ElectricStabilityProgram[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Hill Hold Control
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.BreakindAndTraction
                                .HillHoldControl[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.BreakindAndTraction
                                .HillHoldControl[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Traction Control System (TC/TCS)
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.BreakindAndTraction
                                .TractionControlSys[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.BreakindAndTraction
                                .TractionControlSys[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Hill Descent Control
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.BreakindAndTraction
                                .HillDescentControl[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.BreakindAndTraction
                                .HillDescentControl[0]
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Locks & Security</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="grid grid-cols-1">
                      <div className="grid grid-cols-1 border-b-2  py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Engine immobilizer
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.LocksAndSecurity
                                .EngineImmobilizer[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.LocksAndSecurity
                                .EngineImmobilizer[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Central Locking
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.LocksAndSecurity
                                .CentralLocking[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.LocksAndSecurity
                                .CentralLocking[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Speed Sensing Door Lock
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.LocksAndSecurity
                                .SpeedSensingDoorLock[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.LocksAndSecurity
                                .SpeedSensingDoorLock[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Child Safety Lock
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.LocksAndSecurity
                                .ChildSafetyLock[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.LocksAndSecurity
                                .ChildSafetyLock[0]
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Comfort & Convenience</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="grid grid-cols-1">
                      <div className="grid grid-cols-1 border-b-2  py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Air Conditioner
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.ConfortAndCOnvenience
                                .AirConditioner[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.ConfortAndCOnvenience
                                .AirConditioner[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Front AC
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.ConfortAndCOnvenience
                                .FrontAC[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.ConfortAndCOnvenience
                                .FrontAC[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Rear AC
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.ConfortAndCOnvenience
                                .RearAC[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.ConfortAndCOnvenience
                                .RearAC[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Heater
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.ConfortAndCOnvenience
                                .Heater[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.ConfortAndCOnvenience
                                .Heater[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Vanity Mirrors on Sun Visors
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.ConfortAndCOnvenience
                                .VanityMirror[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.ConfortAndCOnvenience
                                .VanityMirror[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Cabin-Boot Access
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.ConfortAndCOnvenience
                                .CabinBootAccess[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.ConfortAndCOnvenience
                                .CabinBootAccess[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Anti-glare Mirrors
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.ConfortAndCOnvenience
                                .AntiGlareMirrors[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.ConfortAndCOnvenience
                                .AntiGlareMirrors[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Parking Assist
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.ConfortAndCOnvenience
                                .ParkingAssist[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.ConfortAndCOnvenience
                                .ParkingAssist[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Parking Sensors
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.ConfortAndCOnvenience
                                .ParkingSensors[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.ConfortAndCOnvenience
                                .ParkingSensors[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Cruise Control
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.ConfortAndCOnvenience
                                .CruiseCOntrol[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.ConfortAndCOnvenience
                                .CruiseCOntrol[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Headlight & Ignition On Reminder
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.ConfortAndCOnvenience
                                .HeadLightIgnitionONReminder[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.ConfortAndCOnvenience
                                .HeadLightIgnitionONReminder[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Keyless Start/ Button Start
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.ConfortAndCOnvenience
                                .KeylessStartStopButton[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.ConfortAndCOnvenience
                                .KeylessStartStopButton[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Steering Adjustment
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.ConfortAndCOnvenience
                                .SteeringAdjustment[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.ConfortAndCOnvenience
                                .SteeringAdjustment[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          12V Power Outlets
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.ConfortAndCOnvenience
                                .twelveVPowerOutlets[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.ConfortAndCOnvenience
                                .twelveVPowerOutlets[0]
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Seats & Upholstery</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="grid grid-cols-1">
                      <div className="grid grid-cols-1 border-b-2  py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Driver Seat Adjustment
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.SeatsAndUpholstery
                                .DriverSeatAdjustment[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.SeatsAndUpholstery
                                .DriverSeatAdjustment[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Front Passenger Seat Adjustment
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.SeatsAndUpholstery
                                .FrontPassengerSeatAdjustment[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.SeatsAndUpholstery
                                .FrontPassengerSeatAdjustment[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Rear Row Seat Adjustment
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.SeatsAndUpholstery
                                .RearRowSeatAdjustment[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.SeatsAndUpholstery
                                .RearRowSeatAdjustment[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Seat Upholstery
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.SeatsAndUpholstery
                                .SeatUpholstery[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.SeatsAndUpholstery
                                .SeatUpholstery[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Leather-wrapped Steering Wheel
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.SeatsAndUpholstery
                                .LeatherWrappedSteeringwheel[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.SeatsAndUpholstery
                                .LeatherWrappedSteeringwheel[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Leather-wrapped Gear Knob
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.SeatsAndUpholstery
                                .LeatherWrappedGearKnob[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.SeatsAndUpholstery
                                .LeatherWrappedGearKnob[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Driver Armrest
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.SeatsAndUpholstery
                                .DriverArmrest[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.SeatsAndUpholstery
                                .DriverArmrest[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Rear Passenger Seats Type
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.SeatsAndUpholstery
                                .RearPassengerSeatsType[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.SeatsAndUpholstery
                                .RearPassengerSeatsType[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Ventilated Seats
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.SeatsAndUpholstery
                                .VentilatedSeats[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.SeatsAndUpholstery
                                .VentilatedSeats[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Interior Colours
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.SeatsAndUpholstery
                                .InteriorColors[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.SeatsAndUpholstery
                                .InteriorColors[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Rear Armrest
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.SeatsAndUpholstery
                                .RearArmrest[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.SeatsAndUpholstery
                                .RearArmrest[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Folding Rear Seat
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.SeatsAndUpholstery
                                .FoldingRearSeat[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.SeatsAndUpholstery
                                .FoldingRearSeat[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Split Rear Seat
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.SeatsAndUpholstery
                                .SplitRearSeat[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.SeatsAndUpholstery
                                .SplitRearSeat[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Front Seatback Pockets
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.SeatsAndUpholstery
                                .FrontSeatbackPockets[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.SeatsAndUpholstery
                                .FrontSeatbackPockets[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Head-rests
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.SeatsAndUpholstery
                                .HeadRest[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.SeatsAndUpholstery
                                .HeadRest[0]
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Storage</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="grid grid-cols-1">
                      <div className="grid grid-cols-1 border-b-2  py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Cup Holders
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {SpecificationsFeatures.Car1.Storage.CupHolders[0]}
                          </div>
                          <div className="text-center">
                            {SpecificationsFeatures.Car2.Storage.CupHolders[0]}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Driver Armrest Storage
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Storage
                                .DriverArmrestStorage[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Storage
                                .DriverArmrestStorage[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Cooled Glove Box
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Storage
                                .CooledGloveBox[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Storage
                                .CooledGloveBox[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Sunglass Holder
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Storage
                                .SunglassHOlder[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Storage
                                .SunglassHOlder[0]
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Doors, Windows, Mirrors & Wipers</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="grid grid-cols-1">
                      <div className="grid grid-cols-1 border-b-2  py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Power Windows
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .DoorsWindowsMirrorsWipers.PowerWindows[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .DoorsWindowsMirrorsWipers.PowerWindows[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          One Touch -Down
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .DoorsWindowsMirrorsWipers.OneTouchDown[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .DoorsWindowsMirrorsWipers.OneTouchDown[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          One Touch - Up
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .DoorsWindowsMirrorsWipers.OneTouchUp[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .DoorsWindowsMirrorsWipers.OneTouchUp[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Adjustable ORVM
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .DoorsWindowsMirrorsWipers.AdjustableORVM[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .DoorsWindowsMirrorsWipers.AdjustableORVM[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Turn Indicators on ORVM
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .DoorsWindowsMirrorsWipers
                                .TurnIndicatorsonORVM[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .DoorsWindowsMirrorsWipers
                                .TurnIndicatorsonORVM[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Rear Defogger
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .DoorsWindowsMirrorsWipers.RearDefogger[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .DoorsWindowsMirrorsWipers.RearDefogger[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Rear Wiper
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .DoorsWindowsMirrorsWipers.RearWiper[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .DoorsWindowsMirrorsWipers.RearWiper[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Exterior Door Handles
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .DoorsWindowsMirrorsWipers
                                .ExteriorDoorHandles[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .DoorsWindowsMirrorsWipers
                                .ExteriorDoorHandles[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Rain-sensing Wipers
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .DoorsWindowsMirrorsWipers.RainSensingWipers[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .DoorsWindowsMirrorsWipers.RainSensingWipers[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Interior Door Handles
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .DoorsWindowsMirrorsWipers
                                .InteriorDoorHandles[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .DoorsWindowsMirrorsWipers
                                .InteriorDoorHandles[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Door Pockets
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .DoorsWindowsMirrorsWipers.DoorPockets[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .DoorsWindowsMirrorsWipers.DoorPockets[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Side Window Blinds
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .DoorsWindowsMirrorsWipers.SideWindowBlinds[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .DoorsWindowsMirrorsWipers.SideWindowBlinds[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Boot-lid Opener
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .DoorsWindowsMirrorsWipers.BootLidOpener[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .DoorsWindowsMirrorsWipers.BootLidOpener[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Outside Rear View Mirrors (ORVMs)
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .DoorsWindowsMirrorsWipers
                                .OutsideRearViewMirrors[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .DoorsWindowsMirrorsWipers
                                .OutsideRearViewMirrors[0]
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Exterior</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="grid grid-cols-1">
                      <div className="grid grid-cols-1 border-b-2  py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Sunroof / Moonroof
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {SpecificationsFeatures.Car1.Exterior.Sunroof[0]}
                          </div>
                          <div className="text-center">
                            {SpecificationsFeatures.Car2.Exterior.Sunroof[0]}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Roof Mounted Antenna
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Exterior
                                .RoofMountedAntenna[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Exterior
                                .RoofMountedAntenna[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Body-Coloured Bumpers
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Exterior
                                .BodyColorBumpers[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Exterior
                                .BodyColorBumpers[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Body Kit
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {SpecificationsFeatures.Car1.Exterior.BodyKit[0]}
                          </div>
                          <div className="text-center">
                            {SpecificationsFeatures.Car2.Exterior.BodyKit[0]}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Rub - Strips
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {SpecificationsFeatures.Car1.Exterior.RubStrips[0]}
                          </div>
                          <div className="text-center">
                            {SpecificationsFeatures.Car2.Exterior.RubStrips[0]}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Lighting</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="grid grid-cols-1">
                      <div className="grid grid-cols-1 border-b-2  py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Daytime Running Lights
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Lighting
                                .DaytimeRunningLights[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Lighting
                                .DaytimeRunningLights[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Ambient Interior Lighting
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Lighting
                                .AmbientInteriorLighting[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Lighting
                                .AmbientInteriorLighting[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Puddle Lamps
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Lighting
                                .PuddleLamps[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Lighting
                                .PuddleLamps[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Fog Lights
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {SpecificationsFeatures.Car1.Lighting.FogLights[0]}
                          </div>
                          <div className="text-center">
                            {SpecificationsFeatures.Car2.Lighting.FogLights[0]}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Headlights
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {SpecificationsFeatures.Car1.Lighting.HeadLights[0]}
                          </div>
                          <div className="text-center">
                            {SpecificationsFeatures.Car2.Lighting.HeadLights[0]}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Automatic Head Lamps
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Lighting
                                .AutomaticHeadLamps[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Lighting
                                .AutomaticHeadLamps[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Follow me home headlamps
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Lighting
                                .FollowmeHomeLamps[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Lighting
                                .FollowmeHomeLamps[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Tail Lights
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {SpecificationsFeatures.Car1.Lighting.TailLight[0]}
                          </div>
                          <div className="text-center">
                            {SpecificationsFeatures.Car2.Lighting.TailLight[0]}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Cabin Lamps
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {SpecificationsFeatures.Car1.Lighting.CabinLamps[0]}
                          </div>
                          <div className="text-center">
                            {SpecificationsFeatures.Car2.Lighting.CabinLamps[0]}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Headlight Height Adjuster
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Lighting
                                .HeadLightHeightAdjuster[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Lighting
                                .HeadLightHeightAdjuster[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Glove Box Lamp
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Lighting
                                .GloveBoxLamp[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Lighting
                                .GloveBoxLamp[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Lights on Vanity Mirrors
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Lighting
                                .LightsonVanityMirrors[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Lighting
                                .LightsonVanityMirrors[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Rear Reading Lamp
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Lighting
                                .RearReadingLamps[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Lighting
                                .RearReadingLamps[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Cornering Headlights
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Lighting
                                .COrneringHeadLights[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Lighting
                                .COrneringHeadLights[0]
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Instrumentation</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="grid grid-cols-1">
                      <div className="grid grid-cols-1 border-b-2  py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Instrument Cluster
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Instrumentation
                                .InstrumentCluster[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Instrumentation
                                .InstrumentCluster[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Trip Meter
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Instrumentation
                                .TripMeter[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Instrumentation
                                .TripMeter[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Average Fuel Consumption
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Instrumentation
                                .AverageFuelConsumption[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Instrumentation
                                .AverageFuelConsumption[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Average Speed
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Instrumentation
                                .AverageSpeed[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Instrumentation
                                .AverageSpeed[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Distance to Empty
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Instrumentation
                                .DistanceToEmpty[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Instrumentation
                                .DistanceToEmpty[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Clock
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Instrumentation
                                .Clock[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Instrumentation
                                .Clock[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Low Fuel Level Warning
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Instrumentation
                                .LowFuelLevelWarning[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Instrumentation
                                .LowFuelLevelWarning[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Door Ajar Warning
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Instrumentation
                                .DoorAjarWarning[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Instrumentation
                                .DoorAjarWarning[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Adjustable Cluster Brightness
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Instrumentation
                                .AdjustableClusterBrightness[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Instrumentation
                                .AdjustableClusterBrightness[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Gear Indicator
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Instrumentation
                                .GearIndicator[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Instrumentation
                                .GearIndicator[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Shift Indicator
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Instrumentation
                                .ShiftIndicator[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Instrumentation
                                .ShiftIndicator[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Tachometer
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Instrumentation
                                .TachoMeter[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Instrumentation
                                .TachoMeter[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Instantaneous Consumption
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.Instrumentation
                                .InstantaneousConsumption[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.Instrumentation
                                .InstantaneousConsumption[0]
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Entertainment, Information & Communication</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="grid grid-cols-1">
                      <div className="grid grid-cols-1 border-b-2  py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Wireless Charger
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .EntertainmentInfoandCommunication
                                .WirelessCharger[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .EntertainmentInfoandCommunication
                                .WirelessCharger[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Smart Connectivity
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .EntertainmentInfoandCommunication
                                .SmartConnectivity[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .EntertainmentInfoandCommunication
                                .SmartConnectivity[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Head Unit Size
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .EntertainmentInfoandCommunication
                                .HeadUnitSize[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .EntertainmentInfoandCommunication
                                .HeadUnitSize[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Integrated (in-dash) Music System
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .EntertainmentInfoandCommunication
                                .IntegratedMusicSystem[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .EntertainmentInfoandCommunication
                                .IntegratedMusicSystem[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Display
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .EntertainmentInfoandCommunication.Display[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .EntertainmentInfoandCommunication.Display[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          GPS Navigation System
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .EntertainmentInfoandCommunication
                                .GPSNavigationSystem[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .EntertainmentInfoandCommunication
                                .GPSNavigationSystem[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Speakers
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .EntertainmentInfoandCommunication.Speakers[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .EntertainmentInfoandCommunication.Speakers[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          USB Compatibility
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .EntertainmentInfoandCommunication
                                .USBCampatibility[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .EntertainmentInfoandCommunication
                                .USBCampatibility[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Aux Compatibility
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .EntertainmentInfoandCommunication
                                .AUXCompatibility[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .EntertainmentInfoandCommunication
                                .AUXCompatibility[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Bluetooth Compatibility
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .EntertainmentInfoandCommunication
                                .BluetoothCompatibility[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .EntertainmentInfoandCommunication
                                .BluetoothCompatibility[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Steering mounted controls
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .EntertainmentInfoandCommunication
                                .SteeringMountedControls[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .EntertainmentInfoandCommunication
                                .SteeringMountedControls[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Voice Command
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .EntertainmentInfoandCommunication
                                .VoiceCommand[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .EntertainmentInfoandCommunication
                                .VoiceCommand[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          CD Player
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1
                                .EntertainmentInfoandCommunication.CDPlayer[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2
                                .EntertainmentInfoandCommunication.CDPlayer[0]
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Manufacturer Warranty</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="grid grid-cols-1">
                      <div className="grid grid-cols-1 border-b-2  py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Warranty (Years)
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.ManufacturerWarranty
                                .WarrantyYears[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.ManufacturerWarranty
                                .WarrantyYears[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Warranty (Kilometres)
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.ManufacturerWarranty
                                .WarrantyKilometers[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.ManufacturerWarranty
                                .WarrantyKilometers[0]
                            }
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 border-b-2 py-3">
                        <div className="text-center font-bold text-lg mb-3">
                          Extended Warranty
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car1.ManufacturerWarranty
                                .ExtendedWarranty[0]
                            }
                          </div>
                          <div className="text-center">
                            {
                              SpecificationsFeatures.Car2.ManufacturerWarranty
                                .ExtendedWarranty[0]
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllSPecifications;
