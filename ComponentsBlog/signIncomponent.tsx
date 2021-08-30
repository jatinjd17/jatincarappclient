import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { authenticate, isAuth, SignIn } from "../actionsBlog/user";
import Router from "next/router";

const schema = yup.object().shape({
  email: yup.string().email().required().lowercase(),
  password: yup
    .string()
    .min(4, "atleast 5 letter required")
    .required()
    .lowercase(),
});

function SignInComponent() {
  const [values, setValues] = useState({
    loading: false,
    message: "",
    error: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    let formdata = new FormData();
    setValues({ ...values, loading: true });

    formdata.append("email", data.email);
    formdata.append("password", data.password);
    SignIn(data)
      .then((data) => {
        console.log(data);
        if (data.error) {
          setValues({ ...values, loading: false, error: data.error });

          return;
        }
        setValues({
          ...values,
          loading: false,
          message: "Sign In Successfully",
          error: "",
        });
        authenticate(data, () => {
          if (isAuth()) {
            // console.log(JSON.parse(isAuth()));
            // let isauth:any = isAuth();
            // console.log(JSON.parse(isauth));
            ////////////New//////////////
            // Router.push(`/Blog/profile/${isAuth().name}`);
            /////////////////////////////
            Router.push("/");
          }
        });
        console.log(data);
      })
      .catch((e) => {
        setValues({ ...values, loading: false, error: data.error });
      });
  };

  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-4xl mb-3 sm: mt-4 font-bold">SignIn</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className=""></div>
            <div className="">
              <label className="text-2xl mr-3 sm:text-center">
                Email address
              </label>
              <input
                type="text"
                className=" bg-gray-50 p-2 text-lg"
                placeholder="Enter email"
                {...register("email")}
              />

              <p className="text-red-500 text-sm ml-20">
                {errors.email?.message}
              </p>
            </div>
            <div className="mt-2 ml-11 sm:ml-5">
              <label className="text-2xl mr-3 sm:mr-10">Password</label>
              <input
                type="password"
                className="bg-gray-50 p-2 text-lg sm:mr-1"
                placeholder="Password"
                {...register("password")}
              />
              <p className="text-red-500 text-sm ml-10">
                {errors.password?.message}
              </p>
            </div>

            <button
              type="submit"
              className="bg-blue-600 rounded-md text-white p-2 mt-2"
            >
              SignIn
            </button>
            {values.loading ? null : (
              <div>
                {values.error ? (
                  <div className="">
                    <div className="text-red-500 ">
                      <p className="bg-red-200">{values.error}</p>
                    </div>
                  </div>
                ) : null}
              </div>
            )}

            {values.loading ? (
              <div className="">
                <div className="text-black text-2xl font-bold">
                  <p className="">Loading</p>
                </div>
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInComponent;
