import axios from "axios";

let config = {
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
};
export const fetch_movie_posters = (setList) => {
  return axios
    .get("https://api.themoviedb.org/4/list/1/", config)
    .then((response) => {
      setList(response.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
};
