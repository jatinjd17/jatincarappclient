import React, { useState } from "react";
import data from "../../Data.json";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar1() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <div>
      <div className="absolute w-full text-center text-4xl font-extrabold text-white z-30 mt-44 lg:mt-12 md:mt-9 sm:mt-16 md:hidden">
        <div>Find Cars</div>
        {/* <div>sss</div> */}
      </div>
      <div className="absolute w-full text-center text-xl sm:text-base font-extrabold  z-30 mt-56 lg:mt-12 md:mt-9 sm:mt-14">
        <div>
          <input
            className="p-5 sm:p-2 rounded-l-lg"
            type="text"
            placeholder="Find Cars"
            value={wordEntered}
            onChange={handleFilter}
          />
          <a className="bg-gray-100 p-6 sm:p-3  rounded-r-xl">
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </a>
        </div>
        {/* <div>sss</div> */}
      </div>

      <div className="absolute w-screen object-center flex justify-center sm:mt-24 sm:ml-2  z-30 mt-72 lg:mt-12 md:mt-9">
        {filteredData.length != 0 && (
          <div className="dataResult rounded-lg -ml-5 ">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a
                  rel="noreferrer"
                  key={value.title}
                  className="dataItem"
                  href={value.link}
                  target="_blank"
                >
                  <p>{value.title} </p>
                </a>
              );
            })}
          </div>
        )}
      </div>
      <div className="absolute  w-full mt-64 lg:mt-36 md:mt-24 z-30 sm:hidden">
        {/* <div className="flex ml-96">
          <div className="ml-60">
            <input
              className="p-5 rounded-l-lg"
              type="text"
              placeholder="Find Cars"
              value={wordEntered}
              onChange={handleFilter}
            />
          </div>
          <div className="mt-5">
            <a className="bg-gray-100 p-6  rounded-r-xl">
              {filteredData.length === 0 ? (
                <SearchIcon />
              ) : (
                <CloseIcon id="clearBtn" onClick={clearInput} />
              )}
            </a>
          </div>
        </div>
        <div className="">
          {filteredData.length != 0 && (
            <div className="dataResult">
              {filteredData.slice(0, 15).map((value, key) => {
                return (
                  <a className="dataItem" href={value.link} target="_blank">
                    <p>{value.title} </p>
                  </a>
                );
              })}
            </div>
          )}
        </div> */}
        <div className="text-center">
          <div className="">
            {/* <div>
              <input
                className="p-5 rounded-l-lg"
                type="text"
                placeholder="Find Cars"
                value={wordEntered}
                onChange={handleFilter}
              />
              <a className="bg-white p-6 rounded-r-xl">
                {filteredData.length === 0 ? (
                  <SearchIcon />
                ) : (
                  <CloseIcon id="clearBtn" onClick={clearInput} />
                )}
              </a>
            </div>
            <div className="">
              {filteredData.length != 0 && (
                <div className="dataResult">
                  {filteredData.slice(0, 15).map((value, key) => {
                    return (
                      <a className="dataItem" href={value.link} target="_blank">
                        <p>{value.title} </p>
                      </a>
                    );
                  })}
                </div>
              )}
            </div> */}

            {/* <button className="bg-gray-200 p-5 rounded-r-lg shadow-2xl">
              Go
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar1;
