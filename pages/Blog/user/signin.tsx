import React from "react";
import Nav from "../../../Components/head";
import Header from "../../../ComponentsBlog/header";
import SignInComponent from "../../../ComponentsBlog/signIncomponent";

const SignIn = () => {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <Nav />
      <SignInComponent />
    </React.Fragment>
  );
};

export default SignIn;
