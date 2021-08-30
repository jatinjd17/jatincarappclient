import React, { useEffect, useState } from "react";

import { QuillFormats, QuillModules } from "../helpersBlog/quill";
import dynamic from "next/dynamic";
import { getCookie } from "../actionsBlog/user";
import { fetchAllCategories } from "../actionsBlog/category";
import { fetchAllTags } from "../actionsBlog/tag";
import { createblog } from "../actionsBlog/blog";

require("react-quill/dist/quill.snow.css");

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CreateBlog1 = () => {
  const blogFromLS = () => {
    if (typeof window === "undefined") {
      return false;
    }

    if (localStorage.getItem("blog")) {
      return JSON.parse(localStorage.getItem("blog"));
    } else {
      return false;
    }
  };

  const [category, setCategory] = useState([]);
  const [tag, setTag] = useState([]);
  const [categoryChecked, setCategoryChecked] = useState([]);
  const [tagChecked, setTagChecked] = useState([]);
  const [body, setBody]: any = useState(blogFromLS());

  const token = getCookie("token");

  const [values, setValues]: any = useState({
    body: "",
    title: "",
    loading: false,
    error: "",
    success: false,
    formdata: "",
    photo: "",
    message: "",
  });

  const { title, loading, error, success, formdata, photo, message } = values;

  useEffect(() => {
    setValues({ ...values, formdata: new FormData() });
    initCategory();
    initTag();
    // console.log({ categoryChecked, tagChecked });
  }, []);

  const initCategory = () => {
    fetchAllCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setCategory(data);
      }
    });
  };

  const initTag = () => {
    fetchAllTags().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setTag(data);
      }
    });
  };

  //   const showCategories = () => {
  //     return (
  //       category &&
  //       category.map((c, i) => (
  //         <li key={i} className="list-unstyled">
  //           <input
  //             onChange={() => handleCategoryToggle(c._id)}
  //             type="checkbox"
  //             className="mr-2"
  //           ></input>
  //           <label className="form-check-label">{c.name}</label>
  //         </li>
  //       ))
  //     );
  //   };

  //   const showTags = () => {
  //     return (
  //       tag &&
  //       tag.map((t, i) => (
  //         <li key={i} className="list-unstyled">
  //           <input
  //             onChange={() => handleTagToggle(t._id)}
  //             type="checkbox"
  //             className="mr-2"
  //           ></input>
  //           <label className="form-check-label">{t.name}</label>
  //         </li>
  //       ))
  //     );
  //   };

  const ShowAllCategories = () => {
    return category.map((c, i) => {
      return (
        <div key={i} style={{ display: "inline", marginLeft: "6px" }}>
          <button
            onClick={() => handleCategoryToggle(c._id)}
            className={`border-2 p-3 border-blue-400  rounded-lg sm:text-sm sm:p-2 ${
              isToggleCategory(c._id)
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
    return tag.map((t, i) => {
      return (
        <div key={i} style={{ display: "inline", marginLeft: "6px" }}>
          <button
            onClick={() => handleTagToggle(t._id)}
            className={`border-2 p-3 border-red-400  rounded-lg sm:text-sm sm:p-2 ${
              isToggleTag(t._id) ? "bg-red-600 text-white" : "text-red-600"
            } mb-2`}
          >
            {t.name}
          </button>
        </div>
      );
    });
  };

  const isToggleTag = (tagId) => {
    if (tagChecked.includes(tagId)) {
      return true;
    } else {
      return false;
    }
  };
  const isToggleCategory = (catId) => {
    if (categoryChecked.includes(catId)) {
      return true;
    } else {
      return false;
    }
  };

  const handleCategoryToggle = (catId) => {
    const all = [...categoryChecked];
    const checkedCateg = categoryChecked.indexOf(catId);

    if (checkedCateg === -1) {
      all.push(catId);
    } else {
      all.splice(checkedCateg, 1);
    }
    setCategoryChecked(all);
    formdata.set("categories", all);
  };

  const handlechange = (name) => (e) => {
    const values = name === "photo" ? e.target.files[0] : e.target.value;
    // setValues({ ...values, [name]: values });
    formdata.set(name, values);
  };

  const handleTagToggle = (tagId) => {
    const all = [...tagChecked];
    const checkedtag = tagChecked.indexOf(tagId);

    if (checkedtag === -1) {
      all.push(tagId);
    } else {
      all.splice(checkedtag, 1);
    }
    setTagChecked(all);
    formdata.set("tags", all);
  };

  const handleBody = (e) => {
    setBody(e);
    formdata.set("body", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("blog", JSON.stringify(e));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues({ ...values, loading: true });
    // console.log(formdata.get("title"));
    createblog(formdata, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
        console.log(data.error);
      } else {
        setValues({
          ...values,
          body: "",
          title: "",
          error: "",
          loading: false,
          message: data.message,
        });
        // setCategory([]);
        // setTag([]);
        setBody("");
        setCategoryChecked([]);
        setCategoryChecked([]);
        console.log(data);
      }
    });
  };

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : "";

  const createBlogForm = () => {
    return (
      <div>
        <div className="mt-6 border-2 p-5 bg-gray-50">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                placeholder="Title"
                type="text"
                className="p-3 border-2 "
                onChange={handlechange("title")}
              />
            </div>
            <div className="">
              <ReactQuill
                modules={QuillModules}
                formats={QuillFormats}
                value={body}
                onChange={handleBody}
              />
            </div>
            <div>
              <button
                type="submit"
                className="p-3 bg-blue-600 text-white mt-4 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid pb-5">
      <div className="grid grid-cols-2 sm:grid-cols-1">
        <div className="col-md-4 sm:grid sm:grid-cols-2">
          <div>
            <h5 className="mb-2 text-center text-lg font-bold">Categories</h5>
            <hr />

            <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {/* {showCategories()} */}
              {ShowAllCategories()}
            </ul>
          </div>
          <div>
            <h5 className="mb-2 text-center text-lg font-bold">Tags</h5>
            <hr />
            <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {/* {showTags()} */}
              {ShowAllTags()}
            </ul>
          </div>
        </div>
        {/* <hr className="" /> */}
        <div className="text-center sm:mt-4 sm:border-4 sm:border-gray-200">
          <div className="form-group pb-2 sm:mt-2">
            <h5>Featured image</h5>
            {/* <hr /> */}

            <div className="">Max size: 1mb</div>
            <br />
            <div className="">
              <div className="border-2 w-max rounded-lg border-blue-400 p-3 text-blue-600 sm:ml-3 sm:mb-2">
                Upload featured image
                <div className="mt-3">
                  <input
                    className=""
                    onChange={handlechange("photo")}
                    type="file"
                    accept="image/*"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div>{createBlogForm()}</div>
        </div>
        <div>
          {showLoading()}
          {showMessage()}
          {showError()}
        </div>
      </div>
    </div>
  );
};

export default CreateBlog1;
