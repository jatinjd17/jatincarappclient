import { BlogsProduction } from "../actions/ApiCarsBlogs";

export const fetchAllTags = () => {
  return fetch(`${BlogsProduction}/api/tag`, {
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
