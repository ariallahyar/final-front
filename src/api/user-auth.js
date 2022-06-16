import { API_URL } from "./api";

export const createAccount = (name, email, password, error, callback) => {
  fetch(`${API_URL}/user`, {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok) return response.json();
      return error(true);
    })
    .then((data) => {
      localStorage.setItem("Token", data.token);
      localStorage.setItem("ID", data._id);
      callback();
    })
    .catch((error) => console.log(error));
};

export const login = (email, password, error, callback) => {
  fetch(`${API_URL}/user/auth`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok) return response.json();
      // return Promise.reject(new Error(response.statusText));
      return error(true);
    })
    .then((data) => {
      localStorage.setItem("Token", data.token);
      localStorage.setItem("ID", data._id);
      callback();
    })
    .catch((error) => console.log(error));
};

export const logout = (callback) => {
  fetch(`${API_URL}/user/auth`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Token: localStorage.getItem("Token") },
  })
    .then((response) => {
      if (response.ok) return response.json();
      return console.log("error");
    })
    .then(() => {
      localStorage.removeItem("Token");
      localStorage.removeItem("ID");
      callback();
    })
    .catch((error) => console.log(error));
};

export const deleteAccount = (callback) => {
  const id = localStorage.getItem("ID");

  fetch(`${API_URL}/user/`, {
    method: "DELETE",
    body: JSON.stringify({ _id: id }),
    headers: { "Content-Type": "application/json", Token: localStorage.getItem("Token") },
  })
    .then((response) => {
      if (response.ok) return response.json();
      return console.log("User not found");
    })
    .then(() => {
      localStorage.removeItem("ID");
      localStorage.removeItem("Token");
      callback();
    })
    .catch((error) => console.log(error));
};
