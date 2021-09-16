import cookie from "js-cookie";

export const SignUp = (formdata: any) => {
  console.log(formdata);

  return fetch(
    "http://ec2-13-233-105-98.ap-south-1.compute.amazonaws.com:443/api/signup",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    }
  )
    .then((data) => {
      return data.json();
    })
    .catch((e) => {
      console.log(e);
    });
};

export const SignIn = (data: any) => {
  return fetch(
    "http://ec2-13-233-105-98.ap-south-1.compute.amazonaws.com:443/api/signin",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  ).then((data) => {
    return data.json();
  });
};

export const SignOut = (next: any) => {
  removeCookie("token");
  removeLocalStorage("user");
  next();
  return fetch(
    "http://ec2-13-233-105-98.ap-south-1.compute.amazonaws.com:443/api/signout",
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

export const fetchSpecificUser = (name: any) => {
  return fetch(
    `http://ec2-13-233-105-98.ap-south-1.compute.amazonaws.com:443/api/user/${name}`,
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

export const setCookie = (key: any, value: any) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

export const removeCookie = (key: any) => {
  if (process.browser) {
    cookie.remove(key);
  }
};

export const getCookie = (key: any) => {
  if (process.browser) {
    return cookie.get(key);
  }
};
// localstorage
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key) => {
  if (process.browser) {
    localStorage.removeItem(key);
  }
};
// autheticate user by pass data to cookie and localstorage
export const authenticate = (data, next) => {
  setCookie("token", data.token);
  setLocalStorage("user", data.user);
  next();
};

export const isAuth = () => {
  if (process.browser) {
    const isToken = getCookie("token");
    if (isToken) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};
