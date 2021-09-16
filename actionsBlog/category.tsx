import { BlogsProduction } from "../actions/ApiCarsBlogs";

export const fetchAllCategories = () => {
  return fetch(`${BlogsProduction}/api/category`, {
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
