import React from "react";
import {
  getallblogsBySpecificCATID,
  getallblogsBySpecificTagID,
} from "../../../../actionsBlog/blog";
import Nav from "../../../../Components/head";
import GetAllTagsAndCategories from "../../../../ComponentsBlog/allTagsandCategories";

import Card from "../../../../ComponentsBlog/cardsforspecifictagcat";
import Header from "../../../../ComponentsBlog/header";
import GetOnlySelectedLightTagsAndCategories from "../../../../ComponentsBlog/onlyselectedtagcatLight";

const AllBlogsBySpecificTag = ({ blogs, query }) => {
  // console.log(blogs);

  const getAllBlogsByTagId = (blogs) => {
    return blogs.blogs.map((b, i) => {
      console.log(b);
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
        <div>
          <GetOnlySelectedLightTagsAndCategories onlyselectedId={query} />
        </div>
        <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 md:grid-cols-1 2xl:mx-24 xl:mx-10 md:mx-5 sm:mx-1 ">
          {getAllBlogsByTagId(blogs)}
        </div>
      </div>
    </React.Fragment>
  );
};

AllBlogsBySpecificTag.getInitialProps = ({ query }) => {
  return getallblogsBySpecificTagID(query.slug).then((data) => {
    if (!data) {
      return false;
    } else {
      // console.log(data);
      return { blogs: data, query: query.slug };
    }
  });
};

export default AllBlogsBySpecificTag;
