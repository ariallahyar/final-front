import { API_URL } from "./api";

export const getPlaces = (city, callback) => {
  fetch(`${API_URL}/place?city=${city}`)
    .then((response) => {
      if (response.ok) return response.json();
      return console.log("Error");
    })
    .then((data) => callback(data.results))
    .catch((err) => console.log(err));
};

export const getPhoto = (ref, callback) => {
  fetch(`${API_URL}/place/photo?photo_ref=${ref}`)
    .then((response) => {
      if (response.ok) return response.json();
      return console.log("Error");
    })
    .then((data) => callback(data))
    .catch((err) => console.log(err));
};
