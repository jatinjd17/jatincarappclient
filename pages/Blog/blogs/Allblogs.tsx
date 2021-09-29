import React from "react";
import { getallblogs } from "../../../actionsBlog/blog";
import Nav from "../../../Components/head";
import GetAllTagsAndCategories from "../../../ComponentsBlog/allTagsandCategories";

import Card from "../../../ComponentsBlog/cards";
import Header from "../../../ComponentsBlog/header";

const AllBlogs = ({ blogs }) => {
  console.log(blogs);

  const getAllBlogsHome = (blogs) => {
    return blogs
      .slice(0)
      .reverse()
      .map((b, i) => {
        return (
          <div key={i}>
            <Card card={b} />
          </div>
        );
      });
  };

  return (
    <React.Fragment>
      <div>
        <div>
          {/* <Header /> */}
          <Nav />
        </div>
        <div style={{ marginTop: "10px" }}>
          <div className="text-center">
            <GetAllTagsAndCategories />
          </div>
          <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 md:grid-cols-1 2xl:mx-24 xl:mx-10 md:mx-5 sm:mx-1 ">
            {getAllBlogsHome(blogs)}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

AllBlogs.getInitialProps = () => {
  return getallblogs().then((data) => {
    if (!data) {
      return false;
    } else {
      return { blogs: data };
    }
  });
};

export default AllBlogs;
