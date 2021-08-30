import React from "react";
import { fetchSpecificUser } from "../../../actionsBlog/user";
import Nav from "../../../Components/head";
import Header from "../../../ComponentsBlog/header";

const Name = ({ user }) => {
  console.log(user);
  return (
    <React.Fragment>
      {/* <Header /> */}
      <Nav />
      {user.email}
    </React.Fragment>
  );
};

Name.getInitialProps = ({ query }) => {
  return fetchSpecificUser(query.name).then((data) => {
    if (!data) {
      return false;
    } else {
      return { user: data };
    }
  });
};

export default Name;
