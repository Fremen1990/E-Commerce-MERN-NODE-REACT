import { API } from "../config";

export const getProducts = (sortBy) => {
  return fetch(`${API}/products?sort_by=${sortBy}&order=desc&limit=6`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};