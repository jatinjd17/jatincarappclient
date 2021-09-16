import { BlogsProduction } from "../actions/ApiCarsBlogs";

export const createblog = (formdata: any, token: any) => {
  return fetch(`${BlogsProduction}/api/blog`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: formdata,
  })
    .then((data) => {
      return data.json();
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getallblogs = () => {
  return fetch(`${BlogsProduction}/api/blogs`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((data) => {
      // console.log(data);
      return data.json();
    })
    .catch((err) => console.log(err));
};

export const getallblogsBySpecificCATID = (catId: any) => {
  return fetch(`${BlogsProduction}/api/category/${catId}`, {
    method: "GET",
    headers: {
      Accept: "applicaion/json",
    },
  })
    .then((data) => {
      // console.log(data);
      return data.json();
    })
    .catch((err) => console.log(err));
};

export const getallblogsBySpecificTagID = (tagId: any) => {
  return fetch(`${BlogsProduction}/api/tag/${tagId}`, {
    method: "GET",
    headers: {
      Accept: "applicaion/json",
    },
  })
    .then((data) => {
      // console.log(data);
      return data.json();
    })
    .catch((err) => console.log(err));
};

export const fetchSpecificPost = (slug: any) => {
  return fetch(`${BlogsProduction}/api/blog/${slug}`, {
    method: "GET",
    headers: {
      Accept: "applicaion/json",
    },
  })
    .then((data) => {
      // console.log(data);
      return data.json();
    })
    .catch((err) => console.log(err));
};
