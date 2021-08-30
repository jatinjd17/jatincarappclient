import React, { useEffect, useState } from "react";
import { fetchAllCategories } from "../actionsBlog/category";
import { fetchAllTags } from "../actionsBlog/tag";
import { useForm } from "react-hook-form";
import { createblog } from "../actionsBlog/blog";
import { getCookie, isAuth } from "../actionsBlog/user";
import dynamic from "next/dynamic";
require("react-quill/dist/quill.snow.css");

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { QuillModules, QuillFormats } from "../helpersBlog/quill";
const BlogCreate = () => {
  const token = getCookie("token");
  const [values, setValues]: any = useState({
    body: "",
    formdata: "",
  });
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [checkedTags, setCheckedTags]: any = useState([]);
  const [checkedCategories, setCheckedCategories]: any = useState([]);

  const { body, formdata } = values;

  useEffect(() => {
    // let formdata = new FormData();

    setValues({ ...values, formdata: new FormData() });
    GetAllCategories();
    GetAllTags();
  }, []);

  const GetAllCategories = () => {
    return fetchAllCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const GetAllTags = () => {
    return fetchAllTags()
      .then((data) => {
        setTags(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const ShowAllCategories = () => {
    return categories.map((c, i) => {
      return (
        <div key={i} style={{ display: "inline", marginLeft: "6px" }}>
          <button
            onClick={() => addCategoriesToArray(c._id)}
            className={`btn btn${
              isToggleCategory(c._id) ? "-primary" : "-primary-outline"
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
            onClick={() => addTagsToArray(t._id)}
            className={`btn btn${
              isToggleTag(t._id) ? "-primary" : "-primary-outline"
            } mb-2`}
          >
            {t.name}
          </button>
        </div>
      );
    });
  };

  const isToggleTag = (tagId) => {
    if (checkedTags.includes(tagId)) {
      return true;
    } else {
      return false;
    }
  };
  const isToggleCategory = (catId) => {
    if (checkedCategories.includes(catId)) {
      return true;
    } else {
      return false;
    }
  };

  const addCategoriesToArray = (catId) => {
    let all = [...checkedCategories];
    let checkedId = checkedCategories.indexOf(catId);
    if (checkedId == -1) {
      all.push(catId);
    } else {
      all.splice(checkedId, 1);
    }
    setCheckedCategories(all);
    console.log(all);
  };

  const addTagsToArray = (TagId) => {
    let all: any = [...checkedTags];
    let isCheckedTag = checkedTags.indexOf(TagId);

    if (isCheckedTag == -1) {
      all.push(TagId);
    } else {
      all.splice(isCheckedTag, 1);
    }
    setCheckedTags(all);
    console.log(all);
    // formdata.set('categories', all);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    // let formdata = new FormData();

    console.log(checkedCategories);

    formdata.set("title", data.title);
    // formdata.set("body", data.body);
    formdata.set("categories", checkedCategories);
    formdata.set("tags", checkedTags);

    createblog(formdata, token)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // const CreateForm = () => {

  //     <form onSubmit={handleSubmit(onSubmit)}>
  //         <input {...register('title')} type="text" name="title" />
  //         <input {...register('body')} type="text" name="title" />
  //         <button type="submit" >Submit</button>

  //     </form>

  // }
  const handleBody = (e) => {
    formdata.set("body", e);
    console.log(formdata.get("body"));
  };

  const createBlogForm = () => {
    return (
      <div className="title1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label className="text-muted">Title</label>
            <div className="row title2">
              <input {...register("title")} type="text" name="title" />
            </div>
          </div>
          <div className="form-group title3">
            <ReactQuill
              modules={QuillModules}
              formats={QuillFormats}
              value={body}
              placeholder="Write something amazing..."
              onChange={handleBody}
              //   {...register("body")}
            />
          </div>
          {/* <div>
            <div className="row title3">
              <input {...register("body")} type="text" name="body" />
            </div>
          </div> */}

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };

  return (
    <React.Fragment>
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div>{ShowAllCategories()}</div>
          </div>
          <div className="col-md-12">
            <div>{ShowAllTags()}</div>
          </div>
        </div>
        <div className="row nono justify-content-center align-items-center">
          <div className="col-md-6 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <input {...register("title")} type="text" name="title" />
              </div>
              <div className="row">
                <input {...register("body")} type="text" name="body" />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div> */}

      <div className="container-fluid pb-5">
        <div className="row">
          <div className="col-md-8">
            {createBlogForm()}
            <div className="pt-3">
              {/* {showError()}
              {showSuccess()} */}
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <div className="form-group pb-2">
                <h5>Featured image</h5>
                <hr />

                <small className="text-muted">Max size: 1mb</small>
                <br />
                <label className="btn btn-outline-info">
                  Upload featured image
                  <input
                    // onChange={handleChange("photo")}
                    type="file"
                    accept="image/*"
                    hidden
                  />
                </label>
              </div>
            </div>
            <div>
              <h5>Categories</h5>
              <hr />

              <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
                {ShowAllCategories()}
              </ul>
            </div>
            <div>
              <h5>Tags</h5>
              <hr />
              <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
                {ShowAllTags()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogCreate;
