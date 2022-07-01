import { API_URL } from "./api";

const clearLocalStorage = () => {
  localStorage.removeItem("ID");
  localStorage.removeItem("Token");
  localStorage.removeItem("Name");
};

const setLocalStorage = (data) => {
  localStorage.setItem("Token", data.token);
  localStorage.setItem("ID", data._id);
  localStorage.setItem("Name", data.name);
};

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
      setLocalStorage(data);
      callback();
    });
};

export const login = (email, password, error, callback) => {
  fetch(`${API_URL}/user/auth`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok) return response.json();
      return error(true);
    })
    .then((data) => {
      setLocalStorage(data);
      callback();
    });
};

export const logout = (callback) => {
  fetch(`${API_URL}/user/auth`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Token: localStorage.getItem("Token"),
      UserId: localStorage.getItem("ID"),
    },
  })
    .then((response) => {
      if (response.ok) return response.json();
    })
    .then(() => {
      clearLocalStorage();
      callback();
    })
    .catch((error) => console.log(error));
};

export const deleteAccount = (callback) => {
  fetch(`${API_URL}/user/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Token: localStorage.getItem("Token"),
      UserId: localStorage.getItem("ID"),
    },
  })
    .then((response) => {
      if (response.ok) return response.json();
    })
    .then(() => {
      clearLocalStorage();
      callback();
    })
    .catch((error) => console.log(error));
};
