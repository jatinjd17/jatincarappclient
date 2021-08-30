import Router from "next/router";
import React, { useEffect, useState } from "react";
import { fetchAllCategories } from "../actionsBlog/category";
import { fetchAllTags } from "../actionsBlog/tag";

const GetOnlySelectedLightTagsAndCategories = ({ onlyselectedId }) => {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  //   console.log(onlyselectedId);

  useEffect(() => {
    getAllCategories();
    getAllTags();
  }, []);

  const getAllCategories = () => {
    fetchAllCategories().then((data) => {
      if (data) {
        setCategories(data);
      } else {
        return false;
      }
    });
  };

  const ShowAllCategories = () => {
    return categories.map((c, i) => {
      return (
        <div
          key={i}
          className="categories"
          style={{ display: "inline", marginLeft: "6px" }}
        >
          <button
            onClick={() => {
              Router.push(`/Blog/blogs/category/${c._id}`);
            }}
            className={`border-2 p-3 border-blue-400  rounded-lg sm:p-2 sm:text-xs sm:mb-3  ${
              onlyselectedId == c._id
                ? "bg-blue-600 text-white"
                : "text-blue-600"
            } mb-2`}
          >
            {c.name}
          </button>
        </div>
      );
    });
  };

  const ShowAllTags = () => {
    return tags.map((t, i) => {
      return (
        <div key={i} style={{ display: "inline", marginLeft: "6px" }}>
          <button
            onClick={() => {
              Router.push(`/Blog/blogs/tag/${t._id}`);
            }}
            className={`border-2 p-3 border-red-400  rounded-lg sm:p-2 sm:text-xs sm:mb-3 ${
              onlyselectedId == t._id ? "bg-red-600 text-white" : "text-red-600"
            } mb-2`}
          >
            {t.name}
          </button>
        </div>
      );
    });
  };

  const getAllTags = () => {
    fetchAllTags().then((data) => {
      if (data) {
        setTags(data);
      } else {
        return false;
      }
    });
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="text-center" style={{ justifyContent: "center" }}>
          <div className="mt-3">
            <div style={{ display: "inline" }}>{ShowAllCategories()}</div>
          </div>
        </div>

        <div className="text-center" style={{ justifyContent: "center" }}>
          <div className="mt-2">
            <div style={{ display: "inline" }}>{ShowAllTags()}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GetOnlySelectedLightTagsAndCategories;
