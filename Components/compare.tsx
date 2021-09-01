import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import DriveEtaIcon from "@material-ui/icons/DriveEta";

function Compare({ OnlyName }) {
  const [compareName, setCompareName] = useState([]);
  const [comparePic, setComparePic] = useState([]);
  const onClickHandle = {};

  useEffect(() => {
    {
      localStorage.getItem("comparre")
        ? null
        : setLocalStorage("comparre", compareName);
    }
    console.log(compareName);
    setCompareName(JSON.parse(localStorage.getItem("comparre")));

    // if (typeof window !== "undefined") {
    //   setInterval(() => {
    //     {
    //       localStorage.getItem("comparre")
    //         ? setCompareName(JSON.parse(localStorage.getItem("comparre")))
    //         : setLocalStorage("comparre", compareName);
    //     }
    //   }, 10000);
    //   // setCompareName(JSON.parse(localStorage.getItem("comparre")));
    //   // setLocalStorage("comparre", compareName);
    //   // {
    //   //   localStorage.getItem("comparre")
    //   //     ? setCompareName(JSON.parse(localStorage.getItem("comparre")))
    //   //     : setLocalStorage("comparre", compareName);
    //   // }
    // }
    // setLocalStorage("comparre", compareName);
    // console.log(JSON.parse(localStorage.getItem("comparre")).length);
    // console.log(compareName);
  }, []);

  const handleactive = (OnlyName) => {
    // const all = [...compareName];
    // all.push(Carname);
    // setCompareName(all);
    // console.log(all);
    // setLocalStorage("comparre", all);

    const all = [...compareName];
    const checkedNumber = compareName.indexOf(OnlyName);

    if (checkedNumber === -1) {
      if (compareName.length === 3) {
        return;
      }
      all.push(OnlyName);
    } else {
      all.splice(checkedNumber, 1);
      console.log("is available");
      // all.push(Carname);
    }

    setCompareName(all);
    setLocalStorage("comparre", all);

    // const all2 = [...comparePic];
    // const checkedNumber2 = comparePic.indexOf(TopPic);

    // if (checkedNumber2 === -1) {
    //   if (comparePic.length === 3) {
    //     return;
    //   }
    //   all2.push(TopPic);
    // } else {
    //   all2.splice(checkedNumber2, 1);
    //   console.log("is available");
    //   // all.push(Carname);
    // }
    // // var testObject = { OnlyName: TopPic, two: 2, three: 3 };

    // // // Put the object into storage
    // // localStorage.setItem("testObject", JSON.stringify(testObject));

    // // var retrievedObject = localStorage.getItem("testObject");

    // // console.log("retrievedObject: ", JSON.parse(retrievedObject)[0]);
    // setComparePic(all2);
    // setLocalStorage("comparrePic", all2);

    // console.log(localStorage.getItem("comparrePic"));
  };

  const isCarNameAvailable = (OnlyName) => {
    if (compareName.includes(OnlyName)) {
      return true;
    } else {
      return false;
    }
  };

  const setLocalStorage = (key, value) => {
    if (process.browser) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const removeLocalStorage = (key) => {
    if (process.browser) {
      localStorage.removeItem(key);
    }
  };

  const handleComparision = (compareName) => {
    console.log(compareName.toString().toLowerCase().replaceAll(",", "vs"));
    // <Link href={`/compare/${compareName}`} />;
  };

  return (
    <div>
      {typeof window !== "undefined" ? (
        <div>
          <div className="sm:text-center sm:w-screen">
            {localStorage.getItem("comparre") ? (
              <button
                onClick={() => handleactive(OnlyName)}
                className={`p-3 border-2 rounded-lg  ${
                  isCarNameAvailable(OnlyName) ? "bg-gray-500" : ""
                }`}
              >
                Compare
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
      {/* JSON.parse(localStorage.getItem("comparre")).length */}
      {typeof window !== "undefined" ? (
        <div className="sm:mt-2">
          {localStorage.getItem("comparre") ? (
            <div>
              {JSON.parse(localStorage.getItem("comparre")).length === 1 ? (
                <div className="p-3 border-2 rounded-lg">
                  {/* <img
                    src={JSON.parse(localStorage.getItem("comparrePic"))[0]}
                    alt="pic"
                  /> */}
                  <div className="flex flex-row p-2 border-2 w-auto">
                    <div className="w-14">
                      <DriveEtaIcon />
                      {/* <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/46891/jazz-exterior-right-front-three-quarter.jpeg?q=85" /> */}
                    </div>
                    <div>
                      <button
                        onClick={() =>
                          handleactive(
                            JSON.parse(localStorage.getItem("comparre"))[0]
                          )
                        }
                      >
                        {JSON.parse(localStorage.getItem("comparre"))[0]}
                      </button>
                    </div>
                    <div className="ml-2 -mt-0.5">
                      <CancelIcon />
                    </div>
                  </div>
                </div>
              ) : null}
              {JSON.parse(localStorage.getItem("comparre")).length === 2 ? (
                <div className="p-3 border-2 rounded-lg sm:w-screen sm:p-0 sm:items-center ">
                  {/* <img
                    src={JSON.parse(localStorage.getItem("comparrePic"))[1]}
                    alt="pic"
                  /> */}
                  <div className="flex flex-row sm:overflow-x-auto sm:ml-14">
                    <div className="flex flex-row p-2 border-2 w-auto sm:p-0">
                      <div className="w-14 sm:w-8">
                        <DriveEtaIcon />
                        {/* <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/46891/jazz-exterior-right-front-three-quarter.jpeg?q=85" /> */}
                      </div>
                      <div className="sm:text-sm">
                        <button
                          className="sm:mt-2"
                          onClick={() =>
                            handleactive(
                              JSON.parse(localStorage.getItem("comparre"))[0]
                            )
                          }
                        >
                          {JSON.parse(localStorage.getItem("comparre"))[0]}
                        </button>
                      </div>
                      <div className="ml-2 -mt-0.5">
                        <CancelIcon />
                      </div>
                    </div>
                    <div className="pt-2 px-2">Vs</div>
                    <div className="flex flex-row p-2 border-2 w-auto sm:p-0">
                      <div className="w-14 sm:w-8">
                        <DriveEtaIcon />
                        {/* <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/46891/jazz-exterior-right-front-three-quarter.jpeg?q=85" /> */}
                      </div>
                      <div className="sm:text-sm">
                        <button
                          className="sm:mt-2"
                          onClick={() =>
                            handleactive(
                              JSON.parse(localStorage.getItem("comparre"))[1]
                            )
                          }
                        >
                          {JSON.parse(localStorage.getItem("comparre"))[1]}
                        </button>
                      </div>
                      <div className="ml-2 -mt-0.5">
                        <CancelIcon />
                      </div>
                    </div>
                  </div>
                  {/* <button>
                    {JSON.parse(localStorage.getItem("comparre"))[0]} VS{" "}
                    {JSON.parse(localStorage.getItem("comparre"))[1]}
                  </button> */}
                </div>
              ) : null}
              {JSON.parse(localStorage.getItem("comparre")).length === 3 ? (
                <div className="p-3 xl:p-2 md:w-screen border-2  rounded-lg sm:w-screen sm:p-0 overflow-x-auto">
                  {/* <img
                    src={JSON.parse(localStorage.getItem("comparrePic"))[2]}
                    alt="pic"
                  /> */}
                  <div className="flex flex-row sm:overflow-x-auto">
                    <div className="flex flex-row p-2 border-2 w-auto sm:p-0">
                      <div className="w-14 sm:w-8">
                        <DriveEtaIcon />
                        {/* <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/46891/jazz-exterior-right-front-three-quarter.jpeg?q=85" /> */}
                      </div>
                      <div className="sm:text-sm">
                        <button
                          className="sm:mt-2"
                          onClick={() =>
                            handleactive(
                              JSON.parse(localStorage.getItem("comparre"))[0]
                            )
                          }
                        >
                          {JSON.parse(localStorage.getItem("comparre"))[0]}
                        </button>
                      </div>
                      <div className="ml-2 -mt-0.5 sm:ml-1">
                        <CancelIcon />
                      </div>
                    </div>
                    <div className="pt-2 px-2 sm:text-sm">Vs</div>
                    <div className="flex flex-row p-2 border-2 w-auto sm:p-0">
                      <div className="w-14 sm:w-8">
                        <DriveEtaIcon />
                        {/* <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/46891/jazz-exterior-right-front-three-quarter.jpeg?q=85" /> */}
                      </div>
                      <div className="sm:text-sm">
                        <button
                          className="sm:mt-2"
                          onClick={() =>
                            handleactive(
                              JSON.parse(localStorage.getItem("comparre"))[1]
                            )
                          }
                        >
                          {JSON.parse(localStorage.getItem("comparre"))[1]}
                        </button>
                      </div>
                      <div className="ml-2 -mt-0.5 sm:ml-1">
                        <CancelIcon />
                      </div>
                    </div>
                    <div className="pt-2 px-2 sm:text-sm">Vs</div>
                    <div className="flex flex-row p-2 border-2 w-auto sm:p-0">
                      <div className="w-14 sm:w-8">
                        <DriveEtaIcon />
                        {/* <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/46891/jazz-exterior-right-front-three-quarter.jpeg?q=85" /> */}
                      </div>
                      <div className="sm:text-sm">
                        <button
                          className="sm:mt-2"
                          onClick={() =>
                            handleactive(
                              JSON.parse(localStorage.getItem("comparre"))[2]
                            )
                          }
                        >
                          {JSON.parse(localStorage.getItem("comparre"))[2]}
                        </button>
                      </div>
                      <div className="ml-2 -mt-0.5 sm:ml-1">
                        <CancelIcon />
                      </div>
                    </div>
                  </div>
                  {/* <button>
                    {JSON.parse(localStorage.getItem("comparre"))[0]} Vs{" "}
                    {JSON.parse(localStorage.getItem("comparre"))[1]} Vs{" "}
                    {JSON.parse(localStorage.getItem("comparre"))[2]}
                  </button> */}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
      {typeof window !== "undefined" ? (
        <div>
          {JSON.parse(localStorage.getItem("comparre")) ? (
            <div>
              {JSON.parse(localStorage.getItem("comparre")).length >= 2 ? (
                <Link
                  href={`/compare/${compareName
                    .toString()
                    .toLowerCase()
                    .replaceAll(" ", "")
                    .replaceAll(",", "vs")}`}
                >
                  <button className="bg-red-300 text-white p-2 rounded-lg sm:w-screen sm:text-center sm:mt-2">
                    Start Comparision
                  </button>
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default Compare;
