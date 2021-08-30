import Router from "next/router";
import React, { useEffect } from "react";
import { isAuth } from "../../actionsBlog/user";

const IsAuth = ({ children }) => {
  useEffect(() => {
    if (!isAuth()) {
      Router.push("/user/signin");
    }
  }, []);
  return <React.Fragment>{children}</React.Fragment>;
};

export default IsAuth;
