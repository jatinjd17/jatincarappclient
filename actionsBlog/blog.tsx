export const createblog = (formdata: any, token: any) => {
  return fetch(
    "http://ec2-13-233-105-98.ap-south-1.compute.amazonaws.com:443/api/blog",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formdata,
    }
  )
    .then((data) => {
      return data.json();
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getallblogs = () => {
  return fetch(
    `http://ec2-13-233-105-98.ap-south-1.compute.amazonaws.com:443/api/blogs`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((data) => {
      // console.log(data);
      return data.json();
    })
    .catch((err) => console.log(err));
};

export const getallblogsBySpecificCATID = (catId: any) => {
  return fetch(
    `http://ec2-13-233-105-98.ap-south-1.compute.amazonaws.com:443/api/category/${catId}`,
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

export const getallblogsBySpecificTagID = (tagId: any) => {
  return fetch(
    `http://ec2-13-233-105-98.ap-south-1.compute.amazonaws.com:443/api/tag/${tagId}`,
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

export const fetchSpecificPost = (slug: any) => {
  return fetch(
    `http://ec2-13-233-105-98.ap-south-1.compute.amazonaws.com:443/api/blog/${slug}`,
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
