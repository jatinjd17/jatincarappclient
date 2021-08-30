import Link from "next/link";
import React from "react";
import { fetchSpecificPost } from "../../../actionsBlog/blog";
import renderHTML from "react-render-html";
import moment from "moment";
import Header from "../../../ComponentsBlog/header";
import Nav from "../../../Components/head";

const SpecificBlog = ({ blog }) => {
  console.log(blog);

  return (
    <React.Fragment>
      {/* <Header /> */}
      <Nav />
      <main>
        <div className="grid grid-cols-10">
          <div className=" col-span-2 sm:col-span-1"></div>
          <div className="col-span-6 sm:col-span-8">
            <article>
              <div className="container-fluid">
                <section>
                  <div className="row" style={{ marginTop: "20px" }}>
                    <img
                      src={`https://blogserverjatinaugust.herokuapp.com/api/blog/photo/${blog.slug}`}
                      alt={blog.title}
                      className=""
                    />
                  </div>
                </section>

                <section>
                  <div className="container">
                    <h1 className="display-2 pb-3 pt-3 text-center font-bold text-xl">
                      {blog.title}
                    </h1>
                    <p className="lead mt-3 mark">
                      Written by{" "}
                      <Link href={`/Blog/profile/${blog.postedBy.name}`}>
                        <a>{blog.postedBy.name}</a>
                      </Link>{" "}
                      | Published {moment(blog.updatedAt).fromNow()}
                    </p>

                    <div className="pb-3">
                      {/* {showBlogCategories(blog)}
                                        {showBlogTags(blog)} */}
                      <br />
                      <br />
                    </div>
                  </div>
                </section>
              </div>

              <div className="container">
                <section>
                  <div className=" text-sm text-gray-500">
                    {renderHTML(blog.body)}
                  </div>
                </section>
              </div>

              <div className="container">
                <h4 className="text-center pt-5 pb-5 h2">Related blogs</h4>
                <div className="row">{/* {showRelatedBlog()} */}</div>
              </div>

              <div className="container pt-5 pb-5">
                {/* {showComments()} */}
              </div>
            </article>
          </div>
          <div className="col-span-2 sm:col-span-1"></div>
        </div>
      </main>
    </React.Fragment>
  );
};

SpecificBlog.getInitialProps = ({ query }) => {
  return fetchSpecificPost(query.slug).then((data) => {
    if (!data) {
      return false;
    } else {
      return { blog: data };
    }
  });
};

export default SpecificBlog;
