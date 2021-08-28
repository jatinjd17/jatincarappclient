import React, { useState } from "react";
import data from "../../Data.json";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar2NavBar() {
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
      <div className=" z-30">
        <div className="">
          <div className="ml-96 xl:ml-44 lg:ml-0">
            <input
              className="p-2 rounded-l-lg"
              type="text"
              placeholder="Search"
              value={wordEntered}
              onChange={handleFilter}
            />
            <a className="bg-gray-100 p-2  rounded-r-xl">
              {filteredData.length === 0 ? (
                <SearchIcon />
              ) : (
                <CloseIcon id="clearBtn" onClick={clearInput} />
              )}
            </a>
          </div>
          <div>
            <div className="absolute  z-40 ml-96 xl:ml-44 lg:ml-0">
              <div className="ml-5">
                {filteredData.length != 0 && (
                  <div className="dataResult2 rounded-lg -ml-5">
                    {filteredData.slice(0, 15).map((value, key) => {
                      return (
                        <a
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
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute w-screen object-center flex justify-center  z-30  mt-9">
        <div className="">
          {filteredData.length != 0 && (
            <div className="dataResult rounded-lg -ml-5">
              {filteredData.slice(0, 15).map((value, key) => {
                return (
                  <a className="dataItem" href={value.link} target="_blank">
                    <p>{value.title} </p>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div> */}
    </div>
  );
}

export default SearchBar2NavBar;
