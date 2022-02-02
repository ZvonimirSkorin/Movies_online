import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { fetch_movie_posters } from "./API";
import { FeaturedMovies } from "./FeaturedMovies";
import { useNewsStyles, Image, Description, YellowSubtitle, Background } from "./MainContentStyledComponents";
const useStyles = createUseStyles({
  Wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    boxSizing: "border-box",
    padding: "1rem",
  },
  News: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
  },
});

export const MainContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.Wrapper}>
      <News />
      <FeaturedMovies />
    </div>
  );
};

const News = () => {
  const classes = useNewsStyles();
  const [posters, setPosters] = useState(null);
  useEffect(() => {
    fetch_movie_posters((results) => {
      setPosters(results.slice(0, 5));
    });
  }, []);

  return (
    <div className={classes.News}>
      {posters?.map((poster, index) => {
        return (
          <article style={{ gridArea: `${String.fromCharCode(97 + index)}` }} className={classes.article} key={index}>
            <Image src={`https://image.tmdb.org/t/p/w500/${poster.backdrop_path}`} alt="" />
            <Description fontSize={index}>
              {WordGenerator(poster.overview, 5)}
              <YellowSubtitle fontSize={index}>{WordGenerator(poster.overview, 5)}</YellowSubtitle>
            </Description>
            <Background />
          </article>
        );
      })}
    </div>
  );
};

function WordGenerator(sentence, count) {
  return sentence
    .split(" ")
    .slice(0, count)
    .reduce((acc, val) => (acc += " " + val), "");
}
