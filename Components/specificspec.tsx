import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

function SpecificSpecs({ specs }) {
  const VarientPetrol = {
    varient1: ["STD", "796  cc, Manual, Petrol, 22.05 kmpl", "Rs.3.00 Lakh*"],
    varient2: [
      "STD (O)",
      "796  cc, Manual, Petrol, 22.05 kmpl",
      "Rs.3.05 Lakh*",
    ],
    varient3: ["LXI", "796  cc, Manual, Petrol, 22.05 kmpl", "Rs.3.76 Lakh*"],
    varient4: [
      "LXI (O)",
      "796  cc, Manual, Petrol, 22.05 kmpl",
      "Rs.3.81 Lakh*",
    ],
    varient5: ["VXI", "796  cc, Manual, Petrol, 22.05 kmpl", "Rs.4.02 Lakh*"],
    varient6: [
      "VXI Plus",
      "796  cc, Manual, Petrol, 22.05 kmpl",
      "Rs.4.16 Lakh*",
    ],
  };
  const SpecificationsFeatures = {
    EngineTransmission: {
      Engine: ["796 cc"],
      EngineType: ["F8D"],
      FuelType: ["Petrol"],
      MaxPower: ["47 bhp @ 6000 rpm"],
      MaxTorque: ["69 Nm @ 3500 rpm"],
      Mileage: ["22.05 kmpl"],
      Drivetrain: ["FWD"],
      Transmission: ["Manual - 5 Gears"],
      EmissionStandard: ["BS 6"],
    },
    DimensionWeight: {
      Length: ["3445 mm"],
      Width: ["1515 mm"],
      Height: ["1475 mm"],
      Wheelbase: ["2360 mm"],
      GroundClearance: ["160 mm"],
    },
    SuspensionBrakeSteering: {
      FrontSuspension: ["Mac Pherson Strut"],
      RearSuspension: ["3-Link Rigid Axle Suspension"],
      FrontBrake: ["Disc"],
      RearBrake: ["Drum"],
      MinimumTurningRadius: ["4.6 metres"],
      SteeringType: ["Power assisted (Electric)"],
      Wheels: ["Steel Rims"],
      SpareWheel: ["Steel"],
      TyreSize: ["145 / 80 R12"],
    },
    Safety: {
      NCAPRating: ["Not Tested"],
      Airbags: ["2 Airbags (Driver, Passenger)"],
      MiddleRearSeatbelt: ["No"],
      MiddleRearHeadrest: ["No"],
      TyrePressureMoni: ["No"],
      ChildSeatAnchor: ["No"],
      SeatBeltWarning: ["Yes"],
    },
    BreakindAndTraction: {
      AntiLockBreaking: ["Yes"],
      ElectricBrakeDistri: ["Yes"],
      BrakeAssist: ["Yes"],
      ElectricStabilityProgram: ["No"],
      HillHoldControl: ["No"],
      TractionControlSys: ["No"],
      HillDescentControl: ["No"],
    },
    LocksAndSecurity: {
      EngineImmobilizer: ["Yes"],
      CentralLocking: ["Remote"],
      SpeedSensingDoorLock: ["No"],
      ChildSafetyLock: ["Yes"],
    },
    ConfortAndCOnvenience: {
      AirConditioner: ["Yes (Manual)"],
      FrontAC: ["Single Zone, Common Fan Speed Control"],
      RearAC: ["No"],
      Heater: ["Yes"],
      VanityMirror: ["No"],
      CabinBootAccess: ["Yes"],
      AntiGlareMirrors: ["No"],
      ParkingAssist: ["No"],
      ParkingSensors: ["Rear"],
      CruiseCOntrol: ["No"],
      HeadLightIgnitionONReminder: ["Yes"],
      KeylessStartStopButton: ["No"],
      SteeringAdjustment: ["No"],
      twelveVPowerOutlets: ["Yes"],
    },
    SeatsAndUpholstery: {
      DriverSeatAdjustment: [
        "4 way manually adjustable (seat forward / back, backrest tilt forward / back)",
      ],
      FrontPassengerSeatAdjustment: [
        "4 way manually adjustable (seat forward / back, backrest tilt forward / back)",
      ],
      RearRowSeatAdjustment: ["No"],
      SeatUpholstery: ["Vinyl + Fabric"],
      LeatherWrappedSteeringwheel: ["No"],
      LeatherWrappedGearKnob: ["No"],
      DriverArmrest: ["No"],
      RearPassengerSeatsType: ["Bench"],
      VentilatedSeats: ["No"],
      InteriorColors: ["Black and Beige"],
      RearArmrest: ["No"],
      FoldingRearSeat: ["Full"],
      SplitRearSeat: ["No"],
      FrontSeatbackPockets: ["Yes"],
      HeadRest: ["Front and Rear"],
    },
    Storage: {
      CupHolders: ["Front and Rear"],
      DriverArmrestStorage: ["No"],
      CooledGloveBox: ["No"],
      SunglassHOlder: ["No"],
    },
    DoorsWindowsMirrorsWipers: {
      PowerWindows: ["Front Only"],
      OneTouchDown: ["No"],
      OneTouchUp: ["No"],
      AdjustableORVM: ["Internally Adjustable"],
      TurnIndicatorsonORVM: ["No"],
      RearDefogger: ["No"],
      RearWiper: ["No"],
      ExteriorDoorHandles: ["Body Coloured"],
      RainSensingWipers: ["No"],
      InteriorDoorHandles: ["Silver"],
      DoorPockets: ["Front"],
      SideWindowBlinds: ["No"],
      BootLidOpener: ["Internal with Remote"],
      OutsideRearViewMirrors: ["Body Coloured"],
    },
    Exterior: {
      Sunroof: ["No"],
      RoofMountedAntenna: ["Yes"],
      BodyColorBumpers: ["Yes"],
      BodyKit: ["No"],
      RubStrips: ["Black"],
    },
    Lighting: {
      DaytimeRunningLights: ["No"],
      AmbientInteriorLighting: ["No"],
      PuddleLamps: ["No"],
      FogLights: ["Yes"],
      HeadLights: ["Halogen"],
      AutomaticHeadLamps: ["No"],
      FollowmeHomeLamps: ["No"],
      TailLight: ["Halogen"],
      CabinLamps: ["Front"],
      HeadLightHeightAdjuster: ["Yes"],
      GloveBoxLamp: ["No"],
      LightsonVanityMirrors: ["No"],
      RearReadingLamps: ["No"],
      COrneringHeadLights: ["No"],
    },
    Instrumentation: {
      InstrumentCluster: ["Analogue and Digital"],
      TripMeter: ["Electronic 2 trips"],
      AverageFuelConsumption: ["Yes"],
      AverageSpeed: ["No"],
      DistanceToEmpty: ["Yes"],
      Clock: ["Digital"],
      LowFuelLevelWarning: ["Yes"],
      DoorAjarWarning: ["No"],
      AdjustableClusterBrightness: ["No"],
      GearIndicator: ["No"],
      ShiftIndicator: ["No"],
      TachoMeter: ["No"],
      InstantaneousConsumption: ["No"],
    },
    EntertainmentInfoandCommunication: {
      WirelessCharger: ["No"],
      SmartConnectivity: ["Android Auto (Yes), Apple Car Play (Yes)"],
      HeadUnitSize: ["-"],
      IntegratedMusicSystem: ["Yes"],
      Display: ["TouchScreen"],
      GPSNavigationSystem: ["Yes"],
      Speakers: ["2"],
      USBCampatibility: ["Yes"],
      AUXCompatibility: ["Yes"],
      BluetoothCompatibility: ["Yes"],
      SteeringMountedControls: ["No"],
      VoiceCommand: ["No"],
      CDPlayer: ["No"],
    },
    ManufacturerWarranty: {
      WarrantyYears: ["2"],
      WarrantyKilometers: ["40000"],
      ExtendedWarranty: ["-"],
    },
  };
  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>
                Show all Specifications of <b>{VarientPetrol.varient1[0]}</b>{" "}
                Varient
              </span>
              <ChevronUpIcon
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              <div className="grid grid-cols-1">
                <div className="grid border-b-2  py-3">
                  <div>
                    <div>
                      <div className=" mr-4 md:mr-1">
                        <div className="  rounded-2xl">
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
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm rounded-b-md bg-gray-100 text-gray-500">
                                  <div className="grid grid-cols-1">
                                    <div className="grid grid-cols-2 border-b-2  py-3">
                                      <div className="font-bold">Engine</div>
                                      <div>
                                        {specs?.EngineTransmission.Engine[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Engine Type
                                      </div>
                                      <div>
                                        {
                                          specs?.EngineTransmission
                                            .EngineType[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">Fuel Type</div>
                                      <div>
                                        {specs?.EngineTransmission.FuelType[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Max Power (bhp@rpm)
                                      </div>
                                      <div>
                                        {specs?.EngineTransmission.MaxPower[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Max Torque (Nm@rpm)
                                      </div>
                                      <div>
                                        {specs?.EngineTransmission.MaxTorque[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Mileage (ARAI)
                                      </div>
                                      <div>
                                        {specs?.EngineTransmission.Mileage[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Drivetrain
                                      </div>
                                      <div>
                                        {
                                          specs?.EngineTransmission
                                            .Drivetrain[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Transmission
                                      </div>
                                      <div>
                                        {
                                          specs?.EngineTransmission
                                            .Transmission[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Emission Standard
                                      </div>
                                      <div>
                                        {
                                          specs?.EngineTransmission
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
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-gray-100 rounded-b-lg text-gray-500">
                                  <div className="grid grid-cols-1">
                                    <div className="grid grid-cols-2 border-b-2  py-3">
                                      <div className="font-bold">Length</div>
                                      <div>
                                        {specs?.DimensionWeight.Length[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">Width</div>
                                      <div>
                                        {specs?.DimensionWeight.Width[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">Height</div>
                                      <div>
                                        {specs?.DimensionWeight.Height[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">Wheelbase</div>
                                      <div>
                                        {specs?.DimensionWeight.Wheelbase[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Ground Clearance
                                      </div>
                                      <div>
                                        {
                                          specs?.DimensionWeight
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
                                  <span>
                                    Suspensions, Brakes, Steering & Tyres
                                  </span>
                                  <ChevronUpIcon
                                    className={`${
                                      open ? "transform rotate-180" : ""
                                    } w-5 h-5 text-purple-500`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-gray-100 rounded-b-lg text-gray-500">
                                  <div className="grid grid-cols-1">
                                    <div className="grid grid-cols-2 border-b-2  py-3">
                                      <div className="font-bold">
                                        Front Suspension
                                      </div>
                                      <div>
                                        {
                                          specs?.SuspensionBrakeSteering
                                            .FrontSuspension[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Rear Suspension
                                      </div>
                                      <div>
                                        {
                                          specs?.SuspensionBrakeSteering
                                            .RearSuspension[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Front Brake Type
                                      </div>
                                      <div>
                                        {
                                          specs?.SuspensionBrakeSteering
                                            .FrontBrake[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Rear Brake Type
                                      </div>
                                      <div>
                                        {
                                          specs?.SuspensionBrakeSteering
                                            .RearBrake[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Minimum Turning Radius
                                      </div>
                                      <div>
                                        {
                                          specs?.SuspensionBrakeSteering
                                            .MinimumTurningRadius[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Steering Type
                                      </div>
                                      <div>
                                        {
                                          specs?.SuspensionBrakeSteering
                                            .SteeringType[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">Wheels</div>
                                      <div>
                                        {
                                          specs?.SuspensionBrakeSteering
                                            .Wheels[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Spare Wheel
                                      </div>
                                      <div>
                                        {
                                          specs?.SuspensionBrakeSteering
                                            .SpareWheel[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">Tyre Size</div>
                                      <div>
                                        {
                                          specs?.SuspensionBrakeSteering
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
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-gray-100 rounded-b-lg text-gray-500">
                                  <div className="grid grid-cols-1">
                                    <div className="grid grid-cols-2 border-b-2  py-3">
                                      <div className="font-bold">
                                        NCAP Rating
                                      </div>
                                      <div>{specs?.Safety.NCAPRating[0]}</div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">Airbags</div>
                                      <div>{specs?.Safety.Airbags[0]}</div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Middle rear three-point seatbelt
                                      </div>
                                      <div>
                                        {specs?.Safety.MiddleRearSeatbelt[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Middle Rear Head Rest
                                      </div>
                                      <div>
                                        {specs?.Safety.MiddleRearHeadrest[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Tyre Pressure Monitoring System (TPMS)
                                      </div>
                                      <div>
                                        {specs?.Safety.TyrePressureMoni[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Child Seat Anchor Points
                                      </div>
                                      <div>
                                        {specs?.Safety.ChildSeatAnchor[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Seat Belt Warning
                                      </div>
                                      <div>
                                        {specs?.Safety.SeatBeltWarning[0]}
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
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-gray-100 rounded-b-lg text-gray-500">
                                  <div className="grid grid-cols-1">
                                    <div className="grid grid-cols-2 border-b-2  py-3">
                                      <div>Anti-Lock Braking System (ABS)</div>
                                      <div>
                                        {
                                          specs?.BreakindAndTraction
                                            .AntiLockBreaking[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div>
                                        Electronic Brake-force Distribution
                                        (EBD)
                                      </div>
                                      <div>
                                        {
                                          specs?.BreakindAndTraction
                                            .ElectricBrakeDistri[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div>Brake Assist (BA)</div>
                                      <div>
                                        {
                                          specs?.BreakindAndTraction
                                            .BrakeAssist[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div>
                                        Electronic Stability Program (ESP)
                                      </div>
                                      <div>
                                        {
                                          specs?.BreakindAndTraction
                                            .ElectricStabilityProgram[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div>Hill Hold Control</div>
                                      <div>
                                        {
                                          specs?.BreakindAndTraction
                                            .HillHoldControl[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div>
                                        Traction Control System (TC/TCS)
                                      </div>
                                      <div>
                                        {
                                          specs?.BreakindAndTraction
                                            .TractionControlSys[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div>Hill Descent Control</div>
                                      <div>
                                        {
                                          specs?.BreakindAndTraction
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
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-gray-100 rounded-b-lg text-gray-500">
                                  <div className="grid grid-cols-1">
                                    <div className="grid grid-cols-2 border-b-2  py-3">
                                      <div className="font-bold">
                                        Engine immobilizer
                                      </div>
                                      <div>
                                        {
                                          specs?.LocksAndSecurity
                                            .EngineImmobilizer[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Central Locking
                                      </div>
                                      <div>
                                        {
                                          specs?.LocksAndSecurity
                                            .CentralLocking[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Speed Sensing Door Lock
                                      </div>
                                      <div>
                                        {
                                          specs?.LocksAndSecurity
                                            .SpeedSensingDoorLock[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Child Safety Lock
                                      </div>
                                      <div>
                                        {
                                          specs?.LocksAndSecurity
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
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-gray-100 rounded-b-lg text-gray-500">
                                  <div className="grid grid-cols-1">
                                    <div className="grid grid-cols-2 border-b-2  py-3">
                                      <div className="font-bold">
                                        Air Conditioner
                                      </div>
                                      <div>
                                        {
                                          specs?.ConfortAndCOnvenience
                                            .AirConditioner[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">Front AC</div>
                                      <div>
                                        {
                                          specs?.ConfortAndCOnvenience
                                            .FrontAC[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">Rear AC</div>
                                      <div>
                                        {specs?.ConfortAndCOnvenience.RearAC[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">Heater</div>
                                      <div>
                                        {specs?.ConfortAndCOnvenience.Heater[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Vanity Mirrors on Sun Visors
                                      </div>
                                      <div>
                                        {
                                          specs?.ConfortAndCOnvenience
                                            .VanityMirror[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Cabin-Boot Access
                                      </div>
                                      <div>
                                        {
                                          specs?.ConfortAndCOnvenience
                                            .CabinBootAccess[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Anti-glare Mirrors
                                      </div>
                                      <div>
                                        {
                                          specs?.ConfortAndCOnvenience
                                            .AntiGlareMirrors[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Parking Assist
                                      </div>
                                      <div>
                                        {
                                          specs?.ConfortAndCOnvenience
                                            .ParkingAssist[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Parking Sensors
                                      </div>
                                      <div>
                                        {
                                          specs?.ConfortAndCOnvenience
                                            .ParkingSensors[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Cruise Control
                                      </div>
                                      <div>
                                        {
                                          specs?.ConfortAndCOnvenience
                                            .CruiseCOntrol[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Headlight & Ignition On Reminder
                                      </div>
                                      <div>
                                        {
                                          specs?.ConfortAndCOnvenience
                                            .HeadLightIgnitionONReminder[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Keyless Start/ Button Start
                                      </div>
                                      <div>
                                        {
                                          specs?.ConfortAndCOnvenience
                                            .KeylessStartStopButton[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Steering Adjustment
                                      </div>
                                      <div>
                                        {
                                          specs?.ConfortAndCOnvenience
                                            .SteeringAdjustment[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        12V Power Outlets
                                      </div>
                                      <div>
                                        {
                                          specs?.ConfortAndCOnvenience
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
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-gray-100 rounded-b-lg text-gray-500">
                                  <div className="grid grid-cols-1">
                                    <div className="grid grid-cols-2 border-b-2  py-3">
                                      <div className="font-bold">
                                        Driver Seat Adjustment
                                      </div>
                                      <div>
                                        {
                                          specs?.SeatsAndUpholstery
                                            .DriverSeatAdjustment[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Front Passenger Seat Adjustment
                                      </div>
                                      <div>
                                        {
                                          specs?.SeatsAndUpholstery
                                            .FrontPassengerSeatAdjustment[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Rear Row Seat Adjustment
                                      </div>
                                      <div>
                                        {
                                          specs?.SeatsAndUpholstery
                                            .RearRowSeatAdjustment[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Seat Upholstery
                                      </div>
                                      <div>
                                        {
                                          specs?.SeatsAndUpholstery
                                            .SeatUpholstery[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Leather-wrapped Steering Wheel
                                      </div>
                                      <div>
                                        {
                                          specs?.SeatsAndUpholstery
                                            .LeatherWrappedSteeringwheel[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Leather-wrapped Gear Knob
                                      </div>
                                      <div>
                                        {
                                          specs?.SeatsAndUpholstery
                                            .LeatherWrappedGearKnob[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Driver Armrest
                                      </div>
                                      <div>
                                        {
                                          specs?.SeatsAndUpholstery
                                            .DriverArmrest[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Rear Passenger Seats Type
                                      </div>
                                      <div>
                                        {
                                          specs?.SeatsAndUpholstery
                                            .RearPassengerSeatsType[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Ventilated Seats
                                      </div>
                                      <div>
                                        {
                                          specs?.SeatsAndUpholstery
                                            .VentilatedSeats[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Interior Colours
                                      </div>
                                      <div>
                                        {
                                          specs?.SeatsAndUpholstery
                                            .InteriorColors[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Rear Armrest
                                      </div>
                                      <div>
                                        {
                                          specs?.SeatsAndUpholstery
                                            .RearArmrest[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Folding Rear Seat
                                      </div>
                                      <div>
                                        {
                                          specs?.SeatsAndUpholstery
                                            .FoldingRearSeat[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Split Rear Seat
                                      </div>
                                      <div>
                                        {
                                          specs?.SeatsAndUpholstery
                                            .SplitRearSeat[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Front Seatback Pockets
                                      </div>
                                      <div>
                                        {
                                          specs?.SeatsAndUpholstery
                                            .FrontSeatbackPockets[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Head-rests
                                      </div>
                                      <div>
                                        {specs?.SeatsAndUpholstery.HeadRest[0]}
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
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-gray-100 rounded-b-lg text-gray-500">
                                  <div className="grid grid-cols-1">
                                    <div className="grid grid-cols-2 border-b-2  py-3">
                                      <div className="font-bold">
                                        Cup Holders
                                      </div>
                                      <div>{specs?.Storage.CupHolders[0]}</div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Driver Armrest Storage
                                      </div>
                                      <div>
                                        {specs?.Storage.DriverArmrestStorage[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Cooled Glove Box
                                      </div>
                                      <div>
                                        {specs?.Storage.CooledGloveBox[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Sunglass Holder
                                      </div>
                                      <div>
                                        {specs?.Storage.SunglassHOlder[0]}
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
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-gray-100 rounded-b-lg text-gray-500">
                                  <div className="grid grid-cols-1">
                                    <div className="grid grid-cols-2 border-b-2  py-3">
                                      <div className="font-bold">
                                        Power Windows
                                      </div>
                                      <div>
                                        {
                                          specs?.DoorsWindowsMirrorsWipers
                                            .PowerWindows[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        One Touch -Down
                                      </div>
                                      <div>
                                        {
                                          specs?.DoorsWindowsMirrorsWipers
                                            .OneTouchDown[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        One Touch - Up
                                      </div>
                                      <div>
                                        {
                                          specs?.DoorsWindowsMirrorsWipers
                                            .OneTouchUp[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Adjustable ORVM
                                      </div>
                                      <div>
                                        {
                                          specs?.DoorsWindowsMirrorsWipers
                                            .AdjustableORVM[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Turn Indicators on ORVM
                                      </div>
                                      <div>
                                        {
                                          specs?.DoorsWindowsMirrorsWipers
                                            .TurnIndicatorsonORVM[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Rear Defogger
                                      </div>
                                      <div>
                                        {
                                          specs?.DoorsWindowsMirrorsWipers
                                            .RearDefogger[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Rear Wiper
                                      </div>
                                      <div>
                                        {
                                          specs?.DoorsWindowsMirrorsWipers
                                            .RearWiper[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Exterior Door Handles
                                      </div>
                                      <div>
                                        {
                                          specs?.DoorsWindowsMirrorsWipers
                                            .ExteriorDoorHandles[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Rain-sensing Wipers
                                      </div>
                                      <div>
                                        {
                                          specs?.DoorsWindowsMirrorsWipers
                                            .RainSensingWipers[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Interior Door Handles
                                      </div>
                                      <div>
                                        {
                                          specs?.DoorsWindowsMirrorsWipers
                                            .InteriorDoorHandles[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Door Pockets
                                      </div>
                                      <div>
                                        {
                                          specs?.DoorsWindowsMirrorsWipers
                                            .DoorPockets[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Side Window Blinds
                                      </div>
                                      <div>
                                        {
                                          specs?.DoorsWindowsMirrorsWipers
                                            .SideWindowBlinds[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Boot-lid Opener
                                      </div>
                                      <div>
                                        {
                                          specs?.DoorsWindowsMirrorsWipers
                                            .BootLidOpener[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Outside Rear View Mirrors (ORVMs)
                                      </div>
                                      <div>
                                        {
                                          specs?.DoorsWindowsMirrorsWipers
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
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-gray-100 rounded-b-lg text-gray-500">
                                  <div className="grid grid-cols-1">
                                    <div className="grid grid-cols-2 border-b-2  py-3">
                                      <div className="font-bold">
                                        Sunroof / Moonroof
                                      </div>
                                      <div>{specs?.Exterior.Sunroof[0]}</div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Roof Mounted Antenna
                                      </div>
                                      <div>
                                        {specs?.Exterior.RoofMountedAntenna[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Body-Coloured Bumpers
                                      </div>
                                      <div>
                                        {specs?.Exterior.BodyColorBumpers[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">Body Kit</div>
                                      <div>{specs?.Exterior.BodyKit[0]}</div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Rub - Strips
                                      </div>
                                      <div>{specs?.Exterior.RubStrips[0]}</div>
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
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-gray-100 rounded-b-lg text-gray-500">
                                  <div className="grid grid-cols-1">
                                    <div className="grid grid-cols-2 border-b-2  py-3">
                                      <div className="font-bold">
                                        Daytime Running Lights
                                      </div>
                                      <div>
                                        {
                                          specs?.Lighting
                                            .DaytimeRunningLights[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Ambient Interior Lighting
                                      </div>
                                      <div>
                                        {
                                          specs?.Lighting
                                            .AmbientInteriorLighting[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Puddle Lamps
                                      </div>
                                      <div>
                                        {specs?.Lighting.PuddleLamps[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Fog Lights
                                      </div>
                                      <div>{specs?.Lighting.FogLights[0]}</div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Headlights
                                      </div>
                                      <div>{specs?.Lighting.HeadLights[0]}</div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Automatic Head Lamps
                                      </div>
                                      <div>
                                        {specs?.Lighting.AutomaticHeadLamps[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Follow me home headlamps
                                      </div>
                                      <div>
                                        {specs?.Lighting.FollowmeHomeLamps[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Tail Lights
                                      </div>
                                      <div>{specs?.Lighting.TailLight[0]}</div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Cabin Lamps
                                      </div>
                                      <div>{specs?.Lighting.CabinLamps[0]}</div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Headlight Height Adjuster
                                      </div>
                                      <div>
                                        {
                                          specs?.Lighting
                                            .HeadLightHeightAdjuster[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Glove Box Lamp
                                      </div>
                                      <div>
                                        {specs?.Lighting.GloveBoxLamp[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Lights on Vanity Mirrors
                                      </div>
                                      <div>
                                        {
                                          specs?.Lighting
                                            .LightsonVanityMirrors[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Rear Reading Lamp
                                      </div>
                                      <div>
                                        {specs?.Lighting.RearReadingLamps[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Cornering Headlights
                                      </div>
                                      <div>
                                        {specs?.Lighting.COrneringHeadLights[0]}
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
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-gray-100 rounded-b-lg text-gray-500">
                                  <div className="grid grid-cols-1">
                                    <div className="grid grid-cols-2 border-b-2  py-3">
                                      <div className="font-bold">
                                        Instrument Cluster
                                      </div>
                                      <div>
                                        {
                                          specs?.Instrumentation
                                            .InstrumentCluster[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Trip Meter
                                      </div>
                                      <div>
                                        {specs?.Instrumentation.TripMeter[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Average Fuel Consumption
                                      </div>
                                      <div>
                                        {
                                          specs?.Instrumentation
                                            .AverageFuelConsumption[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Average Speed
                                      </div>
                                      <div>
                                        {specs?.Instrumentation.AverageSpeed[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Distance to Empty
                                      </div>
                                      <div>
                                        {
                                          specs?.Instrumentation
                                            .DistanceToEmpty[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">Clock</div>
                                      <div>
                                        {specs?.Instrumentation.Clock[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Low Fuel Level Warning
                                      </div>
                                      <div>
                                        {
                                          specs?.Instrumentation
                                            .LowFuelLevelWarning[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Door Ajar Warning
                                      </div>
                                      <div>
                                        {
                                          specs?.Instrumentation
                                            .DoorAjarWarning[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Adjustable Cluster Brightness
                                      </div>
                                      <div>
                                        {
                                          specs?.Instrumentation
                                            .AdjustableClusterBrightness[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Gear Indicator
                                      </div>
                                      <div>
                                        {
                                          specs?.Instrumentation
                                            .GearIndicator[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Shift Indicator
                                      </div>
                                      <div>
                                        {
                                          specs?.Instrumentation
                                            .ShiftIndicator[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Tachometer
                                      </div>
                                      <div>
                                        {specs?.Instrumentation.TachoMeter[0]}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Instantaneous Consumption
                                      </div>
                                      <div>
                                        {
                                          specs?.Instrumentation
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
                                  <span>
                                    Entertainment, Information & Communication
                                  </span>
                                  <ChevronUpIcon
                                    className={`${
                                      open ? "transform rotate-180" : ""
                                    } w-5 h-5 text-purple-500`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-gray-100 rounded-b-lg text-gray-500">
                                  <div className="grid grid-cols-1">
                                    <div className="grid grid-cols-2 border-b-2  py-3">
                                      <div className="font-bold">
                                        Wireless Charger
                                      </div>
                                      <div>
                                        {
                                          specs
                                            ?.EntertainmentInfoandCommunication
                                            .WirelessCharger[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Smart Connectivity
                                      </div>
                                      <div>
                                        {
                                          specs
                                            ?.EntertainmentInfoandCommunication
                                            .SmartConnectivity[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Head Unit Size
                                      </div>
                                      <div>
                                        {
                                          specs
                                            ?.EntertainmentInfoandCommunication
                                            .HeadUnitSize[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Integrated (in-dash) Music System
                                      </div>
                                      <div>
                                        {
                                          specs
                                            ?.EntertainmentInfoandCommunication
                                            .IntegratedMusicSystem[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">Display</div>
                                      <div>
                                        {
                                          specs
                                            ?.EntertainmentInfoandCommunication
                                            .Display[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        GPS Navigation System
                                      </div>
                                      <div>
                                        {
                                          specs
                                            ?.EntertainmentInfoandCommunication
                                            .GPSNavigationSystem[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">Speakers</div>
                                      <div>
                                        {
                                          specs
                                            ?.EntertainmentInfoandCommunication
                                            .Speakers[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        USB Compatibility
                                      </div>
                                      <div>
                                        {
                                          specs
                                            ?.EntertainmentInfoandCommunication
                                            .USBCampatibility[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Aux Compatibility
                                      </div>
                                      <div>
                                        {
                                          specs
                                            ?.EntertainmentInfoandCommunication
                                            .AUXCompatibility[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Bluetooth Compatibility
                                      </div>
                                      <div>
                                        {
                                          specs
                                            ?.EntertainmentInfoandCommunication
                                            .BluetoothCompatibility[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Steering mounted controls
                                      </div>
                                      <div>
                                        {
                                          specs
                                            ?.EntertainmentInfoandCommunication
                                            .SteeringMountedControls[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Voice Command
                                      </div>
                                      <div>
                                        {
                                          specs
                                            ?.EntertainmentInfoandCommunication
                                            .VoiceCommand[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">CD Player</div>
                                      <div>
                                        {
                                          specs
                                            ?.EntertainmentInfoandCommunication
                                            .CDPlayer[0]
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
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-gray-100 rounded-b-lg text-gray-500">
                                  <div className="grid grid-cols-1">
                                    <div className="grid grid-cols-2 border-b-2  py-3">
                                      <div className="font-bold">
                                        Warranty (Years)
                                      </div>
                                      <div>
                                        {
                                          specs?.ManufacturerWarranty
                                            .WarrantyYears[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Warranty (Kilometres)
                                      </div>
                                      <div>
                                        {
                                          specs?.ManufacturerWarranty
                                            .WarrantyKilometers[0]
                                        }
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-b-2 py-3">
                                      <div className="font-bold">
                                        Extended Warranty
                                      </div>
                                      <div>
                                        {
                                          specs?.ManufacturerWarranty
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
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default SpecificSpecs;
