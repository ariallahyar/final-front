import { API_URL } from "./api";

export const getRecommendations = (callback) => {
  fetch(`${API_URL}/recommendation`)
    .then((res) => res.json())
    .then((data) => callback(data.results))
    .catch((err) => console.log(err));
};

export const sendRecommendation = (city, nameOfPlace, comment, website, callback) => {
  fetch(`${API_URL}/recommendation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Token: localStorage.getItem("Token"),
      UserId: localStorage.getItem("ID"),
    },
    body: JSON.stringify({ city, nameOfPlace, comment, website }),
  })
    .then((response) => {
      if (response.ok) return response.json();
      return console.log("Validation error");
    })
    .then((data) => callback(data.result))
    .catch((error) => console.log(error));
};

export const deleteRecommendation = (id, callback) => {
  fetch(`${API_URL}/recommendation/`, {
    method: "DELETE",
    body: JSON.stringify({ _id: id }),
    headers: {
      "Content-Type": "application/json",
      Token: localStorage.getItem("Token"),
      UserId: localStorage.getItem("ID"),
    },
  })
    .then((response) => {
      if (response.ok) return response.json();
      return console.log("User not authorized");
    })
    .then((data) => callback(data.deleted))
    .catch((error) => console.log(error));
};
