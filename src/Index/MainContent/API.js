import axios from "axios";

let config = {
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWYyOTIxNGI5OGU0Yzc5NWFiNTcxNzk3ZDQ0OGI2YSIsInN1YiI6IjYxZmE1ZjM0OWU0MDEyMDBhODU2MmQzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-AmGnmko_o5qFnHqDPpoVy2yX2QpdjTWUE1dB-PQgRc`,
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
