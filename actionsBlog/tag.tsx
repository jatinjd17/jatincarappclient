export const fetchAllTags = () => {
  return fetch(
    `http://ec2-13-233-105-98.ap-south-1.compute.amazonaws.com:443/tag`,
    {
      method: "GET",
      headers: {
        Accept: "applicaion/json",
      },
    }
  )
    .then((data) => {
      // console.log(data);
      return data.json();
    })
    .catch((err) => console.log(err));
};
