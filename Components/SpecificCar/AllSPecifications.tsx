import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

function AllSPecifications({ SpecificationsFeatures }) {
  return (
    <div>
      <div id="specifications" className="text-2xl font-bold mt-6 mb-3">
        Specifications & Features
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
                      <div className="grid grid-cols-2 border-b-2  py-3">
                        <div>Engine</div>
                        <div>
                          {SpecificationsFeatures.EngineTransmission.Engine[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Engine Type</div>
                        <div>
                          {
                            SpecificationsFeatures.EngineTransmission
                              .EngineType[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Fuel Type</div>
                        <div>
                          {
                            SpecificationsFeatures.EngineTransmission
                              .FuelType[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Max Power (bhp@rpm)</div>
                        <div>
                          {
                            SpecificationsFeatures.EngineTransmission
                              .MaxPower[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Max Torque (Nm@rpm)</div>
                        <div>
                          {
                            SpecificationsFeatures.EngineTransmission
                              .MaxTorque[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Mileage (ARAI)</div>
                        <div>
                          {SpecificationsFeatures.EngineTransmission.Mileage[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Drivetrain</div>
                        <div>
                          {
                            SpecificationsFeatures.EngineTransmission
                              .Drivetrain[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Transmission</div>
                        <div>
                          {
                            SpecificationsFeatures.EngineTransmission
                              .Transmission[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Emission Standard</div>
                        <div>
                          {
                            SpecificationsFeatures.EngineTransmission
                              .EmissionStandard[0]
                          }
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
                      <div className="grid grid-cols-2 border-b-2  py-3">
                        <div>Length</div>
                        <div>
                          {SpecificationsFeatures.DimensionWeight.Length[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Width</div>
                        <div>
                          {SpecificationsFeatures.DimensionWeight.Width[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Height</div>
                        <div>
                          {SpecificationsFeatures.DimensionWeight.Height[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Wheelbase</div>
                        <div>
                          {SpecificationsFeatures.DimensionWeight.Wheelbase[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Ground Clearance</div>
                        <div>
                          {
                            SpecificationsFeatures.DimensionWeight
                              .GroundClearance[0]
                          }
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
                      <div className="grid grid-cols-2 border-b-2  py-3">
                        <div>Front Suspension</div>
                        <div>
                          {
                            SpecificationsFeatures.SuspensionBrakeSteering
                              .FrontSuspension[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Rear Suspension</div>
                        <div>
                          {
                            SpecificationsFeatures.SuspensionBrakeSteering
                              .RearSuspension[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Front Brake Type</div>
                        <div>
                          {
                            SpecificationsFeatures.SuspensionBrakeSteering
                              .FrontBrake[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Rear Brake Type</div>
                        <div>
                          {
                            SpecificationsFeatures.SuspensionBrakeSteering
                              .RearBrake[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Minimum Turning Radius</div>
                        <div>
                          {
                            SpecificationsFeatures.SuspensionBrakeSteering
                              .MinimumTurningRadius[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Steering Type</div>
                        <div>
                          {
                            SpecificationsFeatures.SuspensionBrakeSteering
                              .SteeringType[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Wheels</div>
                        <div>
                          {
                            SpecificationsFeatures.SuspensionBrakeSteering
                              .Wheels[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Spare Wheel</div>
                        <div>
                          {
                            SpecificationsFeatures.SuspensionBrakeSteering
                              .SpareWheel[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Tyre Size</div>
                        <div>
                          {
                            SpecificationsFeatures.SuspensionBrakeSteering
                              .TyreSize[0]
                          }
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
                      <div className="grid grid-cols-2 border-b-2  py-3">
                        <div>NCAP Rating</div>
                        <div>{SpecificationsFeatures.Safety.NCAPRating[0]}</div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Airbags</div>
                        <div>{SpecificationsFeatures.Safety.Airbags[0]}</div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Middle rear three-point seatbelt</div>
                        <div>
                          {SpecificationsFeatures.Safety.MiddleRearSeatbelt[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Middle Rear Head Rest</div>
                        <div>
                          {SpecificationsFeatures.Safety.MiddleRearHeadrest[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Tyre Pressure Monitoring System (TPMS)</div>
                        <div>
                          {SpecificationsFeatures.Safety.TyrePressureMoni[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Child Seat Anchor Points</div>
                        <div>
                          {SpecificationsFeatures.Safety.ChildSeatAnchor[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Seat Belt Warning</div>
                        <div>
                          {SpecificationsFeatures.Safety.SeatBeltWarning[0]}
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
                      <div className="grid grid-cols-2 border-b-2  py-3">
                        <div>Anti-Lock Braking System (ABS)</div>
                        <div>
                          {
                            SpecificationsFeatures.BreakindAndTraction
                              .AntiLockBreaking[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Electronic Brake-force Distribution (EBD)</div>
                        <div>
                          {
                            SpecificationsFeatures.BreakindAndTraction
                              .ElectricBrakeDistri[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Brake Assist (BA)</div>
                        <div>
                          {
                            SpecificationsFeatures.BreakindAndTraction
                              .BrakeAssist[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Electronic Stability Program (ESP)</div>
                        <div>
                          {
                            SpecificationsFeatures.BreakindAndTraction
                              .ElectricStabilityProgram[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Hill Hold Control</div>
                        <div>
                          {
                            SpecificationsFeatures.BreakindAndTraction
                              .HillHoldControl[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Traction Control System (TC/TCS)</div>
                        <div>
                          {
                            SpecificationsFeatures.BreakindAndTraction
                              .TractionControlSys[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Hill Descent Control</div>
                        <div>
                          {
                            SpecificationsFeatures.BreakindAndTraction
                              .HillDescentControl[0]
                          }
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
                      <div className="grid grid-cols-2 border-b-2  py-3">
                        <div>Engine immobilizer</div>
                        <div>
                          {
                            SpecificationsFeatures.LocksAndSecurity
                              .EngineImmobilizer[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Central Locking</div>
                        <div>
                          {
                            SpecificationsFeatures.LocksAndSecurity
                              .CentralLocking[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Speed Sensing Door Lock</div>
                        <div>
                          {
                            SpecificationsFeatures.LocksAndSecurity
                              .SpeedSensingDoorLock[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Child Safety Lock</div>
                        <div>
                          {
                            SpecificationsFeatures.LocksAndSecurity
                              .ChildSafetyLock[0]
                          }
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
                      <div className="grid grid-cols-2 border-b-2  py-3">
                        <div>Air Conditioner</div>
                        <div>
                          {
                            SpecificationsFeatures.ConfortAndCOnvenience
                              .AirConditioner[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Front AC</div>
                        <div>
                          {
                            SpecificationsFeatures.ConfortAndCOnvenience
                              .FrontAC[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Rear AC</div>
                        <div>
                          {
                            SpecificationsFeatures.ConfortAndCOnvenience
                              .RearAC[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Heater</div>
                        <div>
                          {
                            SpecificationsFeatures.ConfortAndCOnvenience
                              .Heater[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Vanity Mirrors on Sun Visors</div>
                        <div>
                          {
                            SpecificationsFeatures.ConfortAndCOnvenience
                              .VanityMirror[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Cabin-Boot Access</div>
                        <div>
                          {
                            SpecificationsFeatures.ConfortAndCOnvenience
                              .CabinBootAccess[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Anti-glare Mirrors</div>
                        <div>
                          {
                            SpecificationsFeatures.ConfortAndCOnvenience
                              .AntiGlareMirrors[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Parking Assist</div>
                        <div>
                          {
                            SpecificationsFeatures.ConfortAndCOnvenience
                              .ParkingAssist[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Parking Sensors</div>
                        <div>
                          {
                            SpecificationsFeatures.ConfortAndCOnvenience
                              .ParkingSensors[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Cruise Control</div>
                        <div>
                          {
                            SpecificationsFeatures.ConfortAndCOnvenience
                              .CruiseCOntrol[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Headlight & Ignition On Reminder</div>
                        <div>
                          {
                            SpecificationsFeatures.ConfortAndCOnvenience
                              .HeadLightIgnitionONReminder[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Keyless Start/ Button Start</div>
                        <div>
                          {
                            SpecificationsFeatures.ConfortAndCOnvenience
                              .KeylessStartStopButton[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Steering Adjustment</div>
                        <div>
                          {
                            SpecificationsFeatures.ConfortAndCOnvenience
                              .SteeringAdjustment[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>12V Power Outlets</div>
                        <div>
                          {
                            SpecificationsFeatures.ConfortAndCOnvenience
                              .twelveVPowerOutlets[0]
                          }
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
                      <div className="grid grid-cols-2 border-b-2  py-3">
                        <div>Driver Seat Adjustment</div>
                        <div>
                          {
                            SpecificationsFeatures.SeatsAndUpholstery
                              .DriverSeatAdjustment[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Front Passenger Seat Adjustment</div>
                        <div>
                          {
                            SpecificationsFeatures.SeatsAndUpholstery
                              .FrontPassengerSeatAdjustment[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Rear Row Seat Adjustment</div>
                        <div>
                          {
                            SpecificationsFeatures.SeatsAndUpholstery
                              .RearRowSeatAdjustment[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Seat Upholstery</div>
                        <div>
                          {
                            SpecificationsFeatures.SeatsAndUpholstery
                              .SeatUpholstery[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Leather-wrapped Steering Wheel</div>
                        <div>
                          {
                            SpecificationsFeatures.SeatsAndUpholstery
                              .LeatherWrappedSteeringwheel[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Leather-wrapped Gear Knob</div>
                        <div>
                          {
                            SpecificationsFeatures.SeatsAndUpholstery
                              .LeatherWrappedGearKnob[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Driver Armrest</div>
                        <div>
                          {
                            SpecificationsFeatures.SeatsAndUpholstery
                              .DriverArmrest[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Rear Passenger Seats Type</div>
                        <div>
                          {
                            SpecificationsFeatures.SeatsAndUpholstery
                              .RearPassengerSeatsType[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Ventilated Seats</div>
                        <div>
                          {
                            SpecificationsFeatures.SeatsAndUpholstery
                              .VentilatedSeats[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Interior Colours</div>
                        <div>
                          {
                            SpecificationsFeatures.SeatsAndUpholstery
                              .InteriorColors[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Rear Armrest</div>
                        <div>
                          {
                            SpecificationsFeatures.SeatsAndUpholstery
                              .RearArmrest[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Folding Rear Seat</div>
                        <div>
                          {
                            SpecificationsFeatures.SeatsAndUpholstery
                              .FoldingRearSeat[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Split Rear Seat</div>
                        <div>
                          {
                            SpecificationsFeatures.SeatsAndUpholstery
                              .SplitRearSeat[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Front Seatback Pockets</div>
                        <div>
                          {
                            SpecificationsFeatures.SeatsAndUpholstery
                              .FrontSeatbackPockets[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Head-rests</div>
                        <div>
                          {
                            SpecificationsFeatures.SeatsAndUpholstery
                              .HeadRest[0]
                          }
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
                      <div className="grid grid-cols-2 border-b-2  py-3">
                        <div>Cup Holders</div>
                        <div>
                          {SpecificationsFeatures.Storage.CupHolders[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Driver Armrest Storage</div>
                        <div>
                          {
                            SpecificationsFeatures.Storage
                              .DriverArmrestStorage[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Cooled Glove Box</div>
                        <div>
                          {SpecificationsFeatures.Storage.CooledGloveBox[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Sunglass Holder</div>
                        <div>
                          {SpecificationsFeatures.Storage.SunglassHOlder[0]}
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
                      <div className="grid grid-cols-2 border-b-2  py-3">
                        <div>Power Windows</div>
                        <div>
                          {
                            SpecificationsFeatures.DoorsWindowsMirrorsWipers
                              .PowerWindows[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>One Touch -Down</div>
                        <div>
                          {
                            SpecificationsFeatures.DoorsWindowsMirrorsWipers
                              .OneTouchDown[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>One Touch - Up</div>
                        <div>
                          {
                            SpecificationsFeatures.DoorsWindowsMirrorsWipers
                              .OneTouchUp[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Adjustable ORVM</div>
                        <div>
                          {
                            SpecificationsFeatures.DoorsWindowsMirrorsWipers
                              .AdjustableORVM[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Turn Indicators on ORVM</div>
                        <div>
                          {
                            SpecificationsFeatures.DoorsWindowsMirrorsWipers
                              .TurnIndicatorsonORVM[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Rear Defogger</div>
                        <div>
                          {
                            SpecificationsFeatures.DoorsWindowsMirrorsWipers
                              .RearDefogger[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Rear Wiper</div>
                        <div>
                          {
                            SpecificationsFeatures.DoorsWindowsMirrorsWipers
                              .RearWiper[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Exterior Door Handles</div>
                        <div>
                          {
                            SpecificationsFeatures.DoorsWindowsMirrorsWipers
                              .ExteriorDoorHandles[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Rain-sensing Wipers</div>
                        <div>
                          {
                            SpecificationsFeatures.DoorsWindowsMirrorsWipers
                              .RainSensingWipers[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Interior Door Handles</div>
                        <div>
                          {
                            SpecificationsFeatures.DoorsWindowsMirrorsWipers
                              .InteriorDoorHandles[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Door Pockets</div>
                        <div>
                          {
                            SpecificationsFeatures.DoorsWindowsMirrorsWipers
                              .DoorPockets[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Side Window Blinds</div>
                        <div>
                          {
                            SpecificationsFeatures.DoorsWindowsMirrorsWipers
                              .SideWindowBlinds[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Boot-lid Opener</div>
                        <div>
                          {
                            SpecificationsFeatures.DoorsWindowsMirrorsWipers
                              .BootLidOpener[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Outside Rear View Mirrors (ORVMs)</div>
                        <div>
                          {
                            SpecificationsFeatures.DoorsWindowsMirrorsWipers
                              .OutsideRearViewMirrors[0]
                          }
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
                      <div className="grid grid-cols-2 border-b-2  py-3">
                        <div>Sunroof / Moonroof</div>
                        <div>{SpecificationsFeatures.Exterior.Sunroof[0]}</div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Roof Mounted Antenna</div>
                        <div>
                          {
                            SpecificationsFeatures.Exterior
                              .RoofMountedAntenna[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Body-Coloured Bumpers</div>
                        <div>
                          {SpecificationsFeatures.Exterior.BodyColorBumpers[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Body Kit</div>
                        <div>{SpecificationsFeatures.Exterior.BodyKit[0]}</div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Rub - Strips</div>
                        <div>
                          {SpecificationsFeatures.Exterior.RubStrips[0]}
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
                      <div className="grid grid-cols-2 border-b-2  py-3">
                        <div>Daytime Running Lights</div>
                        <div>
                          {
                            SpecificationsFeatures.Lighting
                              .DaytimeRunningLights[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Ambient Interior Lighting</div>
                        <div>
                          {
                            SpecificationsFeatures.Lighting
                              .AmbientInteriorLighting[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Puddle Lamps</div>
                        <div>
                          {SpecificationsFeatures.Lighting.PuddleLamps[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Fog Lights</div>
                        <div>
                          {SpecificationsFeatures.Lighting.FogLights[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Headlights</div>
                        <div>
                          {SpecificationsFeatures.Lighting.HeadLights[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Automatic Head Lamps</div>
                        <div>
                          {
                            SpecificationsFeatures.Lighting
                              .AutomaticHeadLamps[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Follow me home headlamps</div>
                        <div>
                          {SpecificationsFeatures.Lighting.FollowmeHomeLamps[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Tail Lights</div>
                        <div>
                          {SpecificationsFeatures.Lighting.TailLight[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Cabin Lamps</div>
                        <div>
                          {SpecificationsFeatures.Lighting.CabinLamps[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Headlight Height Adjuster</div>
                        <div>
                          {
                            SpecificationsFeatures.Lighting
                              .HeadLightHeightAdjuster[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Glove Box Lamp</div>
                        <div>
                          {SpecificationsFeatures.Lighting.GloveBoxLamp[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Lights on Vanity Mirrors</div>
                        <div>
                          {
                            SpecificationsFeatures.Lighting
                              .LightsonVanityMirrors[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Rear Reading Lamp</div>
                        <div>
                          {SpecificationsFeatures.Lighting.RearReadingLamps[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Cornering Headlights</div>
                        <div>
                          {
                            SpecificationsFeatures.Lighting
                              .COrneringHeadLights[0]
                          }
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
                      <div className="grid grid-cols-2 border-b-2  py-3">
                        <div>Instrument Cluster</div>
                        <div>
                          {
                            SpecificationsFeatures.Instrumentation
                              .InstrumentCluster[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Trip Meter</div>
                        <div>
                          {SpecificationsFeatures.Instrumentation.TripMeter[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Average Fuel Consumption</div>
                        <div>
                          {
                            SpecificationsFeatures.Instrumentation
                              .AverageFuelConsumption[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Average Speed</div>
                        <div>
                          {
                            SpecificationsFeatures.Instrumentation
                              .AverageSpeed[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Distance to Empty</div>
                        <div>
                          {
                            SpecificationsFeatures.Instrumentation
                              .DistanceToEmpty[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Clock</div>
                        <div>
                          {SpecificationsFeatures.Instrumentation.Clock[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Low Fuel Level Warning</div>
                        <div>
                          {
                            SpecificationsFeatures.Instrumentation
                              .LowFuelLevelWarning[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Door Ajar Warning</div>
                        <div>
                          {
                            SpecificationsFeatures.Instrumentation
                              .DoorAjarWarning[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Adjustable Cluster Brightness</div>
                        <div>
                          {
                            SpecificationsFeatures.Instrumentation
                              .AdjustableClusterBrightness[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Gear Indicator</div>
                        <div>
                          {
                            SpecificationsFeatures.Instrumentation
                              .GearIndicator[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Shift Indicator</div>
                        <div>
                          {
                            SpecificationsFeatures.Instrumentation
                              .ShiftIndicator[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Tachometer</div>
                        <div>
                          {SpecificationsFeatures.Instrumentation.TachoMeter[0]}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Instantaneous Consumption</div>
                        <div>
                          {
                            SpecificationsFeatures.Instrumentation
                              .InstantaneousConsumption[0]
                          }
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
                      <div className="grid grid-cols-2 border-b-2  py-3">
                        <div>Wireless Charger</div>
                        <div>
                          {
                            SpecificationsFeatures
                              .EntertainmentInfoandCommunication
                              .WirelessCharger[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Smart Connectivity</div>
                        <div>
                          {
                            SpecificationsFeatures
                              .EntertainmentInfoandCommunication
                              .SmartConnectivity[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Head Unit Size</div>
                        <div>
                          {
                            SpecificationsFeatures
                              .EntertainmentInfoandCommunication.HeadUnitSize[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Integrated (in-dash) Music System</div>
                        <div>
                          {
                            SpecificationsFeatures
                              .EntertainmentInfoandCommunication
                              .IntegratedMusicSystem[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Display</div>
                        <div>
                          {
                            SpecificationsFeatures
                              .EntertainmentInfoandCommunication.Display[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>GPS Navigation System</div>
                        <div>
                          {
                            SpecificationsFeatures
                              .EntertainmentInfoandCommunication
                              .GPSNavigationSystem[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Speakers</div>
                        <div>
                          {
                            SpecificationsFeatures
                              .EntertainmentInfoandCommunication.Speakers[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>USB Compatibility</div>
                        <div>
                          {
                            SpecificationsFeatures
                              .EntertainmentInfoandCommunication
                              .USBCampatibility[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Aux Compatibility</div>
                        <div>
                          {
                            SpecificationsFeatures
                              .EntertainmentInfoandCommunication
                              .AUXCompatibility[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Bluetooth Compatibility</div>
                        <div>
                          {
                            SpecificationsFeatures
                              .EntertainmentInfoandCommunication
                              .BluetoothCompatibility[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Steering mounted controls</div>
                        <div>
                          {
                            SpecificationsFeatures
                              .EntertainmentInfoandCommunication
                              .SteeringMountedControls[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Voice Command</div>
                        <div>
                          {
                            SpecificationsFeatures
                              .EntertainmentInfoandCommunication.VoiceCommand[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>CD Player</div>
                        <div>
                          {
                            SpecificationsFeatures
                              .EntertainmentInfoandCommunication.CDPlayer[0]
                          }
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
                      <div className="grid grid-cols-2 border-b-2  py-3">
                        <div>Warranty (Years)</div>
                        <div>
                          {
                            SpecificationsFeatures.ManufacturerWarranty
                              .WarrantyYears[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Warranty (Kilometres)</div>
                        <div>
                          {
                            SpecificationsFeatures.ManufacturerWarranty
                              .WarrantyKilometers[0]
                          }
                        </div>
                      </div>
                      <div className="grid grid-cols-2 border-b-2 py-3">
                        <div>Extended Warranty</div>
                        <div>
                          {
                            SpecificationsFeatures.ManufacturerWarranty
                              .ExtendedWarranty[0]
                          }
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
