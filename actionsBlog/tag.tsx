export const fetchAllTags = () => {
  return fetch(`https://blogserverjatinaugust.herokuapp.com/api/tag`, {
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
