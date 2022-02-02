import { createUseStyles } from "react-jss";
import { SearchBar } from "./SearchBar";

const useStyles = createUseStyles({
  wrapper: {
    width: "100%",
    height: "3rem",
    display: "flex",
    justifyContent: "flex-end",
    padding: "1rem",
    boxSizing: "border-box",
  },
});

export const HeaderTop = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <SearchBar />
    </div>
  );
};
