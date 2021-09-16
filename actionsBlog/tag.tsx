export const fetchAllTags = () => {
  return fetch(`https://blogsjatin.herokuapp.com/tag`, {
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
