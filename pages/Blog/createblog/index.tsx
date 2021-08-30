import React from "react";
import Nav from "../../../Components/head";
import IsAuth from "../../../ComponentsBlog/auth/isAuth";
import BlogCreate from "../../../ComponentsBlog/createBlog";
import CreateBlog1 from "../../../ComponentsBlog/createblog1";
import Header from "../../../ComponentsBlog/header";

const CreateBlog = () => {
  return (
    <React.Fragment>
      <IsAuth>
        {/* <Header /> */}
        <Nav />
        {/* <BlogCreate /> */}
        <CreateBlog1 />
      </IsAuth>
    </React.Fragment>
  );
};

export default CreateBlog;
