import { useEffect, useState } from "react";
import { fetch_movie_posters } from "./API";
import { Image, Description, MovieList, Button, Title, Movie } from "./FeaturedMoviesStyledComponents";

export const FeaturedMovies = () => {
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    fetch_movie_posters(setMoviesList);
  }, []);

  return (
    <div>
      <Title>WATCH FEATURED MOVIES</Title>
      <MovieList>
        {moviesList.map((movie, index) => {
          return (
            <Movie key={index}>
              <Image src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
              <Description>{movie.original_title}</Description>
            </Movie>
          );
        })}
      </MovieList>
      <Button>See all movies</Button>
    </div>
  );
};
