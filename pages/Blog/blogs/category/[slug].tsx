import React from "react";
import { getallblogsBySpecificCATID } from "../../../../actionsBlog/blog";
import Nav from "../../../../Components/head";
import GetAllTagsAndCategories from "../../../../ComponentsBlog/allTagsandCategories";

import Card from "../../../../ComponentsBlog/cardsforspecifictagcat";
import Header from "../../../../ComponentsBlog/header";
import GetOnlySelectedLightTagsAndCategories from "../../../../ComponentsBlog/onlyselectedtagcatLight";

const AllBlogsBySpecificCat = ({ blogs, query }) => {
  //   console.log(blogs);
  console.log(query);

  const getAllBlogsByCatId = (blogs) => {
    return blogs.blogs.map((b, i) => {
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
          {getAllBlogsByCatId(blogs)}
        </div>
      </div>
    </React.Fragment>
  );
};

AllBlogsBySpecificCat.getInitialProps = ({ query }) => {
  return getallblogsBySpecificCATID(query.slug).then((data) => {
    if (!data) {
      return false;
    } else {
      return { blogs: data, query: query.slug };
    }
  });
};

export default AllBlogsBySpecificCat;
