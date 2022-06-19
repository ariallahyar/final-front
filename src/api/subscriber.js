import { API_URL } from "./api";

export const subscribe = (email, callback) => {
  fetch(`${API_URL}/society`, {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then(() => callback())
    .catch((error) => console.log(error));
};
