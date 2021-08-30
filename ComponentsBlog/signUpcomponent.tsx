import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { authenticate, isAuth, SignUp } from "../actionsBlog/user";
import Router from "next/router";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required().lowercase(),
  password: yup
    .string()
    .min(4, "atleast 5 letter required")
    .required()
    .lowercase(),
  // photo: yup.mixed().test("fileSize", "The file is too large", (value) => {
  //     if (!value.length) return true // attachment is optional
  //     return value[0].size <= 2000000
  //   }),
});

// const [values, setValues] = useState({
//   loading: false,
//   error: "",
//   message: "",
// });

function SignUpComponent() {
  const [values, setValues] = useState({
    loading: false,
    error: "",
    message: "",
  });

  useEffect(() => {
    setValues({ ...values, loading: false, error: "", message: "" });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setValues({ ...values, loading: true });
    let formdata = new FormData();
    // console.log(data);
    formdata.append("name", data.name);
    formdata.append("email", data.email);
    formdata.append("password", data.password);
    formdata.append("photo", data.photo);
    SignUp(data)
      .then((data) => {
        console.log(data);
        if (data.error) {
          setValues({ ...values, loading: false, error: data.error });

          return;
        }
        setValues({
          ...values,
          loading: false,
          message: data.message,
          error: "",
        });
      })
      .catch((e) => {
        setValues({ ...values, loading: false, error: data.error });
      });
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl mb-3 sm:font-bold mt-4">SignUp</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div>
            <label className="text-2xl mr-3">Name</label>
          </div>
          <input
            type="text"
            className="bg-gray-50 p-2 text-lg"
            placeholder="Enter name"
            {...register("name")}
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>
        <div className="mt-3">
          <div>
            <label className="text-2xl mr-3">Email address</label>
          </div>
          <input
            type="text"
            className="bg-gray-50 p-2 text-lg"
            placeholder="Enter email"
            {...register("email")}
          />

          <p className="text-red-500 text-sm ">{errors.email?.message}</p>
        </div>
        <div className="mt-3">
          <div>
            <label className="text-2xl mr-3">Password</label>
          </div>
          <input
            type="password"
            className="bg-gray-50 p-2 text-lg"
            placeholder="Password"
            {...register("password")}
          />
          <p className="text-red-500 text-sm ">{errors.password?.message}</p>
        </div>
        {/* <input type="file" name="photo" {...register('photo')} />
                <p className="errorcolor">{errors.photo?.message}</p> */}

        <button
          type="submit"
          className=" bg-blue-600 p-3 text-white rounded-md mt-4"
        >
          SignUp
        </button>
        {values.loading ? null : (
          <div>
            {values.error ? (
              <div className="">
                <div className="text-red-500 mt-3">
                  <p className="bg-red-200 p-2">{values.error}</p>
                </div>
              </div>
            ) : (
              <div>
                {values.message ? (
                  <div>
                    <div className="mt-3">
                      <p className="bg-green-100 text-green-600 p-2">
                        {values.message}
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        )}

        {values.loading ? (
          <div className="">
            <div className="text-black text-2xl font-bold">
              <p className="">Loading</p>
            </div>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default SignUpComponent;
