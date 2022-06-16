import { API_URL } from "./api";

export const getRecommendations = (callback) => {
  fetch(`${API_URL}/recommendations`)
    .then((res) => res.json())
    .then((data) => callback(data.results))
    .catch((err) => console.log(err));
};

export const sendRecommendation = (user_id, city, nameOfPlace, comment, website, callback) => {
  fetch(`${API_URL}/users/auth/recommendation`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Token: localStorage.getItem("Token") },
    body: JSON.stringify({ user_id, city, nameOfPlace, comment, website }),
  })
    .then((response) => {
      if (response.ok) return response.json();
      return console.log("Validation error");
    })
    .then((data) => callback(data.result))
    .catch((error) => console.log(error));
};
