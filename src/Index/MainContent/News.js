import { Image, Description, Background, StyledNews, Article } from "./NewsStyledComponent";
import { useEffect, useState } from "react";
import { fetch_movie_posters } from "./API";

export function News() {
  const [posters, setPosters] = useState(null);
  useEffect(() => {
    fetch_movie_posters((results) => {
      setPosters(results.slice(0, 5));
    });
  }, []);

  return (
    <StyledNews>
      {posters?.map((poster, index) => {
        return (
          <Article key={index}>
            <Image src={`https://image.tmdb.org/t/p/w500/${poster.backdrop_path}`} alt="" />
            <Description className="Description">
              <strong>{WordGenerator(poster.overview, 5)}</strong>
              <div className="Subtitle">{WordGenerator(poster.overview, 5)}</div>
            </Description>
            <Background />
          </Article>
        );
      })}
    </StyledNews>
  );
}

function WordGenerator(sentence, count) {
  return sentence
    .split(" ")
    .slice(0, count)
    .reduce((acc, val) => (acc += " " + val), "");
}
