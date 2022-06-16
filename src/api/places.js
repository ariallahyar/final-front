import { API_URL } from "./api";

export const getPlaces = (city, callback) => {
  fetch(`${API_URL}/places?city=${city}`)
    .then((response) => {
      if (response.ok) return response.json();
      return console.log("Error");
    })
    .then((data) => callback(data.results))
    .catch((err) => console.log(err));
};
